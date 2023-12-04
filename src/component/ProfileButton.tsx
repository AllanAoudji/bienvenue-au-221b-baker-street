import { ProfileInformationContext } from "@/ocntexts/ProfileInformations";
import { MouseEventHandler, useContext } from "react";

type Props = {
    onClick: MouseEventHandler<HTMLDivElement>;
}

function ProfilButton ({onClick}: Props) {
    const {newInformation} = useContext(ProfileInformationContext);
    
    return (
        <div className="relative">
            <div
                className="bg-white border-2 border-white cursor-pointer duration-300 px-4 py-1 rounded-sm text-black text-sm uppercase transition-all hover:bg-transparent hover:text-white sm:text-base sm:px-5 sm:py-2"
                onClick={onClick}
            >
                Voir le profil
            </div>
            {newInformation && (
                <div className="absolute top-0 right-0 text-black mt-14 w-auto cursor-pointer text-sm sm:mt-20 sm:text-base" onClick={onClick}>
                    <div className="bg-white w-64 p-5 relative rounded-md">
                        <div className="w-4 h-4 bg-white absolute top-0 rotate-45 -translate-y-1/2 right-4" />
                        <p className="pb-3 sm:pb-4">De nouvelles informations sont disponibles</p>
                        <p className="italic">Cliquez ici pour les voir</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProfilButton;