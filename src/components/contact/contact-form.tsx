import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { axiosInstance } from "@/api";
import { ContactSchema, contactSchema } from "@/lib/contact-schema";
import SuccessModal from "../partials/success-modal";
import ErrorModal from "../partials/error-modal";
import Loading from "../assets/loading";

export default function ContactForm() {
  const [openModal, setOpenModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
  });

  const { isSuccess, isLoading, mutateAsync } = useMutation({
    mutationFn: (variables: ContactSchema) =>
      axiosInstance.post(`/hackathon/contact-form`, variables),
  });

  const contactHandler = async (data: ContactSchema) => {
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
      onSubmit={handleSubmit(contactHandler)}
      className="relative basis-1/2 lg:rounded-md lg:border lg:border-primary lg:bg-[#D9D9D9]/[0.03] lg:px-[90px] lg:pb-[67px] lg:pt-[75px]"
    >
      <div className="font-heading">
        <h1 className="text-xl font-bold text-primary">
          Questions or need assistance?
        </h1>
        <h1 className="text-xl font-bold text-primary">
          Let us know about it!
        </h1>
      </div>

      <div className="mt-[34px] flex flex-col justify-center gap-y-10 font-body">
        <div className="space-y-2">
          <input
            className="w-full rounded-[4px] border border-white/[0.3] bg-[#D9D9D9]/[0.03] px-[30px] py-3.5 text-white"
            placeholder="First Name"
            type="text"
            required
            {...register("first_name", { required: true })}
          />
          {errors.first_name && (
            <p className="text-white">First name is required</p>
          )}
        </div>
        <div className="space-y-2">
          <input
            className="w-full rounded-[4px] border border-white/[0.3] bg-[#D9D9D9]/[0.03] px-[30px] py-3.5 text-white"
            placeholder="Mail"
            type="email"
            {...register("email", { required: true })}
          />
          {errors.email && <p className="text-white">{errors.email.message}</p>}
        </div>
        <div className="space-y-2">
          <input
            className="w-full rounded-[4px] border border-white/[0.3] bg-[#D9D9D9]/[0.03] px-[30px] py-3.5 text-white"
            placeholder="Number"
            type="text"
            {...register("phone_number", { required: true })}
          />
          {errors.phone_number && (
            <p className="text-white">Phone number is required</p>
          )}
        </div>
        <div className="space-y-2">
          <textarea
            className="min-h-[120px] w-full rounded-[4px] border border-white/[0.3] bg-[#D9D9D9]/[0.03] px-[30px] py-3.5 text-white"
            placeholder="Message"
            {...register("message", { required: true })}
          />
          {errors.phone_number && (
            <p className="text-white">A message is required</p>
          )}
        </div>

        <button
          disabled={isLoading}
          className="z-30 mx-auto mt-5 rounded-md border border-[#903AFF] bg-gradient px-[52px] py-4 text-center text-white transition-all duration-150 hover:border-[#903AFF] hover:bg-none disabled:cursor-not-allowed"
        >
          {isLoading ? <Loading /> : "Submit"}
        </button>
      </div>

      <img
        className="absolute bottom-0 left-0 h-[16px] w-[14px] animate-pulse lg:-left-[12px] lg:top-[500px] lg:h-auto lg:w-auto"
        src="./images/purple-star1.png"
        alt=""
      />
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
        message="Thanks for contacting us!"
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
      <ErrorModal errorModal={errorModal} setErrorModal={setErrorModal} />
    </form>
  );
}
