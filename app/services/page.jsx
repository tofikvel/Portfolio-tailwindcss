export default function ServicesPage() {
  return (
    <main>
      <section className="flex px-6 min-h-[calc(100svh-64px)] bg-[url(/services-bg.jpg)] bg-cover bg-fixed bg-no-repeat bg-mist-900 bg-blend-overlay">
        <div className="mx-auto flex flex-1 flex-col max-w-6xl">
          <div className="flex flex-1 flex-col items-center justify-center text-center gap-6 md:gap-8">
            <h1 className="text-3xl font-bold text-white md:text-7xl">
              IT and Cloud Consulting
            </h1>
            <p className="text-md text-white md:text-3xl max-w-3xl">
              Cloud solutions, CI/CD automation, and custom software development for scalable and secure businesses.
            </p>
          </div>
          <div className="flex justify-center pb-6">
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
      <section className="min-h-[calc(100svh-64px)] flex justify-center items-center px-6 py-24 mx-auto">
        <div className="max-w-6xl flex flex-col gap-12 md:gap-24">
          <div className="flex flex-col items-center justify-center text-center gap-6">
            <h1 className="text-3xl font-bold md:text-5xl">Why Work With Me?</h1>
            <p className="text-md text-gray-500 max-w-2xl md:text-2xl">
              I combine deep technical expertise with a hands-on, results-driven approach to deliver real value for your
              business.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-6 md:flex md:flex-row">
            <div className="flex flex-col items-center text-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="65"
                height="65"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
                <path d="M4 14l8 -3l8 3" />
              </svg>
              <div>
                <h3 className="text-2xl font-bold mb-4">Proven Experience</h3>
                <p className="text-md text-gray-500 max-w-lg md:text-lg">
                  I’ve worked across industries helping companies launch, scale, and secure their systems in the cloud.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="65"
                height="65"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 11a8.1 8.1 0 0 0 -6.986 -6.918a8.095 8.095 0 0 0 -8.019 3.918" />
                <path d="M4 13a8.1 8.1 0 0 0 15 3" />
                <path d="M19 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                <path d="M5 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              </svg>
              <div>
                <h3 className="text-2xl font-bold mb-4">Tailored Solutions</h3>
                <p className="text-md text-gray-500 max-w-lg md:text-lg">
                  Every project is different. I take the time to understand your goals and design solutions that fit — no cookie-cutter templates.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="65"
                height="65"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.942 13.02a9 9 0 1 0 -9.47 7.964" />
                <path d="M3.6 9h16.8" />
                <path d="M3.6 15h9.9" />
                <path d="M11.5 3a17 17 0 0 0 0 18" />
                <path d="M12.5 3c2 3.206 2.837 6.913 2.508 10.537" />
                <path d="M20 21l2 -2l-2 -2" />
                <path d="M17 17l-2 2l2 2" />
              </svg>
              <div>
                <h3 className="text-2xl font-bold mb-4">Built for the Long Term</h3>
                <p className="text-md text-gray-500 max-w-lg md:text-lg">
                  From CI/CD pipelines to cost-optimized infrastructure, I build with scalability, maintainability, and the future in mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
