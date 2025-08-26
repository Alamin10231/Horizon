
import { Header } from '../Header/Header'
import Productcvr from "../../assets/images/productcvr.png"


export const Pheader = () => {
  return (
    <div className=''>
        <Header
        image={Productcvr}
       title={
          <>
            <h1 className='text-nowrap not-italic'>
              Fencing <span className="text-green">List</span>
            </h1>
          </>
        }
        subtitle={
  <div className="flex items-center justify-center">
    <h1 className="md:max-w-7xl text-start leading-relaxed">
      Our horizontal, double-sided fence system was specifically designed 
      to be the last fence you'll ever need. It provides the strength and 
      endurance of aluminum with the durability and low maintenance...
    </h1>
  </div>
}

              
        
        button={[
          {
            label: "Shop Now",
          },
          
        ]}
      ></Header>
    </div>
  )
}
