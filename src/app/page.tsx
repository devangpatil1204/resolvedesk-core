'use client';
import React from 'react';

export default function ResolveDeskProductionWebsite() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans antialiased selection:bg-indigo-500/30 selection:text-indigo-200 relative overflow-x-hidden">
      
      {/* Background Ambient Infrastructure */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(79,70,229,0.15),transparent_50%)] pointer-events-none z-0" />

      {/* GLOBAL NAVIGATION */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-900 bg-slate-950/75 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="#" className="flex items-center gap-2.5 font-bold text-lg text-white tracking-tight">
              <span className="h-7 w-7 rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center text-xs text-white font-mono font-black">
                R
              </span>
              ResolveDesk
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-400">
              <a href="#architecture" className="hover:text-white transition">Architecture</a>
              <a href="#features" className="hover:text-white transition">Features</a>
              <span className="font-mono text-xs text-indigo-400 bg-indigo-950/40 px-2 py-0.5 rounded border border-indigo-900/50">v1.4.0-beta</span>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <a href="#request-access" className="bg-indigo-600 hover:bg-indigo-500 text-white px-3.5 py-1.5 rounded-lg text-sm font-semibold transition">
              Request API Key
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-16 lg:pt-32 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/50 text-xs font-medium text-indigo-400 mb-6 backdrop-blur-sm">
            <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Autonomous Middleware Core
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
            Headless AI Layer for <br />
            <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Automated Ticket Resolution
            </span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg mb-8 max-w-xl leading-relaxed">
            ResolveDesk intercepts incoming support payloads before they hit your ticketing desk. It programmatically ingests, extracts intent, and triggers autonomous tier-1 fixes without human eyes.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#request-access" className="bg-white hover:bg-slate-100 text-slate-950 px-5 py-2.5 rounded-lg text-sm font-semibold transition">
              Start Beta Integration
            </a>
          </div>
        </div>

        {/* INTERACTIVE TERMINAL */}
        <div className="flex-1 w-full max-w-xl lg:max-w-none">
          <div className="bg-slate-900/70 border border-slate-800 rounded-xl shadow-2xl overflow-hidden font-mono text-xs text-slate-400 backdrop-blur-sm">
            <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-slate-800" />
                <span className="w-3 h-3 rounded-full bg-slate-800" />
                <span className="w-3 h-3 rounded-full bg-slate-800" />
              </div>
              <span className="text-slate-500 text-[11px]">resolvedesk-ingest-stream.sh</span>
              <span className="text-xs text-emerald-400 bg-emerald-950/50 border border-emerald-900/40 px-2 py-0.5 rounded">200 OK</span>
            </div>
            <div className="p-5 space-y-3 overflow-x-auto">
              <div><span className="text-slate-600"># Ingesting webhook payload from upstream support api</span></div>
              <div><span className="text-indigo-400">POST</span> <span className="text-slate-200">https://api.resolvedesk.ai/v1/ingest</span></div>
              <div className="bg-slate-950 p-3 rounded border border-slate-800 text-slate-300">
                <pre>{`{
  "source": "zendesk_webhook",
  "payload_id": "evt_9X4k21a",
  "body": "User states database instance db-prod-04 timeout since deploy"
}`}</pre>
              </div>
              <div className="flex items-center gap-2 text-amber-400">
                <span>⚡</span> <span>Analyzing vector embeddings & searching Knowledge Bank...</span>
              </div>
              <div className="text-emerald-400">✓ Intent classified: [INFRASTRUCTURE_TIMEOUT]</div>
            </div>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section id="architecture" className="relative z-10 max-w-7xl mx-auto px-6 py-20 border-t border-slate-900">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">Headless Infrastructure Architecture</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-xl border border-slate-900 bg-slate-900/20">
            <div className="text-xs text-indigo-400 font-mono mb-2">STAGE_01</div>
            <h3 className="text-lg font-bold text-white mb-2">Ingestion Arrays</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Accepts unstructured text strings via incoming api webhooks securely.</p>
          </div>
          <div className="p-8 rounded-xl border border-slate-900 bg-slate-900/20">
            <div className="text-xs text-emerald-400 font-mono mb-2">STAGE_02</div>
            <h3 className="text-lg font-bold text-white mb-2">Knowledge Mapping</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Cross-references semantic errors with localized internal systems logs.</p>
          </div>
          <div className="p-8 rounded-xl border border-slate-900 bg-slate-900/20">
            <div className="text-xs text-blue-400 font-mono mb-2">STAGE_03</div>
            <h3 className="text-lg font-bold text-white mb-2">Execution Layer</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Fires isolated automated routines to fix recurring client anomalies.</p>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section id="request-access" className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-900 rounded-2xl p-8 sm:p-12 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">Secure Early Developer Access</h2>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-2.5" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter engineering email" className="bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm w-full text-slate-200" required />
            <button type="submit" className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-5 py-2.5 rounded-lg whitespace-nowrap">Request Sandbox Key</button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-slate-900 bg-slate-950 px-6 py-12 w-full">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500">
          <div>&copy; {new Date().getFullYear()} ResolveDesk Technologies Inc.</div>
          <div className="flex gap-6">
            <a href="./privacy" className="hover:text-slate-300 transition">Privacy Operations</a>
            <a href="./terms" className="hover:text-slate-300 transition">Terms of Infrastructure</a>
          </div>
        </div>
      </footer>
    </div>
  );
}