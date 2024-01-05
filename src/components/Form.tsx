import { useState, FormEvent } from "react";
import { User } from "../types/User";
import { validate } from "../utils/validate";

const Form = () => {
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);

  const [errors, setErrors] = useState<User | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setErrors(null);

    const data: User = {
      email,
      agree,
    };

    const validateErrors = validate(data);

    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
      return;
    }

    setEmail("");
    setAgree(false);

    alert("Thank you for subscribing!");
  };

  return (
    <form className="flex flex-col gap-3 mt-6 w-full" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <div className="flex gap-2">
          <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
          <label className="text-xs text-[#D4CECE]" htmlFor="agree">
            I accept and agree to the
            <a href="#" className="ml-1 underline">
              Terms of service
            </a>
            .
          </label>
        </div>
        {errors?.agree && (
          <small className="text-xs text-red-500 mt-1 font-rubik">{errors?.agree}</small>
        )}
      </div>
      <div className="flex flex-col">
        <div className="flex">
          <label htmlFor="email"></label>
          <input
            type="email"
            placeholder="Enter your email address"
            className="rounded-l-xl py-2 px-4 text-xs placeholder:text-xs placeholder:text-stone-400 bg-[#272727] text-[#D4CECE] w-80 font-rubik"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="bg-[#5873CD] hover:bg-slate-500 text-xs py-3 px-4 rounded-r-xl text-[#D4CECE] font-rubik"
          >
            Subscribe
          </button>
        </div>
        {errors?.email && (
          <small className="text-xs text-red-500 mt-1 font-rubik">{errors?.email}</small>
        )}
      </div>
    </form>
  );
};

export default Form;
