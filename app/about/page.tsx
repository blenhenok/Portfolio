// app/about/page.tsx
export default function About() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          About Me
        </h2>

        <div className=" items-center">
          <div>
            <p className="text-lg text-gray-600 mb-6">
              I am a passionate web developer with expertise in modern
              JavaScript frameworks, particularly Next.js and React. I love
              creating responsive, user-friendly applications that solve
              real-world problems.
            </p>

            <p className="text-lg text-gray-600 mb-6">
              With a strong foundation in front-end development and growing
              experience in full-stack technologies, I am always eager to take
              on new challenges and learn emerging technologies.
            </p>

            <div className="flex flex-wrap gap-4">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                Next.js
              </span>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                React
              </span>
              <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">
                JavaScript
              </span>
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                Tailwind CSS
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
