import Lang from "../Lang/Lang";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { AlignRight } from "lucide-react";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { useTranslation } from "react-i18next";

const GetSvg = () => {
  return (
    <svg
      className="sm:w-12 sm:h-12 w-10 h-10 bg-blue-700 rounded-full "
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="50" height="50" rx="22" fill="url(#paint0_linear_28_728)" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.999 23.5386L14.4985 24.4175V26.1727V27.9304V29.6856V31.4407L15.998 32.3196L17.4975 33.1984L18.997 34.0773L20.4965 34.9561L21.9959 35.835L23.4954 36.7138L24.9949 37.5927L26.4944 36.7138L27.9939 35.835L29.4934 34.9561L30.9929 34.0773L32.4924 33.1984L33.9919 32.3196L35.4914 31.4407V29.6856V27.9304V26.1727V24.4175L36.9909 23.5386V26.7172C36.8668 26.7932 36.7832 26.9376 36.7832 27.0895C36.7832 27.2415 36.8541 27.363 36.9605 27.4416L36.9098 27.5961L36.6084 28.5382H37.2112H37.8141L37.5127 27.5961L37.462 27.4416C37.5709 27.363 37.6393 27.2567 37.6393 27.0895C37.6393 26.9224 37.5177 26.7375 37.3506 26.6767V23.3259L25.3622 16.3001L25.7244 16.0874L37.7254 23.1131L38.5005 22.6598L40 21.7809L38.5005 20.9021L37.001 20.0232L35.5015 19.1444L33.9995 18.2681L32.5 17.3892L31.0005 16.5103L29.501 15.634L28.0015 14.7552L26.502 13.8763L25 13L23.5005 13.8789L22.001 14.7577L20.499 15.634L18.9995 16.5129L17.5 17.3917L16.0005 18.2681L14.501 19.1469L13.0015 20.0258L11.502 20.9046L10 21.7809L11.4995 22.6598L12.999 23.5386ZM23.5005 20.9046L25 20.0258L26.4995 20.9046L27.999 21.7835L26.4995 22.6623L25 23.5412L23.5005 24.4175V26.1752L25 27.0541L26.4995 26.1752L27.999 25.2963L29.4985 24.4175L30.998 23.5386L32.4975 22.6598L33.5284 22.0545L33.997 21.7809L32.7229 21.0363L32.4975 20.9046L30.998 20.0258L29.4985 19.1469L28.0015 18.2681L26.502 17.3892L25.0025 16.5103L23.5005 17.3917L22.001 18.2681L20.5015 19.1469L19.002 20.0258L17.5025 20.9046L16.003 21.7835L17.5025 22.6623V24.4175V26.1727V27.9304V28.832V29.6856L19.002 30.5644L20.5015 31.4433L22.001 32.3221L23.5005 33.201L25 34.0798L26.4995 33.201L27.999 32.3221L29.4985 31.4433L30.998 30.5644L32.4975 29.6856V27.9304V26.1727L30.998 27.0515L29.4985 27.9304L27.999 28.8092L26.4995 29.6881L25 30.5669L23.5005 29.6856L22.001 28.8067L20.5015 27.9278V22.6598L22.001 21.7809L23.5005 20.9046Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_28_728"
          x1="39"
          y1="45"
          x2="5"
          y2="6"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6440FB" />
          <stop offset="1" stopColor="#8466FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};
function Navbar() {
  const { t } = useTranslation();
  return (
    <nav className="sticky top-0 z-40 h-24 bg-background/70 backdrop-blur-xl ">
      <div className="  flex h-full  container  sm:p-5 items-center justify-between">
        <div className="flex  items-center gap-4">
          <a className="flex items-center gap-2" href={"/"}>
            <div className=" hidden sm:block">
              <GetSvg />
            </div>
            <h1 className="font-space-grotesk sm:text-4xl text-xl font-bold sm:block hidden">
              Umidjon
            </h1>
          </a>
          <div className=" block sm:hidden ">
            <a className="flex items-center gap-2" href={"/"}>
              <div>
                <GetSvg />
              </div>
              <h1 className="font-space-grotesk sm:text-4xl text-3xl font-bold ">
                Umidjon
              </h1>
            </a>
          </div>
          <div className="hidden mt-2 items-center gap-3 border-l sm:pl-2 md:flex">
            <a
              className="font-medium text-[20px] transition-all hover:text-blue-500 hover:underline text-blue-500"
              href="/"
            >
              {t("navbar.home")}
            </a>
            <a
              className="font-medium transition-all hover:text-blue-500 hover:underline"
              href={`/coursesfree`}
            >
              {t("navbar.about")}
            </a>
            <a
              className="font-medium transition-all hover:text-blue-500 hover:underline"
              href="/blogs"
            >
              {t("navbar.projects")}
            </a>
            <a
              className="font-medium transition-all hover:text-blue-500 hover:underline"
              href="/contacts"
            >
              {t("navbar.resume")}
            </a>
            <a
              className="font-medium transition-all hover:text-blue-500 hover:underline"
              href="/contacts"
            >
              {t("navbar.skills")}
            </a>
            <a
              className="font-medium transition-all hover:text-blue-500 hover:underline"
              href="/contacts"
            >
              {t("navbar.contact")}
            </a>
          </div>
        </div>
        <div className="flex mx-2  items-center gap-2">
          <div className=" block sm:hidden ">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" style={{ all: "unset" }}>
                  <AlignRight className="w-10 h-10" />
                </Button>
              </SheetTrigger>
              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="flex items-center gap-2  ">
                    <GetSvg />
                    <div className="text-2xl">Umidjon</div>
                  </SheetTitle>
                  <hr />
                </SheetHeader>
                <div className="flex items-start h-[500px] flex-col justify-center gap-4 py-4">
                  <h1 className="text-[20px]">Sahifalar</h1>
                  <div className="w-full border h-[1px]"></div>
                  <SheetClose asChild>
                    <a
                      className="font-medium text-[20px] transition-all hover:text-blue-500 hover:underline text-blue-500"
                      href="/"
                    >
                      {t("navbar.home")}
                    </a>
                  </SheetClose>

                  <SheetClose asChild>
                    <a
                      className="font-medium text-[20px] transition-all hover:text-blue-500 hover:underline"
                      href={`/coursesfree`}
                    >
                      {t("navbar.about")}
                    </a>
                  </SheetClose>

                  <SheetClose asChild>
                    <a
                      className="font-medium text-[20px] transition-all hover:text-blue-500 hover:underline"
                      href="/blog"
                    >
                      {t("navbar.projects")}
                    </a>
                  </SheetClose>
                  <SheetClose asChild>
                    <a
                      className="font-medium text-[20px] transition-all hover:text-blue-500 hover:underline"
                      href="/contacts"
                    >
                      {t("navbar.resume")}
                    </a>
                  </SheetClose>
                  <SheetClose asChild>
                    <a
                      className="font-medium text-[20px] transition-all hover:text-blue-500 hover:underline"
                      href="/contacts"
                    >
                      {t("navbar.skills")}
                    </a>
                  </SheetClose>
                  <SheetClose asChild>
                    <a
                      className="font-medium text-[20px] transition-all hover:text-blue-500 hover:underline"
                      href="/contacts"
                    >
                      {t("navbar.contact")}
                    </a>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <div className="">
            <Lang />
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
