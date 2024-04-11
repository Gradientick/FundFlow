import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import handleRegister from "../../../features/registerFeature.js";
import Spinner from "./Spinner.jsx";
import { useState } from "react";

function RegisterForm({ setIsLogin }) {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm();
  const { register, control, handleSubmit, formState, watch } = form;
  const { errors, isValid } = formState;
  const password = watch("password");
  const onSubmit = (data) => {
    setIsLoading(true);
    console.log("form submitted", data);
    const { name, username, email, password } = data;
    handleRegister(name, username, email, password)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
        setIsLogin(true);
      });
  };

  if (isLoading) {
    return <Spinner />; // Render the Spinner component when isLoading is true
  }

  return (
    <div className="w-3/6 h-5/6">
      <form
        className="bg-[#1A202C]  gap-y-6 flex flex-col items-center shadow-lg rounded-md"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <h1 className="text-2xl font-semibold p-6 text-white">
          Create Account
        </h1>
        <div className="flex flex-col w-3/5 gap-8">
          <div>
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-400"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              className="bg-[#2D3748] border border-[#4A5568] text-white sm:text-sm rounded-lg focus:ring-[#63B3ED] focus:border-[#63B3ED] block w-full p-2.5"
              placeholder="Enter your username"
              {...register("username", { required: "Username is Required" })}
            />
            <p className="error">{errors.username?.message}</p>
          </div>
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-400"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              className="bg-[#2D3748] border border-[#4A5568] text-white sm:text-sm rounded-lg focus:ring-[#63B3ED] focus:border-[#63B3ED] block w-full p-2.5"
              placeholder="Enter your name"
              {...register("name", { required: "Name is Required" })}
            />
            <p className="error">{errors.name?.message}</p>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-400"
            >
              Email
            </label>
            <input
              id="email"
              type="text"
              className="bg-[#2D3748] border border-[#4A5568] text-white sm:text-sm rounded-lg focus:ring-[#63B3ED] focus:border-[#63B3ED] block w-full p-2.5"
              placeholder="Enter your email"
              {...register("email", {
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid Email Format",
                },
                required: "Email is Required",
              })}
            />
            <p className="error">{errors.email?.message}</p>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-400"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="bg-[#2D3748] border border-[#4A5568] text-white sm:text-sm rounded-lg focus:ring-[#63B3ED] focus:border-[#63B3ED] block w-full p-2.5"
              placeholder="Enter your password"
              {...register("password", {
                required:
                  "Password is required and must be at least 8 characters.",
                minLength: 8,
              })}
            />
            <p className="error">{errors.password?.message}</p>
          </div>
          <div>
            <label
              htmlFor="confirm-password"
              className="block mb-2 text-sm font-medium text-gray-400"
            >
              Confirm Password
            </label>
            <input
              id="confirm-password"
              type="password"
              className="bg-[#2D3748] border border-[#4A5568] text-white sm:text-sm rounded-lg focus:ring-[#63B3ED] focus:border-[#63B3ED] block w-full p-2.5"
              placeholder="Confirm your password"
              {...register("confirmPassword", {
                validate: (value) =>
                  value === password || "The passwords do not match",
              })}
            />
            <p className="error">{errors.confirmPassword?.message}</p>
          </div>
          <div>
            <button
              className="w-full bg-[#3182CE] hover:bg-[#63B3ED] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-all"
              type="submit"
              disabled={!isValid}
            >
              Register
            </button>
            <div className="my-6 text-center">
              <p className="text-sm font-medium text-gray-400">
                Already have an account?
                <span
                  className="text-[#81E6D9] hover:text-white cursor-pointer"
                  onClick={() => setIsLogin(true)}
                >
                  Login Here
                </span>
              </p>
            </div>
          </div>
        </div>
      </form>
      <DevTool control={control} />
    </div>
  );
}

export default RegisterForm;
