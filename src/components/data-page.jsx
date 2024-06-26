/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/BBxyNWfGcBk
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Arimo } from 'next/font/google'
import { Libre_Franklin } from 'next/font/google'

arimo({
  subsets: ['latin'],
  display: 'swap',
})

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ResponsivePie } from "@nivo/pie";
import { RiCloseLargeFill } from "react-icons/ri";
import { useNavStore } from "../app/Zustand/Zustand";
import { RiBardFill } from "react-icons/ri";

import data from "../../public/Westend.json";
import policy from "../../public/policy.json";

export function DataPage() {
  const uprn = useNavStore((state) => state.uprn);

  return (
    <main className="justify-center flex w-full">
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-2">
            {/* UPRN: {uprn} */}
            21 Albemarle Street
          </h1>
          <div className="text-2xl sm:text-xl md:text-xl mb-8 text-gray-500 dark:text-gray-400">
            City of Westminster, London W1S 4BS
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <div className="bg-white p-8 rounded-xl mb-8  dark:bg-gray-900">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                  Savings
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 py-4">
                  Compare the cost and carbon impact of retrofitting your
                  building versus rebuilding.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Cost (£ Million)</h3>
                    <DonutpieChart className="aspect-square" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Carbon (tCO2)</h3>
                    <DonutpieChart2 className="aspect-square" />
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl  dark:bg-gray-900">
                <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                  Material Flows
                </h3>
                <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 py-4">
                  See below the predicted material flows following building
                  retrofit.
                </p>
                <div className="full-w">
                  <img src="/MaterialFlow.svg" alt="" />
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl mt-8  dark:bg-gray-900">
                <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-8">
                  Building Geometry
                </h3>
                <div className="full-w">
                  <img src="/initial.jpg" alt="" className="mb-4" />
                  <img src="/old.jpg" alt="" className="mb-4" />
                  <img src="/new.jpg" alt="" />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                Building Data{" "}
              </h2>
              <p className="max-w-[700px] py-8 text-gray-500 md:text-xl dark:text-gray-400">
                This is the data available on your building.
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-between bg-white dark:bg-gray-900 p-4 rounded-lg shadow">
                  <div className="flex items-center gap-4">
                    <span>Estimated floor area (sq m)</span>
                  </div>
                  <span className="font-medium">
                    {
                      data.find((item) => item.UPRN == uprn)
                        ?.ESTIMATE_TOTAL_FLOOR_AREA_ALL
                    }
                  </span>
                </div>
                <div className="flex items-center justify-between bg-white dark:bg-gray-900 p-4 rounded-lg shadow">
                  <div className="flex items-center gap-4">
                    <span>Estimated floor count</span>
                  </div>
                  <div className="font-medium">
                    {
                      data.find((item) => item.UPRN == uprn)
                        ?.ESTIMATED_FLOOR_COUNT
                    }
                  </div>
                </div>
                <div className="flex items-center justify-between bg-white dark:bg-gray-900 p-4 rounded-lg shadow">
                  <div className="flex items-center gap-4">
                    <span>Object height (m)</span>
                  </div>
                  <span className="font-medium">
                    {
                      data.find((item) => item.UPRN == uprn)
                        ?.MEAN_OBJECT_HEIGHT_M
                    }
                  </span>
                </div>
                <div className="flex items-center justify-between bg-white dark:bg-gray-900 p-4 rounded-lg shadow">
                  <div className="flex items-center gap-4">
                    <span>Dominant Activity</span>
                  </div>
                  <span className="font-medium">
                    {
                      data.find((item) => item.UPRN == uprn)
                        ?.DOMINANT_ND_ACTIVITY_BY_C2_FS
                    }
                  </span>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mt-16">
                  Relevant Policies
                </h2>
                <p className="max-w-[700px] py-8 text-gray-500 md:text-xl dark:text-gray-400">
                  <RiBardFill className="text-blue-500 inline" />
                  <span className="text-blue-500"> AI</span> matched policies
                  for your building based on type, location and size, ordered by
                  priority.
                </p>
                {policy.map((policy, index) => (
                  <div
                    key={index}
                    className="flex-column justify-between bg-white dark:bg-gray-900 p-4 rounded-lg shadow mb-4"
                  >
                    <h3 className="font-semibold mb-4 text-xl">
                      {policy["Policy document"]} - {policy["Number"]}
                    </h3>
                    <p className="">{policy.Text}</p>
                    <p className="text-blue-500 pt-4">See more.</p>
                  </div>
                ))}
                {/* <div className="space-y-4">
                  <div className="flex items-center justify-between bg-white dark:bg-gray-900 p-4 rounded-lg shadow">
                    <div className="flex items-center gap-4">
                      <CheckIcon className="w-6 h-6 text-green-500" />
                      <span>Energy Efficiency Regulations</span>
                    </div>
                    <span className="text-green-500 font-medium">
                      Compliant
                    </span>
                  </div>
                  <div className="flex items-center justify-between bg-white dark:bg-gray-900 p-4 rounded-lg shadow">
                    <div className="flex items-center gap-4">
                      <CrossIcon className="w-6 h-6 text-red-500" />
                      <span>Emissions Reduction Target</span>
                    </div>
                    <div className="text-red-500 font-medium">
                      Non-Compliant
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Reduce emissions by 15% within 2 years
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-white dark:bg-gray-900 p-4 rounded-lg shadow">
                    <div className="flex items-center gap-4">
                      <CheckIcon className="w-6 h-6 text-green-500" />
                      <span>Renewable Energy Mandate</span>
                    </div>
                    <span className="text-green-500 font-medium">
                      Compliant
                    </span>
                  </div>
                  <div className="flex items-center justify-between bg-white dark:bg-gray-900 p-4 rounded-lg shadow">
                    <div className="flex items-center gap-4">
                      <CheckIcon className="w-6 h-6 text-green-500" />
                      <span>Waste Management Regulations</span>
                    </div>
                    <span className="text-green-500 font-medium">
                      Compliant
                    </span>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function CrossIcon(props) {
  return <RiCloseLargeFill className="text-red-600" />;
}

function DonutpieChart(props) {
  return (
    <div {...props}>
      <ResponsivePie
        data={[
          { id: "Retrofitting Cost", value: 3.5 },
          { id: "Savings", value: 3.6 },
        ]}
        // sortByValue
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        cornerRadius={3}
        innerRadius={0.5}
        padAngle={0}
        borderWidth={1}
        borderColor={"#ffffff"}
        enableArcLinkLabels={false}
        arcLabel={(d) => `${d.value}`}
        arcLabelsTextColor={"#ffffff"}
        arcLabelsRadiusOffset={0.5}
        colors={["#000", "#15b8a6"]}
        theme={{
          labels: {
            text: {
              fontSize: "18px",
            },
          },
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}

function DonutpieChart2(props) {
  return (
    <div {...props}>
      <ResponsivePie
        data={[
          { id: "Retrofitting Emissions", value: 693 },
          { id: "Savings", value: 1386 },
        ]}
        // sortByValue
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        cornerRadius={3}
        innerRadius={0.5}
        padAngle={0}
        borderWidth={1}
        borderColor={"#ffffff"}
        enableArcLinkLabels={false}
        arcLabel={(d) => `${d.value}`}
        arcLabelsTextColor={"#ffffff"}
        arcLabelsRadiusOffset={0.5}
        colors={["#000", "#15b8a6"]}
        theme={{
          labels: {
            text: {
              fontSize: "18px",
            },
          },
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}
