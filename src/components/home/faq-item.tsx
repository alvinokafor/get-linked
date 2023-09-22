import React from "react";
import { Disclosure, Transition } from "@headlessui/react";
import Plus from "../assets/plus";

export default function FaqItem(faq: { title: string; body: string }) {
  return (
    <Disclosure>
      {({ open }) => (
        <div className={`border-b border-primary w-4/5 pb-[13px]`}>
          <Disclosure.Button
            className={`flex items-center text-sm justify-between w-full`}
          >
            {faq.title}
            <div>
              <Plus />
            </div>
          </Disclosure.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className={`mt-3 text-sm text-slate-400`}>
              {faq.body}
            </Disclosure.Panel>
          </Transition>
        </div>
      )}
    </Disclosure>
  );
}
