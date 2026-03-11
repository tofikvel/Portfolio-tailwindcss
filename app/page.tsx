import Link from "next/link";
import Image from "next/image"

export default function Home() {
  return (
    <main>
      <section className="flex flex-col-reverse items-center gap-8 px-6 py-12 mx-auto md:flex-row md:justify-between max-w-6xl">
        <div className="flex-1 space-y-8 md:space-y-12">
          <h1 className="text-4xl font-bold md:text-5xl">
            Transforming your <br />
            IT Landscape
          </h1>
          <div className="space-y-12">
            <p className="text-xl text-gray-600 leading-relaxed md:text-2xl">
              I’m a freelance <strong>Cloud</strong> and <strong>DevOps</strong> engineer helping companies design
              scalable, secure, and cost-efficient systems. Whether you are modernizing legacy applications or building
              cloud-native platforms, I can help you deliver robust solutions. Let’s elevate your infrastructure —
              contact me to discuss your needs.
            </p>
          </div>
          <div className="flex justify-center md:flex md:justify-start">
            <Link
              href="/portfolio"
              className="bg-emerald-700 text-white px-6 py-4 rounded-full hover:bg-emerald-800 transition cursor-pointer md:px-12 md:py-4"
            >
              Get in touch!
            </Link>
          </div>
        </div>
        <div className="flex-1 space-y-6 border border-black">
          <Image src="/home-page-hero.jpg" alt="home-page-hero-image" width={680} height={600} className="w-full h-auto" />
        </div>
      </section>

      <section className="flex flex-col items-center gap-8 px-6 py-20 bg-sky-100">
        {/* Section title */}
        <h1 className="mb-12 text-3xl font-bold text-center md:text-5xl md:mb-20">Services that deliver</h1>
        {/* Services container */}
        <div className="space-y-12 mx-auto max-w-3xl">
          {/* Service 1 */}
          <div className="pb-8 border-b border-gray-300">
            <p className="mb-3 text-md text-gray-500 uppercase">Software development & integration</p>

            <p className="text-xl font-semibold leading-relaxed md:text-3xl">
              Custom software solutions and seamless integration with existing systems
            </p>
          </div>
          <div className="pb-8 border-b border-gray-300">
            <p className="mb-3 text-md text-gray-500 uppercase">Devops implementation & consulting</p>

            <p className="text-xl font-semibold leading-relaxed md:text-3xl">
              Establish robust CI/CD pipelines, automating deployments and improving collaboration
            </p>
          </div>
          <div className="pb-8 border-b border-gray-300">
            <p className="mb-3 text-md text-gray-500 uppercase">Cloud migration & optimization</p>

            <p className="text-xl font-semibold leading-relaxed md:text-3xl">
              Seamless transition to the cloud, maximizing efficiency and cost savings
            </p>
          </div>
        </div>
      </section>

      {/* Project results section */}
      <section className="flex flex-col-reverse items-center justify-between gap-8 px-6 py-24 mx-auto md:flex-row max-w-6xl">
        <div className="flex-1 space-y-6 md:space-y-12">
          <h1 className="text-3xl font-bold md:text-5xl">Proven project results</h1>
          <div className="space-y-12">
            <p className="text-xl text-gray-600 leading-relaxed md:text-2xl">
              Explore a selection of my successfully completed projects, demonstrating my ability to deliver
              high-quality, effective solutions across various industries and technologies. Each project showcases the
              application of my skills to solve real-world challenges.
            </p>
          </div>
          <div className="flex justify-center md:flex md:justify-start">
            <Link
              href="/portfolio"
              className="bg-emerald-700 text-white px-6 py-4 rounded-full hover:bg-emerald-800 transition cursor-pointer md:px-12 md:py-4"
            >
              Explore my projects
            </Link>
          </div>
        </div>
        <div className="flex-1 space-y-6">
          <Image src="/home-page-hero.jpg" alt="home-page-hero-image" width={680} height={600} className="w-full h-auto" />
        </div>
      </section>

      {/* Contact section */}
      <section className="bg-sky-100 flex flex-col-reverse items-center justify-between gap-8 px-6 py-20 mx-auto md:flex-col">
        <div className="flex-1md:space-y-24">
          {/* TOP HEADING */}
          <div className="text-center mb-12">
            <div className="w-full md:flex md:justify-center">
              <h2 className="text-3xl font-semibold mb-8 md:mb-12 md:text-5xl">Get in touch today</h2>
            </div>
            <div className="w-full md:flex md:justify-center">
              <p className="text-gray-700 text-xl max-w-xl md:text-2xl leading-relaxed">
                I would be happy to discuss your project with you. Please complete the form below or contact me directly.
              </p>
            </div>
          </div>
          {/* SPLIT SECTION */}
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* LEFT SIDE – CONTACT INFO */}
            <div className="space-y-6 text-gray-900 md:space-y-10">
              <div className="flex flex-row gap-4 items-center md:flex md:flex-row md:items-center md:gap-4">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                </span>
                <p className="text-lg tracking-wide md:text-2xl">+49 176 802 289 57</p>
              </div>
              <div className="flex flex-row gap-4 items-center md:flex md:flex-row md:items-center md:gap-4">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </span>
                <p className="text-lg tracking-wide md:text-2xl">info@baque-solutions.com</p>
              </div>
              <div className="flex flex-row gap-4 items-center md:flex md:flex-row md:items-center md:gap-4">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                </span>
                <p className="text-lg tracking-wide md:text-2xl">Münchener Straße 42A, 10779 Berlin, Germany</p>
              </div>
            </div>

            {/* RIGHT SIDE – FORM */}
            <form className="flex flex-col justify-center space-y-6 md:space-y-6 md:flex md:flex-col">
              <input
                type="email"
                placeholder="Your E-mail"
                className="w-full bg-white border border-gray-400 p-4 focus:outline-none focus:border-gray-700 transition"
              />

              <input
                type="text"
                placeholder="Your Full Name"
                className="w-full bg-white border border-gray-400 p-4 focus:outline-none focus:border-gray-700 transition"
              />

              <textarea
                rows={5}
                placeholder="Your comments"
                className="w-full bg-white border border-gray-400 p-4 focus:outline-none focus:border-gray-700 transition resize-none md:mb-10"
              />
              <button
                type="submit"
                className="bg-emerald-700 text-white text-sm px-9 py-4 rounded-full hover:bg-emerald-800 transition cursor-pointer"
              >
                SEND INQUIRY
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
