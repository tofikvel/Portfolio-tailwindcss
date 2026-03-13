import Link from "next/link";
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
              <svg aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
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
              <svg aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 4m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z" />
                <path d="M7 20h10" />
                <path d="M9 16v4" />
                <path d="M15 16v4" />
                <path d="M9 12v-4" />
                <path d="M12 12v-1" />
                <path d="M15 12v-2" />
                <path d="M12 12v-1" />
              </svg>
              <div>
                <h3 className="text-2xl font-bold mb-4">Tailored Solutions</h3>
                <p className="text-md text-gray-500 max-w-lg md:text-lg">
                  Every project is different. I take the time to understand your goals and design solutions that fit — no cookie-cutter templates.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-4">
              <svg aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.984 12.53a9 9 0 1 0 -7.552 8.355" />
                <path d="M12 7v5l3 3" />
                <path d="M19 16l-2 3h4l-2 3" />
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
      <section className="flex justify-center items-center px-6 py-12 md:py-24">
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
