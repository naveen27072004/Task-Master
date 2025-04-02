"use client";

import { useForm } from "react-hook-form";
import { LoginReq } from "../../types/auth";
import { useLogin } from "../../hooks/useauth";

const Page = () => {
  const loginMutation = useLogin();
  const { register, handleSubmit } = useForm<LoginReq>();

  const sendInfo = async (data: LoginReq) => {
    try {
      await loginMutation.mutateAsync(data);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-yellow-50">
      <div className="bg-white p-10 rounded-xl shadow-2xl w-96 flex flex-col">
        <h2 className="text-center text-3xl font-semibold text-yellow-800 mb-6">
          Welcome Back
        </h2>
        <form onSubmit={handleSubmit(sendInfo)} className="space-y-4">
          <div>
            <label className="block text-yellow-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email")}
              className="w-full p-3 border border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <div>
            <label className="block text-yellow-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              {...register("password")}
              className="w-full p-3 border border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 rounded-lg transition duration-300"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
