import { useContext } from "react";
import ProfileMocked from "./ProfileMocked";
import { ProfileInformationContext } from "@/ocntexts/ProfileInformations";
import ProfileHeader from "./ProfileHeader";
import ProfileRunningText from "./ProfileRunningText";

function ProfileKnowHow() {
    const {informations} = useContext(ProfileInformationContext)
    return (
        !!informations.knowHow ? <div className="mt-4">
            <ProfileHeader underline={false} title="Savoir-être" />
            <ProfileRunningText>
                Polyvalent, ambitieux,
                sens du relationnel,
                travail en équipe,
                autonome, empathique
            </ProfileRunningText>
        </div> : <ProfileMocked numOfLine={2} />
    )
}

export default ProfileKnowHow;