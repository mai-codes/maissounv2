"use client";

import { useState, useRef, useEffect } from "react";

const experiences = [
  {
    company: "Wells Fargo",
    role: "Software Engineer",
    companyUrl: "#",
    period: "October 2022 – Present",
    details: [
        "Developed full-stack web applications to securely process and manage merchant data for 1000+ businesses, including tax records and banking information, improving reporting accuracy by 15%",
        "Built real-time analytics dashboards for transaction data, enabling actionable insights for business users.",
        "Designed and developed RESTful APIs to support scalable and secure data exchange between services and client applications",
        "Conducted regular security audits using SonarQube and Checkmarx, identifying and remediating 100+ vulnerabilities, reducing security risks by 25% and ensuring compliance with industry standards",
        "Used GitHub Copilot to automate test case creation, accelerating development and improving test coverage",
        "Leveraged Playwright to automate end-to-end testing, ensuring reliability and performance of web applications",
        "Maintained CI/CD pipelines with Azure DevOps, automating code integration, testing, and deployment across multiple environments",
        "Created and optimized stored procedures in SQL to automate complex data processing and reporting tasks"
    ],
  },
  {
    company: "AtkinsRéalis (formerly known as SNC-Lavalin)",
    role: "Process Mechanical Engineer",
    companyUrl: "#",
    period: "September 2018 - October 2022",
    details: [
        "Designed utility and process flow diagrams for industrial and manufacturing facilities, supporting all project phases from conceptual design through construction and commissioning.",
        "Developed standard engineering documents, equipment specifications, and datasheets, ensuring compliance with industry codes and best practices.",
        "Created and manipulated 3D models using LiDAR laser scanning technology, parsing and modifying over 10,000+ data points extracted from point clouds to deliver accurate as-built representations.",
        "Designed engineering layouts and technical drawings using 3D Autodesk software, streamlining project visualization and documentation.",
        "Collaborated with multidisciplinary teams to deliver technical solutions tailored to stakeholder business requirements.",    
    ],
  },
  {
    company: "Drexel University",
    role: "Graduate Research Assistant",
    companyUrl: "#",
    period: "September 2018 - October 2022",
    details: [
      "Wrote MATLAB code to deduce degradation trends in concrete samples exposed to deicing salts.",
      "Published a research paper as first author, presenting findings on concrete durability and material degradation.",
    ],
  },
  {
    company: "Jacobs Engineering",
    role: "Engineer",
    companyUrl: "#",
    period: "2017 – 2018",
    details: [
      "Worked on confidential projects for Apple, contributing to software and hardware integration",
    ],
  },
  {
    company: "Sunoco Inc",
    role: "Engineer",
    companyUrl: "#",
    period: "2016 – 2017",
    details: [
      "Developed web applications for Starry's internal tools and customer-facing products",
    ],
  },
];

export default function Experience() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [tabHeight, setTabHeight] = useState(40); // default height

  useEffect(() => {
    if (tabRefs.current[0]) {
      setTabHeight(tabRefs.current[0].offsetHeight || 40);
    }
  }, []);

  return (
    <section id="experience" className="py-16 w-full">
      <div className="max-w-4xl mx-auto px-1 lg:px-4">
        <h2 className="text-3xl font-bold mb-8 text-accent flex items-center gap-4">
          <span className="font-mono" style={{ color: '#3B82F6' }}>0.2</span> Where I’ve Worked
          <span className="flex-1 h-px bg-muted ml-4" />
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="relative w-full md:w-48">
            <div className="absolute left-0 top-0 h-full w-px bg-muted/40" />
            <ul className="flex md:flex-col gap-2 md:gap-0 relative z-10">
              {experiences.map((exp, idx) => (
                <li key={exp.company} className="relative group">
                  {/* Animated highlight bar for hover/active */}
                  <div
                    className={`absolute left-0 top-0 w-full h-full rounded transition-all duration-300 ease-in-out pointer-events-none
                      ${active === idx ? "bg-accent/20 scale-100 opacity-100" : ""}
                      group-hover:bg-accent/10 group-hover:scale-105 group-hover:opacity-100
                    `}
                    style={{ zIndex: 1 }}
                  />
                  <button
                    ref={el => { tabRefs.current[idx] = el; }}
                    className={`w-full text-left px-4 py-2 font-mono text-sm border-l-2 transition-all duration-300 ease-in-out relative
                      ${active === idx
                        ? "border-accent shadow-lg z-30"
                        : "text-muted border-transparent hover:scale-[1.04] hover:shadow-lg hover:z-30"}
                    `}
                    onClick={() => setActive(idx)}
                    style={{ zIndex: 2, color: active === idx ? '#3B82F6' : undefined }}
                    onMouseEnter={e => {
                      if (active !== idx) e.currentTarget.style.color = '#3B82F6';
                    }}
                    onMouseLeave={e => {
                      if (active !== idx) e.currentTarget.style.color = '';
                    }}
                  >
                    {exp.company}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {/* Vertical divider between tabs and experience details */}
          <div className="hidden md:block w-px bg-black mx-4" />
          <div className="flex-1 min-h-[220px] relative">
            <div
              key={active}
              className="transition-all duration-500 ease-in-out animate-fadeIn"
            >
              <h3 className="text-lg font-bold text-foreground mb-1">
                {experiences[active].role} {" "}
                <span className="text-accent font-mono">@ {experiences[active].company}</span>
              </h3>
              <p className="text-xs text-muted mb-4 font-mono">
                {experiences[active].period}
              </p>
              <ul className="list-none space-y-3">
                {experiences[active].details.map((detail, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="mt-1 text-sm" style={{ color: '#3B82F6' }}>→</span>
                    <span className="text-foreground/90 text-sm">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s;
        }
      `}</style>
    </section>
  );
}
