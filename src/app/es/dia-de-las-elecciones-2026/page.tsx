import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { CountdownTimer } from '../../../components/CountdownTimer';
import { AdPlacement } from '../../../components/AdPlacement';
import { JsonLd } from '../../../components/JsonLd';
import { ALL_STATES_LIST } from '../../../data/states';
import { Calendar, CheckCircle2, Globe, Vote, ShieldCheck, ExternalLink, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Día de las Elecciones 2026 en EE. UU.: Fecha Oficial, Horarios y Guía para Votar',
  description:
    'Guía oficial no partidista para el Día de las Elecciones 2026 en Estados Unidos (Martes 3 de noviembre de 2026). Fechas límite de registro, voto anticipado, requisitos de identificación y horarios de las urnas.',
  alternates: {
    canonical: 'https://election-day-2026.vercel.app/es/dia-de-las-elecciones-2026',
    languages: {
      'en-US': 'https://election-day-2026.vercel.app/',
      'es-US': 'https://election-day-2026.vercel.app/es/dia-de-las-elecciones-2026',
    },
  },
  keywords: [
    'dia de las elecciones 2026',
    'cuando son las elecciones 2026 en estados unidos',
    'elecciones de medio termino 2026',
    'a que hora cierran las urnas 2026',
    'requisitos para votar en estados unidos 2026',
    'es feriado el dia de las elecciones 2026',
  ],
};

