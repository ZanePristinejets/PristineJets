import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Form() {
  return (
    <div className="bg-gray-100 backdrop-blur-sm p-8 md:p-12 shadow-2xl max-w-2xl w-full mx-auto">
      <h2 className="font-serif text-2xl lg:text-3xl font-light tracking-[8px] text-gray-800 mb-6 text-center">
        GET IN TOUCH
      </h2>

      <form className="space-y-4 sm:space-y-5 w-full">
        {/* Name Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
          <div className="w-full">
            <Input
              type="text"
              placeholder="First Name"
              className="w-full bg-white border-gray-300 h-11 text-gray-700 placeholder:text-gray-500 text-base"
            />
          </div>
          <div className="w-full">
            <Input
              type="text"
              placeholder="Last Name"
              className="w-full bg-white border-gray-300 h-11 text-gray-700 placeholder:text-gray-500 text-base"
            />
          </div>
        </div>

        {/* Email and Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
          <div className="w-full">
            <Input
              type="email"
              placeholder="Email Address"
              className="w-full bg-white border-gray-300 h-11 text-gray-700 placeholder:text-gray-500 text-base"
            />
          </div>
          <div className="w-full">
            <Input
              type="tel"
              placeholder="Phone Number"
              className="w-full bg-white border-gray-300 h-11 text-gray-700 placeholder:text-gray-500 text-base"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <Textarea
            placeholder="Message"
            rows={5}
            className="w-full bg-white border-gray-300 text-gray-700 placeholder:text-gray-500 resize-none text-base"
          />
        </div>

        {/* Submit button */}
        <div className="flex justify-center pt-3">
          <button
            type="submit"
            className="bg-[#bd843b] hover:bg-[#a76c3b] hover:cursor-pointer text-white w-full sm:w-auto px-7 py-2.5 h-auto text-sm tracking-[3px] transition-all duration-300"
          >
            CONTACT US
          </button>
        </div>
      </form>
    </div>
  );
}
