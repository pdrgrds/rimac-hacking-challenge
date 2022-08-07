import React, { useContext } from "react";
import { StepContext } from '@/context/StepContext'

interface IStep {
    stepNumber: number; 
    title: string; 
    active: boolean;
}

const groupSteps: IStep[] = [
    { stepNumber: 1, title: 'Datos', active: false },
    { stepNumber: 2, title: 'Arma tu plan', active: true }
]

export default function SectionStep() {
  return <section className="section_steps">
    <div className="list_step">
        {
            groupSteps.map((itemStep, index) => <ComponentStep itemStep={itemStep} isItLast={(index+1) === groupSteps.length} key={itemStep.stepNumber}/>)
        }
    </div>
  </section>
}

/* */

interface IComponentStep {
    itemStep: IStep; 
    isItLast: boolean
}

const ComponentStep = ({itemStep, isItLast}: IComponentStep) => {
    const { setStep } = useContext(StepContext);
    const beforeClick = () => {
        if(itemStep.active) return;
        setStep(itemStep.stepNumber);
    }
    
    return (
        <>
            <div className={`step_item ${itemStep.active ? 'step_item--active' : ''}`} onClick={beforeClick}>
                <div className='circle'>{itemStep.stepNumber}</div>
                <label>{itemStep.title}</label>
                { !isItLast && <div className='line'/> }
            </div>
        </>
    )
}