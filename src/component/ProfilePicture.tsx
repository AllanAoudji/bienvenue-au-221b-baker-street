"use client";

import { ProfileInformationContext } from "@/ocntexts/ProfileInformations";
import { useContext } from "react";
import Image from "next/image";

import PP from "../../public/PP_3 1Mo.png";

function ProfilePicture() {
    const {informations} = useContext(ProfileInformationContext);

    return (
        <div className="w-32 h-32 rounded-full bg-gray-200 overflow-hidden">
            {(!!informations.vuLEauDuSeau || !!informations.vuLesMiroirs) && <Image alt="photo de profile" className="w-full h-auto" src={PP} />}
        </div>
    )
}

export default ProfilePicture;