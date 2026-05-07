import Image from "next/image";
import { useTranslations } from "next-intl";

export default function ServicesPage() {
  const t = useTranslations("Services");

  return (
    <main className="text-white">
      <section className="flex justify-center px-6 min-h-screen bg-[url(/services-bg.jpg)] bg-cover bg-fixed bg-no-repeat bg-mist-900 bg-blend-overlay">
        <div className="mx-auto flex flex-1 flex-col max-w-7xl mt-24">
          <div className="flex flex-1 flex-col items-center justify-center text-center gap-6 md:gap-8">
            <h1 className="text-3xl font-bold text-white md:text-7xl">
              {t("hero-title")}
            </h1>
            <p className="text-md text-white md:text-3xl max-w-3xl">
              {t("hero-subtitle")}
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
      {/* Why work with me section */}
      <section
        className="bg-gray-900 relative flex items-center justify-center px-6 py-32 overflow-hidden"
        id="why-work-with-me"
        style={{
          backgroundImage: `
      radial-gradient(circle at 20% 30%, rgba(16,185,129,0.12), transparent 40%),
      radial-gradient(circle at 80% 70%, rgba(6,182,212,0.08), transparent 40%)
    `,
        }}
      >
        <div className="max-w-7xl w-full flex flex-col gap-16">
          {/* HEADER */}
          <div className="text-center space-y-6 max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold">
              {t("wwwm-title")}
            </h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
              {t("wwwm-subtitle")}
            </p>
          </div>
          {/* CARDS */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* CARD 1 */}
            <div className="group p-8 rounded-2xl bg-white/5 border border-[#697857] backdrop-blur-xl hover:bg-white/10 transition">
              <div className="flex flex-col items-start gap-6">
                <div className="p-4 rounded-xl bg-emerald-500/10 text-emerald-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M4.616 20q-.691 0-1.153-.462T3 18.384V8.616q0-.691.463-1.153T4.615 7H9V5.615q0-.69.463-1.153T10.616 4h2.769q.69 0 1.153.462T15 5.615V7h4.385q.69 0 1.152.463T21 8.616v9.769q0 .69-.463 1.153T19.385 20zm0-1h14.769q.23 0 .423-.192t.192-.424V8.616q0-.231-.192-.424T19.385 8H4.615q-.23 0-.423.192T4 8.616v9.769q0 .23.192.423t.423.192M10 7h4V5.615q0-.23-.192-.423T13.385 5h-2.77q-.23 0-.423.192T10 5.615zM4 19V8z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    {t("wwwm-1-title")}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {t("wwwm-1-subtitle")}
                  </p>
                </div>
              </div>
            </div>
            {/* CARD 2 */}
            <div className="group p-8 rounded-2xl bg-white/5 border border-[#697857] backdrop-blur-xl hover:bg-white/10 transition">
              <div className="flex flex-col items-start gap-6">
                <div className="p-4 rounded-xl bg-cyan-500/10 text-cyan-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M4.616 20q-.691 0-1.153-.462T3 18.384V5.616q0-.691.463-1.153T4.615 4h14.77q.69 0 1.152.463T21 5.616v12.769q0 .69-.463 1.153T19.385 20zm0-1h14.769q.23 0 .423-.192t.192-.424V5.616q0-.231-.192-.424T19.385 5H4.615q-.23 0-.423.192T4 5.616v12.769q0 .23.192.423t.423.192M9 16.5q.214 0 .357-.143T9.5 16t-.143-.357T9 15.5H6q-.213 0-.357.143T5.5 16t.143.357T6 16.5zm5.55-3.613l-1.071-1.072q-.146-.146-.354-.152t-.354.158q-.14.146-.133.354t.153.354l1.194 1.194q.242.242.565.242t.566-.242l3.319-3.32q.146-.145.156-.344q.009-.198-.156-.363q-.166-.165-.357-.165t-.357.165zM9 12.5q.214 0 .357-.143T9.5 12t-.143-.357T9 11.5H6q-.213 0-.357.143T5.5 12t.143.357T6 12.5zm0-4q.214 0 .357-.143T9.5 8t-.143-.357T9 7.5H6q-.213 0-.357.143T5.5 8t.143.357T6 8.5zM4 19V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    {t("wwwm-2-title")}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {t("wwwm-2-subtitle")}
                  </p>
                </div>
              </div>
            </div>
            {/* CARD 3 */}
            <div className="group p-8 rounded-2xl bg-white/5 border border-[#697857] backdrop-blur-xl hover:bg-white/10 transition">
              <div className="flex flex-col items-start gap-6">
                <div className="p-4 rounded-xl bg-purple-500/10 text-purple-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M5.017 12.5H8q.14 0 .256.07t.183.21L10 15.867l3.562-7.085q.14-.287.448-.287q.307 0 .448.287l1.86 3.719h2.665q-.183-2.742-2.2-4.621T12 6T7.217 7.879t-2.2 4.621M12 20q2.766 0 4.783-1.879t2.2-4.621H16q-.14 0-.256-.07t-.183-.21L14 10.134l-3.561 7.103q-.141.287-.448.277t-.449-.296L7.682 13.5H5.018q.183 2.742 2.2 4.621T12 20m0 1q-1.658 0-3.113-.626t-2.545-1.716t-1.716-2.546T4 13h1q0 2.9 2.05 4.95T12 20t4.95-2.05T19 13h1q0 1.658-.626 3.113t-1.716 2.545t-2.546 1.716T12 21m-8-8q0-1.658.626-3.113t1.716-2.545t2.546-1.716T12 5q1.454 0 2.812.52t2.492 1.469l1.092-1.093l.708.708l-1.092 1.092q.95 1.135 1.469 2.493T20 13h-1q0-2.9-2.05-4.95T12 6T7.05 8.05T5 13zM9.385 2.5v-1h5.23v1zM12 20q-2.9 0-4.95-2.05T5 13t2.05-4.95T12 6t4.95 2.05T19 13t-2.05 4.95T12 20m0-7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    {t("wwwm-3-title")}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {t("wwwm-3-subtitle")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My services section */}
      <section className="relative bg-gray-950 text-white px-6 py-24 border-t border-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col gap-24">
          {/* HEADER */}
          <div className="text-center space-y-6 max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold">
              {t("my-serv-title")}
            </h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
              {t("my-serv-subtitle")}
            </p>
          </div>
          {/* SERVICE 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center md:grid-flow-dense">
            {/* IMAGE */}
            <div className="md:order-2 relative">
              <div className="absolute inset-0 bg-emerald-500/10 blur-3xl rounded-full" />
              <Image
                src="/custom-software-img.png"
                alt="service 1"
                width={600}
                height={500}
                className="relative"
              />
            </div>
            {/* TEXT */}
            <div className="md:order-1 space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">
                {t("service-1-title")}
              </h2>
              <p className="text-gray-400 leading-relaxed">
                {t("service-1-desc")}
              </p>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">
                  {t("service-1-ol-title")}
                </h3>
                <ul className="space-y-2 text-gray-400">
                  <li>{t("service-1-li-1")}</li>
                  <li>{t("service-1-li-2")}</li>
                  <li>{t("service-1-li-3")}</li>
                  <li>{t("service-1-li-4")}</li>
                </ul>
                <p className="italic text-gray-300 font-medium pt-2">
                  {t("service-1-conclusion")}
                </p>
              </div>
            </div>
          </div>
          {/* SERVICE 2 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* IMAGE */}
            <div className="md:order-1 relative">
              <div className="absolute inset-0 bg-emerald-500/10 blur-3xl rounded-full" />
              <Image
                src="/cloud-mig-optimization.png"
                alt="service 2"
                width={600}
                height={500}
                className="relative"
              />
            </div>
            {/* TEXT */}
            <div className="md:order-2 space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">
                {t("service-2-title")}
              </h2>
              <p className="text-gray-400 leading-relaxed">
                {t("service-2-desc")}
              </p>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">
                  {t("service-2-ol-title")}
                </h3>
                <ul className="space-y-2 text-gray-400">
                  <li>{t("service-2-li-1")}</li>
                  <li>{t("service-2-li-2")}</li>
                  <li>{t("service-2-li-3")}</li>
                  <li>{t("service-2-li-4")}</li>
                </ul>
                <p className="italic text-gray-300 font-medium pt-2">
                  {t("service-2-conclusion")}
                </p>
              </div>
            </div>
          </div>
          {/* SERVICE 3 */}
          <div className="grid md:grid-cols-2 gap-12 items-center md:grid-flow-dense">
            {/* IMAGE */}
            <div className="md:order-2 relative">
              <div className="absolute inset-0 bg-emerald-500/10 blur-3xl rounded-full" />
              <Image
                src="/ci-cd-devops-img.png"
                alt="service 3"
                width={600}
                height={500}
                className="relative"
              />
            </div>
            {/* TEXT */}
            <div className="md:order-1 space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">
                {t("service-3-title")}
              </h2>
              <p className="text-gray-400 leading-relaxed">
                {t("service-3-desc")}
              </p>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">
                  {t("service-3-ol-title")}
                </h3>
                <ul className="space-y-2 text-gray-400">
                  <li>{t("service-3-li-1")}</li>
                  <li>{t("service-3-li-2")}</li>
                  <li>{t("service-3-li-3")}</li>
                  <li>{t("service-3-li-4")}</li>
                </ul>
                <p className="italic text-gray-300 font-medium pt-2">
                  {t("service-3-conclusion")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What will you get section */}
      <section className="relative bg-gray-900 px-6 py-24 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          {/* HEADER */}
          <h1 className="text-3xl md:text-5xl font-bold text-center max-w-2xl mx-auto">
            {t("wwyg-title")}
          </h1>
          {/* GRID */}
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="group p-8 rounded-2xl bg-white/5 border border-[#697857] backdrop-blur-xl hover:bg-white/10 transition"
              >
                <div className="flex flex-col gap-6 items-start">
                  {/* ICON */}
                  <div className="p-4 rounded-xl bg-[#697857] text-pink-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 11l3 3l8 -8" />
                      <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" />
                    </svg>
                  </div>
                  {/* TEXT */}
                  <div className="space-y-3">
                    <h2 className="text-lg md:text-xl font-semibold">
                      {t(`wwyg-${i}-title`)}
                    </h2>
                    <p className="text-gray-400 leading-relaxed">
                      {t(`wwyg-${i}-desc`)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
