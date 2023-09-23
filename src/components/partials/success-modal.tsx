import React, { Fragment, Dispatch, SetStateAction } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function SuccessModal({
  message,
  openModal,
  setOpenModal,
}: {
  message: string;
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}) {
  const closeModal = () => {
    setOpenModal(false);
  };
  return (
    <Transition appear show={openModal} as={Fragment}>
      <Dialog as="div" className="relative z-40" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-[#150E28] bg-opacity-95" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl border border-primary bg-[#D9D9D9]/[0.03] p-6 text-left align-middle shadow-xl transition-all">
                <img src="./images/modal-img.png" alt="" />
                <Dialog.Title
                  as="h3"
                  className="text-center font-body text-[2rem] font-medium text-white"
                >
                  {message}
                </Dialog.Title>
                <div className="mt-2">
                  <p className="mx-auto flex w-[240px] items-end text-center text-sm text-white">
                    <span>
                      Yes, it was easy and you did it! check your mail box for
                      next step
                    </span>
                    <img src="./images/wink-emoji.png" alt="" />
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    onClick={closeModal}
                    className="z-30 mx-auto mt-5 w-full rounded-md border border-[#903AFF] bg-gradient px-[52px] py-4 text-center text-white transition-all duration-150 hover:border-[#903AFF] hover:bg-none"
                  >
                    Back
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
