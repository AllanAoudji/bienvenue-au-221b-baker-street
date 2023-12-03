import Header from "@/component/Header";
import Wrapper from "@/component/Wrapper";
import ProfileInformationProvider from "@/ocntexts/ProfileInformations";
import ProfileModalProvider from "@/ocntexts/ProfileModal";

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <ProfileModalProvider>
            <ProfileInformationProvider>
                <Header />
                <Wrapper>{children}</Wrapper>
            </ProfileInformationProvider>
        </ProfileModalProvider>
    );
}