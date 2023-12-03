import { useContext } from "react";
import ProfileMocked from "./ProfileMocked";
import { ProfileInformationContext } from "@/ocntexts/ProfileInformations";
import ProfileHeader from "./ProfileHeader";
import ProfileRunningText from "./ProfileRunningText";
import ProfileSubHeader from "./ProfileSubHeader";

function ProfileTraining() {
    const {informations} = useContext(ProfileInformationContext)
    return (
        !!informations.training ? <div className="mt-4">
            <ProfileHeader title="Formations" />

            <div className="mt-2 mb-3">
                <ProfileRunningText>2019</ProfileRunningText>
                <ProfileSubHeader title="Diplôme National Supérieur d’Expression Plastique" />
                <ProfileRunningText>
                    option communication visuelle, Institut Supérieur des Beaux Arts de Besançon 
                </ProfileRunningText>
            </div>

            <div className="mb-3">
                <ProfileRunningText>2017</ProfileRunningText>
                <div className="flex gap-x-1 items-baseline">
                    <ProfileSubHeader title="Erasmus," />
                    <ProfileRunningText>
                        Bradford, Angleterre
                    </ProfileRunningText>
                </div>
            </div>

            <div className="mb-3">
                <ProfileRunningText>2016</ProfileRunningText>
                <ProfileSubHeader title="Licence Professionnelle, Métier de l’informatique : Application Web" />
                <ProfileRunningText>
                    Département des Métiers du Multimédia & de l’Internet de Montbéliard
                </ProfileRunningText>
            </div>

            <div className="mb-3">
                <ProfileRunningText>2015</ProfileRunningText>
                <ProfileSubHeader title="Diplôme National d’Art Plastique" />
                <ProfileRunningText>
                    option communication visuelle, Institut Supérieur des Beaux Art de Besançon
                </ProfileRunningText>
            </div>

            <div className="mb-3">
                <ProfileRunningText>2011</ProfileRunningText>
                <div className="flex gap-x-1 items-baseline">
                    <ProfileSubHeader title="Baccalauréat" />
                    <ProfileRunningText>
                        scientifique
                    </ProfileRunningText>
                </div>
                <ProfileRunningText>
                    Besançon France
                </ProfileRunningText>
            </div>
        </div> : <ProfileMocked numOfLine={14} />
    )
}

export default ProfileTraining;