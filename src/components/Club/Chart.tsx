"use client";

import { useTheme } from "next-themes";
import SectionTitle from "@/components/Common/SectionTitle";
import SingleActuality from "@/components/Actus/SingleActuality";
import React from "react";
import Link from "next/link";
import chartData from "@/components/Club/ChartData";
import Image from "next/image";

const Chart = () => {
  const { theme } = useTheme();

  return (
      <div className="container">
        <SectionTitle
            title="Organigramme"
            paragraph=""
        />
          {chartData.map((chartItem, index) => (
              <div key={index} className="mb-10">
                  <h2 className="text-black text-3xl font-akira mb-8">{chartItem.title}</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                      {chartItem.persons.map((personItem, personIndex) => (
                          <div key={personIndex} className="flex flex-col items-center bg-gray-100 transition-shadow duration-300 hover:shadow-md">
                              <div className="overflow-hidden">
                                  <Image
                                      src={personItem.image}
                                      alt={personItem.name}
                                      width={500}
                                      height={500}
                                      className="transform transition-transform duration-300 hover:scale-110"
                                  />
                              </div>
                              <div className="text-center m-4">
                                  <h3 className="text-secondary text-lg font-bold mb-2">{personItem.name}</h3>
                                  <p className="text-black text-base">{personItem.designation}</p>
                                  <p className="text-black text-base"><a href={"mailto:" + personItem.mail}>{personItem.mail}</a></p>
                                  <p className="text-black text-base"><a href={"tel:" + personItem.phone}>{personItem.phone}</a></p>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          ))}


      </div>
  );
};

export default Chart;
