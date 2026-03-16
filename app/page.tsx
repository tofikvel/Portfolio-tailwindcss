import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="md:min-h-[calc(100svh-64px)] flex justify-center mx-auto px-6 py-12">
        <div className="flex flex-col-reverse items-center gap-12 max-w-6xl md:flex md:flex-row">
          <div className="flex flex-col flex-1 gap-6">
            <h1 className="text-3xl text-center font-bold md:text-5xl md:text-start">
              Transforming your <br />
              IT Landscape
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed md:text-2xl">
              I’m a freelance <strong>Cloud</strong> and <strong>DevOps</strong> engineer helping companies design
              scalable, secure, and cost-efficient systems. Whether you are modernizing legacy applications or building
              cloud-native platforms, I can help you deliver robust solutions. Let’s elevate your infrastructure —
              contact me to discuss your needs.
            </p>
            <div className="flex justify-center md:flex md:justify-start">
              <Link
                href="/portfolio"
                className="bg-emerald-700 text-white px-6 py-4 rounded-full hover:bg-emerald-800 transition cursor-pointer md:px-12 md:py-4"
              >
                Get in touch!
              </Link>
            </div>
          </div>
          <div className="flex flex-1">
            <Image
              src="/home-page-hero.jpg"
              alt="home-page-hero-image"
              width={680}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
      <section className="bg-sky-100 flex justify-center px-6 py-12 mx-auto md:py-24">
        <div className="flex flex-col gap-12 max-w-6xl md:gap-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-center md:text-4xl">Services that deliver</h1>
          </div>
          {/* Service 1 */}
          <div className="flex flex-col gap-12 max-w-4xl">
            <div className="pb-8 border-b border-gray-300">
              <p className="mb-3 text-sm text-gray-500 uppercase">Software development & integration</p>
              <p className="text-xl font-semibold leading-relaxed md:text-2xl">
                Custom software solutions and seamless integration with existing systems
              </p>
            </div>
            <div className="pb-8 border-b border-gray-300">
              <p className="mb-3 text-sd text-gray-500 uppercase">Devops implementation & consulting</p>
              <p className="text-xl font-semibold leading-relaxed md:text-2xl">
                Establish robust CI/CD pipelines, automating deployments and improving collaboration
              </p>
            </div>
            <div className="pb-8 border-b border-gray-300">
              <p className="mb-3 text-sd text-gray-500 uppercase">Cloud migration & optimization</p>
              <p className="text-xl font-semibold leading-relaxed md:text-2xl">
                Seamless transition to the cloud, maximizing efficiency and cost savings
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project results section */}
      <section className="flex justify-center px-6 py-12 mx-auto md:py-24">
        <div className="flex flex-col-reverse items-center gap-12 max-w-6xl md:flex md:flex-row">
          <div className="flex flex-col flex-1 gap-12">
            <h1 className="text-3xl font-bold md:text-4xl text-center md:text-start">Proven project results</h1>
            <p className="text-xl text-gray-600 leading-relaxed md:text-xl">
              Explore a selection of my successfully completed projects, demonstrating my ability to deliver
              high-quality, effective solutions across various industries and technologies. Each project showcases the
              application of my skills to solve real-world challenges.
            </p>
            <div className="flex justify-center md:flex md:justify-start">
              <Link
                href="/portfolio"
                className="bg-emerald-700 text-white px-6 py-4 rounded-full hover:bg-emerald-800 transition cursor-pointer md:px-12 md:py-4 uppercase"
              >
                explore my projects
              </Link>
            </div>
          </div>
          <div className="flex flex-1">
            <Image
              src="/home-page-hero.jpg"
              alt="home-page-hero-image"
              width={680}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
      {/* Contact section */}
      <section className="bg-sky-100 flex justify-center items-center px-6 py-12 md:py-24 mx-auto">
        <div className="max-w-6xl flex flex-col justify-center items-center w-full">
          {/* TOP HEADING */}
          <div className="flex flex-col text-center mb-12">
            <h2 className="text-3xl font-semibold mb-8 md:text-5xl">Get in touch today</h2>
            <p className="text-gray-700 text-lg md:text-xl">
              I would be happy to discuss your project with you. <br /> Please complete the form below or contact me
              directly.
            </p>
          </div>
          <div className="flex max-w-2xl w-full">
            <form className="flex flex-col justify-center gap-4 w-full">
              <input
                type="email"
                placeholder="Your E-mail"
                className="w-full bg-white border border-gray-400 p-4 rounded-sm focus:outline-none focus:border-gray-700 transition"
              />

              <input
                type="text"
                placeholder="Your Full Name"
                className="w-full bg-white border border-gray-400 p-4 rounded-sm focus:outline-none focus:border-gray-700 transition"
              />

              <textarea
                rows={5}
                placeholder="Your comments"
                className="w-full bg-white border border-gray-400 p-4 rounded-sm focus:outline-none focus:border-gray-700 transition resize-none md:mb-4"
              />
              <button
                type="submit"
                className="bg-emerald-700 text-white text-sm px-9 py-4 rounded-sm hover:bg-emerald-800 transition cursor-pointer"
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
