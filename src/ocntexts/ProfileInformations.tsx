"use client";

import { ReactNode, createContext, useCallback, useMemo, useState } from "react";

type Props = {
    children: ReactNode;
}

type ContextType = {
    informations: Informations;
    updateInformations: (inforamtion: Information) => boolean;
    newInformation: boolean;
    closeNewInformation: () => void;
    resetInformations: () => void,
}

type Informations = {
    profilePicture: boolean;
    experiences: boolean;
    hobbies: boolean;
    informations: boolean;
    skills: boolean;
    training: boolean;

    observezParLaFenetre: boolean;
    vuLEauDuSeau: boolean;
    vuLesMiroirs: boolean;
    visiterLAbysse: boolean;
    choixDeLaMontre: boolean;
    choixDuCarnet: boolean;
}

export type Information =
    "profilePicture" |
    "experiences" |
    "hobbies" |
    "informations" |
    "skills" |
    "training" |

    "observezParLaFenetre" |
    "vuLEauDuSeau" |
    "vuLesMiroirs" |
    "visiterLAbysse" |
    "choixDeLaMontre" |
    "choixDuCarnet";


const ProfileInformationContext = createContext<ContextType>({
    informations: {
        profilePicture: false,
        experiences: false,
        hobbies: false,
        informations: false,
        skills: false,
        training: false,
        
        observezParLaFenetre: false,
        vuLEauDuSeau: false,
        vuLesMiroirs: false,
        visiterLAbysse: false,
        choixDeLaMontre: false,
        choixDuCarnet: false,
    },
    updateInformations: () => false,
    newInformation: false,
    closeNewInformation: () => {},
    resetInformations: () => {}
});

function ProfileInformationProvider({children}: Props) {
    const [informations, setInformations] = useState<Informations>({
        profilePicture: false,
        experiences: false,
        hobbies: false,
        informations: false,
        skills: false,
        training: false,

        observezParLaFenetre: false,
        vuLEauDuSeau: false,
        vuLesMiroirs: false,
        visiterLAbysse: false,
        choixDeLaMontre: false,
        choixDuCarnet: false,
    });

    const [newInformation, setNewInformation] = useState<boolean>(false);
    const closeNewInformation = useCallback(() => setNewInformation(false), []);

    const updateInformations = useCallback((information: Information) => {
        if (!(information in informations) || informations[information]) {
            return false;
        }

        setInformations((prevState) => ({
            ...prevState,
            [information]: true,
        }));
        if (
            information === "experiences" ||
            information === "hobbies" ||
            information === "informations" ||
            information === "profilePicture" ||
            information === "vuLEauDuSeau" ||
            information === "vuLesMiroirs" ||
            information === "skills" ||
            information === "training")
        {
            setNewInformation(true);
            return true;
        }

        return false;
    }, [informations]);

    const resetInformations = useCallback(() =>  {
        setInformations({
            profilePicture: false,
            experiences: false,
            hobbies: false,
            informations: false,
            skills: false,
            training: false,
            
            observezParLaFenetre: false,
            vuLEauDuSeau: false,
            vuLesMiroirs: false,
            visiterLAbysse: false,
            choixDeLaMontre: false,
            choixDuCarnet: false,
        })
    }, [])

    const value = useMemo<ContextType>(() => ({
        informations,
        updateInformations,
        newInformation,
        closeNewInformation,
        resetInformations,
    }), [
        informations,
        updateInformations,
        newInformation,
        closeNewInformation,
        resetInformations
    ])

    return (
        <ProfileInformationContext.Provider value={value}>
            {children}
        </ProfileInformationContext.Provider>
    )
}

export default ProfileInformationProvider;

export {ProfileInformationContext};