import React from 'react';
import Header from '@/components/header/header';
import { Routes, Route, Navigate } from "react-router-dom";
import VehiclePlan from '@/pages/vehiclePlan';

const Main = (): JSX.Element => {

    return(
        <main>
            <Header />
            <Routes>
                <Route path="/" element={<VehiclePlan />}/>
                <Route path="*" element={<Navigate to="/" replace /> }/>
            </Routes>
        </main>
    )
};

export default Main;