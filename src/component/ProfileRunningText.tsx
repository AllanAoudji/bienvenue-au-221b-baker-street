import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    className?: string;
}

function ProfileRunningText({children, className = ""}: Props) {
    return (
        <div className={className}>
            <p className="font-light text-xs sm:text-sm">{children}</p>
        </div>
    );
}

export default ProfileRunningText;