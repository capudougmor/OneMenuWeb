import React, { createContext, useState, useContext } from 'react'
const ProfileContext = createContext()

export const ProfileProvider = ({ children }) => {

  const [name, setName] = useState()

  return (
    <ProfileContext.Provider value={{name, setName}}>
      {children}
    </ProfileContext.Provider>
  );
} 

export function useProfile() {
  const context = useContext(ProfileContext)
  if (!context) throw new Error("useProfile must be used within a ProfilePrivider")
  const { name, setName } = context
  return { name , setName }
}
