"use client";

import ContentText from "@/component/ContentText";

type Props = {
    params: {
        slug: string[];
    }
}

function Page ({params}: Props) {
    return <ContentText contentId={params.slug[0]} />
}

export default Page;