import Image from "next/image";

export default function ServicesPage() {


  return (
    <main>
      <section className="flex justify-center px-6 min-h-[calc(100svh-64px)] bg-[url(/services-bg.jpg)] bg-cover bg-fixed bg-no-repeat bg-mist-900 bg-blend-overlay">
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
            <a href="#why-work-with-me" className="cursor-pointer p-3">
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
            </a>
          </div>
        </div>
      </section>
      <section className="min-h-[calc(100svh-64px)] flex justify-center items-center px-6 py-24 mx-auto" id="why-work-with-me">
        <div className="max-w-6xl flex flex-col gap-12">
          <div className="flex flex-col items-center text-center gap-6 md:mb-12">
            <h1 className="text-3xl font-bold md:text-4xl">Why Work With Me?</h1>
            <p className="text-lg text-gray-500 max-w-2xl md:text-2xl">
              I combine deep technical expertise with a hands-on, results-driven approach to deliver real value for your
              business.
            </p>
          </div>
          <div className="flex flex-col gap-6 md:flex md:flex-row">
            <div className="flex flex-col items-center text-center gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><path fill="currentColor" d="M4.616 20q-.691 0-1.153-.462T3 18.384V8.616q0-.691.463-1.153T4.615 7H9V5.615q0-.69.463-1.153T10.616 4h2.769q.69 0 1.153.462T15 5.615V7h4.385q.69 0 1.152.463T21 8.616v9.769q0 .69-.463 1.153T19.385 20zm0-1h14.769q.23 0 .423-.192t.192-.424V8.616q0-.231-.192-.424T19.385 8H4.615q-.23 0-.423.192T4 8.616v9.769q0 .23.192.423t.423.192M10 7h4V5.615q0-.23-.192-.423T13.385 5h-2.77q-.23 0-.423.192T10 5.615zM4 19V8z" /></svg>
              <div>
                <h3 className="text-2xl font-bold mb-4">Proven Experience</h3>
                <p className="text-md text-gray-500 max-w-lg md:text-lg">
                  I’ve worked across industries helping companies launch, scale, and secure their systems in the cloud.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><path fill="currentColor" d="M4.616 20q-.691 0-1.153-.462T3 18.384V5.616q0-.691.463-1.153T4.615 4h14.77q.69 0 1.152.463T21 5.616v12.769q0 .69-.463 1.153T19.385 20zm0-1h14.769q.23 0 .423-.192t.192-.424V5.616q0-.231-.192-.424T19.385 5H4.615q-.23 0-.423.192T4 5.616v12.769q0 .23.192.423t.423.192M9 16.5q.214 0 .357-.143T9.5 16t-.143-.357T9 15.5H6q-.213 0-.357.143T5.5 16t.143.357T6 16.5zm5.55-3.613l-1.071-1.072q-.146-.146-.354-.152t-.354.158q-.14.146-.133.354t.153.354l1.194 1.194q.242.242.565.242t.566-.242l3.319-3.32q.146-.145.156-.344q.009-.198-.156-.363q-.166-.165-.357-.165t-.357.165zM9 12.5q.214 0 .357-.143T9.5 12t-.143-.357T9 11.5H6q-.213 0-.357.143T5.5 12t.143.357T6 12.5zm0-4q.214 0 .357-.143T9.5 8t-.143-.357T9 7.5H6q-.213 0-.357.143T5.5 8t.143.357T6 8.5zM4 19V5z" /></svg>
              <div>
                <h3 className="text-2xl font-bold mb-4">Tailored Solutions</h3>
                <p className="text-md text-gray-500 max-w-lg md:text-lg">
                  Every project is different. I take the time to understand your goals and design solutions that fit — no cookie-cutter templates.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><path fill="currentColor" d="M5.017 12.5H8q.14 0 .256.07t.183.21L10 15.867l3.562-7.085q.14-.287.448-.287q.307 0 .448.287l1.86 3.719h2.665q-.183-2.742-2.2-4.621T12 6T7.217 7.879t-2.2 4.621M12 20q2.766 0 4.783-1.879t2.2-4.621H16q-.14 0-.256-.07t-.183-.21L14 10.134l-3.561 7.103q-.141.287-.448.277t-.449-.296L7.682 13.5H5.018q.183 2.742 2.2 4.621T12 20m0 1q-1.658 0-3.113-.626t-2.545-1.716t-1.716-2.546T4 13h1q0 2.9 2.05 4.95T12 20t4.95-2.05T19 13h1q0 1.658-.626 3.113t-1.716 2.545t-2.546 1.716T12 21m-8-8q0-1.658.626-3.113t1.716-2.545t2.546-1.716T12 5q1.454 0 2.812.52t2.492 1.469l1.092-1.093l.708.708l-1.092 1.092q.95 1.135 1.469 2.493T20 13h-1q0-2.9-2.05-4.95T12 6T7.05 8.05T5 13zM9.385 2.5v-1h5.23v1zM12 20q-2.9 0-4.95-2.05T5 13t2.05-4.95T12 6t4.95 2.05T19 13t-2.05 4.95T12 20m0-7" /></svg>
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
      <section className="bg-sky-50 flex justify-center items-center px-6 py-12 md:py-24">
        <div className="mx-auto flex flex-1 flex-col max-w-6xl gap-12 md:gap-24">
          <div className="flex flex-col items-center md:text-center gap-6">
            <h1 className="text-3xl font-bold md:text-4xl">My Services</h1>
            <p className="text-md text-gray-500 max-w-2xl md:text-2xl leading-relaxed">
              From cloud infrastructure to deployment automation, I provide tailored tech solutions that help your business grow, scale, and stay secure. Here&apos;s how I can support your company:
            </p>
          </div>
          <div className="flex flex-col-reverse gap-6 max-w-6xl md:flex md:flex-row-reverse">
            <div className="flex flex-col flex-1 items-start justify-center gap-6">
              <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-bold text-center md:text-3xl md:text-start">Custom Software Development</h1>
                <p className="text-md md:text-lg leading-relaxed">
                  Build solutions that truly serve your business goals. I help companies design, develop, and maintain robust, scalable applications — from MVPs to production-ready systems.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-bold text-start md:text-2xl">What I offer:</h3>
                <p className="text-md md:text-lg">1. End-to-end web & backend development</p>
                <p className="text-md md:text-lg">2. API design and integration</p>
                <p className="text-md md:text-lg">3. System architecture & technical consulting</p>
                <p className="text-md md:text-lg">4. Performance optimization and code reviews</p>
                <p className="text-md md:text-lg font-semibold italic">Whether you&apos;re launching a new product or modernizing a legacy application, I can help turn your vision into reality..</p>
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
          <div className="flex flex-col-reverse gap-6 max-w-6xl md:flex md:flex-row">
            <div className="flex flex-col flex-1 items-start justify-center gap-6">
              <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-bold text-center md:text-3xl md:text-start">Cloud Migration & Optimization</h1>
                <p className="text-md md:text-lg leading-relaxed">
                  Take full advantage of the cloud — without the stress.
                  I assist businesses in moving their infrastructure to cloud platforms like AWS, ensuring secure, cost-effective, and scalable environments.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-bold text-start md:text-2xl">Key focus areas:</h3>
                <p className="text-md md:text-lg">1. Migration strategy & execution</p>
                <p className="text-md md:text-lg">2. Cloud cost analysis and optimization</p>
                <p className="text-md md:text-lg">3. Cloud security best practices (IAM, encryption, backups)</p>
                <p className="text-md md:text-lg">4. Infrastructure-as-Code</p>
                <p className="text-md md:text-lg font-semibold italic">From simple setups to complex enterprise environments, I provide guidance and hands-on support to help you migrate with confidence.</p>
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
          <div className="flex flex-col-reverse gap-6 max-w-6xl md:flex md:flex-row-reverse">
            <div className="flex flex-col flex-1 items-start justify-center gap-6">
              <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-bold text-center md:text-3xl md:text-start">DevOps & CI/CD Enablement</h1>
                <p className="text-md md:text-lg leading-relaxed">
                  Accelerate your development cycles with automation and best practices.
                  I work with teams to streamline their deployment pipelines, improve system reliability, and boost productivity.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-bold text-start md:text-2xl">What I can help with:</h3>
                <p className="text-md md:text-lg">1. Designing and implementing CI/CD pipelines</p>
                <p className="text-md md:text-lg">2. Automating deployments (e.g., with GitHub Actions, GitLab CI, Jenkins)n</p>
                <p className="text-md md:text-lg">3. Containerization with Docker & Kubernetes</p>
                <p className="text-md md:text-lg">4. Infrastructure monitoring & alerting</p>
                <p className="text-md md:text-lg font-semibold italic">If your project needs a more efficient development workflow or a reliable deployment process, I’ll help you put the right systems in place.</p>
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
        </div>
      </section>
      <section className="bg-gradient-to-b from-slate-800 via-slate-900 to-black flex justify-center text-white items-center px-6 py-12 md:py-24">
        <div className="max-w-6xl flex flex-col gap-12 md:gap-20">
          <h1 className="text-3xl font-bold text-center md:text-4xl">What Will You Get?</h1>
          <div className="flex flex-col gap-6 max-w-4xl">
            <div className="flex flex-row items-center gap-4">
              <span className="hidden md:block">
                <svg aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ff2d55"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 11l3 3l8 -8" />
                  <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" />
                </svg>
              </span>
              <div className="flex flex-col gap-2">
                <h2 className="text-lg font-bold md:text-2xl">
                  Clarity & Technical Direction
                </h2>
                <p className="text-md md:text-xl">
                  You’ll gain a clear architectural vision and actionable roadmap. I help you align your business goals with modern technologies and best practices — from cloud design to CI/CD strategy.
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4">
              <span className="hidden md:block">
                <svg aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ff2d55"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 11l3 3l8 -8" />
                  <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" />
                </svg>
              </span>
              <div className="flex flex-col gap-2">
                <h2 className="text-lg font-bold md:text-2xl">
                  Time & Cost Efficiency
                </h2>
                <p className="text-md md:text-xl">
                  With streamlined pipelines, infrastructure automation, and cloud cost optimization, you reduce overhead and avoid technical debt — saving both time and money.
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4">
              <span className="hidden md:block">
                <svg aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ff2d55"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 11l3 3l8 -8" />
                  <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" />
                </svg>
              </span>
              <div className="flex flex-col gap-2">
                <h2 className="text-lg font-bold md:text-2xl">
                  Scalable & Productive Systems
                </h2>
                <p className="text-md md:text-xl">
                  I build solutions that grow with your business. From infrastructure to development workflows, everything is designed to maximize team productivity and long-term maintainability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
