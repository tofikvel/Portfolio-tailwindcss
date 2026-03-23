import Image from "next/image"
import Link from "next/link"

export default function ProjectTwo() {
    return (
        <main>
            <section className="flex justify-center mx-auto px-6 py-12 md:py-24">
                <div className="flex flex-col gap-20 w-3xl">
                    <div className="flex flex-col gap-6 text-start">
                        <h1 className="text-3xl font-bold md:text-5xl">From legacy constraints to GitOps-enabled microservices: A journey with AWS ECS and Fargate</h1>
                        <h3 className="text-lg font-light md:text-xl">Author: Javad Zeynal | November 9, 2024</h3>
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-2">
                            <h4 className="font-bold text-xl md:text-2xl">Abstract</h4>
                            <p className="text-lg font-light md:text-xl leading-relaxed">
                                When stepping into a new project, it’s not uncommon to inherit infrastructure that &quot;just works&quot; — until it doesn’t. In one of my recent consulting projects, our team took over a customer’s legacy AWS environment that followed a widely used microservices pattern. The initial setup looked reasonable, but it quickly became clear that modernization was not just optional — it was essential.
                            </p>
                        </div>
                        <div className="flex">
                            <Image
                                src="/home-page-hero.jpg"
                                alt="home-page-hero-image"
                                width={380}
                                height={600}
                                className="rounded-lg h-125 w-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="font-bold text-xl md:text-2xl">A familiar architecture with hidden constraints</h4>
                            <p className="text-lg font-light md:text-xl leading-relaxed">
                                At the heart of the platform was a typical AWS stack: requests from the outside world hit an Amazon API Gateway, which routed traffic through a VPC Link to a private Network Load Balancer (NLB). From there, the NLB directed traffic to an ECS cluster running on Fargate, where multiple microservices were deployed. The system also incorporated Amazon RDS for relational data, Amazon S3 for object storage, and AWS Lambda functions triggered via SQS queues for asynchronous tasks.
                                While this architecture followed established patterns, it hid a significant architectural limitation: all five microservices were deployed together in a single ECS task definition. Every time a developer made a change to just one service — a bug fix, a new feature, a configuration tweak — the entire group of services had to be redeployed.
                                <br />
                                <br />
                                This setup undermined many of the promises of microservices architecture. It prevented independent deployments, delayed release cycles, and increased the risk of production issues due to unnecessary redeployments. It also meant that services which should scale independently were tightly coupled in their lifecycle.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="font-bold text-xl md:text-2xl">Decoupling the architecture</h4>
                            <p className="text-lg font-light md:text-xl leading-relaxed">
                                My first step was to untangle this monolith-by-deployment. I split the single task definition into five independent ECS services, each with its own task definition, target group, scaling configuration, and deployment pipeline. This brought immediate benefits: faster deployments, more granular rollback options, and true service-level isolation.
                                The improved architecture also enhanced resilience. Services could now scale independently based on demand, and infrastructure issues could be debugged and resolved without taking down unrelated parts of the system.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="font-bold text-xl md:text-2xl">A new challenge: monolithic pipelines</h4>
                            <p className="text-lg font-light md:text-xl leading-relaxed">
                                With infrastructure decoupled, attention shifted to the development lifecycle. Despite the improved runtime separation, the CI/CD process still treated the codebase as a monolith. All five services lived in a single repository, and every change triggered a pipeline that built, tagged, and pushed all container images to Amazon ECR — regardless of which service had actually changed.
                                This was inefficient and expensive, both in terms of compute usage and developer time.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="font-bold text-xl md:text-2xl">Implementing GitOps for scalable delivery</h4>
                            <p className="text-lg font-light md:text-xl leading-relaxed">
                                To solve this, I introduced a GitOps-style approach. Each microservice was given its own logical boundary within the repository. The CI/CD pipeline was redesigned to detect changes at ...
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="font-bold text-xl md:text-2xl">Want to learn more?</h4>
                            <p className="text-lg font-light md:text-xl leading-relaxed">
                                If you&apos;re working with a legacy ECS system, struggling with deployment bottlenecks, or curious about applying GitOps principles in your cloud environment — I’d be happy to share more. The right architectural improvements don’t always require starting over. Sometimes, they just require the right plan.
                            </p>
                        </div>
                        <div className="flex justify-center items-center">
                            <Link
                                href="/contact"
                                className="bg-emerald-700 text-white px-6 py-4 rounded-full hover:bg-emerald-800 transition cursor-pointer md:px-12 md:py-4"
                            >
                                Get in Touch
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}