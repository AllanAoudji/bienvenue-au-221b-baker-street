"use client";

import { useContext } from "react";
import ProfileMocked from "./ProfileMocked";
import { ProfileInformationContext } from "@/ocntexts/ProfileInformations";
import ProfileHeader from "./ProfileHeader";
import ProfileSubHeader from "./ProfileSubHeader";
import ProfileRunningText from "./ProfileRunningText";


function ProfileExperiences() {
    const {informations} = useContext(ProfileInformationContext);

    return (
        !!informations.experiences ? <div className="mb-10">
            <ProfileHeader title="Expériences" />
            <div className="mt-2 mb-3">
                <ProfileRunningText>2023</ProfileRunningText>
                <ProfileSubHeader title="Création du site Les Suivants de la Vouivre" />
                <ProfileRunningText className="pl-12">
                    Wireframe, maquette, design system, direction artistique, logo,
                    développement et intégration, SEO, rédaction d’articles et création
                    de visuel. Mise en place d’outils d’UX design modernes et cohérents
                    pour la réalisation du jeu de rôle.{" "}
                    <a
                        className="duration-300 transition-all hover:text-blue-800"
                        target="_blank"
                        href="https://lessuivantsdelavouivre.vercel.app"
                    >
                        lessuivantsdelavouivre.vercel.app 
                    </a>
                </ProfileRunningText>
                <ProfileRunningText className="pl-12">
                    Technologies principales : NextJS 13, Sanity v3, TailwindCSS.
                </ProfileRunningText>
            </div>

            <div className="mb-3">
                <ProfileRunningText>2021 - 2023</ProfileRunningText>
                <ProfileSubHeader title="Graphiste print & numérique/webdesigner/pigiste freelance" />
                <ProfileRunningText className="pl-12">
                    Réalisation d’objets imprimés, de refontes et de modernisations graphiques, d’outils de communication adaptés, et de conception d’identités visuelles, mise en place d’outil d’UX design.
                </ProfileRunningText>
            </div>

            <div className="mb-3">
                <ProfileRunningText>2021 - 2023</ProfileRunningText>
                <ProfileSubHeader title="Montage de vidéos pour l’Éducation Nationale" />
                <ProfileRunningText className="pl-12">
                    Dérushage, Montage et habillage visuel et sonore pour les épreuves
                    de baccalauréat en langue vivante de lycées professionnelles.
                </ProfileRunningText>
            </div>

            <div className="mb-3">
                <ProfileRunningText>juin - septembre 2018</ProfileRunningText>
                <ProfileSubHeader title="Stage assistant graphique à My Little Paris" />
                <ProfileRunningText className="pl-12">
                    Assistant graphique pour les médias Tapage et Boldie, Créations
                    visuelles pour les réseaux sociaux et les newsletters des différents
                    médias, veilles graphiques, photo shooting.
                </ProfileRunningText>
            </div>

            <div className="mb-3">
                <ProfileRunningText>2017</ProfileRunningText>
                <ProfileSubHeader title="Création du site web pour la graphiste Ivana Serra" />
                <ProfileRunningText className="pl-12">
                    <a
                        className="duration-300 transition-all hover:text-blue-800"
                        target="_blank"
                        href="http://ivanaserra.fr"
                    >
                        ivanaserra.fr 
                    </a>
                    , Technologie utilisée : Wordpress
                </ProfileRunningText>
            </div>

            <div>
                <ProfileRunningText>Mars - avril 2016</ProfileRunningText>
                <ProfileSubHeader title="Stage pour l’association artistique Mono-Mono" />
                <ProfileRunningText className="pl-12">
                    Développement d’une plateforme de communication numérique autour d’une exposition éphémère au Champ de Verdun.
                </ProfileRunningText>
            </div>

        </div> : <ProfileMocked numOfLine={14} />
    )
}

export default ProfileExperiences;