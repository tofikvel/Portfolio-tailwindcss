export default function ServicesPage() {
  return (
    <section className="flex-flex-col-reverse mx-auto md:h-[calc(100dvh-65px)] md:flex md:justify-center border bg-[url(/services-bg.jpg)] bg-cover bg-fixed bg-no-repeat bg-mist-900 bg-blend-overlay">
      <div className="max-w-6xl flex flex-col justify-center md:flex md:flex-col md:justify-center md:items-center border border-white">
        <div className="flex flex-col text-center space-y-6 md:flex md:flex-col gap-6">
          <h1 className="text-3xl text-white font-bold md:text-7xl">IT and Cloud Consulting</h1>
          <h3 className="text-md text-white md:text-3xl md:break-word">Cloud solutions, CI/CD automation, and custom software development for scalable and secure businesses.</h3>
        </div>
        <div className="flex justify-center w-full border border-white">
          <button className="cursor-pointer p-4 md:p-4 md:px4 border border-white">
            <span>
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
