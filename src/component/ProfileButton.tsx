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
                className="bg-white border-2 border-white cursor-pointer duration-300 px-5 py-2 rounded-sm text-black uppercase transition-all hover:bg-transparent hover:text-white"
                onClick={onClick}
            >
                Voir le profil
            </div>
            {newInformation && (
                <div className="absolute top-0 right-0 text-black mt-20 w-auto cursor-pointer" onClick={onClick}>
                    <div className="bg-white w-64 p-5 relative rounded-md">
                        <div className="w-4 h-4 bg-white absolute top-0 rotate-45 -translate-y-1/2 right-4" />
                        <p className="border-b-2 border-black pb-2 mb-4">De nouvelles informations sont disponibles</p>
                        <p className="italic">Cliquez ici pour les voir</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProfilButton;