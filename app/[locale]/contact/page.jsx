export default function ContactPage() {
  return (
    <main>
      <section className="flex justify-center items-center px-6 py-12 md:py-24 mx-auto">
        <div className="max-w-6xl flex flex-col justify-center items-center w-full">
          {/* TOP HEADING */}
          <div className="flex flex-col text-center mb-12">
            <h2 className="text-3xl font-semibold mb-8 md:text-5xl">Get in touch today</h2>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
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
  )
}
