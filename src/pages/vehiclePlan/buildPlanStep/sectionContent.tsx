import React from 'react'
import { GreetingComponent, InsurancePriceComponent, LicensePlateComponent, LinksComponent } from './components/InsurancePrice.components'
import { PriceInformationComponent } from './components/PriceInformation.component'
import { CoverageComponent } from './components/Coverage.component'

export default function SectionStep() {
  return (
    <section className="section_content">
        <div className="content_buildPlan">
          <LinksComponent />
          <div className='group_mobile'>
            <GreetingComponent />
            <LicensePlateComponent />
          </div>
          <InsurancePriceComponent />
          <hr />
          <CoverageComponent />
        </div>
        <PriceInformationComponent />
    </section>
  )
}