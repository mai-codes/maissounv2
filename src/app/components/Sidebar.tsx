import React from "react";

export default function Sidebar() {
  return (
    <div className="hidden md:flex flex-col items-center fixed bottom-0 left-10 z-10 w-10 text-muted">
      <div className="flex flex-col gap-8 items-center mb-4">
        <a href="https://github.com/mai-codes" target="_blank" rel="noopener noreferrer">
          <img src="/github.svg" alt="GitHub" className="w-7 h-7 opacity-70 hover:opacity-100 transition" />
        </a>
        <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer">
          <img src="/linkedin.svg" alt="LinkedIn" className="w-7 h-7 opacity-70 hover:opacity-100 transition" />
        </a>
        <a href="mailto:maissounksara@gmail.com" rel="noopener noreferrer">
          <img src="/email.svg" alt="Email" className="w-7 h-7 opacity-70 hover:opacity-100 transition" />
        </a>
      </div>
      <div className="w-px h-16 bg-muted mt-2" />
    </div>
  );
}
