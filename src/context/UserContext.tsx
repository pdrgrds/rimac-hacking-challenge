import React, { createContext, useState } from 'react';

const userDefault = {
  "id": "",
  "name": "",
  "username": "",
  "email": "",
  "address": {
    "street": "",
    "suite": "",
    "city": "",
    "zipcode": "",
    "geo": {
      "lat": "",
      "lng": ""
    }
  },
  "phone": "",
  "website": "",
  "company": {
    "name": "",
    "catchPhrase": "",
    "bs": ""
  },
  "placa": ''
}

export const UserContext = createContext({
    user: userDefault,
    setUser: (userPropertie:any) => {},
    prices: {},
    setPrices: (data:any) => {}
});

export const UserProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState(userDefault)
    const [prices, setPrices] = useState({amount: 0, sumAssured: 0})

    return (
        <UserContext.Provider value={{
            user,
            setUser,
            prices,
            setPrices
        }}>
            { children }
        </UserContext.Provider>
    )
}