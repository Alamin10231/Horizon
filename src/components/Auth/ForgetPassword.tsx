
import forgetlogo from"../../assets/images/Vector (4).png"
import { Link } from 'react-router'
export const ForgetPassword = () => {
  return (
    <div className=' bg-[#F8FBED]'>

      <div className=' flex flex-col items-center justify-center min-h-screen  mx-auto'>
        <img src={forgetlogo} alt="" />
        <div>
          
          <h1 className='font-bold text-green text-5xl py-6 '>Forgot Your Password</h1>
        <p className='text-green text-xl text-center'>Enter your mail that we provide you a reset PIN</p>
        </div>
       <div className=''>
         <div className='pb-4 w-lg'>
              <label className="block text-xl py-2 font-medium text-[#60701E] dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="mt-1 w-full p-4 border rounded-sm bg-[#E8EECE] text-gray-900 dark:text-white dark:border-gray-700 focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>
        <button
              type="submit"
              className="w-full text-2xl bg-green hover:bg-green-600 text-white font-semibold py-3 rounded-full transition duration-300"
            >
              <Link to="/emailverification">Send Mail</Link>
            </button>
       </div>
      </div>
        

    </div>
  )
}
