'use client'

import React, { useState, useEffect, useRef } from "react";
import Expand from '../../public/Expand.png'
import Image from "next/image";
import EllipsePictureFrame from "./EllipsePictureFrame";

interface HeroSectionImgProps {
    images: string[];
    title?: string;
    description?: string
    expandBtnOnMobileView?: boolean
    heroSectionHeight?: boolean
    showEllipsePictureFrame?: boolean

}

export default function HeroSectionImg({ title, description, expandBtnOnMobileView = true, images = [], heroSectionHeight = false, showEllipsePictureFrame = true }: HeroSectionImgProps) {
    const [isOpen, setIsOpen] = useState(false);
    const overlayRef = useRef<HTMLDivElement | null>(null);

    // Handle ESC key
    useEffect(() => {
        function onKey(e: KeyboardEvent) {
            if (e.key === "Escape") setIsOpen(false);
        }
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, []);

    // Prevent background scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [isOpen]);

    return (
        <div className="relative border">
            <div className={`${showEllipsePictureFrame ? 'flex' : 'hidden'} justify-end  `}>
                <EllipsePictureFrame />
            </div>
            {/* HERO CARD */}
            <div className="group relative rounded-2xl lg overflow-hidden ">
                <img
                    src={images[0]}
                    alt="hero"
                    className={`w-full ${heroSectionHeight ? 'h-64 md:h-[80vh]' : 'h-auto'} object-cover transition-transform duration-300 group-hover:scale-[1.02]`}
                />

                {/* Description Section for Our Service Component */}
                {description && (
                    <div className='font-[dmsans] mt-5 md:max-w-[400px] md:absolute bottom-[4%] md:rounded-xl left-[2%] md:text-white md:w-[50%] md:p-5 md:backdrop-blur-md md:bg-[#195C8933] md:border border-[#BABABA]'>
                        <h3 className='mb-2 font-medium text-[1.2rem] md:text-[1.1rem] lg:text-[1.5rem]'>{title}</h3>
                        <p className='font-light text-[1rem] leading-6 md:text-[0.95rem] lg:text-[1.1rem]'>{description}</p>
                    </div>
                )}

                {/* Expand button (md and up) */}
                <button
                    onClick={() => setIsOpen(true)}
                    className={`${expandBtnOnMobileView ? 'flex' : 'hidden md:flex'} items-center justify-center absolute bottom-4 right-4 bg-white px-2 py-3 rounded-full shadow-md  hover:cursor-pointer hover:bg-[#ffffffc4] w-[30px] h-[30px] md:w-[50px] md:h-[50px]`}
                    aria-label="Expand images"
                >
                    <Image src={Expand} width='50' height='50' alt='hero section image expand button' className='' />
                </button>
            </div>

            {/* FULLSCREEN OVERLAY */}
            {
                isOpen && (
                    <div
                        ref={overlayRef}
                        className="fixed inset-0 z-5 flex items-end md:items-start justify-center p-6 md:p-12 "
                        role="dialog"
                        aria-modal="true"
                    >
                        {/* backdrop blur */}
                        <div
                            className="absolute inset-0 bg-[#0000003b]  backdrop-blur-sm "
                            onClick={() => setIsOpen(false)}
                        />

                        {/* panel */}
                        <div className="relative z-10 w-full max-w-6xl h-[80%] md:h-full">
                            {/* close */}


                            {/* scrollable images */}
                            <div
                                className="h-full w-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory flex gap-4 py-6"
                                style={{ scrollSnapType: "x mandatory" }}
                            >
                                {images.map((src, i) => (
                                    <div
                                        key={i}
                                        className="flex flex-shrink-0 w-full md:w-[90%] h-full  lg:w-[70%]  snap-center items-center  overflow-hidden shadow-xl"
                                    >
                                        <img
                                            src={src}
                                            alt={`Img - ${i}`}
                                            className="w-full h-64 md:h-auto  "
                                            draggable={false}
                                        />
                                    </div>
                                ))}

                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center justify-center absolute bottom-10 right-4 z-20 bg-white rounded-full px-3 py-2 shadow-md hover:cursor-pointer hover:bg-[#ffffffcb] w-[30px] h-[30px] md:w-[50px] md:h-[50px]"
                                    aria-label="Close gallery"
                                >
                                    ✕
                                </button>
                            </div>

                        </div>
                    </div>
                )
            }
        </div >
    );
}