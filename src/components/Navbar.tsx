import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";

export default function Navbar() {
  return (
    <div className="w-full absolute z-10">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center px-6 py-4 sm:px-16">
        <Link href="/">
          <Image
            src="logo.svg"
            alt="Car Hub Logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <CustomButton
          title="Sign In"
          containerStyles="min-w-[130px] bg-white text-primary-blue rounded-full"
          btnType="button"
        />
      </div>
    </div>
  );
}
