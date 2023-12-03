"use client";

import { useContext } from "react";
import ResponseButton from "./ResponseButton";
import { Information, ProfileInformationContext } from "@/ocntexts/ProfileInformations";

type ResponseProps = {
    text: string;
    id: string;
    to: string;
    condition?: {
        need?: Information[];
        not?: Information[];
    }
}

type Props = {
    responses: ResponseProps[]
}

function ResponsesContainer ({responses}: Props) {
    const {informations} = useContext(ProfileInformationContext);

    return (
        <div className="flex gap-2 flex-col mt-20 flex-wrap mb-20">
            {responses.filter((response) => {
                let show = true;

                if (!response.condition || (!response.condition.need && !response.condition.not)) {
                    show = true;
                }

                if (!!response.condition && !!response.condition.not && !!response.condition.not.length) {
                    response.condition.not.forEach((not) => {
                        if (!!informations[not]) {
                            show = false;
                            return;
                        }
                    });
                }

                return show;
            }).map((response) => <ResponseButton
                key={response.id}
                text={response.text}
                to={response.to} />)}
        </div>
    )
}

export default ResponsesContainer;