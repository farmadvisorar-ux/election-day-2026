import React from 'react';
import { HelpCircle, CheckCircle2, ShieldCheck } from 'lucide-react';

interface DirectAnswerBoxProps {
  question: string;
  directAnswer: string;
  supportingText?: string;
  statuteOrSource?: string;
  sourceUrl?: string;
}

export const DirectAnswerBox: React.FC<DirectAnswerBoxProps> = ({
  question,
  directAnswer,
  supportingText,
  statuteOrSource,
  sourceUrl,
}) => {
  return (
    <aside
      aria-label="Direct Quick Answer"
      className="my-6 rounded-xl border border-blue-200 bg-gradient-to-br from-blue-50/80 to-indigo-50/40 p-5 shadow-sm text-slate-900"
    >
      <div className="flex items-center gap-2 mb-2 text-blue-800 text-xs font-bold uppercase tracking-wider">
        <HelpCircle className="w-4 h-4 text-blue-600" />
        <span>AEO Verified Direct Answer</span>
      </div>

      <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight mb-3">
        {question}
      </h2>

      <div className="flex items-start gap-3 bg-white p-4 rounded-lg border border-blue-100 shadow-xs mb-3">
        <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
        <div className="text-base md:text-lg font-bold text-slate-950 leading-snug">
          {directAnswer}
        </div>
      </div>

      {supportingText && (
        <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-3">
          {supportingText}
        </p>
      )}

      {statuteOrSource && (
        <div className="flex items-center gap-1.5 text-xs text-slate-500 pt-2 border-t border-blue-100">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Official Legal Reference / Source:</span>
          {sourceUrl ? (
            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 underline font-medium"
            >
              {statuteOrSource}
            </a>
          ) : (
            <span className="font-medium text-slate-700">{statuteOrSource}</span>
          )}
        </div>
      )}
    </aside>
  );
};
