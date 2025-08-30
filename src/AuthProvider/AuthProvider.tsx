// import { createContext, useState, type ReactNode } from "react";
// import { auth } from '../Firebase.init';
import type { AuthContextType, AuthProviderprops } from "@/Types";
import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {auth} from '../../Firebase.init'
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<AuthProviderprops> = ({ children }) => {

        // const auth = getAuth()
  const [User, setUser] = useState<string | null>(null);
  const [loading, setloading] = useState<boolean>(true);

    const signin = (email:string,password:string)=>{
      setloading(true)
      return signInWithEmailAndPassword(auth,email,password)
    }
  const register = (email: string, password: string) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  
  const authInfo = {
    User,
    loading,
    setUser,
    signin,
    register,
  };
  return (
    <AuthContext.Provider value ={authInfo}>{children}</AuthContext.Provider>
  );
};
