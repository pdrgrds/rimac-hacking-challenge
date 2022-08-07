import React, { createContext, useState } from 'react';

const stepDefaultFocus = 1

export const StepContext = createContext({
    step: stepDefaultFocus,
    setStep: (step:number) => {}
});

export const StepProvider = ({ children }: { children: JSX.Element }) => {
    const [step, setStep] = useState(stepDefaultFocus)

    return (
        <StepContext.Provider value={{
            step,
            setStep
        }}>
            { children }
        </StepContext.Provider>
    )
}