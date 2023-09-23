import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { axiosInstance } from "@/api";
import {
  RegistrationSchema,
  registrationSchema,
} from "@/lib/registration-schema";
import SuccessModal from "../partials/success-modal";
import Loading from "../assets/loading";
import ErrorModal from "../partials/error-modal";

export default function RegisterForm() {
  const [openModal, setOpenModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegistrationSchema>({
    resolver: zodResolver(registrationSchema),
  });

  const { isSuccess, isLoading, mutateAsync } = useMutation({
    mutationFn: (variables: RegistrationSchema) =>
      axiosInstance.post(`/hackathon/registration`, variables),
  });

  const registrationHandler = async (data: RegistrationSchema) => {
    try {
      await mutateAsync(data);
      setOpenModal(true);
    } catch (err) {
      setErrorModal(true);
    }
  };

  useEffect(() => {
    reset();
  }, [isSuccess]);

  return (
    <form
      onSubmit={handleSubmit(registrationHandler)}
      className="relative basis-1/2 lg:rounded-md lg:border lg:border-primary lg:bg-[#D9D9D9]/[0.03] lg:px-[80px] lg:pb-[67px] lg:pt-[75px]"
    >
      <div className="font-heading">
        <h1 className="text-sm font-bold text-primary md:text-[2rem]">
          Register
        </h1>
        <img className="lg:hidden" src="./images/register-img.png" alt="" />
        <div className="mt-7 flex items-end font-body text-white">
          <p className="text-sm">Be part of this movement!</p>
          <img src="./images/movement.png" alt="" />
        </div>
        <p className="mt-[19px] font-body text-xl font-medium text-white lg:text-2xl">
          CREATE YOUR ACCOUNT
        </p>
      </div>

      <div className="mt-[34px] flex flex-col justify-center gap-y-[18px] font-body text-white lg:gap-y-10">
        <div className="flex flex-col gap-x-[32px] gap-y-[18px] lg:flex-row lg:gap-y-0">
          <div className="flex flex-col gap-y-3">
            <label htmlFor="team-name">Team Name</label>
            <input
              className="w-full rounded-[4px] border border-white bg-[#D9D9D9]/[0.03] px-[27px] py-3.5 text-white"
              required
              placeholder="Enter the name of your group"
              id="team-name"
              type="text"
              {...register("team_name", { required: true })}
            />
          </div>
          <div className="flex flex-col gap-y-3">
            <label htmlFor="phone">Phone</label>
            <input
              className="w-full rounded-[4px] border border-white bg-[#D9D9D9]/[0.03] px-[30px] py-3.5 text-white"
              placeholder="Enter your phone number"
              id="phone"
              type="text"
              required
              {...register("phone_number", { required: true })}
            />
          </div>
        </div>
        <div className="flex flex-col gap-x-[32px] gap-y-[18px] lg:flex-row lg:gap-y-0">
          <div className="flex flex-col gap-y-3">
            <label htmlFor="email">Email</label>
            <input
              className="w-full rounded-[4px] border border-white bg-[#D9D9D9]/[0.03] px-[27px] py-3.5 text-white"
              placeholder="Enter your email address"
              id="email"
              type="email"
              required
              {...register("email", { required: true })}
            />
          </div>
          <div className="flex flex-col gap-y-3">
            <label htmlFor="topic">Project Topic</label>
            <input
              className="w-full rounded-[4px] border border-white bg-[#D9D9D9]/[0.03] px-[30px] py-3.5 text-white"
              placeholder="What is your group project topic"
              id="topic"
              type="text"
              required
              {...register("project_topic", { required: true })}
            />
          </div>
        </div>

        <div className="flex  gap-x-[32px] ">
          <div className="flex basis-1/2 flex-col gap-y-3">
            <label htmlFor="category">Category</label>
            <select
              className="w-full rounded-[4px] border border-white bg-[#D9D9D9]/[0.03] px-[30px] py-3.5"
              id="category"
              required
              {...register("category", { valueAsNumber: true, required: true })}
            >
              <option className="text-black" value="1">
                Fintech
              </option>
              <option className="text-black" value="2">
                Edtech
              </option>
            </select>
          </div>
          <div className="flex basis-1/2 flex-col gap-y-3">
            <label htmlFor="group_size">Group Size</label>
            <select
              className="w-full rounded-[4px] border border-white bg-[#D9D9D9]/[0.03] px-[30px] py-3.5 text-white"
              {...register("group_size", {
                valueAsNumber: true,
                required: true,
              })}
              required
              id="group_size"
            >
              <option className="text-black" value="1">
                1
              </option>
              <option className="text-black" value="2">
                2
              </option>
              <option className="text-black" value="3">
                3
              </option>
              <option className="text-black" value="4">
                4
              </option>
              <option className="text-black" value="5">
                5
              </option>
              <option className="text-black" value="6">
                6
              </option>
              <option className="text-black" value="7">
                7
              </option>
              <option className="text-black" value="8">
                8
              </option>
              <option className="text-black" value="9">
                9
              </option>
              <option className="text-black" value="10">
                10
              </option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-[0.75rem] italic text-primary">
            Please review your registration details before submitting
          </p>

          <div className="flex gap-x-2.5">
            <input
              {...register("privacy_policy_accepted", { required: true })}
              type="checkbox"
              required
              id="privacy policy"
            />
            <p className="text-[0.75rem]">
              I agreed with the event terms and conditions and privacy policy
            </p>
          </div>
        </div>

        <button
          disabled={isLoading}
          className="z-30 mx-auto mt-5 w-full rounded-md border border-[#903AFF] bg-gradient px-[52px] py-4 text-center text-white transition-all duration-150 hover:border-[#903AFF] hover:bg-none disabled:cursor-not-allowed"
        >
          {isLoading ? <Loading /> : "Register Now"}
        </button>
      </div>

      <img
        className="absolute -top-20 right-28 h-[12px] w-[10px] animate-pulse lg:right-20 lg:h-auto lg:w-auto"
        src="./images/dim-star.png"
        alt=""
      />
      <img
        className="absolute -bottom-20 right-0 h-[12px] w-[10px] animate-pulse lg:right-0 lg:h-auto lg:w-auto"
        src="./images/hero-star.png"
        alt=""
      />

      <SuccessModal
        message="Congratulations you have successfully Registered!"
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
      <ErrorModal errorModal={errorModal} setErrorModal={setErrorModal} />
    </form>
  );
}
