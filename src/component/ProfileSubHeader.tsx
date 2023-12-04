type Props = {
    title: string;
}

function ProfileSubHeader({title}: Props) {
    return <h3 className="text-sm sm:text-base">{title}</h3>
}

export default ProfileSubHeader;