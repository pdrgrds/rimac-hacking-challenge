import React, { useContext } from 'react'
import DataStep from './dataStep';
import BuildPlan from './buildPlanStep';
import MessageSuccess from './messageStep';
import { UserProvider } from '@/context/userContext';
import { StepProvider, StepContext } from '@/context/StepContext';

export default function VehiclePlan() {
  return (
    <UserProvider>
      <StepProvider>
        <VehiclePLan2 />
      </StepProvider>
    </UserProvider>
  )
}

function VehiclePLan2(){
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