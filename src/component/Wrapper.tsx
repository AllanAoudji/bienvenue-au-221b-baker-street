import { ReactNode } from "react"

type Props = {
    children: ReactNode;
}

function Wrapper ({children}: Props) {
    return (
        <div className="self-stretch">
            {children}
        </div>
    )
}

export default Wrapper;