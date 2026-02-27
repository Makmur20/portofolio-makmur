"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about data
const about = {
  title: "Tentang Saya",
  description:
    "Saya memiliki pengalaman dalam mengembangkan berbagai aplikasi berbasis web dan mobile, mulai dari sistem informasi, aplikasi kasir, hingga platform pemesanan online. Dalam setiap proyek, saya terbiasa merancang struktur sistem, mengembangkan fitur fungsional, serta memastikan aplikasi berjalan stabil dan mudah digunakan. Saya berpengalaman menggunakan berbagai teknologi modern untuk membangun solusi digital yang efisien, dengan fokus pada performa, keamanan, dan pengalaman pengguna.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Makmur Mulyono",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+62) 81378969663",
    },
    {
      fieldName: "Experience",
      fieldValue: "2 Years",
    },
    {
      fieldName: "Skype",
      fieldValue: "makmur.01",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indonesia",
    },
    {
      fieldName: "Email",
      fieldValue: "makmurmulyono@gmail.com",
    },
    {
      fieldName: "Frelance",
      fieldValue: "Avilabel",
    },
    {
      fieldName: "Language",
      fieldValue: "Indonesian, English",
    },
  ],
};

// experience data
const experience = {
  title: "Pengalaman Saya",
  icon: "/assets/resume/badge.svg",
  description:
    "Saya memiliki pengalaman dalam mengembangkan berbagai aplikasi berbasis web dan mobile, mulai dari sistem informasi, aplikasi kasir, hingga platform pemesanan online. Dalam setiap proyek, saya terbiasa merancang struktur sistem, mengembangkan fitur fungsional, serta memastikan aplikasi berjalan stabil dan mudah digunakan. Saya berpengalaman menggunakan berbagai teknologi modern untuk membangun solusi digital yang efisien, dengan fokus pada performa, keamanan, dan pengalaman pengguna.",
  items: [
    {
      company: "ezscode.",
      potition: "Full Stack Developer",
      duration: "2023 - 2024",
    },
    {
      company: "Web Frelance",
      potition: "Web Developer",
      duration: "2024-2025",
    },
    {
      company: "3D Animation",
      potition: "3D Generalist",
      duration: "2026",
    },
  ],
};

// Eduction data
const education = {
  title: "Pendidikan Saya",
  icon: "/assets/resume/badge.svg",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  items: [
    {
      institution: "SMK 6 Pekanbaru",
      degree: "Rekayasa Perangkat Lunak",
      duration: "2017-2019",
    },
    {
      institution: "Universitas Islam Negeri Sultan Syarif Kasim Riau",
      degree: "Teknik Informatika",
      duration: "2019-2024",
    },
  ],
};

// Skill data
const skills = {
  title: "Skil Saya",
  description:
    "Saya memiliki keahlian dalam pengembangan aplikasi web dan mobile dengan fokus pada performa, fungsionalitas, dan pengalaman pengguna. Terbiasa mengerjakan proyek dari tahap perancangan sistem, pengembangan fitur, hingga pengujian dan implementasi. Saya juga memahami perancangan database, integrasi API, serta penerapan desain UI/UX yang berorientasi pada kemudahan penggunaan. Dengan penguasaan berbagai teknologi modern, saya mampu membangun solusi digital yang efisien, terstruktur, dan mudah dikembangkan.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node,js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[700vh] w-full">
            {/* experience */}
            <TabsContent value="experience" classname="w-full">
             <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-blod">{experience.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {experience.description}
              </p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {experience.items.map((item, index)=>{
                    return (
                    <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                      <span className="text-accent">{item.duration}</span>
                      <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.potition}</h3>
                      <div className="flex items-center gap-3">
                        {/* dot */}
                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                        <p className="text-white/60">{item.company}</p>
                      </div>
                    </li>
                    );
                  })}
                </ul>
              </ScrollArea>
             </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" classname="w-full">
             <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-blod">{education.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {education.description}
              </p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {education.items.map((item, index)=>{
                    return (
                    <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                      <span className="text-accent">{item.duration}</span>
                      <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                      <div className="flex items-center gap-3">
                        {/* dot */}
                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                        <p className="text-white/60">{item.institution}</p>
                      </div>
                    </li>
                    );
                  })}
                </ul>
              </ScrollArea>
             </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" classname="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-blod">{skills.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                      {skills.description}
                    </p>
                  </div>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => {
                      return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounder-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                      );
                    })}
                  </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" classname="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>

                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>                                          
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
