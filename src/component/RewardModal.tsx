"use client"

import { Information, ProfileInformationContext } from "@/ocntexts/ProfileInformations";
import { ProfileModalContext } from "@/ocntexts/ProfileModal";
import { useCallback, useContext, useLayoutEffect, useRef, useState } from "react";

type Props = {
    reward?: Information;
}

function RewardModal ({reward}: Props) {
    const {handleOpen} = useContext(ProfileModalContext);
    const {updateInformations, closeNewInformation} = useContext(ProfileInformationContext);
    const [showModal, setShowModal] = useState<boolean>(false);
    const mounted = useRef<boolean>(true);

    const handleClick = useCallback(() => {
        handleOpen();
        closeNewInformation();
    }, [handleOpen, closeNewInformation])

    useLayoutEffect(() => {
        if (!mounted.current) {
            return;
        }

        if (!reward) {
            return;
        }
        const informationUpdated = updateInformations(reward);

        setShowModal(informationUpdated);

        mounted.current = false;

    }, [updateInformations, reward]);

    if (!showModal) {
        return null
    }

    return (
        <div className="mt-10 text-center italic font-light ">
            <p className="pb-3 text-2xl font-bold mb-2">Vous avez récupéré le souvenir de votre {reward}</p>
            <div className="p-2 border-2 border-white inline-block">
                <p onClick={handleClick} className="text-xl cursor-pointer inline-block font-light border-white border-2 px-5 py-2 transition-all duration-300 text-white hover:bg-white hover:text-black">
                    Consultez votre profil pour le voir
                </p>
            </div>
        </div>
    );
}

export default RewardModal;