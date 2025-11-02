"use client";
import { projects } from "../../public/data/projects";

export default function Work() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="mx-auto">
          <h2 className="text-8xl font-bold text-center text-gray-900 mb-4">
            WORK
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gray-200 relative">
                  <div className="w-full h-full bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-blue-600 font-bold">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                      <span className="text-gray-700 font-semibold text-sm">
                        {project.title}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex space-x-4">
                    <a
                      href={project.link}
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                    >
                      Live Demo →
                    </a>
                    <a
                      href={project.github}
                      className="text-gray-600 hover:text-gray-800 font-medium text-sm"
                    >
                      GitHub
                    </a>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-lg text-xs font-medium mt-4"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
