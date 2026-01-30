'use client';
import Image from 'next/image';

export default function Loading() {
    return (
        <div className="absolute inset-0 w-full h-full z-[1400] flex justify-center items-center pointer-events-none">
            <Image
                src="/icon/redactor-ai-loading.svg"
                height="39"
                width="39"
                alt={'loading'}
                className="otu_loading mx-auto z-[1500]"
            ></Image>
        </div>
    );
}
