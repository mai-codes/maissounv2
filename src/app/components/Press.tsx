import React from "react";

const pressLinks = [
  {
    url: "https://drexel.edu/news/archive/2015/february/drexel_represents_research_conf",
    label: "Drexel Represents at Research Conference (2015)",
  },
  {
    url: "https://drexel.edu/engineering/news-events/news/archive/2018/April/caee-students-attend-transportation-summit-in-brooklyn/",
    label: "CAEE Students Attend Transportation Summit in Brooklyn (2018)",
  },
  {
    url: "https://alltogether.swe.org/2020/01/philadelphia-outreach-event-wins-swe-award/",
    label: "Philadelphia Outreach Event Wins SWE Award (2020)",
  },
  {
    url: "https://technical.ly/diversity-equity-inclusion/femmehacks-hackathon-women-andrea-baric/",
    label: "FemmeHacks Hackathon Empowers Women (Technical.ly)",
  },
  {
    url: "https://technical.ly/software-development/5-local-colleges-hacked-web-accessibility-evohax/",
    label: "5 Local Colleges Hacked Web Accessibility at Evohax (Technical.ly)",
  },
  {
    url: "https://www.technologynetworks.com/immunology/news/preventing-potholes-with-bacteria-317951",
    label: "Preventing Potholes With Bacteria (Technology Networks)",
  },
];

export default function Press() {
  return (
    <section id="press" className="py-16 w-full max-w-5xl mx-auto px-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-accent mb-8 font-mono">0.4 Press</h2>
      <ul className="space-y-4">
        {pressLinks.map((link, i) => (
          <li key={i}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline hover:text-accent transition"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
