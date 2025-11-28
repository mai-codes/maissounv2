import React from "react";

function StyledPic({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative max-w-[300px]"
      style={{ borderRadius: "12px" }}
    >
      <div
        className="wrapper block relative w-full rounded-lg bg-accent shadow-lg"
        style={{ boxShadow: "0 10px 30px -15px var(--navy)" }}
      >
        {children}
        <span
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          style={{ backgroundColor: "var(--navy)", mixBlendMode: "screen", transition: "all 0.3s" }}
        />
        <span
          className="absolute border-2 border-accent rounded-lg"
          style={{ top: "14px", left: "14px", width: "calc(100% - 28px)", height: "calc(100% - 28px)", zIndex: -1, transition: "all 0.3s" }}
        />
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-16 w-full">
        <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-accent flex items-center gap-4 mb-8 font-mono">
          <span className="font-mono" style={{ color: '#EC4899' }}>0.1</span>
          <span className="text-foreground">About Me</span>
          <span className="flex-1 h-px bg-muted ml-4" />
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-3 space-y-6">
            <p className="max-w-xl text-lg text-muted mb-8 leading-relaxed">
              My passion for engineering started when I was a kid - I loved playing with Legos, gaming on my PC or PlayStation, and exploring old Java video games like RuneScape. Editing custom blogs on MySpace and Skyblog was my first introduction to HTML and CSS, sparking my curiosity for how things work and how to build my own creations.<br /><br />
              I earned both my B.S. and M.S. in Structural Engineering from Drexel University. After designing buildings for two years, my urge to dive into tech grew strong. I decided to switch paths and focus on growing as a programmer, earning a master's in computer science and now working as a software engineer.<br /><br />
              I love the creativity and impact of building web applications. Outside of coding and engineering, I enjoy hiking, experimenting with new recipes, and photography. I'm always excited to connect with others and explore new opportunities in tech.
            </p>
          </div>
          <div className="lg:col-span-2 flex flex-col items-center justify-center">
            <div className="relative group w-72 h-72">
              <div className="w-full h-full">
                <img
                  src="/photo.jpg"
                  alt="Profile"
                  className="w-72 h-72 object-cover rounded-lg shadow-lg filter grayscale group-hover:filter-none transition-all duration-500"
                />
                <span className="absolute inset-0 rounded-lg border-2 border-accent transition-all duration-500 group-hover:scale-110 pointer-events-none" style={{ zIndex: 1 }}></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
