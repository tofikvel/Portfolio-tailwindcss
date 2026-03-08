import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col-reverse items-center justify-between gap-8 px-6 py-12 mx-auto md:flex-row max-w-6xl">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl font-bold md:text-5xl">
            Transforming your <br />
            IT Landscape
          </h1>
          <div className="space-y-12">
            <p className="text-lg text-gray-60 break-normal">
              I’m a freelance <strong>Cloud</strong> and <strong>DevOps</strong> engineer helping companies design
              scalable, secure, and cost-efficient systems. Whether you're modernizing legacy applications or building
              cloud-native platforms, I can help you deliver robust solutions. Let’s elevate your infrastructure —
              contact me to discuss your needs.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="/contact"
              className="bg-emerald-700 text-white px-9 py-4 rounded-full hover:bg-emerald-800 transition cursor-pointer"
            >
              Get in touch!
            </Link>
          </div>
        </div>
        <div className="flex-1 space-y-6">
          <img src="home-page-hero.jpg" alt="home-page-hero-image" width={680} />
        </div>
      </section>

      <section className="flex flex-col items-center gap-8 px-6 py-12 bg-[#f6fff8]">
        {/* Section title */}
        <h1 className="mb-14 md:mb-26 text-4xl font-bold text-center md:text-5xl">Services that deliver</h1>
        {/* Services container */}
        <div className="space-y-12 mx-auto max-w-3xl">
          {/* Service 1 */}
          <div className="pb-8 border-b border-gray-300">
            <p className="mb-3 text-sm text-gray-500 uppercase">Software development & integration</p>

            <p className="text-2xl font-semibold leading-relaxed">
              Custom software solutions and seamless integration with existing systems
            </p>
          </div>
          <div className="pb-8 border-b border-gray-300">
            <p className="mb-3 text-sm text-gray-500 uppercase">Devops implementation & consulting</p>

            <p className="text-2xl font-semibold leading-relaxed">
              Establish robust CI/CD pipelines, automating deployments and improving collaboration
            </p>
          </div>
          <div className="pb-8 border-b border-gray-300">
            <p className="mb-3 text-sm text-gray-500 uppercase">Cloud migration & optimization</p>

            <p className="text-2xl font-semibold leading-relaxed">
              Seamless transition to the cloud, maximizing efficiency and cost savings
            </p>
          </div>
        </div>
      </section>

      {/* Project results section */}
      <section className="flex flex-col-reverse items-center justify-between gap-8 px-6 py-12 mx-auto md:flex-row max-w-6xl">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl font-bold md:text-5xl">Proven project results</h1>
          <div className="space-y-12">
            <p className="text-lg text-gray-600 break-all">
              Explore a selection of my successfully completed projects, demonstrating my ability to deliver
              high-quality, effective solutions across various industries and technologies. Each project showcases the
              application of my skills to solve real-world challenges.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="/portfolio"
              className="bg-emerald-700 text-white px-9 py-4 rounded-full hover:bg-emerald-800 transition cursor-pointer"
            >
              Explore my projects
            </Link>
          </div>
        </div>
        <div className="flex-1 space-y-6">
          <img src="home-page-hero.jpg" alt="home-page-hero-image" width={680} />
        </div>
      </section>

      {/* Contact section */}
      <section className="bg-[#f6fff8] py-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* TOP HEADING */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">Get in touch today</h2>
            <p className="max-w-2xl mx-auto text-gray-700 text-lg leading-relaxed">
              I would be happy to discuss your project with you. Please complete the form below or contact me directly.
            </p>
          </div>

          {/* SPLIT SECTION */}
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* LEFT SIDE – CONTACT INFO */}
            <div className="space-y-6 text-gray-900">
              <p className="text-2xl tracking-wide">+49 176 802 289 57</p>

              <p className="text-2xl">info@baque-solutions.com</p>

              <p className="text-gray-700">Münchener Straße 42A, 10779 Berlin, Germany</p>
            </div>

            {/* RIGHT SIDE – FORM */}
            <form className="space-y-6">
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
                rows="5"
                placeholder="Your comments"
                className="w-full bg-white border border-gray-400 p-4 focus:outline-none focus:border-gray-700 transition"
              />

              <button
                type="submit"
                className="bg-emerald-700 text-white px-9 py-4 rounded-full hover:bg-emerald-800 transition cursor-pointer"
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
