import ProfileContainer from "./ProfileContainer";

function Header () {
    return <div className=" flex items-center justify-end px-8 py-6 fixed inset-x-0 top-0">
        <ProfileContainer />
    </div>
}

export default Header;