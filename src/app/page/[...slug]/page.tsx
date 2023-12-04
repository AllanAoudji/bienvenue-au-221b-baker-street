"use client";

import ContentText from "@/component/ContentText";
import { ProfileInformationContext } from "@/ocntexts/ProfileInformations";
import Link from "next/link";
import { useContext } from "react";

type Props = {
    params: {
        slug: string[];
    }
}

function Page ({params}: Props) {
    const {resetInformations} = useContext(ProfileInformationContext)

    if (params.slug[0] === 'end') {
        return (
            <div className="flex justify-center items-center h-screen flex-col">
                <div className="p-4 border-2 border-white mb-20">
                    <div className="p-4 border-2 border-white">
                        <div className="text-center border-2 bg-white text-black p-10 ">
                            <p className="text-2xl pb-4">Merci d&apos;avoir joué à</p>
                            <h1 className="italic text-4xl text-bold">Bienvenue au 221b Baker Street</h1>
                            <p className="text-2xl pt-10">J&apos;espère que cette aventure vous auras plu</p>
                        </div>
                    </div>
                </div>
                <Link
                    className="border-2 border-white px-6 py-2 text-center font-light uppercase hover:bg-white hover:text-black transition-all duration-300"
                    href="/page/1"
                    replace={true}
                    onClick={resetInformations}
                >
                    recommencer l&apos;aventure
                </Link>
            </div>
        )
    }

    return <ContentText contentId={params.slug[0]} />
}

export default Page;