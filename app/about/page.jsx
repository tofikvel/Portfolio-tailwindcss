import Image from "next/image"

export default function AboutPage() {
  return (
    <main>
      <section className="hero flex flex-col-reverse items-center justify-between gap-8 px-6 py-12 mx-auto md:flex md:flex-row max-w-6xl border border-black">
        {/* Information (left side) */}
        <div className="flex-1 space-y-6">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold md:text-5xl">
              Javad Zeynal
            </h1>
            <p className="border-b border-black text-gray-600 italic">
              &quot;Based in Germany. I work with clients across Europe and internationally, in both German and English.&quot;
            </p>
          </div>
          {/* Flag icons */}

          {/* Flag icons */}

          <div className="space-y-12">
            <span className="text-lg font-bold">About me</span>
            <p className="text-lg text-gray-60 break-normal">
              I am an IT consultant with over 5 years of commercial experience in the Cloud, DevOps, and software development fields, specializing in the use of cloud technologies — particularly AWS — to enhance operational efficiency, scalability, and system reliability. Expertise includes designing and implementing RESTful interfaces, automation tools, and CI/CD pipelines that streamline workflows, improve system performance, and enable fast, secure, and reliable software delivery.
              Skilled in developing robust software solutions that align with organizational goals as well as building modern, resilient infrastructures that support business growth. My main focus is on helping clients leverage technology to achieve sustainable success through efficient architecture, automation, and development practices.
            </p>
          </div>
        </div>
        {/* Image (right side) */}
        <div className="flex-1 space-y-6">
          <Image src="home-page-hero.jpg" alt="home-page-hero-image" width={680} height={600} />
        </div>
      </section>
      <section className="">

      </section>
    </main>

  )
}
