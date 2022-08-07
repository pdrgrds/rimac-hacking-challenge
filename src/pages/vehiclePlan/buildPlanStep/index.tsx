import React from 'react'
import { HeaderContainer } from '@/components/header/header'
import { CoverageProvider } from '@/context/CoverageContext'
import SectionStep from './sectionStep'
import SectionContent from './sectionContent'
import './buildPlan.scss'
import './buildPlan.min.scss'

export default function BuildPlan() {
  return (
    <>
      <HeaderContainer />
      <div className="container_buildPlan container_custom">
        <SectionStep />
        <CoverageProvider>
          <SectionContent />
        </CoverageProvider>
      </div>
    </>
  )
}
