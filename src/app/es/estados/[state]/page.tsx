import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { STATES_DATA, ALL_STATES_LIST, StateElectionData } from '../../../../data/states';
import { COUNTIES_BY_STATE } from '../../../../data/counties';
import { SENATE_RACE_BY_STATE, GOVERNOR_RACE_BY_STATE } from '../../../../data/races2026';
import { AdPlacement } from '../../../../components/AdPlacement';
import { AffiliatePartners } from '../../../../components/AffiliatePartners';
import { JsonLd } from '../../../../components/JsonLd';
import { SITE_URL } from '../../../../lib/siteConfig';
import {
  Globe,
  Clock,
  Calendar,
  CreditCard,
  Briefcase,
  Vote,
  MapPin,
  ExternalLink,
  ArrowRight,
  ShieldCheck,
  HelpCircle,
} from 'lucide-react';

interface PageProps {
  params: Promise<{ state: string }>;
}

const SPANISH_STATE_NAMES: Record<string, string> = {
  newyork: 'Nueva York',
  newjersey: 'Nueva Jersey',
  newmexico: 'Nuevo México',
  newhampshire: 'Nuevo Hampshire',
  northcarolina: 'Carolina del Norte',
  southcarolina: 'Carolina del Sur',
  northdakota: 'Dakota del Norte',
  southdakota: 'Dakota del Sur',
  westvirginia: 'Virginia Occidental',
  pennsylvania: 'Pensilvania',
  california: 'California',
  texas: 'Texas',
  florida: 'Florida',
  arizona: 'Arizona',
  nevada: 'Nevada',
  illinois: 'Illinois',
  georgia: 'Georgia',
  colorado: 'Colorado',
  puertorico: 'Puerto Rico',
  districtofcolumbia: 'Washington D.C.',
};

function getSpanishName(state: StateElectionData): string {
  return SPANISH_STATE_NAMES[state.slug] || state.name;
}

function translateVoterIdType(type: StateElectionData['voterId']['type']): string {
  switch (type) {
    case 'Strict Photo ID':
      return 'Identificación con Foto Estricta (Strict Photo ID)';
    case 'Non-Strict Photo ID':
      return 'Identificación con Foto No Estricta (Se permite declaración jurada)';
    case 'Non-Photo ID Required':
      return 'Identificación sin Foto Aceptada (Recibo de servicios o estado bancario)';
    default:
      return 'No se requiere documento de identificación en la urna (Verificación de firma)';
  }
}

