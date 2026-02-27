"use client";

import {BsArrowDownRight } from "react-icons/bs"
import Link from "next/link";
import { Description } from "@radix-ui/react-dialog";

const services = [
    {
        num: "01",
        title: "Web Development",
        description: "Saya menyediakan layanan pengembangan website yang responsif, cepat, dan aman. Mulai dari website company profile, dashboard admin, hingga aplikasi web kompleks yang disesuaikan dengan kebutuhan bisnis Anda.",
        href: ""
    },
    {
        num: "02",
        title: "Mobile Development",
        description: "Saya mengembangkan aplikasi mobile yang stabil, intuitif, dan memiliki performa tinggi. Fokus pada pengalaman pengguna yang nyaman serta fungsionalitas yang optimal untuk mendukung aktivitas bisnis di perangkat mobile.",
        href: ""
    },
    {
        num: "03",
        title: "UI/UX Design",
        description: "Saya merancang tampilan dan pengalaman pengguna yang menarik, konsisten, dan mudah digunakan. Setiap desain dibuat dengan pendekatan user-centered untuk memastikan produk tidak hanya terlihat bagus, tetapi juga efektif digunakan.",
        href: ""
    },
    {
        num: "04",
        title: "SEO",
        description: "Saya membantu meningkatkan visibilitas website di mesin pencari melalui optimasi teknis, struktur konten, dan performa website. Tujuannya adalah mendatangkan trafik yang relevan dan meningkatkan peluang konversi.",
        href: ""
    },
];

import { motion } from "framer-motion";

const Services = () => {
    return (
        <section className="main-h-[80vh] flex flex-col justify-center py-12 xl:py:0">
            <div className="container mx-auto">
            <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn"},
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
            >
                {services.map((service, index)=> {
                    return (
                    <div 
                    key={index}
                    className="flex-1 flex flex-col justify-center gap-6 group"
                    >
                        {/* top */}
                        <div className="w-full flex justify-between items-center">
                            <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover
                            transition-all duration-500">
                                {service.num}
                                </div>
                            <Link href={service.href}
                            className="w-[70px] h-[70px] rounded-full bg-white 
                            group-hover:bg-accent transition-all duration-500 flex 
                            justify-center items-center hover:-rotate-45"
                            >
                                <BsArrowDownRight className="text-primary text-3xl" />
                            </Link>                        
                        </div>
                        {/* heading */}
                        <h2 className="text-[42px] font-bold leading-none text-white
                        group-hover:text-accent transition-all duration-500">{service.title}</h2>
                        {/* Description */}
                        <p className="text-white/60">{service.description}</p>
                        {/* border */}
                        <div className="border-b border-white/20 w-full"></div>
                    </div>
                    );
                })}
            </motion.div>
        </div>
    </section>
    );
};

export default Services;
