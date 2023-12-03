import useContent from "@/hooks/useContent";
import ResponsesContainer from "./ResponsesContainer";
import RewardModal from "./RewardModal";

type Props = {
    contentId: string;
}

function ContentText ({contentId}: Props) {
    const content = useContent(contentId);

    if (!content) {
        return null;
    }

    return (
        <div className="max-w-3xl px-8 mt-56 mx-auto">
            <div className="border-b-2 border-white pb-6">
                <p>{content.text}</p>
            </div>
            <RewardModal reward={content.rewardId} />
            <ResponsesContainer responses={content.responses} />
        </div>
    )
}

export default ContentText;