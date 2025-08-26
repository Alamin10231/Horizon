
import registerpic from "../../src/assets/images/image (4).png";
import registerform from "../../src/assets/images/registerpic.png";
import AllEye from "../../src/assets/images/AiFillEye.svg";
import { Link } from "react-router";

export const Register = () => {
  return (
    <div className="flex min-h-screen">
      {/* Left side image */}
      <div className="hidden md:flex w-1/2 max-h-screen items-center justify-center">
        <img
          className="w-full h-screen object-cover"
          src={registerpic}
          alt="Register"
        />
      </div>

      {/* Right side form */}
      <div className="w-full md:w-1/2 max-h-screen flex items-center justify-center bg-[#F8FBED] dark:bg-black">
        <div className="w-full max-w-lg p-6">
          {/* Logo */}
          <img
            className="w-40 h-24 mx-auto mb-4"
            src={registerform}
            alt="Register Logo"
          />

          {/* Heading */}
          <h2 className="text-xl text-center text-[#60701E] dark:text-white mb-4">
            Register Now!
          </h2>

          {/* Form */}
          <form className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-xl py-2 font-medium text-[#60701E] dark:text-gray-300">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your Full Name"
                className="mt-1 w-full p-4 border rounded-sm bg-[#E8EECE] text-gray-900 dark:text-white dark:border-gray-700 focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-xl py-2 font-medium text-[#60701E] dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="mt-1 w-full p-4 border rounded-sm bg-[#E8EECE] text-gray-900 dark:text-white dark:border-gray-700 focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-xl py-2 font-medium text-[#60701E] dark:text-gray-300">
                Password
              </label>
              <div className="flex items-center border rounded-sm bg-[#E8EECE] dark:border-gray-700 focus-within:ring-2 focus-within:ring-green-500">
                <input
                  type="password"
                  placeholder="@#*%"
                  className="w-full p-4 bg-transparent outline-none text-gray-900 dark:text-white"
                />
                <button type="button" className="px-3 border-l-2 border-green">
                  <img src={AllEye} alt="Toggle Password" />
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-xl py-2 font-medium text-[#60701E] dark:text-gray-300">
                Confirm Password
              </label>
              <div className="flex items-center border rounded-sm bg-[#E8EECE] dark:border-gray-700 focus-within:ring-2 focus-within:ring-green-500">
                <input
                  type="password"
                  placeholder="@#*%"
                  className="w-full p-4 bg-transparent outline-none text-gray-900 dark:text-white"
                />
                <button type="button" className="px-3 border-l-2 border-green">
                  <img src={AllEye} alt="Toggle Password" />
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full text-2xl bg-green hover:bg-green-500 text-white font-semibold py-3 rounded-full transition duration-300"
            >
              Register
            </button>
          </form>

          {/* OR Divider */}
          <div className="flex items-center pt-4">
            <div className="flex-1 border-t border-green"></div>
            <span className="px-4 text-gray-500 text-sm">OR</span>
            <div className="flex-1 border-t border-green"></div>
          </div>

          {/* Continue with Google */}
          <div className="mt-6">
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-full py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="Google"
                className="w-6 h-6"
              />
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                Continue with Google
              </span>
            </button>
          </div>

          {/* Login link */}
          <p className="text-center text-md text-gray-600 dark:text-gray-400 mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-green font-medium hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
