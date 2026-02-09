
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const historyItems = [
  {
    title: "Early Years",
    content: (
      <>
        <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
          Early Years
        </h3>
        <p className="text-gray-300 leading-relaxed text-lg">
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
        </p>
        <p className="text-gray-300 leading-relaxed text-lg mt-6">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC...
        </p>
      </>
    ),
  },
  {
    title: "Club Career",
    content: (
      <>
        <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
          Club Career – Barcelona (2003 - 2008)
        </h3>
        <p className="text-gray-300 leading-relaxed text-lg">
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form...
        </p>
        <p className="text-gray-300 leading-relaxed text-lg mt-6">
          Sustained Success – The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested...
        </p>
      </>
    ),
  },
  {
    title: "INT Career",
    content: (
      <>
        <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
          International Career
        </h3>
        <p className="text-gray-300 leading-relaxed text-lg">
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced...
        </p>
      </>
    ),
  },
  {
    title: "Type of Play",
    content: (
      <>
        <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
          Type of Play
        </h3>
        <p className="text-gray-300 leading-relaxed text-lg">
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form...
        </p>
      </>
    ),
  },
  {
    title: "Personal Life",
    content: (
      <>
        <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
          Personal Life & Domestic Success
        </h3>
        <p className="text-gray-300 leading-relaxed text-lg">
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced...
        </p>
      </>
    ),
  },
];

export default function HistorySection() {
  const [activeIndex, setActiveIndex] = useState(0); // Default first item active

  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-background via-black/50 to-background text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight">
            <span className="text-primary">My</span>{" "}
            <span className="text-white">History</span>
          </h2>
          <div className="h-1 w-32 bg-background mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Sidebar - Clickable Items */}
          <div className="lg:col-span-4 space-y-3 md:space-y-4">
            {historyItems.map((item, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                whileHover={{ scale: 1.03, x: 8 }}
                className={`w-full text-left px-6 py-4 md:py-5 rounded-r-xl transition-all duration-300 backdrop-blur-sm border-l-4 ${
                  activeIndex === index
                    ? "bg-background border-primary shadow-lg shadow-primary/20"
                    : "bg-background border-gray-800 hover:border-primary/70 hover:bg-background"
                }`}
              >
                <span className="text-lg md:text-xl font-semibold text-gray-200">
                  {item.title}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Right Content Area */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 bg-background backdrop-blur-md border border-gray-800 rounded-2xl p-8 md:p-12 shadow-2xl shadow-black/70 min-h-[500px]"
          >
            {historyItems[activeIndex].content}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

