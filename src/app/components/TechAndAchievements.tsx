import React from "react";

const skills = [
  'JavaScript (ES6+)',
  'TypeScript',
  'React',
  'Node.js',
  'Python',
  'SQL',
  'ASP.NET/C#',
  'HTML & CSS',
];

const achievements = [
  "2025: Recognized by AnitaB.org for supporting and promoting The Responsible AI Forum: An AnitaB.org Tech Collaborative, contributing to the advancement of responsible innovation in technology",
  "2023: Grace Hopper Celebration - Sponsored Student",
  "2022: Grace Hopper Celebration Scholar",
  "2021: Grace Hopper Celebration Scholarship – Awarded by Vanguard",
  "2020: Tier 2 Scholarship to ASCE Structures Congress 2020",
  "2019: Published my first research paper on ScienceDirect as first author",
  "2018: 1 in 20 selected to attend ASCE Construction Institute Days",
  "2017: ASCE Philadelphia Scholarship Recipient",
  "2017: Delaware Valley Engineers Week Scholarship Recipient",
  "2016: 1 in 2 chosen in my region as a Society of Women Engineers Future Leader (SWEFL)",
  "2016: Delaware Valley Engineers Week Scholarship Recipient",
  "2015: Society of Women Engineers Philadelphia Scholarship Recipient",
  "2013: Full Scholarship to attend Drexel University",
  "2013: Global Lights Morocco Scholarship",
];

export default function TechAndAchievements() {
  return (
  <div className="w-full max-w-3xl mx-auto">
      <div className="w-full">
  <p className="mb-2 font-semibold text-accent text-lg">Technologies I've worked with recently:</p>
        <ul className="grid grid-cols-2 gap-x-8 gap-y-2 list-none w-full">
          {skills.map((skill, i) => (
            <li key={i} className="relative pl-5 font-mono text-xs text-muted w-full">
              <span className="absolute left-0" style={{ color: '#EC4899' }}>+</span>
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full mt-10">
  <p className="mb-2 font-semibold text-accent text-lg">Achievements:</p>
        <ul className="flex flex-col space-y-2 text-sm text-foreground w-full">
          {achievements.map((ach, i) => (
            <li key={i} className="flex items-start gap-2 w-full">
              <span style={{ color: '#EC4899' }}>→</span>
              <span className="w-full">{ach}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
