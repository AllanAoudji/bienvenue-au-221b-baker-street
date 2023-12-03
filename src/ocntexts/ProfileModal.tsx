"use client";

import { ReactNode, createContext, useCallback, useMemo, useState } from "react";

type Props = {
    children: ReactNode;
}

type ContextType = {
    open: boolean;
    handleOpen: () => void;
    handleClose: () => void;
}

const ProfileModalContext = createContext<ContextType>({
    open: false,
    handleOpen: () => {},
    handleClose: () => {},
});

function ProfileModalProvider({children}: Props) {
    const [open, setOpen] = useState<boolean>(false);

    const handleClose = useCallback(() => setOpen(false), []);
    const handleOpen = useCallback(() => setOpen(true), []);

    const value = useMemo(() => ({
        open,
        handleClose,
        handleOpen
    }), [
        open,
        handleClose,
        handleOpen
    ]);

    return (
        <ProfileModalContext.Provider value={value}>
            {children}
        </ProfileModalContext.Provider>
    )
}

export default ProfileModalProvider;

export {ProfileModalContext};