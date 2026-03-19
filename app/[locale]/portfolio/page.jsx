import Link from "next/link"
import Image from "next/image"

export default function Portfoliopage() {
  return (
    <main>
      <section className="flex justify-center mx-auto px-6 py-12 md:py-24">
        <div className="flex flex-col gap-8 max-w-6xl">
          <div className="flex flex-col justify-center items-center text-center gap-8">
            <h1 className="text-xl md:text-4xl text-center max-w-3xl">
              Event-driven Cloud-native Data Lake for Enterprise Use
            </h1>
            <h2 className="text-lg md:text-2xl max-w-3xl">
              The AWS based storage platform which allows to store, discover and distribute structured and unstructured data at scale.
            </h2>
            <Link href="#" className="flex flex-row gap-2 items-center">
              <span>
                <svg aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2l.324 .005a10 10 0 1 1 -.648 0l.324 -.005zm.613 5.21a1 1 0 0 0 -1.32 1.497l2.291 2.293h-5.584l-.117 .007a1 1 0 0 0 .117 1.993h5.584l-2.291 2.293l-.083 .094a1 1 0 0 0 1.497 1.32l4 -4l.073 -.082l.064 -.089l.062 -.113l.044 -.11l.03 -.112l.017 -.126l.003 -.075l-.007 -.118l-.029 -.148l-.035 -.105l-.054 -.113l-.071 -.111a1.008 1.008 0 0 0 -.097 -.112l-4 -4z" />
                </svg>
              </span>
              <span>Learn more</span>
            </Link>
          </div>
          <div className="grid grid-col md:grid-cols-3 gap-6 w-fit md:place-items-start">
            <div className="flex flex-col gap-4 md:max-w-87.5">
              <div className="flex">
                <Image
                  src="/home-page-hero.jpg"
                  alt="home-page-hero-image"
                  width={380}
                  height={300}
                  className="rounded-lg h-75 w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-md md:text-xl font-bold">
                  Cloud infrastructure & automation
                </h3>
                <p className="text-md md:text-lg leading-relaxed">
                  Cloud infrastructure & automation
                  Designed and deployed a fully serverless, AWS-based architecture using Terraform. Automated provisioning of services such as DynamoDB, Lambda, and API Gateway. Implemented lifecycle management, monitoring, and event-driven automation to ensure scalability and reliability.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 max-w-87.5">
              <div className="flex">
                <Image
                  src="/home-page-hero.jpg"
                  alt="home-page-hero-image"
                  width={380}
                  height={300}
                  className="rounded-lg h-75 w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-md md:text-xl font-bold">
                  Backend development & data architecture
                </h3>
                <p className="text-md md:text-lg leading-relaxed">
                  Developed a RESTful API layer on top of the system using API Gateway. Created backend application logic in Python, handling core business processes and data workflows. Designed an efficient NoSQL database architecture with DynamoDB.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 max-w-87.5">
              <div className="flex">
                <Image
                  src="/home-page-hero.jpg"
                  alt="home-page-hero-image"
                  width={380}
                  height={300}
                  className="rounded-lg h-75 w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-md md:text-xl font-bold">
                  Architecture consulting
                </h3>
                <p className="text-md md:text-lg leading-relaxed">
                  Collaborated closely with stakeholders to define best architectural approaches. Provided guidance on access management, security, and scalable design patterns. Delivered a comprehensive platform with operational visibility, governance controls.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-sky-50 flex justify-center mx-auto px-6 py-12 md:py-24">
        <div className="flex flex-col gap-8 max-w-6xl">
          <div className="flex flex-col justify-center items-center text-center gap-8">
            <h1 className="text-xl md:text-4xl text-center max-w-3xl">
              From legacy constraints to GitOps-enabled Microservices: A journey with AWS ECS and Fargate
            </h1>
            <h2 className="text-lg md:text-2xl max-w-3xl">
              A cloud-native modernization journey that transformed a legacy AWS microservices platform into a scalable, modular, and GitOps-enabled architecture. This engagement focused on improving service isolation, deployment agility, and operational efficiency using AWS ECS, Fargate, and CI/CD best practices.
            </h2>
            <Link href="#" className="flex flex-row gap-2 items-center">
              <span>
                <svg aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2l.324 .005a10 10 0 1 1 -.648 0l.324 -.005zm.613 5.21a1 1 0 0 0 -1.32 1.497l2.291 2.293h-5.584l-.117 .007a1 1 0 0 0 .117 1.993h5.584l-2.291 2.293l-.083 .094a1 1 0 0 0 1.497 1.32l4 -4l.073 -.082l.064 -.089l.062 -.113l.044 -.11l.03 -.112l.017 -.126l.003 -.075l-.007 -.118l-.029 -.148l-.035 -.105l-.054 -.113l-.071 -.111a1.008 1.008 0 0 0 -.097 -.112l-4 -4z" />
                </svg>
              </span>
              <span>Learn more</span>
            </Link>
          </div>
          <div className="grid grid-col md:grid-cols-3 gap-6 w-fit md:place-items-start">
            <div className="flex flex-col items-center gap-4 md:max-w-87.5">
              <div className="flex">
                <Image
                  src="/home-page-hero.jpg"
                  alt="home-page-hero-image"
                  width={380}
                  height={300}
                  className="rounded-lg h-75 w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-md md:text-xl font-bold">
                  Microservice Refactoring & Container Architecture
                </h3>
                <p className="text-md md:text-lg leading-relaxed">
                  Take full advantage of the cloud — without the stress.
                  I assist businesses in moving their infrastructure to cloud platforms like AWS, ensuring secure, cost-effective, and scalable environments.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 max-w-87.5">
              <div className="flex">
                <Image
                  src="/home-page-hero.jpg"
                  alt="home-page-hero-image"
                  width={380}
                  height={300}
                  className="rounded-lg h-75 w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-md md:text-xl font-bold">
                  DevOps Modernization with GitOps Principles
                </h3>
                <p className="text-md md:text-lg leading-relaxed">
                  Redesigned the CI/CD lifecycle to align with GitOps methodologies. Implemented change detection logic to rebuild and redeploy only the affected services within a shared monorepo. This drastically reduced build times, minimized ECR churn, and eliminated unnecessary deployments.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 max-w-87.5">
              <div className="flex">
                <Image
                  src="/home-page-hero.jpg"
                  alt="home-page-hero-image"
                  width={380}
                  height={300}
                  className="rounded-lg h-75 w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-md md:text-xl font-bold">
                  Architecture Consulting & Legacy Modernization
                </h3>
                <p className="text-md md:text-lg leading-relaxed">
                  Guided the client through a careful modernization journey — not by replacing everything, but by strategically evolving what worked. Addressed hidden constraints in their “it just works” architecture and aligned infrastructure with long-term scalability and maintainability goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center mx-auto px-6 py-12 md:py-24">
        <div className="flex flex-col gap-8 max-w-6xl">
          <div className="flex flex-col justify-center items-center text-center gap-8">
            <h1 className="text-xl md:text-4xl text-center max-w-3xl">
              Event-driven Cloud-native Data Lake for Enterprise Use
            </h1>
            <h2 className="text-lg md:text-2xl max-w-3xl">
              The AWS based storage platform which allows to store, discover and distribute structured and unstructured data at scale.
            </h2>
            <Link href="#" className="flex flex-row gap-2 items-center">
              <span>
                <svg aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2l.324 .005a10 10 0 1 1 -.648 0l.324 -.005zm.613 5.21a1 1 0 0 0 -1.32 1.497l2.291 2.293h-5.584l-.117 .007a1 1 0 0 0 .117 1.993h5.584l-2.291 2.293l-.083 .094a1 1 0 0 0 1.497 1.32l4 -4l.073 -.082l.064 -.089l.062 -.113l.044 -.11l.03 -.112l.017 -.126l.003 -.075l-.007 -.118l-.029 -.148l-.035 -.105l-.054 -.113l-.071 -.111a1.008 1.008 0 0 0 -.097 -.112l-4 -4z" />
                </svg>
              </span>
              <span>Learn more</span>
            </Link>
          </div>
          <div className="grid grid-col md:grid-cols-3 gap-6 w-fit md:place-items-start">
            <div className="flex flex-col items-center gap-4 md:max-w-87.5">
              <div className="flex">
                <Image
                  src="/home-page-hero.jpg"
                  alt="home-page-hero-image"
                  width={380}
                  height={300}
                  className="rounded-lg h-75 w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-md md:text-xl font-bold">
                  Microservice Refactoring & Container Architecture
                </h3>
                <p className="text-md md:text-lg leading-relaxed">
                  Take full advantage of the cloud — without the stress.
                  I assist businesses in moving their infrastructure to cloud platforms like AWS, ensuring secure, cost-effective, and scalable environments.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 max-w-87.5">
              <div className="flex">
                <Image
                  src="/home-page-hero.jpg"
                  alt="home-page-hero-image"
                  width={380}
                  height={300}
                  className="rounded-lg h-75 w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-md md:text-xl font-bold">
                  DevOps Modernization with GitOps Principles
                </h3>
                <p className="text-md md:text-lg leading-relaxed">
                  Redesigned the CI/CD lifecycle to align with GitOps methodologies. Implemented change detection logic to rebuild and redeploy only the affected services within a shared monorepo. This drastically reduced build times, minimized ECR churn, and eliminated unnecessary deployments.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 max-w-87.5">
              <div className="flex">
                <Image
                  src="/home-page-hero.jpg"
                  alt="home-page-hero-image"
                  width={380}
                  height={300}
                  className="rounded-lg h-75 w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-md md:text-xl font-bold">
                  Architecture Consulting & Legacy Modernization
                </h3>
                <p className="text-md md:text-lg leading-relaxed">
                  Guided the client through a careful modernization journey — not by replacing everything, but by strategically evolving what worked. Addressed hidden constraints in their “it just works” architecture and aligned infrastructure with long-term scalability and maintainability goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
