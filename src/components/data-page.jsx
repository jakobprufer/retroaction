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

export function DataPage() {
  return (
    <main className="justify-center flex w-full">
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Rebuilding or RetroAction
              </h2>
              <p className="max-w-[700px] py-8 text-gray-500 md:text-xl dark:text-gray-400">
                Compare the carbon impact in tons of CO2 of rebuilding your
                property versus retrofitting it.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Rebuilding</h3>
                  <DonutpieChart className="aspect-square" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">RetroAction</h3>
                  <DonutpieChart2 className="aspect-square" />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Policy Compliance
              </h2>
              <p className="max-w-[700px] py-8 text-gray-500 md:text-xl dark:text-gray-400">
                Check your property&apos;s compliance with local energy and
                emissions policies.
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-between bg-white dark:bg-gray-900 p-4 rounded-lg shadow">
                  <div className="flex items-center gap-4">
                    <CheckIcon className="w-6 h-6 text-green-500" />
                    <span>Energy Efficiency Regulations</span>
                  </div>
                  <span className="text-green-500 font-medium">Compliant</span>
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
                  <span className="text-green-500 font-medium">Compliant</span>
                </div>
                <div className="flex items-center justify-between bg-white dark:bg-gray-900 p-4 rounded-lg shadow">
                  <div className="flex items-center gap-4">
                    <CheckIcon className="w-6 h-6 text-green-500" />
                    <span>Waste Management Regulations</span>
                  </div>
                  <span className="text-green-500 font-medium">Compliant</span>
                </div>
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
        data={[{ id: "2000t", value: 80 }]}
        sortByValue
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        cornerRadius={3}
        innerRadius={0.5}
        padAngle={0}
        borderWidth={1}
        borderColor={"#ffffff"}
        enableArcLinkLabels={false}
        arcLabel={(d) => `${d.id}`}
        arcLabelsTextColor={"#ffffff"}
        arcLabelsRadiusOffset={0.5}
        colors={["#e11d48"]}
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
          { id: "1500t", value: 75 },
          { id: "", value: 25 },
        ]}
        sortByValue
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        cornerRadius={3}
        innerRadius={0.5}
        padAngle={0}
        borderWidth={1}
        borderColor={"#ffffff"}
        enableArcLinkLabels={false}
        arcLabel={(d) => `${d.id}`}
        arcLabelsTextColor={"#ffffff"}
        arcLabelsRadiusOffset={0.5}
        colors={["#0E86F5", "000"]}
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
