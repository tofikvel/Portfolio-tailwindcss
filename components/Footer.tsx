"use client";
import Link from "next/link";

export default function Footer() {
  const copyRightDate = new Date().getFullYear();

  return (
    <footer className="left-0 w-full py-6 bg-slate-300 text-black">
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-12 px-6 py-6 md:flex-row md:justify-between md:items-center md:space-y-0k">
        {/* Brand logo (left side) */}
        <div className="flex flex-col space-y-6 md:flex md:flex-col md:space-y-12">
          <div className="flex justify-center md:flex md:justify-start">
            <Link href="/" className="text-bold md:text-3xl md:font-bold">
              BAQUE Solutions
            </Link>
          </div>
          {/* Social links and contact details */}
          {/* Contact details */}
          <div className="flex flex-col items-start space-y-4 md:flex md:flex-col md:items-start md:space-y-6">
            <div className="flex flex-row justify-center space-x-4">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
              </span>
              <span>+49 176 802 289 57</span>
            </div>
            <div className="flex flex-row justify-center space-x-4">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </span>
              <span>info@baque-solutions.com</span>
            </div>
            <div className="flex flex-row justify-center space-x-4">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
              </span>
              <span>Münchener Straße 42A, 10779 Berlin, Germany</span>
            </div>
            {/* Social links (icons) */}
            <div className="flex flex-row justify-center space-x-6 md:flex md:flex-row md:justify-start md:space-x-4">
              <Link href="#">
                <span>
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-black"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                      clipRule="evenodd"
                    />
                    <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                  </svg>
                </span>
              </Link>
              <Link href="#">
                <span>
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-black"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
                      clipRule="evenodd"
                    />
                    <path
                      fill="currentColor"
                      d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
        {/* Links navigation (right side) */}
        <div className="flex flex-row text-start space-x-24 md:flex md:flex-row">
          <div className="flex flex-col space-y-4 md:flex md:flex-col md:space-y-6">
            <p className="text-bold md:text-2xl md:font-bold">Navigation</p>
            <Link href="/" className="hover:text-gray-600">
              Home
            </Link>
            <Link href="/about" className="hover:text-gray-600">
              About
            </Link>
            <Link href="/services" className="hover:text-gray-600">
              Services
            </Link>
            <Link href="/portfolio" className="hover:text-gray-600">
              Portfolio
            </Link>
          </div>
          <div className="flex flex-col space-y-4 md:flex md:flex-col md:space-y-6">
            <p className="text-bold md:text-2xl md:font-bold">Help</p>
            <Link href="/" className="hover:text-gray-600">
              Conatct
            </Link>
            <Link href="/about" className="hover:text-gray-600">
              Imprint
            </Link>
            <Link href="/services" className="hover:text-gray-600">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center mt-6 md:text-center">
        <p>&copy; {copyRightDate} Baque Solutions. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
