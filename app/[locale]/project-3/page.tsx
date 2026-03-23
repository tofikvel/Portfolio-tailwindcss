import Image from "next/image"
import Link from "next/link"

export default function ProjectThree() {
    return (
        <main>
            <section className="flex justify-center mx-auto px-6 py-12 md:py-24">
                <div className="flex flex-col gap-20 w-3xl">
                    <div className="flex flex-col gap-6 text-start">
                        <h1 className="text-3xl font-bold md:text-5xl">Cutting Cloud waste: Reducing AWS Costs by over 65% through
                            smarter architecture</h1>
                        <h3 className="text-lg font-light md:text-xl">Author: Javad Zeynal | August 10, 2025</h3>
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-2">
                            <h4 className="font-bold text-xl md:text-2xl">Abstract</h4>
                            <p className="text-lg font-light md:text-xl leading-relaxed">
                                It&apos;s a familiar story: the cloud platform works, but the bill doesn&apos;t. When I joined this project, the client - a mid-sized e-commerce company - had already invested in a solid AWS-based analytics platform. The system was running without outages,
                                delivering the expected business insights, and built with widely used AWS services.
                                On paper, it looked healthy. In practice, it was costing far too much. Yet, when we reviewed the data workloads and business use cases, the numbers didn&apos;t justify it. They weren&apos;t overprovisioning out of ignorance - they just hadn&apos;t re-evaluated their architecture since launch. What followed was a focused three- month engagement to make the platform leaner, smarter, and far more cost-effective.
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
                            <h4 className="font-bold text-xl md:text-2xl">Where the money was going</h4>
                            <p className="text-lg font-light md:text-xl leading-relaxed">
                                The analytics stack was based on a typical modern data lake architecture. Data was ingested daily into S3, processed by AWS Glue, queried with Athena, and loaded into Redshift for aggregated reporting. Dashboards in QuickSight and third-party BI tools pulled data from multiple layers of this stack. It was all logically sound — but operationally inefficient. The AWS Glue jobs were running nightly, regardless of whether new data had arrived. Each job used relatively expensive worker types, even for trivial transformations. Athena queries were scanning full datasets because the data was unpartitioned and stored in verbose formats like CSV. Redshift, meanwhile, was left running 24/7, even when no analysts were logged in. And finally, the S3 bucket had grown bloated with raw logs and intermediate files that never moved to cheaper storage classes. Individually, these choices weren’t catastrophic. But together, they created a slow bleed of unnecessary expense.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="font-bold text-xl md:text-2xl">Designing for efficiency, not just functionality</h4>
                            <p className="text-lg font-light md:text-xl leading-relaxed">
                                Rather than tearing everything down and starting from scratch, I focused on evolving the existing infrastructure — keeping what worked, and reworking what didn’t. The first step was replacing the fixed, schedule-based Glue jobs with event-driven processing. Using a combination of Lambda and Step Functions, we introduced lightweight orchestration that only triggered ETL jobs when new data actually landed in S3. Job definitions were right-sized: heavy transformations still used standard workers, but simple tasks were migrated to lower-cost configurations. We then turned our attention to Athena. Here, the biggest win came from reformatting the data and restructuring the S3 layout. We converted raw files into Parquet format with Snappy compression and introduced Hive-style partitioning by ingestion date. This cut down data scanned by queries dramatically — saving both time and cost — while making the dataset far more maintainable. Redshift was reconfigured to pause during off-hours using EventBridge. Some reporting logic was moved to Athena entirely, reducing the cluster’s importance and runtime. We also introduced QuickSight dashboards built directly on Athena for lighter use cases, eliminating unnecessary duplication of storage and compute. Finally, we addressed S3 lifecycle management. Lifecycle rules were implemented to automatically move cold data to Glacier and delete temporary processing files after a defined retention period. This had an immediate impact on monthly storage costs, which had previously gone unnoticed.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="font-bold text-xl md:text-2xl">Tangible impact</h4>
                            <p className="text-lg font-light md:text-xl leading-relaxed">
                                By the end of the project, the platform delivered the same insights — but at a fraction of the cost. The monthly bill dropped by more than 65%. And equally important, the team gained a clearer understanding of how their workloads consumed cloud resources. The system became event-driven rather than timer-driven, and reactive instead of always-on. The architecture didn’t change its purpose, but it changed its behavior — and that distinction was critical. What made this project successful wasn’t a radical new technology or wholesale replacement. It was about understanding the architecture in business terms and realigning technical decisions with actual needs. We didn’t chase the newest service or pattern — we just made the current one smarter. If you&apos;re facing similar issues — rising costs, unpredictable bills, or unclear usage patterns — you likely don’t need a rebuild. You need a strategy. And sometimes, the most impactful changes come from rethinking what you already have.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="font-bold text-xl md:text-2xl">Want to learn more?</h4>
                            <p className="text-lg font-light md:text-xl leading-relaxed">
                                If your AWS infrastructure has grown faster than your cost controls — you’re not alone. This project didn’t require a rewrite or new platform. It just required a rethink. If you&apos;re struggling with rising AWS bills, unclear usage, or legacy data workflows — let’s talk. The best cloud solutions aren’t always new — they’re better versions of what you already have.
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