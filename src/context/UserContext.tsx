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
    }
}

export const UserContext = createContext({
    user: {},
    setUser: (userPropertie:any) => {}
});

export const UserProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState(userDefault)

    return (
        <UserContext.Provider value={{
            user,
            setUser
        }}>
            { children }
        </UserContext.Provider>
    )
}