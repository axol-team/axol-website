"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/lib/site_data/services";
import Link from "next/link";

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Services
      </motion.h1>
      <motion.div
        className="max-w-3xl mx-auto mb-16 space-y-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-3xl font-light text-primary leading-relaxed">
          We understand the hurdles you face in this dynamic sector.
        </p>

        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
          <p>
            Education is at the heart of every product we develop. Rooted in sound, evidence-based pedagogy, our products are designed to enhance learning experiences profoundly.
          </p>

          <p>
            Our commitment goes beyond technology. We&apos;re here to create solutions that genuinely make a difference in the lives of students and educators, driving positive change in the educational landscape. We believe in making quality EdTech accessible to everyone, everywhere. Our services extend worldwide, bringing global perspectives and inclusivity to our solutions.
          </p>
        </div>
        <div className="border-l-4 border-primary pl-6 py-2 my-8">
          <p className="text-xl">
            Your vision is powerful and deserves a team that matches its pace and potential. At AXOL, we don&apos;t just combine your innovative ideas with our industry expertise; we elevate and deliver them.
          </p>
        </div>

        
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card
              className={`h-full cursor-pointer transition-shadow hover:shadow-lg ${
                selectedService === index ? "ring-2 ring-primary" : ""
              }`}
              onClick={() =>
                setSelectedService(selectedService === index ? null : index)
              }
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-primary/10">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold ml-3">
                    {service.title}
                  </h2>
                </div>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <AnimatePresence>
                  {selectedService === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ul className="list-disc list-inside text-sm text-muted-foreground mb-4">
                        {service.details.map((detail, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                          >
                            {detail}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
                {service.slug && (
                        <Link
                          href={`/services/${service.slug}`}
                          className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Learn More →
                        </Link>
                      )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
