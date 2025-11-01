import Link from "next/link";

// app/about/page.tsx
export default function About() {
  return (
    <div className="h-full bg-white py-5 px-4 sm:px-3 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          About Me
        </h2>

        <div className=" items-center">
          <div>
            <p className="text-lg text-gray-600 mb-6">
              Hello! I am Blen Henok, a highly skilled Ethiopian web developer
              and system administrator. With a deep passion for programming,
              server management, and cybersecurity, I offer a wide range of
              services tailored to your needs. My extensive experience and
              expertise enable me to adapt quickly to new challenges, ensuring
              top-notch solutions for every project. I offer a free and
              anonymous mail service, GitHub IPv6 proxy. You can find my
              open-source projects on GitHub.
            </p>

            <p className="text-lg text-gray-600 mb-6">
              I specialize in developing web applications in PHP, SQL, and
              JavaScript. Whether you need a WordPress website, a custom PHP
              application, or any other web project, I have the skills to bring
              your ideas to life. I excel in API connectors and custom plugins,
              ensuring seamless integration with your other services.
              Performance optimization is very important to me, and I can help
              you improve your websites loading speed and performance.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Managing Linux servers, web hostings, and email services is my
              forte. I have experience with various hosting providers and am
              proficient in working with hosting panels like Plesk and WHMCS. I
              can help you with configuring your business network
              infrastructure, and ensure optimal performance and security, so
              you can focus on running your business. That includes setting up
              firewalls, VPNs, routers, and other security measures to protect
              your data from unauthorized access.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              I am Certified in Cybersecurity and possess a deep understanding
              of cybersecurity threats. My continuous learning and passion for
              cybersecurity have been instrumental in my ability to safeguard
              online environments effectively. I am constantly upgrading my
              skills and knowledge to stay ahead of the latest threats. I offer
              comprehensive cybersecurity solutions to safeguard your systems
              and data from potential threats. That includes both physical and
              digital security measures such as firewalls, anti-virus software,
              backups, password management, and more. I can also help you with
              incident response and recovery after a security breach.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              I would be happy to answer any questions you may have and look
              forward to working with you. <Link href="/contact" className="underline font-bold"> Get in touch </Link> with me to discuss your project and turn your vision to life!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
