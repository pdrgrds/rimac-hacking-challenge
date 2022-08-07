import React, { createContext, useState } from 'react';

const coverageDefaultFocus: any[] = []
const dataChoque = {key: 2, price: 20};
const minPrice = 12500;
const maxPrice = 16500;
const priceDesactiveChoque = 16000;

export const CoverageContext = createContext({
    coverage: coverageDefaultFocus,
    setCoverage: (coverage:any) => {},
    amount: 14300,
    setAmount: (amount: number) => {}
});

export const CoverageProvider = ({ children }: { children: JSX.Element }) => {
    const [coverage, setCoverage] = useState(coverageDefaultFocus)
    const [amount, setAmount] = useState(14300);
    const onChange = (list:any[]) =>  setCoverage((prev) => ([...list]));

    const preSetCoverage = (item:any) => {
        let preCoverage = coverage;

        if(dataChoque.key === item.key && amount >= priceDesactiveChoque) return; 

        const findedIndex = preCoverage.findIndex(coverageItem => coverageItem.key === item.key);
        if(findedIndex >= 0) {
            const newList = preCoverage.filter((coverageItem) => coverageItem.key !== item.key  )
            preCoverage = newList;
        }
        else 
            preCoverage.push(item)

        onChange(preCoverage)
    }

    const preSetAmount = (newAmount:any) => {
        if(newAmount < minPrice) return;
        if(newAmount > maxPrice) return;

        if(newAmount >= priceDesactiveChoque)
            onChangeChoque(false);
        //else 
            //onChangeChoque(true)
        
        setAmount(newAmount)
    }

    const onChangeChoque = (active: boolean) => {
        let preCoverage = coverage;
        const findedIndex = preCoverage.findIndex(coverageItem => coverageItem.key === dataChoque.key);
        if(active){
            if(findedIndex >= 0) return;
            preCoverage.push(dataChoque)
        } else {
            if(findedIndex === -1) return;
            const newList = preCoverage.filter((coverageItem) => coverageItem.key !== dataChoque.key  )
            preCoverage = newList;
        }

        onChange(preCoverage)
    }

    return (
        <CoverageContext.Provider value={{
            coverage,
            setCoverage: preSetCoverage,
            amount,
            setAmount: preSetAmount
        }}>
            { children }
        </CoverageContext.Provider>
    )
}