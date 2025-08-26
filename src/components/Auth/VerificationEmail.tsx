
import emailconfirm from"../../assets/images/Vector (5).png"
export const VerificationEmail = () => {
  return (
<div className=' bg-[#F8FBED]'>

      <div className=' flex flex-col items-center justify-center min-h-screen  mx-auto'>
        <img src={emailconfirm} alt="" />
        <div>
          
          <h1 className='font-bold text-green text-5xl py-6 '>Verify Your Mail</h1>
        <p className='text-green text-xl text-center max-w-xs'>We’ve sent a verification code to jef@gmail.com</p>
        </div>
       <div className=''>
         <div className='pb-4 w-lg my-10 space-x-4 items-center text-center'>
             <div className="px-7 text-center bg-green inline py-6 text-white text-2xl rounded-sm"> 1</div>
             <div className="px-6 text-center bg-green inline py-6 text-white text-2xl rounded-sm"> 2</div>
             <div className="px-6 text-center bg-green inline py-6 text-white text-2xl rounded-sm"> 3</div>
             <div className="px-6 text-center bg-green inline py-6 text-white text-2xl rounded-sm"> 4</div>            
            </div>
        <button
              type="submit"
              className="w-full text-2xl bg-green hover:bg-green-600 text-white font-semibold py-3 rounded-full transition duration-300"
            >
             Confirm
            </button>
       </div>
      </div>
        

    </div>
  );
};


