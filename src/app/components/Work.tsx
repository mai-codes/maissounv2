
"use client";
const projects = [
  {
    title: "Java client-server Chat Protocol",
    featured: true,
    image: "https://raw.githubusercontent.com/mai-codes/SHPChat/main/demo/demo.png", // Example image from repo
    description:
      "Implementation of a Java client-server chat protocol, built using sockets and supporting multiple concurrent clients via the Runnable interface. Includes authentication, message history retrieval, and data messaging. Features bash scripts for running server/client and thread pool management with ExecutorService.",
    tech: ["Java", "Bash"],
    links: [
      { icon: "github", url: "https://github.com/mai-codes/SHPChat" },
    ],
  },
  {
    title: "Image Panorama",
    featured: true,
    image: "https://raw.githubusercontent.com/mai-codes/ImagePanorama/main/demo/demo.gif",
    description:
      "Builds a mosaic from a set of input pictures by reprojecting images into cylindrical coordinates, using the Lucas Kanade algorithm to determine displacements, and stitching them to create a panorama. Expanded from an implementation of Lucas Kanade, this project includes: camera calibration, cylindrical reprojection, image alignment, edge blending, and panorama generation by projecting the mosaic onto a cylinder",
    tech: ["Python", "NumPy", "Imageio", "OpenCV", "skimage", "SciPy"],
    links: [
      { icon: "github", url: "https://github.com/mai-codes/ImagePanorama" },
    ],
  },
  {
    title: "Deep Learning Image Classification",
    featured: true,
    image: "https://raw.githubusercontent.com/ngkhiem97/deep-learning-image-classification/main/demo/demo.png", 
    description:
      "A custom deep learning library for CIFAR-10 image classification, built from scratch in Python and NumPy. Features modular neural network layers (fully connected, convolutional, activation, dropout, pooling, flatten, softmax), forward and backward propagation, Adam optimizer, and support for training/testing splits, one-hot encoding, and batch training. Includes utilities for visualizing images, plotting training/testing metrics, and saving model results. No external ML frameworks required.",
    tech: ["Python", "Deep Learning", "CNN", "Jupyter"],
    links: [
      { icon: "github", url: "https://github.com/ngkhiem97/deep-learning-image-classification" },
    ],
  },
];



import React, { useState } from "react";

export default function Work() {
  const [showMore, setShowMore] = useState(false);
  const GRID_LIMIT = 6;
  const projectsToShow = showMore ? projects : projects.slice(0, GRID_LIMIT);

  return (
    <section id="work" className="py-16 w-full">
      <div className="max-w-6xl mx-auto px-1 lg:px-4">
        <h2 className="text-3xl font-bold mb-8 text-accent flex items-center gap-4">
          <span className="font-mono" style={{ color: '#10B981' }}>0.3</span> Some Things I've Worked On
          <span className="flex-1 h-px bg-muted ml-4" />
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsToShow.map((project, idx) => (
            <li key={project.title} className="relative flex flex-col rounded-lg shadow-lg p-6 group text-sm leading-tight bg-background border border-black transition-all duration-200 hover:border-green-500 hover:border-4" >
              <div className="flex items-center justify-between mb-3">
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-accent">
                  <path d="M3 7a2 2 0 0 1 2-2h4l2 3h8a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
                </svg>
                <div className="flex gap-2">
                  {project.links.map((link, i) => (
                    <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="text-accent hover:scale-110 transition-transform">
                      {link.icon === "github" ? (
                        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.012c0 4.418 2.867 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.833.09-.646.35-1.088.636-1.34-2.22-.253-4.555-1.112-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.274.098-2.656 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.338 1.909-1.295 2.748-1.025 2.748-1.025.546 1.382.202 2.402.1 2.656.64.7 1.028 1.595 1.028 2.688 0 3.847-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.135 20.175 22 16.427 22 12.012 22 6.484 17.523 2 12 2z"/></svg>
                      ) : (
                        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                      )}
                    </a>
                  ))}
                </div>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 leading-snug">{project.title}</h3>
              <p className="text-base text-muted mb-3 font-normal leading-normal">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-xs text-muted font-mono font-light">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </li>
          ))}
        </ul>
        {projects.length > GRID_LIMIT && (
          <div className="flex justify-center mt-8">
            <button
              className="border border-accent text-accent px-6 py-2 rounded font-mono hover:bg-accent/10 transition"
              onClick={() => setShowMore(!showMore)}
            >
              Show {showMore ? "Less" : "More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
