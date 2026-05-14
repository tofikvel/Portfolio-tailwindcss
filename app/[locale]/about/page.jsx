import Image from "next/image";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("About");

  return (
    <main className="bg-gray-950 overflow-hidden">
      {/* HERO / ABOUT */}
      <section
        className="relative flex justify-center px-6 pt-20 pb-40 overflow-hidden"
        style={{
          backgroundImage: `
            radial-gradient(circle at 70% 40%, rgba(16,185,129,0.2), transparent 40%),
            radial-gradient(circle at 20% 80%, rgba(6,182,212,0.1), transparent 40%)
          `,
        }}
      >
        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center mt-24 relative z-10">
          {/* LEFT */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl text-[#F9F9F9] font-bold leading-tight">
                Javad Zeynal
              </h1>
              <p className="text-lg md:text-lg text-gray-400 italic leading-relaxed max-w-xl">
                {t("about-pre-desc")}
              </p>
            </div>
            {/* <hr className="my-8 border-gray-700" /> */}
            {/* Flags */}
            <div className="flex flex-row items-center justify-center gap-6 md:justify-start">
              <span>
                <svg
                  className="w-9 h-9 md:w-10 md:h-10"
                  enableBackground="new 0 0 512 512"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m15.923 345.043c36.171 97.484 130.006 166.957 240.077 166.957s203.906-69.473 240.077-166.957l-240.077-22.26z"
                    fill="#ffda44"
                  />
                  <path d="m256 0c-110.071 0-203.906 69.472-240.077 166.957l240.077 22.26 240.077-22.261c-36.171-97.484-130.006-166.956-240.077-166.956z" />
                  <path
                    d="m15.923 166.957c-10.29 27.733-15.923 57.729-15.923 89.043s5.633 61.31 15.923 89.043h480.155c10.29-27.733 15.922-57.729 15.922-89.043s-5.632-61.31-15.923-89.043z"
                    fill="#d80027"
                  />
                </svg>
              </span>
              <span>
                <svg
                  className="w-9 h-9 md:w-10 md:h-10"
                  enableBackground="new 0 0 512 512"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="256" cy="256" fill="#f0f0f0" r="256" />
                  <g fill="#0052b4">
                    <path d="m52.92 100.142c-20.109 26.163-35.272 56.318-44.101 89.077h133.178z" />
                    <path d="m503.181 189.219c-8.829-32.758-23.993-62.913-44.101-89.076l-89.075 89.076z" />
                    <path d="m8.819 322.784c8.83 32.758 23.993 62.913 44.101 89.075l89.074-89.075z" />
                    <path d="m411.858 52.921c-26.163-20.109-56.317-35.272-89.076-44.102v133.177z" />
                    <path d="m100.142 459.079c26.163 20.109 56.318 35.272 89.076 44.102v-133.176z" />
                    <path d="m189.217 8.819c-32.758 8.83-62.913 23.993-89.075 44.101l89.075 89.075z" />
                    <path d="m322.783 503.181c32.758-8.83 62.913-23.993 89.075-44.101l-89.075-89.075z" />
                    <path d="m370.005 322.784 89.075 89.076c20.108-26.162 35.272-56.318 44.101-89.076z" />
                  </g>
                  <g fill="#d80027">
                    <path d="m509.833 222.609h-220.44-.001v-220.442c-10.931-1.423-22.075-2.167-33.392-2.167-11.319 0-22.461.744-33.391 2.167v220.44.001h-220.442c-1.423 10.931-2.167 22.075-2.167 33.392 0 11.319.744 22.461 2.167 33.391h220.44.001v220.442c10.931 1.423 22.073 2.167 33.392 2.167 11.317 0 22.461-.743 33.391-2.167v-220.44-.001h220.442c1.423-10.931 2.167-22.073 2.167-33.392 0-11.317-.744-22.461-2.167-33.391z" />
                    <path d="m322.783 322.784 114.236 114.236c5.254-5.252 10.266-10.743 15.048-16.435l-97.802-97.802h-31.482z" />
                    <path d="m189.217 322.784h-.002l-114.235 114.235c5.252 5.254 10.743 10.266 16.435 15.048l97.802-97.804z" />
                    <path d="m189.217 189.219v-.002l-114.236-114.237c-5.254 5.252-10.266 10.743-15.048 16.435l97.803 97.803h31.481z" />
                    <path d="m322.783 189.219 114.237-114.238c-5.252-5.254-10.743-10.266-16.435-15.047l-97.802 97.803z" />
                  </g>
                </svg>
              </span>
              <span>
                <svg
                  className="w-9 h-9 md:w-10 md:h-10"
                  enableBackground="new 0 0 512 512"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="256" cy="256" fill="#f0f0f0" r="256" />
                  <path
                    d="m496.077 345.043c10.291-27.733 15.923-57.729 15.923-89.043s-5.632-61.31-15.923-89.043h-480.154c-10.29 27.733-15.923 57.729-15.923 89.043s5.633 61.31 15.923 89.043l240.077 22.261z"
                    fill="#0052b4"
                  />
                  <path
                    d="m256 512c110.071 0 203.906-69.472 240.077-166.957h-480.154c36.171 97.485 130.006 166.957 240.077 166.957z"
                    fill="#d80027"
                  />
                  <g />
                </svg>
              </span>
              <span>
                <svg
                  className="w-9 h-9 md:w-10 md:h-10"
                  enableBackground="new 0 0 512 512"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m512 256c0-31.314-5.632-61.311-15.923-89.043l-240.077-11.131-240.077 11.13c-10.29 27.733-15.923 57.73-15.923 89.044s5.633 61.311 15.923 89.043l240.077 11.131 240.077-11.13c10.291-27.733 15.923-57.73 15.923-89.044z"
                    fill="#d80027"
                  />
                  <path
                    d="m256 512c110.071 0 203.906-69.472 240.077-166.957h-480.154c36.171 97.485 130.006 166.957 240.077 166.957z"
                    fill="#6da544"
                  />
                  <path
                    d="m15.923 166.957h480.155c-36.172-97.485-130.007-166.957-240.078-166.957s-203.906 69.472-240.077 166.957z"
                    fill="#338af3"
                  />
                  <g fill="#f0f0f0">
                    <path d="m261.565 328.348c-39.956 0-72.348-32.392-72.348-72.348s32.392-72.348 72.348-72.348c12.458 0 24.181 3.15 34.415 8.696-16.056-15.701-38.012-25.392-62.241-25.392-49.178 0-89.043 39.866-89.043 89.043s39.866 89.043 89.043 89.043c24.23 0 46.186-9.691 62.241-25.392-10.234 5.548-21.957 8.698-34.415 8.698z" />
                    <path d="m317.217 205.913 9.583 26.951 25.834-12.282-12.281 25.834 26.951 9.584-26.951 9.584 12.281 25.834-25.834-12.282-9.583 26.951-9.582-26.951-25.835 12.282 12.282-25.834-26.952-9.584 26.952-9.584-12.282-25.834 25.835 12.282z" />
                  </g>
                </svg>
              </span>
            </div>
            <div className="flex flex-col pt-4 border-t border-white/10 gap-4">
              <span className="text-lg font-semibold text-[#F9F9F9]">
                {t("about-title")}
              </span>
              <p className="text-gray-400 leading-relaxed max-w-xl">
                {t("about-desc")}
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center">
            <Image
              src="/profile-img.jpg"
              alt="profile"
              width={400}
              height={400}
              className="relative rounded-full border border-white/10 shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="relative overflow-hidden px-6 py-24 md:py-32 border-t border-white/10">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.06),transparent_40%)]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
              {t("certification-section-title")}
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
              {t("certification-section-subtitle")}
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="mt-20 grid gap-8 lg:grid-cols-3">
            {/* AWS */}
            <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 hover:border-[#B1C795] hover:bg-white/[0.05]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.14),transparent_45%)] opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="mb-8">
                <p className="text-sm uppercase tracking-[0.2em] text-[#B1C795]">
                  AWS & Cloud
                </p>

                <h3 className="mt-4 text-2xl font-semibold text-white">
                  Enterprise Cloud Architecture
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/certs/aws-1.png"
                  alt="aws cert"
                  width={150}
                  height={150}
                  className="h-[140px] w-full object-contain"
                />

                <Image
                  src="/certs/aws-2.png"
                  alt="aws cert"
                  width={150}
                  height={150}
                  className="h-[140px] w-full object-contain"
                />

                <Image
                  src="/certs/aws-3.png"
                  alt="aws cert"
                  width={150}
                  height={150}
                  className="col-span-2 mx-auto h-[140px] w-full object-contain"
                />
              </div>
            </div>

            {/* Agile */}
            <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 hover:border-[#B1C795] hover:bg-white/[0.05]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.14),transparent_45%)] opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="mb-8">
                <p className="text-sm uppercase tracking-[0.2em] text-[#B1C795]">
                  Agile Delivery
                </p>

                <h3 className="mt-4 text-2xl font-semibold text-white">
                  Scrum & Product Leadership
                </h3>
              </div>

              <div className="flex items-center justify-center pt-8">
                <Image
                  src="/certs/psm.png"
                  alt="psm cert"
                  width={220}
                  height={220}
                  className="h-[220px] w-[220px] object-contain"
                />
              </div>
            </div>

            {/* DevOps */}
            <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 hover:border-[#B1C795] hover:bg-white/[0.05]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.14),transparent_45%)] opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="mb-8">
                <p className="text-sm uppercase tracking-[0.2em] text-[#B1C795]">
                  DevOps & Automation
                </p>

                <h3 className="mt-4 text-2xl font-semibold text-white">
                  Kubernetes, IaC & Data Engineering
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/certs/kubernetes-1.png"
                  alt="kubernetes cert"
                  width={150}
                  height={150}
                  className="h-[140px] w-full object-contain"
                />

                <Image
                  src="/certs/kubernetes-2.png"
                  alt="kubernetes cert"
                  width={150}
                  height={150}
                  className="h-[140px] w-full object-contain"
                />

                <Image
                  src="/certs/terraform.png"
                  alt="terraform cert"
                  width={150}
                  height={150}
                  className="h-[140px] w-full object-contain"
                />

                <Image
                  src="/certs/databricks.png"
                  alt="databricks cert"
                  width={150}
                  height={150}
                  className="h-[140px] w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
