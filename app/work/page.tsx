"use client"
export default function Work() {
  const projects = [
    {
      title: "Chat App",
      image: "/api/placeholder/400/250",
      link: "#",
      github: "https://github.com/blenhenok/Chat-App",
    },
    {
      title: "3D---Virtual-Gallery",
      image: "/api/placeholder/400/250",
      link: "#",
      github: "https://github.com/blenhenok/AURA---Virtual-Gallery",
    },
    {
      title: "Note App",
      image: "/api/placeholder/400/250",
      link: "#",
      github: "#",
    },
    {
      title: "Restaurant Website",
      image: "/api/placeholder/400/250",
      link: "#",
      github: "https://github.com/blenhenok/Chercher",
    },
    {
      title: "Movie Website",
      image: "/api/placeholder/400/250",
      link: "#",
      github: "https://github.com/blenhenok/Movie-Website",
    },
    {
      title: "ERP System",
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