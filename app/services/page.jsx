export default function ServicesPage() {
  return (
    <main>
      <section className="flex flex-col md:h-screen bg-[url(/services-bg.jpg)] bg-cover bg-fixed bg-no-repeat bg-mist-900 bg-blend-overlay">
        <div className="mx-auto flex max-w-6xl flex-1 flex-col px-6 gap-8 py-12 md:py-12">
          <div className="flex flex-1 flex-col items-center justify-center text-center gap-6 md:gap-8">
            <h1 className="text-3xl font-bold text-white md:text-7xl">IT and Cloud Consulting</h1>
            <p className="text-md text-white md:text-3xl max-w-3xl">
              Cloud solutions, CI/CD automation, and custom software development for scalable and secure businesses.
            </p>
          </div>

          <div className="flex justify-center">
            <button className="cursor-pointer p-3">
              <svg
                className="w-8 h-8 text-white animate-bounce"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 9-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
      <section className="flex flex-col md:h-screen">
        <div className="mx-auto flex max-w-6xl flex-1 flex-col px-6 gap-8 py-12 md:py-24 border">
          <div className="flex flex-1 flex-col items-center justify-center text-center gap-6 md:gap-12">
            <h1 className="text-3xl font-bold md:text-5xl">Why Work With Me?</h1>
            <p className="text-md text-gray-500 max-w-3xl md:text-2xl">
              I combine deep technical expertise with a hands-on, results-driven approach to deliver real value for your
              business.
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-between gap-6"></div>
      </section>
    </main>
  );
}