export async function generateStaticParams() {
  return Object.keys(STATES_DATA).map((slug) => ({
    state: slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { state: stateSlug } = await params;
  const state = STATES_DATA[stateSlug.toLowerCase()];

  if (!state) {
    return { title: 'Guía Electoral No Encontrada' };
  }

  const esName = getSpanishName(state);
  const esUrl = `${SITE_URL}/es/estados/${state.slug}`;
  const enUrl = `${SITE_URL}/states/${state.slug}`;

  return {
    title: `Elecciones 2026 en ${esName} (${state.postalCode}): Dónde Votar, Requisitos de ID y Fechas Límite`,
    description: `Guía oficial en español para votar en ${esName} (${state.postalCode}) el martes 3 de noviembre de 2026. Horarios de las urnas (${state.pollingHours}), fecha límite de registro (${state.registrationDeadline.online}), voto anticipado y requisitos de identificación.`,
    keywords: [
      `donde votar en ${esName.toLowerCase()} 2026`,
      `elecciones 2026 ${esName.toLowerCase()}`,
      `requisitos para votar en ${esName.toLowerCase()} 2026`,
      `a que hora cierran las urnas en ${esName.toLowerCase()}`,
      `como registrarse para votar en ${esName.toLowerCase()}`,
      `voto anticipado ${esName.toLowerCase()} 2026`,
      `boleta electoral ${esName.toLowerCase()} 2026`,
    ],
    alternates: {
      canonical: esUrl,
      languages: {
        'en-US': enUrl,
        'es-US': esUrl,
      },
    },
  };
}

export default async function SpanishStateGuidePage({ params }: PageProps) {
  const { state: stateSlug } = await params;
  const state = STATES_DATA[stateSlug.toLowerCase()];

  if (!state) {
    notFound();
  }

  const esName = getSpanishName(state);
  const counties = COUNTIES_BY_STATE[state.slug] || [];
  const senateRace = SENATE_RACE_BY_STATE[state.slug];
  const governorRace = GOVERNOR_RACE_BY_STATE[state.slug];
  const esUrl = `${SITE_URL}/es/estados/${state.slug}`;

  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': esUrl,
        url: esUrl,
        name: `Guía Electoral 2026 en Español para ${esName} (${state.postalCode})`,
        inLanguage: 'es-US',
      },
      {
        '@type': 'FAQPage',
        inLanguage: 'es-US',
        mainEntity: [
          {
            '@type': 'Question',
            name: `¿A qué hora abren y cierran las urnas en ${esName} el 3 de noviembre de 2026?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `El martes 3 de noviembre de 2026, los centros de votación en ${esName} (${state.postalCode}) están abiertos en horario de ${state.pollingHours} (${state.timezone}). Si usted está formado en la fila antes de la hora de cierre, tiene el derecho legal garantizado de emitir su voto.`,
            },
          },
          {
            '@type': 'Question',
            name: `¿Cuál es la fecha límite para registrarse para votar en ${esName} en 2026?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `La fecha límite de registro electoral en línea o por correo en ${esName} es: ${state.registrationDeadline.online}. ${
                state.registrationDeadline.sameDayRegistration
                  ? `${esName} también permite el Registro el Mismo Día (Same-Day Registration) en las urnas el 3 de noviembre.`
                  : 'Verifique su registro con anticipación en el portal oficial del Secretario de Estado.'
              }`,
            },
          },
          {
            '@type': 'Question',
            name: `¿Se necesita identificación (ID) para votar en ${esName} en 2026?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Clasificación de ley en ${esName}: ${translateVoterIdType(state.voterId.type)}. Si no lleva su identificación el día de la elección, la ley federal HAVA (52 U.S.C. § 21082) le garantiza el derecho a votar mediante una Boleta Provisional.`,
            },
          },
          {
            '@type': 'Question',
            name: `¿Tengo derecho a permiso en el trabajo para ir a votar en ${esName}?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Bajo el estatuto ${state.workLeaveLaw.statuteCitation}, la regla en ${esName} establece: ${state.workLeaveLaw.hoursAllowed}.`,
            },
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Inicio (Español)',
            item: `${SITE_URL}/es/dia-de-las-elecciones-2026`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: `Elecciones 2026 en ${esName}`,
            item: esUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={schemaGraph} />

      <section className="bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <nav className="text-xs text-slate-300 flex items-center gap-1.5">
              <Link href="/es/dia-de-las-elecciones-2026" className="hover:text-white">
                Guía en Español
              </Link>
              <span>/</span>
              <span className="text-amber-300 font-bold">
                {esName} ({state.postalCode})
              </span>
            </nav>

            <Link
              href={`/states/${state.slug}`}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-xs font-bold text-blue-200 border border-white/15"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>View English Version ({state.name}) →</span>
            </Link>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Elecciones 2026 en <span className="text-amber-300">{esName}</span> ({state.postalCode}): Guía Oficial para Votantes
          </h1>
          <p className="mt-3 text-base sm:text-lg text-blue-100/90 max-w-3xl">
            Todo lo que necesita saber para votar en {esName} el <strong>martes 3 de noviembre de 2026</strong>: horarios de apertura y cierre de urnas, fechas límite de inscripción, voto anticipado, requisitos de identificación y asistencia bilingüe.
          </p>

          {/* Respuesta Directa AEO */}
          <aside className="mt-6 rounded-2xl border border-blue-300/30 bg-white text-slate-900 p-5 sm:p-6 shadow-md">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1">
              Resumen Oficial Verificado • {esName} ({state.postalCode})
            </div>
            <p className="text-sm sm:text-base font-bold text-slate-950 bg-blue-50 p-4 rounded-xl border-l-4 border-blue-600 leading-relaxed">
              Las Elecciones Generales de Medio Término en {esName} se celebran el <strong>martes 3 de noviembre de 2026</strong>. Las urnas abren en horario de <strong>{state.pollingHours} ({state.timezone})</strong>. La fecha límite de registro electoral en línea es <strong>{state.registrationDeadline.online}</strong>{' '}
              {state.registrationDeadline.sameDayRegistration
                ? `(y ${esName} ofrece Registro el Mismo Día en las urnas).`
                : '.'}
            </p>
            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600">
              <span>
                Línea Nacional de Protección Electoral en Español: <strong>1-888-VE-Y-VOTA (1-888-839-8682)</strong>
              </span>
              <a
                href={state.officialPortal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-blue-700 hover:underline inline-flex items-center gap-1"
              >
                <span>Portal Oficial: {state.officialPortal.name}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </aside>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AdPlacement format="leaderboard" slotId={`es-state-${state.postalCode}-top`} />

        {/* 4 Core Statutory Pillars in Spanish */}
        <section className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* 1. Horario de las Urnas */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase text-blue-700 mb-1.5">
              <Clock className="w-4 h-4" />
              <span>1. Horario de las Urnas (3 de Noviembre de 2026)</span>
            </div>
            <h2 className="text-lg font-black text-slate-900">
              {state.pollingHours} ({state.timezone})
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
              <strong>Derecho de Fila Garantizado:</strong> Si usted ya está formado en la fila de su centro de votación antes de la hora oficial de cierre en {esName}, tiene derecho legal absoluto a permanecer en la fila y votar.
            </p>
          </div>

          {/* 2. Registro Electoral y Voto Temprano */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase text-emerald-700 mb-1.5">
              <Calendar className="w-4 h-4" />
              <span>2. Registro Electoral y Voto Anticipado</span>
            </div>
            <h2 className="text-lg font-black text-slate-900">
              Límite: {state.registrationDeadline.online}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
              <strong>Voto Anticipado (Early Voting):</strong> {state.earlyVoting.starts} – {state.earlyVoting.ends}.{' '}
              {state.registrationDeadline.sameDayRegistration
                ? `¡${esName} cuenta con Registro el Mismo Día (Same-Day Registration) llevando comprobante de domicilio!`
                : `Verifique su inscripción antes de la fecha límite en ${state.officialPortal.name}.`}
            </p>
          </div>

          {/* 3. Identificación para Votar (Voter ID) */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase text-amber-700 mb-1.5">
              <CreditCard className="w-4 h-4" />
              <span>3. Requisitos de Identificación (Voter ID)</span>
            </div>
            <h2 className="text-base sm:text-lg font-black text-slate-900">
              {translateVoterIdType(state.voterId.type)}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
              <strong>Documentos aceptados:</strong> {state.voterId.acceptableDocs.join(', ')}.{' '}
              <strong>¿Olvidó su ID?</strong> Bajo la ley federal HAVA (52 U.S.C. § 21082), solicite siempre una <strong>Boleta Provisional</strong>.
            </p>
          </div>

          {/* 4. Permiso en el Trabajo y Asistencia en Español */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase text-indigo-700 mb-1.5">
              <Briefcase className="w-4 h-4" />
              <span>4. Permiso Laboral y Boleta en Español</span>
            </div>
            <h2 className="text-base sm:text-lg font-black text-slate-900">
              {state.workLeaveLaw.hoursAllowed} ({state.workLeaveLaw.statuteCitation})
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
              Bajo la Sección 208 de la Ley de Derechos Electorales (52 U.S.C. § 10508), usted puede llevar a un familiar o persona de su confianza dentro de la cabina para traducir su boleta en {esName}.
            </p>
          </div>
        </section>

        {/* ¿Qué se elige en este estado en 2026? */}
        <section className="my-8 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              ¿Qué se vota en {esName} el 3 de noviembre de 2026?
            </h2>
            <Link
              href={`/sample-ballot-2026?state=${state.slug}`}
              className="px-3.5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl inline-flex items-center gap-1.5"
            >
              <Vote className="w-4 h-4" />
              <span>Ver Mi Boleta de Muestra 2026</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="font-bold text-blue-700 uppercase text-xs mb-1">Senado de EE. UU.</div>
              {senateRace ? (
                <p className="text-slate-800">
                  <strong>En la boleta 2026:</strong> Senador actual{' '}
                  <strong>
                    {senateRace.incumbent} ({senateRace.incumbentParty})
                  </strong>{' '}
                  • Estado: {senateRace.status} ({senateRace.rating}).
                </p>
              ) : (
                <p className="text-slate-600">
                  No hay elección regular para el Senado federal en {esName} en 2026 (próxima en 2028/2030).
                </p>
              )}
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="font-bold text-indigo-700 uppercase text-xs mb-1">Gobernador de {esName}</div>
              {governorRace ? (
                <p className="text-slate-800">
                  <strong>En la boleta 2026:</strong> Gobernador actual{' '}
                  <strong>
                    {governorRace.incumbent} ({governorRace.incumbentParty})
                  </strong>{' '}
                  • {governorRace.status} ({governorRace.rating}).
                </p>
              ) : (
                <p className="text-slate-600">
                  El cargo de Gobernador de {esName} se elige en otro ciclo electoral.
                </p>
              )}
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="font-bold text-emerald-700 uppercase text-xs mb-1">Cámara de Representantes</div>
              <p className="text-slate-800">
                <strong>Todos los distritos congresionales</strong> de {esName} están en la boleta del 3 de noviembre de 2026, además de legisladores estatales y jueces locales.
              </p>
            </div>
          </div>
        </section>

        {/* Condados de este Estado */}
        {counties.length > 0 && (
          <section className="my-8 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
            <h2 className="text-lg sm:text-xl font-black text-slate-900 mb-2">
              Directorio de los {counties.length} Condados y Juntas Electorales en {esName} ({state.postalCode})
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-4">
              Seleccione su condado para consultar su sede electoral, códigos postales (ZIP), distritos congresionales y horarios locales:
            </p>
            <div className="flex flex-wrap gap-1.5 max-h-64 overflow-y-auto p-3 bg-slate-50 rounded-xl border border-slate-200">
              {counties.map((c) => (
                <Link
                  key={c.slug}
                  href={`/states/${state.slug}/counties/${c.slug}`}
                  className="text-[11px] px-2.5 py-1 rounded bg-white text-slate-700 border border-slate-200 hover:border-blue-500 hover:text-blue-700 font-semibold"
                >
                  {c.name} ({c.countySeat})
                </Link>
              ))}
            </div>
          </section>
        )}

        <AffiliatePartners />

        {/* Directorio de los 50 Estados + D.C. en Español */}
        <section className="my-8 pt-6 border-t border-slate-200">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            Guías Electorales 2026 en Español para los 50 Estados y Washington D.C.:
          </h2>
          <div className="flex flex-wrap gap-1.5">
            {ALL_STATES_LIST.map((st) => (
              <Link
                key={st.slug}
                href={`/es/estados/${st.slug}`}
                className={`text-[11px] px-2.5 py-1 rounded border transition-colors ${
                  st.slug === state.slug
                    ? 'bg-blue-600 text-white border-blue-600 font-bold'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-blue-400'
                }`}
              >
                {st.name} ({st.postalCode})
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
