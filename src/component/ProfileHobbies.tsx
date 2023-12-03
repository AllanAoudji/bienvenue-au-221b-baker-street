"use client";

import { useContext } from "react";
import ProfileMocked from "./ProfileMocked";
import { ProfileInformationContext } from "@/ocntexts/ProfileInformations";
import ProfileHeader from "./ProfileHeader";
import ProfileRunningText from "./ProfileRunningText";

function ProfileHobbies() {
    const {informations} = useContext(ProfileInformationContext)

    return (
        !!informations.hobbies ? <div className="mt-4">
            <ProfileHeader underline={false} title="hobbies" />
            <ProfileRunningText>
                Lecture, cinéma,
                jeux vidéo, jeux de société,
                jeux de rôle, course à pied
            </ProfileRunningText>
        </div> : <ProfileMocked numOfLine={2} />
    )
}

export default ProfileHobbies;