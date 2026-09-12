import { createContext, useState } from "react";


export const userContext = createContext()

const ContextProvider = ({children}) => {

    const [userdata,Setuserdata] = useState({})


    return <userContext.Provider value={{userdata,Setuserdata}}>
        {children}
    </userContext.Provider>
}

export default ContextProvider