export default function SpanishElectionGuidePage() {
  const spanishSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        url: 'https://election-day-2026.vercel.app/es/dia-de-las-elecciones-2026',
        name: 'Día de las Elecciones 2026 en Estados Unidos: Fecha, Requisitos y Guía Electoral',
        inLanguage: 'es-US',
      },
      {
        '@type': 'FAQPage',
        inLanguage: 'es-US',
        mainEntity: [
          {
            '@type': 'Question',
            name: '¿Cuándo es el Día de las Elecciones 2026 en Estados Unidos?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'El Día de las Elecciones Generales de Medio Término (Midterm Elections) en Estados Unidos es el martes 3 de noviembre de 2026, según la ley federal (2 U.S.C. § 7).',
            },
          },
          {
            '@type': 'Question',
            name: '¿Es el Día de las Elecciones 2026 un día feriado federal?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. El Día de las Elecciones no es un día feriado federal. Los bancos nacionales, el servicio postal (USPS) y las oficinas federales permanecen abiertos. Sin embargo, alrededor de 30 estados exigen por ley que los empleadores otorguen entre 1 y 3 horas de permiso (pagado en más de 20 estados) para ir a votar.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Qué se elige en las elecciones del 3 de noviembre de 2026?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Se eligen los 435 escaños de la Cámara de Representantes de EE. UU., 34 senadores federales (Clase II) y 36 gobernadores estatales, además de miles de cargos locales y estatales.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Necesito identificación con foto (ID) para votar en 2026?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Depende de su estado. 36 estados solicitan o exigen algún tipo de identificación (como licencia de conducir, pasaporte de EE. UU. o tarjeta de identificación estatal), mientras que estados como California, Nueva York, Pensilvania, Illinois y Nevada no exigen documento con foto a votantes recurrentes.',
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={spanishSchema} />

      <section className="bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">
              <Globe className="w-3.5 h-3.5" />
              Guía Oficial en Español • Elecciones de Medio Término 2026
            </span>
            <Link href="/" className="text-xs font-bold text-blue-300 hover:text-white underline">
              Switch to English Version →
            </Link>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Día de las Elecciones <span className="text-amber-300">2026</span> en Estados Unidos
          </h1>
          <p className="mt-3 text-base sm:text-lg text-blue-100/90">
            Fecha oficial (Martes 3 de noviembre de 2026), fechas límite para registrarse, voto anticipado, horarios de las urnas y derechos laborales para votar.
          </p>

          {/* Direct AEO Answer in Spanish */}
          <aside className="mt-6 rounded-xl border border-blue-300/30 bg-white text-slate-900 p-5 shadow-md">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1">
              Respuesta Directa Verificada (AEO)
            </div>
            <h2 className="text-xl font-extrabold text-slate-900 mb-2">
              ¿Cuándo son las elecciones de 2026 en Estados Unidos?
            </h2>
            <p className="text-base font-bold text-slate-950 bg-blue-50 p-3.5 rounded-lg border-l-4 border-blue-600">
              El Día de las Elecciones 2026 es el martes 3 de noviembre de 2026. En esta jornada electoral se votará por los 435 miembros de la Cámara de Representantes, 34 miembros del Senado de EE. UU. y 36 gobernadores estatales.
            </p>
            <p className="text-xs text-slate-600 mt-2">
              Fuente Legal: 2 U.S. Code § 7 • Portal Oficial en Español:{' '}
              <a href="https://vote.gov/es" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-bold">
                Vote.gov/es
              </a>
            </p>
          </aside>

          <div className="mt-6">
            <CountdownTimer />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AdPlacement format="leaderboard" slotId="es-top-ad" />

        {/* Key State Guides for Spanish Speakers */}
        <section className="my-8 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
          <h2 className="text-2xl font-black text-slate-900 mb-2">
            Fechas Límite y Reglas por Estado (Estados Clave)
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mb-4">
            Seleccione su estado para consultar los horarios exactos de votación, requisitos de identificación y portales oficiales del Secretario de Estado:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
            {[
              { name: 'Texas (TX)', slug: 'texas', note: 'Registro hasta el 5 de oct. Se requiere ID con foto.' },
              { name: 'Florida (FL)', slug: 'florida', note: 'Registro hasta el 5 de oct. Voto temprano del 24 al 31 de oct.' },
              { name: 'California (CA)', slug: 'california', note: 'Boleta por correo universal y registro el mismo día.' },
              { name: 'Arizona (AZ)', slug: 'arizona', note: 'Urnas abiertas de 6:00 AM a 7:00 PM MST. 3h de permiso pagado.' },
              { name: 'Nevada (NV)', slug: 'nevada', note: 'Registro el mismo día y boleta por correo automática.' },
              { name: 'Nueva York (NY)', slug: 'newyork', note: 'Feriado estatal. Urnas de 6:00 AM a 9:00 PM EST.' },
              { name: 'Pensilvania (PA)', slug: 'pennsylvania', note: 'Registro hasta el 19 de oct. Voto por correo sin excusa.' },
              { name: 'Georgia (GA)', slug: 'georgia', note: 'Elección clave para el Senado y Gobernador.' },
              { name: 'Illinois (IL)', slug: 'illinois', note: 'Feriado estatal y hasta 2 horas de permiso pagado.' },
            ].map((st) => (
              <Link
                key={st.slug}
                href={`/es/estados/${st.slug}`}
                className="p-3.5 rounded-xl border border-slate-200 hover:border-blue-500 bg-slate-50 hover:bg-white transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="font-bold text-slate-900 text-sm">{st.name}</div>
                  <p className="text-slate-600 mt-1 text-[11px]">{st.note}</p>
                </div>
                <span className="text-blue-600 font-bold text-[11px] mt-2 inline-flex items-center gap-1">
                  Ver guía en español <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-6 pt-5 border-t border-slate-200">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              Directorio Completo: Guías en Español para los 50 Estados y Washington D.C.
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {ALL_STATES_LIST.map((st) => (
                <Link
                  key={st.slug}
                  href={`/es/estados/${st.slug}`}
                  className="text-[11px] px-2.5 py-1 rounded bg-slate-100 hover:bg-blue-600 text-slate-700 hover:text-white font-semibold transition-colors"
                >
                  {st.name} ({st.postalCode})
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Preguntas Frecuentes en Español */}
        <section className="my-8 space-y-4">
          <h2 className="text-2xl font-black text-slate-900">
            Preguntas Frecuentes sobre las Elecciones 2026
          </h2>

          <div className="bg-white p-5 rounded-xl border border-slate-200">
            <h3 className="text-base font-bold text-slate-900">
              1. ¿Están abiertos los bancos, el correo (USPS) y las escuelas el 3 de noviembre de 2026?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
              <strong>Sí, los bancos y el correo están abiertos.</strong> Como el Día de las Elecciones no es un feriado federal de la Reserva Federal, todos los bancos nacionales (Chase, Bank of America, Wells Fargo) y el Servicio Postal (USPS) operan con normalidad. Las escuelas públicas cierran en muchos distritos escolares cuando sus instalaciones se utilizan como centros de votación.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200">
            <h3 className="text-base font-bold text-slate-900">
              2. ¿Tengo derecho a salir del trabajo para ir a votar?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
              En aproximadamente 30 estados (incluyendo California, Texas, Nueva York, Arizona, Colorado, Illinois y Nevada), la ley estatal obliga a los empleadores a otorgar entre 1 y 3 horas de tiempo libre remunerado para votar si su horario laboral le impide acudir a las urnas. Puede generar una carta legal para su empleador en nuestra{' '}
              <Link href="/tools/employer-voting-leave-notice" className="text-blue-600 underline font-bold">
                Herramienta de Permiso Laboral para Votar
              </Link>.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200">
            <h3 className="text-base font-bold text-slate-900">
              3. ¿Tengo derecho a recibir asistencia y una boleta en español?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
              <strong>Sí.</strong> Bajo la Sección 203 y la Sección 208 de la Ley Federal de Derechos Electorales (Voting Rights Act), cientos de jurisdicciones en EE. UU. están obligadas por ley a proporcionar boletas electorales, materiales escritos y asistencia bilingüe en español, además del derecho a llevar a una persona de su confianza para ayudarle a traducir la boleta.
            </p>
          </div>
        </section>

        <AdPlacement format="in-article" slotId="es-mid-ad" />
      </div>
    </>
  );
}
