import { useContext } from "react";
import ProfileMocked from "./ProfileMocked";
import { ProfileInformationContext } from "@/ocntexts/ProfileInformations";
import ProfileHeader from "./ProfileHeader";
import ProfileSubHeader from "./ProfileSubHeader";
import ProfileRunningText from "./ProfileRunningText";

function ProfileLanguages() {
    const {informations} = useContext(ProfileInformationContext)
    return (
        !!informations.skills ? <div className="mt-4">
            <ProfileHeader underline={false} title="Langues" />
            <ProfileRunningText><span className="font-normal">Français | </span>Natif</ProfileRunningText>
            <ProfileRunningText><span className="font-normal">Anglais | </span>Compétence professionnelle complète</ProfileRunningText>
        </div> : <ProfileMocked numOfLine={2} />
    )
}

export default ProfileLanguages;