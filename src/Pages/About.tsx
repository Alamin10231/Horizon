import { AboutHeader } from '@/components/AboutUs/AboutHeader'
import { Anyhelp } from '@/components/AboutUs/Anyhelp'
import { Cardsection } from '@/components/AboutUs/Cardsection'
import { Cost } from '@/components/AboutUs/cost'
import { ReviewSection } from '@/components/Home/ReviewCard '


export const About = () => {
  return (
 <>
    <div>
        <AboutHeader></AboutHeader>
    </div>
      <div>
   <Cost></Cost>
    </div>
    <div>
        <Cardsection></Cardsection>
    </div>
    <div>
            <ReviewSection></ReviewSection>
          </div>
          <div>
        <Anyhelp></Anyhelp>
          </div>
 </>
    
  )
}
