import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import MapImage from "../../../../public/assets/images/revent-pattern.svg";

import Image from "next/image";

const stats = [
  {
    number: 50,
    suffix: "+",
    description: "Successfully executed projects",
  },
  {
    number: 10,
    suffix: "+",
    description: "Staff strength contract and full time",
  },
  {
    number: 20,
    suffix: "+",
    description: "Tech partners in major sectors globally",
  },
];

const PerformanceSection: React.FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <section
        className="relative w-full text-white overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #00191F 10%, #006980 40%, #007E99 50%)",
        }}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
          style={{ backgroundImage: `url(${MapImage.src})` }}
        />

        <div
          ref={ref}
          className="relative mx-auto flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 md:px-16 py-16 sm:py-20 md:py-28 gap-12 md:gap-20 max-w-7xl"
        >
          {/* Left Heading */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left text-[32px] sm:text-[40px] md:text-[56px] font-extrabold leading-tight"
          >
            Our
            <br />
            performance
            <br />
            over time
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col sm:flex-row  justify-between  w-full md:w-full gap-x-8 items-center "
          >
            {stats.map(({ number, suffix, description }, i) => (
              <CounterStat
                key={i}
                number={number}
                suffix={suffix}
                description={description}
              />
            ))}
          </motion.div>
        </div>
      </section>
      {/* Read About Us Section */}
    </>
  );
};

interface CounterStatProps {
  number: number;
  suffix?: string;
  description: string;
}

const CounterStat: React.FC<CounterStatProps> = ({
  number,
  suffix = "",
  description,
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000;
      const increment = number / (duration / 16);

      const counter = setInterval(() => {
        start += increment;
        if (start >= number) {
          setCount(number);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(counter);
    }
  }, [inView, number]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center gap-3 max-w-[240px]"
    >
      <span className="text-[40px] sm:text-[48px] md:text-[56px] font-bold text-white">
        {count}
        {suffix}
      </span>
      <p className="text-base sm:text-lg md:text-xl font-medium leading-snug">
        {description}
      </p>
    </div>
  );
};

export default PerformanceSection;
