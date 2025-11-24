"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Expand from '../../public/Expand.png'

export default function ExpandableImage({ images }: { images: string[] }) {
    const [open, setOpen] = useState(false);

    if (!open) {
        return (
            <div className="relative w-full h-auto  mt-15">
                <div className="relative h-full rounded overflow-hidden">
                    <Image src={images[0]} width='500' height='500' alt="" className="w-full h-auto rounded-b-2xl" />
                </div>

                <button
                    onClick={() => setOpen(true)}
                    className="hidden md:block absolute bottom-3 right-3 bg-white px-2 py-1 rounded shadow"
                >
                    <Image src={Expand} width='25' height='25' alt='expand button' />
                </button>
            </div>
        );
    }

    return (
        <div className="flex mt-15 overflow-x-auto gap-3 snap-x snap-mandatory pb-3 relative ">
            {images.map((src, i) => (
                <div key={i} className="relative w-full h-auto snap-center shrink-0 rounded-xl overflow-hidden">
                    <Image src={src} width='500' height='500' alt="hero image" className="w-full h-full rounded-b-2xl" />
                </div>
            ))}
            <button
                onClick={() => setOpen(false)}
                className="hidden md:block absolute bottom-3 right-3 bg-white px-2 py-1 rounded shadow"
            >
                <Image src={Expand} width='25' height='25' alt='expand button' />
            </button>
        </div>
    );
}