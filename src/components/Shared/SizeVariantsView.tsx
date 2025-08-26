import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import callingman from "../../assets/images/fluent_person-support-32-filled.svg";
// import downarrow from "../../assets/images/Ellipse 804.svg"
import { FaArrowUp } from "react-icons/fa6";

export const SizeVariantsView = () => {
  return (
    <div className="">
      <Dialog>
        <form>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="
    w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 
    rounded-full bg-green hover:bg-[#9DBF3B] hover:shadow-lg 
    transition  items-center justify-center  bottom-[610px] top-0  inline
  "
            >
              <img
                className="
      w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8
    "
                src={callingman}
                alt="Call"
              />
            </Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-[425px] bg-[#F8FAF0] ">
            <DialogHeader className="border-b pb-3 ">
              <DialogTitle>Chat with your assistance!</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 ">
              <div className="flex items-center justify-start gap-3 py-40">
                <Button
                  variant="outline"
                  className="
    w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12
    rounded-full bg-green hover:bg-[#9DBF3B] hover:shadow-lg
    transition flex items-center justify-center 
  "
                >
                  <img
                    className="
      w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6
    "
                    src={callingman}
                    alt="Call"
                  />
                </Button>
                <p>Your AI assistance ready to help you!</p>
              </div>
            </div>
            <DialogFooter>
              <div className="flex items-center justify-center  ">
                <input
                  className="w-full inline outline-none text-[#7E7E7E] text-start absolute right-0 left-4 "
                  id="username-1"
                  name="username"
                  defaultValue="Type here..."
                />
                <Button
                  variant="outline"
                  className="
    w-7 h-7  md:w-8 md:h-8 
    rounded-full bg-green hover:bg-[#9DBF3B] hover:shadow-lg 
    transition flex items-center justify-center 
  "
                >
                  <FaArrowUp className="text-white text-xs md:text-md " />
                </Button>
              </div>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
};
