"use client";

import { useForm } from "react-hook-form";
import { SighnupReq } from "@/types/auth";
import { usesighnup } from "@/hooks/useauth";

const Page = () => {
  const { register, handleSubmit } = useForm<SighnupReq>();
  const signupMutation = usesighnup();

  const signup = async (data: SighnupReq) => {
    try {
      await signupMutation.mutateAsync(data);
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-yellow-50">
      <div className="bg-white p-10 rounded-xl shadow-2xl w-96 flex flex-col">
        <h2 className="text-center text-3xl font-semibold text-yellow-800 mb-6">
          Create an Account
        </h2>
        <form onSubmit={handleSubmit(signup)} className="space-y-4">
          <div>
            <label className="block text-yellow-700 font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              {...register("name")}
              className="w-full p-3 border border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <div>
            <label className="block text-yellow-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
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
              placeholder="Enter Your Password"
              {...register("password")}
              className="w-full p-3 border border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <div>
            <label className="block text-yellow-700 font-medium mb-1">
              Role
            </label>
            <input
              type="text"
              placeholder="Enter Your Role"
              {...register("role")}
              className="w-full p-3 border border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <div>
            <label className="block text-yellow-700 font-medium mb-1">
              Team Name
            </label>
            <input
              type="text"
              placeholder="Enter Your Team Name"
              {...register("teamname")}
              className="w-full p-3 border border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 rounded-lg transition duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
