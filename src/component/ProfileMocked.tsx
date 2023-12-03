type Props = {
    numOfLine?: number;
    title?: boolean;
}

function ProfileMocked({numOfLine = 3, title = true}: Props) {
    return (
        <div className="mt-4">
            {title && <div className="bg-gray-300 h-6 rounded-md" />}
            {[...Array(numOfLine)].map((_, i) =>
                <div className="bg-gray-200 h-4 rounded-md mt-1" key={i} />
            )}
        </div>
    )
}

export default ProfileMocked;