import React, { useContext } from 'react'
import DataStep from './dataStep';
import BuildPlan from './buildPlanStep';
import MessageSuccess from './messageStep';
import { UserProvider } from '@/context/UserContext';
import { StepProvider, StepContext } from '@/context/StepContext';

export default function VehiclePlan() {
  return (
    <UserProvider>
      <StepProvider>
        <VehiclePLanLogic />
      </StepProvider>
    </UserProvider>
  )
}

function VehiclePLanLogic(){
  const { step } = useContext(StepContext);
  console.log(step);
  return(
    <>
      { step === 1 && <DataStep /> }
      { step === 2 && <BuildPlan /> }
      { step === 3 && <MessageSuccess /> }
    </>
  )
}