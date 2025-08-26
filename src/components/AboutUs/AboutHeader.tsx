

import headerpic from "../../assets/images/image (14).png"
import { Header } from '../Header/Header'
import { SizeVariantsView } from '../Shared/SizeVariantsView'
// import { Header } from '../Header/Header'

export const AboutHeader = () => {
  return (
    <div>
    <Header 
    image={headerpic}
   title = {
        <>
       <p className='max-w-2xl leading-snug'> Driving Quality <span className='text-green'>Durability,</span> and Customer Satisfaction</p>
        
        </>
   }
   subtitle= "we’re committed to delivering premium fencing solutions that stand the test of time. Our focus on superior materials, expert craftsmanship, and customer-first service ensures"
    button={[
            {
              label: "Shop Now",
              onClick: () => console.log("Explore clicked"),
            },
            {
              label: "Order Free Sample",
              onClick: () => console.log("Sample clicked"),
            },
          ]}
    
    />
    <div className='sizevarient'>
        <SizeVariantsView></SizeVariantsView>
    </div>
    </div>
  )
}
