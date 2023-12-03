import { useContext } from "react";
import ProfileMocked from "./ProfileMocked";
import { ProfileInformationContext } from "@/ocntexts/ProfileInformations";
import ProfileHeader from "./ProfileHeader";
import ProfileSubHeader from "./ProfileSubHeader";
import ProfileRunningText from "./ProfileRunningText";

function ProfileSkills() {
    const {informations} = useContext(ProfileInformationContext);
    return (
        !!informations.skills ? <div className="mt-4">
            <ProfileHeader underline={false} title="Compétences" />

            <ProfileSubHeader title="Logiciels maîtrisés" />
            <ProfileRunningText className="mb-3">
                Photoshop, Illustrator,
                InDesign, Premier Pro,
                After Effect, Word, Excel,
                PowerPoint, Canva
            </ProfileRunningText>

            <ProfileSubHeader title="Langages informatiques" />
            <ProfileRunningText className="mb-3">
                HTML, CSS, Sass,
                JavaScript, Typescript
            </ProfileRunningText>

            <ProfileSubHeader title="Frameworks et librairies" />
            <ProfileRunningText>
                NodeJs, Jest, ExpressJS,
                React, React Native,
                NextJS 13, Sanity v3,
                TailwindCSS
            </ProfileRunningText>
        </div> : <ProfileMocked numOfLine={6} />
    )
}

export default ProfileSkills;