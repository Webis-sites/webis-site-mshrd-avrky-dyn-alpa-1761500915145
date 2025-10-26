'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaLaptopCode, FaBalanceScale, FaLightbulb, FaFileContract, FaBriefcase, FaRocket } from 'react-icons/fa';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ 
        scale: 1.05, 
        y: -10,
        transition: { duration: 0.3 }
      }}
      className="group relative"
      dir="rtl"
    >
      {/* Glassmorphism Card */}
      <div className="relative h-full rounded-3xl bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-xl border border-white/30 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#9B786F]/0 to-[#45B7D1]/0 group-hover:from-[#9B786F]/10 group-hover:to-[#45B7D1]/10 transition-all duration-500 rounded-3xl" />
        
        {/* Neumorphic Inner Shadow */}
        <div className="absolute inset-0 rounded-3xl shadow-inner opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
        
        <div className="relative p-8 flex flex-col h-full">
          {/* Icon Container with Neumorphic Effect */}
          <motion.div
            whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 shadow-[8px_8px_16px_rgba(163,177,198,0.6),-8px_-8px_16px_rgba(255,255,255,0.8)] group-hover:shadow-[inset_4px_4px_8px_rgba(163,177,198,0.4),inset_-4px_-4px_8px_rgba(255,255,255,0.9)] transition-all duration-500"
          >
            <div className="text-4xl text-[#9B786F] group-hover:text-[#45B7D1] transition-colors duration-500">
              {icon}
            </div>
          </motion.div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-right mb-4 text-gray-800 group-hover:text-[#9B786F] transition-colors duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-right text-gray-600 mb-6 leading-relaxed flex-grow">
            {description}
          </p>

          {/* CTA Link with Neumorphic Button */}
          <motion.div
            whileHover={{ x: -5 }}
            className="flex items-center justify-end gap-2"
          >
            <span className="text-[#9B786F] group-hover:text-[#45B7D1] font-semibold transition-colors duration-300">
              למידע נוסף
            </span>
            <motion.div
              animate={{ x: [0, -5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="text-[#9B786F] group-hover:text-[#45B7D1] transition-colors duration-300"
            >
              ←
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const LawFirmServicesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const services = [
    {
      icon: <FaLaptopCode />,
      title: 'ייעוץ משפטי בתחום הטכנולוגיה',
      description: 'ייעוץ מקיף בנושאי טכנולוגיה, הגנת מידע, אבטחת סייבר ורגולציה דיגיטלית. אנו מספקים פתרונות משפטיים מותאמים לחברות טכנולוגיה.'
    },
    {
      icon: <FaBalanceScale />,
      title: 'ליטיגציה ומשפט מסחרי',
      description: 'ייצוג משפטי מקצועי בהליכים משפטיים מורכבים, סכסוכים מסחריים ותביעות אזרחיות. ניסיון עשיר בבתי המשפט בכל הרמות.'
    },
    {
      icon: <FaLightbulb />,
      title: 'קניין רוחני והגנת פטנטים',
      description: 'הגנה על זכויות יוצרים, סימני מסחר, פטנטים וסודות מסחריים. ליווי מלא בהגשת בקשות והגנה על נכסים בלתי מוחשיים.'
    },
    {
      icon: <FaFileContract />,
      title: 'חוזים ועסקאות',
      description: 'ניסוח וסקירת חוזים מסחריים, הסכמי שיתוף פעולה, עסקאות מיזוגים ורכישות. ליווי משפטי בכל שלבי העסקה.'
    },
    {
      icon: <FaBriefcase />,
      title: 'דיני עבודה',
      description: 'ייעוץ מקיף בדיני עבודה, הסכמי העסקה, זכויות עובדים ומעסיקים, והליכי פיטורים. ייצוג בבתי הדין לעבודה.'
    },
    {
      icon: <FaRocket />,
      title: 'ייעוץ לחברות הייטק',
      description: 'ליווי משפטי מלא לסטארטאפים וחברות הייטק, גיוס הון, הסכמי השקעה, אופציות לעובדים ותכנון מבנה תאגידי.'
    }
  ];

  return (
    <section
      id="law-firm-services-section"
      ref={sectionRef}
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      dir="rtl"
    >
      {/* Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20" />
      
      {/* Animated Background Shapes */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#9B786F]/20 to-[#45B7D1]/20 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [90, 0, 90],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-gradient-to-br from-[#45B7D1]/20 to-[#9B786F]/20 rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
          dir="rtl"
        >
          {/* Main Title with Glassmorphism */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-right bg-gradient-to-l from-[#9B786F] via-[#45B7D1] to-[#9B786F] bg-clip-text text-transparent">
              השירותים שלנו
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-1 bg-gradient-to-l from-[#9B786F] to-[#45B7D1] rounded-full mt-4"
            />
          </motion.div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 text-right max-w-3xl mx-auto leading-relaxed"
          >
            מגוון שירותים משפטיים מקצועיים המותאמים לצרכים הייחודיים של חברות טכנולוגיה ומוסדות חינוך
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
          dir="rtl"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 rounded-2xl bg-gradient-to-l from-[#9B786F] to-[#45B7D1] text-white font-bold text-lg shadow-[8px_8px_20px_rgba(155,120,111,0.4),-8px_-8px_20px_rgba(69,183,209,0.4)] hover:shadow-[inset_4px_4px_12px_rgba(0,0,0,0.2),inset_-4px_-4px_12px_rgba(255,255,255,0.1)] transition-all duration-300"
          >
            צור קשר לייעוץ ראשוני חינם
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default LawFirmServicesSection;