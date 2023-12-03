import { ProfileInformationContext } from "@/ocntexts/ProfileInformations";
import { useContext } from "react";
import ProfileHeader from "./ProfileHeader";

function ProfileName() {
    const {informations} = useContext(ProfileInformationContext)
    return (
        <div className="h-32">
            {!!informations.informations ? <div>
                <h1 className="font-extrabold text-5xl">Allan Aoudji</h1>
                <ProfileHeader underline={false} title="graphiste multimédia" />
            </div> : <div className="bg-gray-300 h-10 rounded-md mt-6" />}
        </div>
    )
}

export default ProfileName;