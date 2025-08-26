export interface NavLinkType {
       label:string,
       href?:string,
       dropdown?:{href:string,label:string} [];
} 

export interface HeaderProps{
       image:string;
       title:React.ReactNode;
       subtitle:string;
       button?:{label:string; onClick?:()=>void}[]
}
export interface Carddata {
  id: number;
  image: React.ReactNode | string;
  title: string | React.ReactNode;
  subtitle:  React.ReactNode | string ;  
  color: string;
  category:string
}


