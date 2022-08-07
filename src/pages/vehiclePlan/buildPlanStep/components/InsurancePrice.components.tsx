import React, { useContext } from 'react'
import BuildPlanStep from '@/assets/images/image-buildPlan-step.svg'
import './insurancePrice.scss'
import { CoverageContext } from '@/context/CoverageContext'
import { UserContext } from '@/context/UserContext'
import { StepContext } from '@/context/StepContext'

export const LinksComponent = () => {
    const { setStep } = useContext(StepContext)
    return(
        <div className='links' onClick={() => setStep(1)}>
            <div className='circle'>&#x2039;</div>
            <span> VOLVER </span>
        </div>
    )
}

export const GreetingComponent = () => {
    const { user } = useContext(UserContext);
    return(
        <div className='greeting'>
            <h3>¡Hola, <span> {user?.username}!</span></h3>
            <p> Conoce las coberturas de tu plan </p>
        </div>
    )
}

export const LicensePlateComponent = () => {
    const { user } = useContext(UserContext);
    return(
        <div className='licensePlate'>
            <p>
                <span> Placa: {user.placa} </span>
                Wolkswagen 2019 Golf
            </p>
            <img src={BuildPlanStep} alt='person ok' />
        </div>
    )
}

const minPrice = 12500
const maxPrice = 16500

export const InsurancePriceComponent = () => {
    const { amount, setAmount } = useContext(CoverageContext);
    let dollarUSLocale = Intl.NumberFormat('en-US');

    return(
        <div className='insurancePrice'>
            <div className='info_text'>
                <p> Indica la suma asegurada </p>
                <span> MIN $ {dollarUSLocale.format(minPrice)} </span> 
                <span> | </span>
                <span> MAX $ {dollarUSLocale.format(maxPrice)} </span>
            </div>
            <div className='btn_price'>
                <button disabled={minPrice === amount} onClick={() => setAmount(amount - 100)}>-</button>
                <span> $ {dollarUSLocale.format(amount)} </span>
                <button disabled={maxPrice === amount} onClick={() => setAmount(amount + 100)}>+</button>
            </div>
        </div>
    )
}
