"use client";

import useLocalStorage from "@/hooks/useLocalStorage";
import Link from "next/link";
import { useCallback } from "react";

type Props = {
    text: string;
    to: string;
}

function ResponseButton ({text, to}: Props) {
    return (
        <Link
            className="border-2 border-white px-6 py-2 text-center font-light uppercase hover:bg-white hover:text-black transition-all duration-300"
            href={`/page/${to}`}
            replace={true}
        >
            {text}
        </Link>
    )
}

export default ResponseButton;