import { createContext, useState } from 'react'

const UserContext = ({ children }) => {
    const UserDataContext = createContext();

    const [user, setUser] = useState({});

    setUser({
        fullname: {
            firstname: '',
            lastname: ''
        },
        email: ''
    })
    return (
        <>
            <UserDataContext.Provider value={user}>
                {children}
            </UserDataContext.Provider>
        </>
    )
}

export default UserContext
