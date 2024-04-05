import { FaPhoneVolume, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaSnapchat, FaFacebook, FaInstagram } from "react-icons/fa";

import Image from "next/image";

const Footer = () => {
  return (
    <footer className=" py-10">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-8 row-gap-6 mb-8  sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <Image
              src="/images/about_logo.png"
              width={200}
              height={200}
              alt="kosmetik"
            />
            <div className="mt-6 lg:max-w-sm">
              <p className="text-sm font-medium  text-gray-800">
                Das German Board für Bildung und Beratung wurde am 28.08.2017 in
                Wuppertal mit den Rechtsform UG gegründet. German Board hat zu
                Beginn seiner Gründung in den meisten Bundesländern auf
                ehrenamtlicher Basis eine Reihe von Schulungen für Flüchtlinge
                durchgeführt und nicht weniger als 1.500 junge Männer und Frauen
                in den Bereichen Management und Wirtschaft ausgebildet.
              </p>
            </div>
          </div>
          <div className="space-y-4 text-sm">
            <p className="text-base font-bold tracking-wide pb-4 text-gray-900">
              Contacts
            </p>
            <div className="flex    gap-2 font-medium">
              <FaPhoneVolume size={12} className="mt-1" />
              <a
                aria-label="Our phone"
                title="Our phone"
                className="transition-colors flex flex-col text-gray-800 duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                <p> +4917680203257</p>
                <p> +4917680203257</p>
                <p> +4917680203257</p>
                <p> +4917680203257</p>
              </a>
            </div>
            <div className="flex items-center gap-2 font-medium  text-gray-800">
              <MdEmail size={12} />
              <a
                aria-label="Our email"
                title="Our email"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                info@germanboard.org
              </a>
            </div>
            <div className="flex  gap-2  text-gray-800 font-medium">
              <FaLocationDot size={12} className="mt-1 " />

              <a
                href="https://maps.app.goo.gl/dtp9tzihJic9Haea7"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Our address"
                title="Our address"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Kreuzeskirchstraße 8, 45127 Essen, Germany
              </a>
            </div>
          </div>
          <div>
            <p className="text-base font-bold tracking-wide pb-5 text-gray-900">
              Social
            </p>

            <p className="mb-4 text-sm text-gray-500 font-medium">
              Bleiben Sie neben der direkten Kommunikation auch in den sozialen
              Medien auf dem Laufenden mit unseren neuesten Nachrichten.
            </p>
            <div className="flex items-center  gap-6 mt-6">
              <a
                href="https://www.facebook.com/germanboardkosmetik
"
                className="text-[#3b5998] hover:text-black transition-colors duration-300 "
              >
                <FaFacebook size={35} />
              </a>
              <a
                href="https://www.snapchat.com/"
                className="text-black transition-colors duration-300 hover:text-zinc-900"
              >
                <FaSnapchat size={35} />
              </a>
              <a
                href="https://www.instagram.com/germanboardkosmetik"
                className="bg-gradient-to-br p-2 rounded-full from-[#833ab4] via-[#fd1d1d] to-[#fcb045] transition-all ease-in-out duration-300 hover:bg-gradient-to-br hover:from-black hover:to-black "
              >
                <FaInstagram className="text-white" size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="flex pt-5 pb-10 border-t ">
          <p className="text-sm text-gray-600 mx-auto">
            © Copyright 2024 German Board. All rights reserved.
          </p>
          <p className="text-sm text-gray-600 mx-auto">
            Powered By{" "}
            <a
              href="https://www.linkedin.com/in/nour-asma-649245256/"
              className="text-gray-700 font-medium"
            >
              Eng. Nour Asma
            </a>{" "}
            &{" "}
            <a
              href="https://www.linkedin.com/in/bushra-muhammad-5013b9248/"
              className="text-gray-700 font-medium"
            >
              Eng. Bushra Mohamad
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
