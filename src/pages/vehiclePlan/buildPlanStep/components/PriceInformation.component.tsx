import React, { useContext } from 'react'
import { StepContext } from '@/context/StepContext'
import { CoverageContext } from '@/context/CoverageContext'
import { UserContext } from '@/context/UserContext'
import './priceInformation.scss'

export const PriceInformationComponent = () => {
    const { setStep } = useContext(StepContext);
    const { coverage, amount } = useContext(CoverageContext);
    const { setPrices } = useContext(UserContext);
    let total = coverage.reduce((a, b) => a + b.price, 0) + 20;
    const onSubmit = () => {
        setStep(3);
        setPrices({amount, sumAssured: total})
    }

    return(
        <div className='content_priceInformation content_priceInformation_mobile'>
            <div className='priceInformation_text'>
                <p>MONTO</p>
                <h1>${total}.00</h1>
                <span>mensuales</span>
            </div>
            <hr />
            <div className='plans'>
                <h2>El precio incluye</h2>
                <ul>
                    <li> Llanta de respuesto</li>
                    <li> Analisis de motor</li>
                    <li> Aros gratis</li>
                </ul>
            </div>
            <button onClick={onSubmit}> LO QUIERO </button>
        </div>
    )
}