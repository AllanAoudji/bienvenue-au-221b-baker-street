import { MouseEventHandler } from "react";
import ProfilePicture from "./ProfilePicture";
import ProfileInformation from "./ProfileInfo";
import ProfileSkills from "./profileSkills";
import ProfileKnowHow from "./ProfileKnowHow";
import ProfileLanguages from "./ProfileLanguages";
import ProfileHobbies from "./ProfileHobbies";
import ProfileExperiences from "./ProfileExperiences";
import ProfileName from "./ProfileName";
import ProfileTraining from "./ProfileTraining";

type Props = {
    onClick: MouseEventHandler<HTMLDivElement>;
    showProfile: boolean;
}

function Profile ({onClick, showProfile}: Props) {
    if (!showProfile) {
        return null;
    }
    

    return (
        <div className="bg-black bg-opacity-50 fixed inset-0">
            <div
                className="absolute bg-black bg-opacity-70 cursor-pointer inset-0"
                onClick={onClick}
            />
            <div className="absolute bg-white inset-y-0 left-0 overflow-auto p-4 text-black max-w-full md:max-w-none sm:p-7">
                <div className="flex justify-end">
                    <div onClick={onClick} className="cursor-pointer">X</div>
                </div>
                <div className="flex gap-x-4">
                    <div className="flex-0 w-32 sm:w-40">
                        <ProfilePicture />
                        <ProfileInformation />
                        <ProfileSkills />
                        <ProfileLanguages />
                        <ProfileKnowHow />
                        <ProfileHobbies />
                    </div>
                    <div className="w-96">
                        <ProfileName />
                        <ProfileExperiences />
                        <ProfileTraining />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Profile;