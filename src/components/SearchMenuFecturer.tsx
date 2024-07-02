"use client";
import { manufacturers } from "@/Constants/index";
import { SearchManuFacturerProps } from "@/types/index";
import { Fragment, useState } from "react";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Transition,
} from "../../node_modules/@headlessui/react/dist/index";
import Image from "../../node_modules/next/image";

export default function SearchmanuFecturer({
  manuFacturer,
  setManuFacturer,
}: SearchManuFacturerProps) {
  const [query, setQuery] = useState("");
  const filterManuFacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item: string) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLocaleLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="search-manufacturer">
      <Combobox
        value={manuFacturer}
        onChange={setManuFacturer}
        onClose={() => setQuery("")}
      >
        <div className="relative w-full">
          <ComboboxButton className="absolute top-[14px]">
            <Image
              src={"car-logo.svg"}
              width={20}
              height={20}
              className="ml-4"
              alt="Car Logo"
            />
          </ComboboxButton>

          <ComboboxInput
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            displayValue={(manuFacturer: string) => manuFacturer}
            onChange={(e) => setQuery(e.target.value)}
          />

          <Transition
            as={Fragment}
            leave={"transition ease-in duration-100"}
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <ComboboxOptions>
              {filterManuFacturers.map((item: string) => (
                <ComboboxOption
                  key={item}
                  value={item}
                  className={({ active }) =>
                    `group flex items-center gap-2 rounded-lg relative search-manufacturer__option ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                >
                  {/* <CheckIcon className="invisible size-4 fill-white group-data-[selected]:visible" /> */}
                  <div className="text-sm/6 ">{item}</div>
                </ComboboxOption>
              ))}
            </ComboboxOptions>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}
