"use client";
import { CarProps } from "@/types/index";
import { Fragment } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "../../node_modules/@headlessui/react/dist/index";
import Image from "../../node_modules/next/image";
import { generateCarImageUrl } from "../../utils/index";

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

function CarDetails({ isOpen, closeModal, car }: CarDetailsProps) {
  return (
    <Transition
      appear
      show={isOpen}
      as={Fragment}
    >
      <Dialog
        as="div"
        className="relative z-10"
        onClose={closeModal}
      >
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel
                transition
                className="w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-xl bg-white p-6 duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 relative shadow-xl"
              >
                <button
                  type="button"
                  onClick={closeModal}
                  className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
                >
                  <Image
                    width={20}
                    height={20}
                    alt={"close"}
                    src={"/close.svg"}
                  />
                </button>

                <div className="flex-1 flex flex-col gap-3">
                  <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                    <Image
                      src={generateCarImageUrl(car)}
                      alt="car model"
                      fill
                      priority
                      className="object-contain"
                    />
                  </div>

                  <div className="flex gap-3">
                    <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                      <Image
                        src={generateCarImageUrl(car, "29")}
                        alt="car model"
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                      <Image
                        src={generateCarImageUrl(car, "33")}
                        alt="car model"
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                      <Image
                        src={generateCarImageUrl(car, "13")}
                        alt="car model"
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex-1 flex flex-col gap-2">
                  <DialogTitle
                    as="h3"
                    className="text-xl font-semibold capitalize"
                  >
                    {car.make} {car.model}
                  </DialogTitle>

                  <div className="mt-3 flex flex-wrap gap-4">
                    {Object.entries(car).map(([key, value]) => (
                      <div
                        className="flex justify-between gap-5 w-full text-right"
                        key={key}
                      >
                        <h4 className="text-grey capitalize">
                          {key.split("_").join(" ")}
                        </h4>
                        <p className="text-black-100 font-semibold">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default CarDetails;
