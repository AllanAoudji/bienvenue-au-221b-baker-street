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
}

type Informations = {
    profilePicture: boolean;
    experiences: boolean;
    hobbies: boolean;
    informations: boolean;
    knowHow: boolean;
    skills: boolean;
    training: boolean;

    observezParLaFenetre: boolean;
    visiterLAbysse: boolean;
    choixDeLaMontre: boolean;
    choixDuCarnet: boolean;
}

export type Information =
    "profilePicture" |
    "experiences" |
    "hobbies" |
    "informations" |
    "knowHow" |
    "skills" |
    "training" |

    "observezParLaFenetre" |
    "visiterLAbysse" |
    "choixDeLaMontre" |
    "choixDuCarnet";


const ProfileInformationContext = createContext<ContextType>({
    informations: {
        profilePicture: false,
        experiences: false,
        hobbies: false,
        informations: false,
        knowHow: false,
        skills: false,
        training: false,

        observezParLaFenetre: false,
        visiterLAbysse: false,
        choixDeLaMontre: false,
        choixDuCarnet: false,
    },
    updateInformations: () => false,
    newInformation: false,
    closeNewInformation: () => {},
});

function ProfileInformationProvider({children}: Props) {
    const [informations, setInformations] = useState<Informations>({
        profilePicture: false,
        experiences: false,
        hobbies: false,
        informations: false,
        knowHow: false,
        skills: false,
        training: false,

        observezParLaFenetre: false,
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
            information === "knowHow" ||
            information === "profilePicture" ||
            information === "skills" ||
            information === "training")
        {
            setNewInformation(true);
            return true;
        }

        return false;
    }, [informations]);

    const value = useMemo<ContextType>(() => ({
        informations,
        updateInformations,
        newInformation,
        closeNewInformation,
    }), [
        informations,
        updateInformations,
        newInformation,
        closeNewInformation,
    ])

    return (
        <ProfileInformationContext.Provider value={value}>
            {children}
        </ProfileInformationContext.Provider>
    )
}

export default ProfileInformationProvider;

export {ProfileInformationContext};