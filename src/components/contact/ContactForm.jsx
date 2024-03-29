"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { FaPhoneVolume, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
const ContactForm = () => {
  const MySwal = withReactContent(Swal);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_8cn1eub", "template_ozzi60g", form.current, {
        publicKey: "Dis9ihraor05GxJUJ",
      })
      .then(
        () => {
          form.current.reset();
          MySwal.fire({
            icon: "success",
            title: "Email has been sent successfully",
            showConfirmButton: false,
            timer: 2000,
          });
        },
        (error) => {
          MySwal.fire({
            icon: "warning",
            title: "Failed to send email",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      );
  };
  return (
    <div className="py-12 px-4">
      <div className=" rounded-md flex flex-col md:flex-row mx-auto max-w-4xl bg-gray-200/60 backdrop-blur-sm">
        <div className=" basis-5/12 min-h-full bg-gradient-to-br  from-[#04001F] to-[#1f0c2c] m-2 rounded-md flex flex-col  justify-around  gap-3 px-6 py-8 ">
          <h1 className="text-white text-lg font-semibold ">
            Kontaktinformationen
          </h1>
          <div className="w-full h-4 border-t-1  border-[#c3c3c4]  "></div>
          <div className="flex items-center space-x-3 text-white">
            <FaLocationDot size={15} />
            <a
              href="https://maps.app.goo.gl/dtp9tzihJic9Haea7"
              target=""
              className="text-sm"
            >
              Kreuzeskirchstraße 8, 45127 Essen, Germany
            </a>
          </div>
          <div className="flex items-center space-x-3 text-white">
            <MdEmail size={15} />
            <a target="" className="text-sm">
              info@germanboard.org
            </a>
          </div>
          <div className="text-white flex flex-col  space-y-2 tex-sm ">
            <div className="flex items-center space-x-3">
              <FaPhoneVolume size={12} />
              <p className="text-sm">+4917680203257</p>
            </div>

            <p className="text-sm ml-6">+4917644466088</p>

            <p className="text-sm ml-6">+4915738922887</p>

            <p className="text-sm ml-6">+4915566223331</p>
          </div>

          <Image
            src="/images/QR.png"
            width={150}
            height={150}
            alt={"Background Image"}
            className="mx-auto border-[#820517] p-2 border-3"
          />
        </div>
        {/*Contact Form*/}

        <div className="flex items-center justify-center p-12 basis-7/12">
          <div className="mx-auto w-full max-w-[550px]">
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-5">
                <label
                  for="name"
                  className="mb-3 block text-base font-medium text-[#111529]"
                >
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  name="user_name"
                  id="user_name"
                  placeholder="Full Name"
                  className="w-full rounded-md placeholder:text-sm border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#07074D] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label
                  for="email"
                  className="mb-3 block text-base font-medium text-[#111529]"
                >
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  name="user_email"
                  id="user_email"
                  placeholder="example@domain.com"
                  className="w-full rounded-md border placeholder:text-sm border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#07074D] focus:shadow-md"
                />
              </div>

              <div className="mb-5">
                <label
                  for="message"
                  className="mb-3 block text-base font-medium text-[#111529]"
                >
                  Message
                </label>
                <textarea
                  required
                  rows="4"
                  name="message"
                  id="message"
                  placeholder="Type your message..."
                  className="w-full resize-none rounded-md placeholder:text-sm border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#07074D] focus:shadow-md"
                ></textarea>
              </div>
              <div className="px-1">
                <button
                  type="submit"
                  value="Send"
                  className="rounded-sm bg-gradient-to-br from-[#04001F] to-[#1f0c2c]  py-2 px-8 text-sm  text-white outline-none "
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;
