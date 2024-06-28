"use client";
import { SearchMenuFecturerProps } from "@/types/index";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
} from "../../node_modules/@headlessui/react/dist/index";
import Image from "../../node_modules/next/image";

export default function SearchMenuFecturer({
  menuFecturer,
  setMenuFecturer,
}: SearchMenuFecturerProps) {
  return (
    <div className="search-menufacturer">
      <Combobox>
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
            className="search-menufacturer__input"
            placeholder="Volkswagen"
            displayValue={(menufacturer: string) => menuFecturer}
          ></ComboboxInput>
        </div>
      </Combobox>
      <div>SearchMenuFecturer</div>
    </div>
  );
}
