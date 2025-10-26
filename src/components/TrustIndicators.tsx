'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { FaAward, FaUsers, FaBriefcase, FaChartLine } from 'react-icons/fa';

interface MetricCardProps {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  delay: number;
}

const AnimatedCounter: React.FC<{ value: number; inView: boolean }> = ({ value, inView }) => {
  const [count, setCount] = useState<number>(0);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000, bounce: 0 });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      setCount(Math.floor(latest));
    });
    return () => unsubscribe();
  }, [springValue]);

  return <span>{count}</span>;
};

const MetricCard: React.FC<MetricCardProps> = ({ icon, value, suffix, label, delay }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
      className="relative group"
      dir="rtl"
    >
      {/* Glassmorphism card with neumorphic effects */}
      <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-xl border border-white/30 shadow-[8px_8px_16px_rgba(155,120,111,0.1),-8px_-8px_16px_rgba(255,255,255,0.9)] hover:shadow-[12px_12px_24px_rgba(155,120,111,0.15),-12px_-12px_24px_rgba(255,255,255,0.95)] transition-all duration-500 overflow-hidden">
        
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #9B786F 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}></div>
        </div>

        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#9B786F]/0 to-[#45B7D1]/0 group-hover:from-[#9B786F]/5 group-hover:to-[#45B7D1]/5 transition-all duration-500"></div>

        <div className="relative z-10 flex flex-col items-center text-center space-y-4">
          {/* Icon container with neumorphic effect */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
            transition={{ duration: 0.8, delay: delay + 0.2, type: 'spring', stiffness: 200 }}
            className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#9B786F]/20 to-[#45B7D1]/20 backdrop-blur-sm flex items-center justify-center shadow-[inset_4px_4px_8px_rgba(155,120,111,0.2),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] group-hover:shadow-[inset_6px_6px_12px_rgba(155,120,111,0.3),inset_-6px_-6px_12px_rgba(255,255,255,0.9)] transition-all duration-500"
          >
            <div className="text-4xl text-[#9B786F] group-hover:scale-110 transition-transform duration-300">
              {icon}
            </div>
          </motion.div>

          {/* Counter */}
          <div className="text-5xl font-bold text-gray-800" dir="ltr">
            <AnimatedCounter value={value} inView={inView} />
            <span className="text-[#9B786F]">{suffix}</span>
          </div>

          {/* Label */}
          <div className="text-lg font-semibold text-gray-700 text-right w-full">
            {label}
          </div>

          {/* Decorative line */}
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: '60%' } : { width: 0 }}
            transition={{ duration: 0.8, delay: delay + 0.4 }}
            className="h-1 bg-gradient-to-l from-[#9B786F] to-[#45B7D1] rounded-full"
          ></motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const TrustIndicatorsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-50px' });

  const metrics = [
    {
      icon: <FaAward />,
      value: 25,
      suffix: '+',
      label: 'שנות ניסיון',
      delay: 0
    },
    {
      icon: <FaUsers />,
      value: 500,
      suffix: '+',
      label: 'לקוחות מרוצים',
      delay: 0.1
    },
    {
      icon: <FaBriefcase />,
      value: 1200,
      suffix: '+',
      label: 'תיקים שטופלו',
      delay: 0.2
    },
    {
      icon: <FaChartLine />,
      value: 98,
      suffix: '%',
      label: 'שיעור הצלחה',
      delay: 0.3
    }
  ];

  return (
    <section
      id="trust-indicators"
      ref={sectionRef}
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      dir="rtl"
    >
      {/* Background with gradient and texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-[#9B786F]/5 to-[#45B7D1]/5"></div>
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239B786F' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Floating decorative elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-[#9B786F]/10 to-[#45B7D1]/10 backdrop-blur-3xl blur-2xl"
      ></motion.div>

      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-gradient-to-br from-[#45B7D1]/10 to-[#9B786F]/10 backdrop-blur-3xl blur-2xl"
      ></motion.div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          dir="rtl"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl font-bold text-gray-800 mb-4 text-right"
          >
            <span className="bg-gradient-to-l from-[#9B786F] to-[#45B7D1] bg-clip-text text-transparent">
              המספרים מדברים בעד עצמם
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto text-right"
          >
            ניסיון עשיר, מומחיות מוכחת ושיעור הצלחה יוצא דופן
          </motion.p>
        </motion.div>

        {/* Metrics grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <MetricCard
              key={index}
              icon={metric.icon}
              value={metric.value}
              suffix={metric.suffix}
              label={metric.label}
              delay={metric.delay}
            />
          ))}
        </div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
          dir="rtl"
        >
          <div className="inline-block px-8 py-4 rounded-full bg-gradient-to-l from-white/40 to-white/20 backdrop-blur-xl border border-white/30 shadow-[4px_4px_12px_rgba(155,120,111,0.1),-4px_-4px_12px_rgba(255,255,255,0.9)]">
            <p className="text-lg font-semibold text-gray-700 text-right">
              מובילים את הדרך בתחום המשפט הטכנולוגי
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustIndicatorsSection;