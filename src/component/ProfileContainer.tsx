"use client";

import { useCallback, useContext } from "react";
import ProfileButton from "./ProfileButton";
import Profile from "./Profile";
import { ProfileModalContext } from "@/ocntexts/ProfileModal";
import { ProfileInformationContext } from "@/ocntexts/ProfileInformations";

function ProfileContainer () {
    const {handleClose, handleOpen, open} = useContext(ProfileModalContext);
    const {closeNewInformation} = useContext(ProfileInformationContext);

    const handleClickOpen = useCallback(() => {
        handleOpen();
        closeNewInformation();
    }, [handleOpen, closeNewInformation])

    return (
        <>
            <ProfileButton onClick={handleClickOpen} />
            <Profile onClick={handleClose} showProfile={open} />
        </>
    )
}

export default ProfileContainer;