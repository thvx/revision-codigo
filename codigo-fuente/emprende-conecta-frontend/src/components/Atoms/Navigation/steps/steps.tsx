import React from "react";

type StepsProps = {
    numPages: number,
    actualPage: number,
    stepsText: string[]
}

const Steps: React.FC<StepsProps> = ({ numPages, actualPage, stepsText }) => {
    const steps = []
    for(let i=0; i<numPages; i++){
        steps.push(
            <li key={i} className={`step ${i+1 <= actualPage ? 'step-neutral' : ''}`}>{stepsText[i]}</li>
        )
    }
    return (
        <ul className="steps">
            {steps}
        </ul>
    )
}

export default Steps