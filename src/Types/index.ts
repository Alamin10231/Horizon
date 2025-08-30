
import type { UserCredential } from "firebase/auth";
import type { ReactNode } from "react";

export interface NavLinkType {
  label: string;
  href?: string;
  dropdown?: { href: string; label: string }[];
}

export interface HeaderProps {
  image: string;
  title: React.ReactNode;
  subtitle: string | React.ReactNode;
  button?: { label: string; onClick?: () => void }[];
}
export interface Carddata {
  id: number;
  image: React.ReactNode | string;
  title: string | React.ReactNode;
  subtitle: React.ReactNode | string;
  color: string;
  category: string;
}
export interface Card {
  id: number;
  title: string;
  price: number;
  image: string;
}

export interface AuthContextType {
  User: string | null;
  loading: boolean;
  setUser: (User: string | null) => void;
  signin: (email: string, password: string) => Promise<UserCredential>;
  register:( email:string , password:string )=>Promise<UserCredential>
 
}
export interface AuthProviderprops {
  children: ReactNode;
}
