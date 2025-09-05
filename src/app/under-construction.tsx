import React from "react";

export default function UnderConstruction() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-background text-center">
      <div className="max-w-xl mx-auto p-8 rounded-lg shadow-lg border border-yellow-400 bg-yellow-50">
        <svg width="64" height="64" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="mx-auto mb-6 text-yellow-500">
          <path d="M12 2L2 22h20L12 2z" />
          <circle cx="12" cy="16" r="1" />
          <path d="M12 8v4" />
        </svg>
        <h1 className="text-3xl font-bold text-yellow-700 mb-4">Under Construction</h1>
        <p className="text-lg text-yellow-800 mb-2">Thanks for stopping by! This page is currently being built.</p>
        <p className="text-sm text-yellow-600">Please check back soon :)</p>
      </div>
    </section>
  );
}
