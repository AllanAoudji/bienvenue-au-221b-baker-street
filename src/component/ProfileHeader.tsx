type Props = {
    title: string;
    underline?: boolean;
}

function ProfileHeader({title, underline = true}: Props) {
    return <h2 className={`font-black text-lg border-black sm:text-xl ${underline ? "border-b-2 mb-2" : ""}`}>{title}</h2>
}

export default ProfileHeader;