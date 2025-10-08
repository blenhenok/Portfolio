"use client"
export default function Work() {
  const projects = [
    {
      title: "E-commerce Platform",
      image: "/api/placeholder/400/250",
      link: "#",
      github: "#",
    },
    {
      title: "Task Management App", 
      image: "/api/placeholder/400/250",
      link: "#",
      github: "#",
    },
    {
      title: "Weather Dashboard",
      image: "/api/placeholder/400/250", 
      link: "#",
      github: "#",
    },
    {
      title: "Social Media App",
      image: "/api/placeholder/400/250",
      link: "#", 
      github: "#",
    },
    {
      title: "Fitness Tracker",
      image: "/api/placeholder/400/250",
      link: "#",
      github: "#",
    },
    {
      title: "Recipe Finder",
      image: "/api/placeholder/400/250",
      link: "#",
      github: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="mx-auto">
          <h2 className="text-8xl font-bold text-center text-gray-900 mb-4">
            WORK
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            EXPLORING THE EXPERIENCE
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gray-200 relative">
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-600 font-semibold">
                      {project.title} Image
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>

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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}