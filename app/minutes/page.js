import Image from "next/image";

import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";


export default function SciencePage() {
  return (
    <>
      <Header />

      <div className="bg-white min-h-screen">
        <main className="text-gray-900 px-6 sm:px-20 py-12 max-w-7xl mx-auto font-sans">
          {/* Hero Section */}
          <section className="text-center mb-6">
            <h1 className="text-4xl font-bold mb-4 text-[#3D4755]">
              3 Minutes a Day
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto italic">
              suppress inflammation and reduce psoriasis
            </p>
          </section>

          {/* Steps Section */}
          <div className="flex justify-center items-center flex-wrap gap-10 p-12 bg-[#BFE6EF]">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <Image
                src="/images/vest.png"
                alt="Put on vest"
                width={80}
                height={80}
                className="border-2 border-[#355D84] rounded-full bg-[#EBEDF1] p-3"
              />
              <p className="text-lg mt-2 text-center">Put on vest</p>
            </div>

            {/* Arrow 1 */}
            <Image
              src="/images/arrow.png"
              alt="arrow"
              width={40}
              height={40}
              className="w-10 h-10"
            />

            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <Image
                src="/images/phone.png"
                alt="Use App"
                width={80}
                height={80}
                className="border-2 border-[#355D84] rounded-full bg-[#EBEDF1] p-3"
              />
              <p className="text-lg mt-2 text-center">Use App</p>
            </div>

            {/* Arrow 2 */}
            <Image
              src="/images/arrow.png"
              alt="arrow"
              width={40}
              height={40}
              className="w-10 h-10"
            />

            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <Image
                src="/images/couch.png"
                alt="Relax"
                width={80}
                height={80}
                className="border-2 border-[#355D84] rounded-full bg-[#EBEDF1] p-3"
              />
              <p className="text-lg mt-2 text-center">Relax</p>
            </div>

            {/* Arrow 3 */}
            <Image
              src="/images/arrow.png"
              alt="arrow"
              width={40}
              height={40}
              className="w-10 h-10"
            />

            {/* Step 4 */}
            <div className="flex flex-col items-center">
              <Image
                src="/images/battery.png"
                alt="Recharge"
                width={80}
                height={80}
                className="border-2 border-[#355D84] rounded-full bg-[#EBEDF1] p-3"
              />
              <p className="text-lg mt-2 text-center">Recharge</p>
            </div>
          </div>

          {/* How It Works Section */}
          <section className="mt-5">
            <div className="flex items-start">
              <div className="flex flex-col text-right pr-1 m-9 mt-[35px]">
                <h2 className="text-[60px] text-[#3D4755] leading-none mb-3">
                  How
                </h2>

                <h2 className="text-[50px] text-[#198EB3] tracking-wider transform scale-y-[1.5] italic mb-3">
                  INIAcore
                </h2>

                <h2 className="text-[50px] text-[#3D4755] tracking-wide transform scale-y-[1.5]">
                  Works
                </h2>
              </div>
              <div className="border-l-3 border-[#2F5B87] h-[600px] mx-1"></div>
              <div className="flex-1 ml-10 mt-5">
                {[
                  "Non-Invasive Ultrasound Therapy",
                  "Closed-Loop Monitoring",
                  "Dual Functionality (Inhibitor & Engager)",
                  "At-Home Administration",
                ].map((title, index) => (
                  <div key={index} className="mb-10">
                    <div className="flex items-center gap-5">
                      <div className="w-10 h-10 rounded-full bg-[#198EB3] text-white flex items-center justify-center text-lg font-bold">
                        {index + 1}
                      </div>
                      <h3 className="text-[#3D4755] text-xl font-semibold">
                        {title}
                      </h3>
                    </div>
                    <p className="text-[#3D4755] pl-10 mt-4 text-lg">
                      {index === 0 &&
                        "Uses targeted sound waves to stimulate neural pathways that regulate immune function without requiring surgery or implanted devices."}
                      {index === 1 &&
                        "Continuously monitors biomarkers (e.g., inflammation levels) and adjusts stimulation parameters for personalized immune modulation."}
                      {index === 2 &&
                        "Suppresses cytokine overproduction to reduce symptoms of conditions like psoriasis, rheumatoid arthritis, and transplant rejection. Enhances cytokine production to boost immune responses for chronic infections or immunodeficiency disorders."}
                      {index === 3 &&
                        "INIA's device is designed for self-use at home, making immune therapy more convenient and accessible."}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
      <div className="bg-white min-h-screen">
        <main className="text-gray-900 px-6 sm:px-20 py-12 max-w-7xl mx-auto font-sans">
          {/* Hero Section */}
          <section className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Our Scientific Approach</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Pioneering bioelectronic medicine through advanced ultrasound
              technology for targeted inflammation control
            </p>
          </section>

          {/* Inhibitor/Engager Explanation */}
          <section className="mb-16 space-y-4 text-gray-700 leading-relaxed">
            <h2 className="text-2xl font-semibold mb-4">
              INIA&apos;s Inhibitor/Engager Mechanism
            </h2>
            <p>
              The Inhibitor/Engager Mechanism in bioelectronic medicine refers
              to the use of non-invasive stimulation technologies to modulate
              immune responses by either inhibiting or engaging specific
              biological pathways. This approach is useful in neuromodulation
              therapies for autoimmune and inflammatory diseases.
            </p>
            <p>
              The <strong>Inhibitor Mechanism</strong> works by suppressing
              excessive immune activity, which helps reduce inflammation and
              prevent conditions such as organ transplant rejection and
              autoimmune disorders. It employs ultrasound or electrical
              stimulation to lower pro-inflammatory cytokines, such as TNF-α and
              IL-6. This mechanism specifically targets the vagus nerve and
              other key neural pathways involved in immune regulation.
            </p>
            <p>
              In contrast, the <strong>Engager Mechanism</strong> activates
              immune pathways to enhance immune function, which is particularly
              beneficial for immunodeficiency disorders or chronic infections.
              It stimulates immune cells to increase anti-inflammatory
              cytokines, such as IL-10, which aids in tissue repair and promotes
              homeostasis.
            </p>
            <p>
              INIA Biosciences integrates the Inhibitor/Engager Mechanism into
              its non-invasive, ultrasound-based device for immune modulation.
              Their system monitors biomarkers such as inflammation levels and
              dynamically adjusts stimulation parameters to either inhibit or
              engage immune activity as needed. This adaptive approach helps
              reduce reliance on immunosuppressants in transplant patients and
              individuals with inflammatory diseases. By offering real-time,
              drug-free immune regulation, INIA&apos;s technology presents a
              promising alternative managing immune-related conditions.
            </p>
          </section>

          {/* How It Works */}
          <section className="mb-16 space-y-4 text-gray-700 leading-relaxed">
            <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
            <ul className="list-disc pl-6 space-y-4">
              <li>
                <strong>Non-Invasive Ultrasound Therapy:</strong> Uses targeted
                sound waves to stimulate neural pathways that regulate immune
                function without requiring surgery or implanted devices.
              </li>
              <li>
                <strong>Closed-Loop Monitoring:</strong> Continuously monitors
                biomarkers (e.g., inflammation levels) and adjusts stimulation
                parameters for personalized immune modulation.
              </li>
              <li>
                <strong>Dual Functionality (Inhibitor &amp; Engager):</strong>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>
                    Suppresses cytokine overproduction to reduce symptoms of
                    conditions like psoriasis, rheumatoid arthritis, and
                    transplant rejection.
                  </li>
                  <li>
                    Enhances cytokine production to boost immune responses for
                    chronic infections or immunodeficiency disorders.
                  </li>
                </ul>
              </li>
              <li>
                <strong>At-Home Administration:</strong> INIA&apos;s device is
                designed for self-use at home, making immune therapy more
                convenient and accessible.
              </li>
            </ul>
          </section>

          {/* Ultrasound Technology */}
          <section className="grid sm:grid-cols-2 gap-10 items-center mb-16">
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Ultrasound Technology
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Targeted therapeutic ultrasound delivery</li>
                <li>Customizable treatment parameters</li>
                <li>Real-time monitoring and adjustment</li>
              </ul>
            </div>
            <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center text-gray-400">
              Ultrasound Technology Diagram
            </div>
          </section>

          {/* Inflammation Control */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Inflammation Control
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white shadow-sm p-6 rounded-lg">
                <h3 className="font-semibold mb-2">Targeted Treatment</h3>
                <p className="text-gray-600">
                  Precise delivery to affected areas
                </p>
              </div>
              <div className="bg-white shadow-sm p-6 rounded-lg">
                <h3 className="font-semibold mb-2">Measured Response</h3>
                <p className="text-gray-600">
                  Controlled inflammatory response
                </p>
              </div>
              <div className="bg-white shadow-sm p-6 rounded-lg">
                <h3 className="font-semibold mb-2">Long-lasting Relief</h3>
                <p className="text-gray-600">Sustained therapeutic effects</p>
              </div>
            </div>
          </section>

          {/* Clinical Evidence */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Clinical Evidence
            </h2>
            <div className="flex justify-center">
              <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 text-center text-sm max-w-4xl">
                {[
                  {
                    phase: "Phase I",
                    label: "Completed",
                    percent: 100,
                    color: "bg-green-500",
                  },
                  {
                    phase: "Phase II",
                    label: "In Progress",
                    percent: 60,
                    color: "bg-yellow-400",
                  },
                  {
                    phase: "Phase III",
                    label: "In Preparation",
                    percent: 30,
                    color: "bg-blue-400",
                  },
                ].map(({ phase, label, percent, color }, idx) => (
                  <div
                    key={idx}
                    className="bg-white border p-4 rounded-lg flex flex-col items-center"
                  >
                    <h4 className="font-semibold mb-1">{phase}</h4>
                    <span className="text-xs text-gray-500 mb-2">{label}</span>
                    <div className="w-full h-2 bg-gray-200 rounded-full mb-2">
                      <div
                        className={`h-full rounded-full ${color}`}
                        style={{ width: `${percent}%` }}
                      ></div>
                    </div>
                    <p className="text-gray-600 text-xs">
                      {phase === "Phase I"
                        ? "Safety and initial efficacy established"
                        : phase === "Phase II"
                          ? "Expanded patient trials ongoing"
                          : "Large-scale trials in preparation"}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Research Pipeline */}
          <section className="mb-20">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Research Pipeline
            </h2>
            <div className="space-y-4 max-w-xl mx-auto">
              {[
                "Preclinical Studies",
                "Current Clinical Trials",
                "Future Applications",
              ].map((item, idx) => (
                <details
                  key={idx}
                  className="bg-white border rounded-lg p-4 cursor-pointer"
                >
                  <summary className="font-semibold cursor-pointer">
                    {item}
                  </summary>
                  <p className="text-gray-600 mt-2">
                    [Description or status update]
                  </p>
                </details>
              ))}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
