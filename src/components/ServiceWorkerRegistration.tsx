'use client';

import React, { useEffect, useState } from 'react';
import { Smartphone, Download, WifiOff, X, Check } from 'lucide-react';

export const ServiceWorkerRegistration: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isOffline, setIsOffline] = useState<boolean>(false);
  const [showInstallBanner, setShowInstallBanner] = useState<boolean>(false);
  const [installed, setInstalled] = useState<boolean>(false);

  useEffect(() => {
    // Register Service Worker
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then(() => {
          // registered
        })
        .catch(() => {
          // ignore registration errors in environments without SW support
        });
    }

    // Monitor Online/Offline status
    const updateOnlineStatus = () => {
      setIsOffline(!navigator.onLine);
    };

    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    setIsOffline(!navigator.onLine);

    // Listen for PWA Install Prompt
    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      // Check if user dismissed previously
      try {
        const dismissed = sessionStorage.getItem('pwa_prompt_dismissed');
        if (!dismissed) {
          setShowInstallBanner(true);
        }
      } catch {
        setShowInstallBanner(true);
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstall);

    return () => {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setInstalled(true);
      setShowInstallBanner(false);
    }
    setDeferredPrompt(null);
  };

  const dismissBanner = () => {
    setShowInstallBanner(false);
    try {
      sessionStorage.setItem('pwa_prompt_dismissed', 'true');
    } catch {
      // ignore
    }
  };

  return (
    <>
      {/* Offline Toast if Cell Signal is Lost Inside Polling Booth */}
      {isOffline && (
        <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:w-96 z-50 bg-slate-900 text-white p-4 rounded-2xl border-2 border-emerald-500 shadow-2xl flex items-start gap-3 animate-bounce">
          <WifiOff className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div className="text-xs">
            <strong className="text-emerald-400 block font-black uppercase tracking-wider">
              Offline Booth Mode Active
            </strong>
            <span>
              Zero cell signal detected! Your Sample Ballot choices and Voter ID checklist are cached locally and work 100% offline.
            </span>
          </div>
        </div>
      )}

      {/* PWA Install Banner */}
      {showInstallBanner && !installed && (
        <div className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:w-96 z-40 bg-slate-950/95 backdrop-blur-md text-white p-4 rounded-2xl border border-blue-500/50 shadow-2xl">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
                <Smartphone className="w-4 h-4" />
              </div>
              <span className="text-xs font-black">Save to Phone (Offline Booth Card)</span>
            </div>
            <button
              type="button"
              onClick={dismissBanner}
              className="text-slate-400 hover:text-white p-1"
              aria-label="Dismiss banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-[11px] text-slate-300 leading-relaxed mb-3">
            Dead cell zone in your polling place? Add ElectionDay2026 to your home screen to open your Sample Ballot cheat sheet with 0 signal.
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleInstallClick}
              className="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-black text-xs inline-flex items-center gap-1.5 shadow-xs transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Add to Home Screen</span>
            </button>
            <button
              type="button"
              onClick={dismissBanner}
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 text-xs font-semibold"
            >
              Maybe Later
            </button>
          </div>
        </div>
      )}
    </>
  );
};
