import { useContext } from "react";
import ProfileMocked from "./ProfileMocked";
import { ProfileInformationContext } from "@/ocntexts/ProfileInformations";
import ProfileHeader from "./ProfileHeader";
import ProfileRunningText from "./ProfileRunningText";

function ProfileInformation() {
    const {informations} = useContext(ProfileInformationContext)

    return (
        !!informations.informations ? <div className="mt-4">
            <ProfileHeader underline={false} title="Adresse" />
            <ProfileRunningText>7 rue de Vesoul,</ProfileRunningText>
            <ProfileRunningText>25000 Besançon, France</ProfileRunningText>

            <ProfileHeader underline={false} title="E-mail" />
            <ProfileRunningText>
                <a
                    className="duration-300 transition-all hover:text-blue-800"
                    href="mailto:allan.aoudji@gmail.com"
                >
                    allan.aoudji@gmail.com
                </a>
            </ProfileRunningText>

            <ProfileHeader underline={false} title="Téléphone" />
            <ProfileRunningText>
                <a
                    className="duration-300 transition-all hover:text-blue-800"
                    href="tel:0674289219"
                >
                    06.74.28.92.19
                </a>
            </ProfileRunningText>

            <ProfileHeader underline={false} title="Site web" />
            <ProfileRunningText>
                <a
                    className="duration-300 transition-all hover:text-blue-800"
                    target="_blank"
                    href="https://allan-aoudji.vercel.app"
                >
                    allan-aoudji.vercel.app
                </a>
            </ProfileRunningText>

            <div className="flex gap-x-2 items-baseline">
                <ProfileHeader underline={false} title="Permis" />
                <ProfileRunningText>B</ProfileRunningText>
            </div>

        </div> : <ProfileMocked title={false} numOfLine={6} />
    )
}

export default ProfileInformation;