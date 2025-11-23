import Image from "next/image";
import PageIllustration from "@/components/page-illustration";


export default function HeroHome() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-6 pt-32 md:pb-10 md:pt-40">
          {/* Section header */}
          <div className="pb-6 text-center md:pb-8">

            <div className="text-center pb-6 md:pb-8">
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">
                Mission-Critical <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Backend Infrastructure</span>
              </h1>
              <div className="max-w-3xl mx-auto">
                <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
                  Private-by-design microservices for Engineering Teams. Stop building plumbing. Start shipping features.
                </p>
                <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                  <div>
                    <a className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href="#acord">
                      View Flagship: ACORD Parser
                    </a>
                  </div>
                  <div>
                    <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="mailto:sales@priyaiosystems.com">
                      Contact Sales
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Powering the next generation of software with robust infrastructure. From our specialized <strong className="font-medium text-gray-900">ACORD AL3 Engine</strong> to a broader suite of intelligent tools, we solve complex backend challenges.
              </p>

            </div>
          </div>
          {/* Hero image */}

        </div>
      </div>
    </section>
  );
}
