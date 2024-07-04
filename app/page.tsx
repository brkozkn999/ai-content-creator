import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="bg-gray-50">
      <header className="shadow-md border-b">
        <nav className="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8" aria-label="Global">
          <div className="flex items-center justify-between">
            <div>
              <Link href={'/'}>
                <Image src={'./logo.svg'} alt="Logo Image" width={150} height={150} />
              </Link>
            </div>
          </div>
          <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end sm:ps-7">
              <a className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 sm:border-s sm:border-gray-300 py-2 sm:py-0 sm:ms-4 sm:my-6 sm:ps-6 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-blue-500" href="/dashboard">
                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path>
                </svg>
                Get Started
              </a>
            </div>
          </div>
        </nav>
      </header>
      <div className="">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-24 lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl text-gray-800 font-extrabold sm:text-5xl">
            AI Content <span className="bg-gradient-to-br from-blue-400 via-indigo-500 to-blue-800 bg-clip-text text-transparent">Generator</span>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed text-gray-600 dark:text-neutral-400">
            Revolutionize your content creation with our AI-powered app, delivering engaging and high-quality text in seconds.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a className="block rounded border-2 border-primary bg-primary px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-primary focus:outline-none focus:ring active:text-primary sm:mt-6 ease-in-out duration-200" href="/dashboard">
              Get Started
            </a>
          </div>
        </div>
      </div>
      </div>

      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 ">
            <a className="block rounded-xl p-8 shadow-xl transition hover:shadow-primary/30 bg-white ease-in-out duration-200" href="/dashboard">
              <div className="flex justify-center items-center size-12 bg-primary rounded-xl">
                <svg className="flex-shrink-0 size-6 text-white" xmlns="http://www.w3.org/2000/svg"
                  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect width="10" height="14" x="3" y="8" rx="2"></rect>
                  <path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4"></path>
                  <path d="M8 18h.01"></path>
                </svg>
              </div>
              <h2 className="mt-4 text-xl font-bold text-gray-900">25+ templates</h2>
              <p className="mt-1 text-sm text-gray-400">
                Responsive, and mobile-first project on the web
              </p>
            </a>

            <a className="block rounded-xl p-8 shadow-xl transition hover:shadow-primary/30 bg-white ease-in-out duration-200" href="/dashboard">
              <div className="flex justify-center items-center size-12 bg-primary rounded-xl">
                <svg className="flex-shrink-0 size-6 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 7h-9"></path><path d="M14 17H5"></path>
                  <circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle>
                </svg>
              </div>

              <h2 className="mt-4 text-xl font-bold text-gray-900">Customizable</h2>

              <p className="mt-1 text-sm text-gray-400">
                Components are easily customized and extendable
              </p>
            </a>

            <a className="block rounded-xl p-8 shadow-xl transition hover:shadow-primary/30 bg-white ease-in-out duration-200" href="/dashboard">
              <div className="flex justify-center items-center size-12 bg-primary rounded-xl">
                <svg className="flex-shrink-0 size-6 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>

              <h2 className="mt-4 text-xl font-bold text-gray-900">Free to Use</h2>

              <p className="mt-1 text-sm text-gray-400">
                Every component and plugin is well documented
              </p>
            </a>

            <a className="block rounded-xl p-8 shadow-xl transition hover:shadow-primary/30 bg-white ease-in-out duration-200" href="/dashboard">
              <div className="flex justify-center items-center size-12 bg-primary rounded-xl">
                <svg className="flex-shrink-0 size-6 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"></path>
                  <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path>
                </svg>
              </div>

              <h2 className="mt-4 text-xl font-bold text-gray-900">24/7 Support</h2>

              <p className="mt-1 text-sm text-gray-400">
                Contact us 24 hours a day, 7 days a week
              </p>
            </a>
          </div>

          <div className="mt-12 text-center">
            <a href="/dashboard" className="inline-block rounded bg-primary px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring focus:ring-sky-400 ease-in-out duration-300">
              Get Started Today
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}
