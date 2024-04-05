/* eslint-disable react/no-unescaped-entities */
"use client";
import { BASEURL, BASEURL_IMG } from "@/components/data/BaseUrl";
import { Input } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { IoMdCloudUpload } from "react-icons/io";
const Register = ({ params }) => {
  const MySwal = withReactContent(Swal);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("only PDF's are allowed");
  async function getCourse(id) {
    setCourseDetails({
      loading: true,
      data: [],
      error: false,
    });
    const res = await fetch(`${BASEURL}/course-with-sections/${id}`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    res.json().then((result) => {
      setCourseDetails({
        loading: false,
        error: false,
        data: result,
      });
    });
  }

  const [courseDetails, setCourseDetails] = useState({
    data: [],
    loading: false,
    error: false,
  });

  const { courseId } = params;

  useEffect(() => {
    getCourse(courseId);
  }, []);


  const [info, setInfo] = useState({ seats: 1, course_id: courseId });

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    sendInfo(info);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInfo({
      ...info,
      [name]: value,
    });
  };

  const sendInfo = async (info) => {
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");

    const formdata = new FormData();
    formdata.append("first_name", info.first_name);
    formdata.append("last_name", info.last_name);
    formdata.append("phone", info.phone);
    formdata.append("city", info.city);
    formdata.append("address", info.address);
    formdata.append("email", info.email);
    formdata.append("course_id", info.course_id);
    formdata.append("course_date_id", info.date_id);
    formdata.append("postal_code", info.postal_code);
    formdata.append("seats", "1");
    formdata.append("contract", info.contract);


    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      //   redirect: "follow",
    };

    fetch(`${BASEURL}/make-course-registration`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        MySwal.fire({
          icon: "success",
          title: "Registration successful",
          showConfirmButton: false,
          timer: 2500,
        });
      })
      .catch((error) =>
        MySwal.fire({
          icon: "error",
          title: "Registration failed",
          text: error.message,
        })
      )
      .finally(() => {
        setLoading(false);
      });
  };

  if (courseDetails.loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div id="loader"></div>
      </div>
    );
  }
 
  return (
    <div className=" mx-auto  ">
      <div className=" backdrop-blur-2xl px-2   mx-auto pt-16 pb-2  overflow-visible flex items-center justify-center">
        <img
          src={`${BASEURL_IMG}${courseDetails?.data?.course?.src}`}
          alt="kosmetik"
          className="  object-fill object-center max-h-[500px] rounded md shadow-lg shadow-black/30 "
        />
      </div>
      <p className="  font-medium text-lg text-center pb-6 pt-4">
        {courseDetails.data?.course?.title}
      </p>{" "}
      {loading === true ? (
        <div className="min-h-screen flex items-center justify-center">
          <div id="loader"></div>
        </div>
      ) : (
        <form
          onSubmit={handleOnSubmit}
          className=" space-y-6 max-w-3xl mx-auto my-10 px-4  "
        >
          <Input
            isRequired
            type="email"
            label="Email"
            name="email"
            placeholder="Enter your email"
            onChange={handleOnChange}
            classNames={{
              label: "text-black/50 dark:text-white/90",
              input: [
                "bg-transparent",
                "text-black/90 dark:text-white/90",
                "placeholder:text-default-700/50 dark:placeholder:text-white/60",
              ],
              innerWrapper: "bg-transparent",
              inputWrapper: [
                "shadow-md",
                "bg-default-200/50",
                "dark:bg-default/60",
                "backdrop-blur-xl",
                "backdrop-saturate-200",
                "hover:bg-default-200/70",
                "dark:hover:bg-default/70",
                "group-data-[focused=true]:bg-default-200/50",
                "dark:group-data-[focused=true]:bg-default/60",
                "!cursor-text",
              ],
            }}
          />
          <div className="grid grid-cols-2 gap-4">
            {" "}
            <Input
              isRequired
              label="first name"
              name="first_name"
              onChange={handleOnChange}
              placeholder="Enter your first name"
              classNames={{
                label: "text-black/50 dark:text-white/90",
                input: [
                  "bg-transparent",
                  "text-black/90 dark:text-white/90",
                  "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                ],
                innerWrapper: "bg-transparent",
                inputWrapper: [
                  "shadow-md",
                  "bg-default-200/50",
                  "dark:bg-default/60",
                  "backdrop-blur-xl",
                  "backdrop-saturate-200",
                  "hover:bg-default-200/70",
                  "dark:hover:bg-default/70",
                  "group-data-[focused=true]:bg-default-200/50",
                  "dark:group-data-[focused=true]:bg-default/60",
                  "!cursor-text",
                ],
              }}
            />
            <Input
              isRequired
              label="last name"
              name="last_name"
              onChange={handleOnChange}
              placeholder="Enter your last name"
              classNames={{
                label: "text-black/50 dark:text-white/90",
                input: [
                  "bg-transparent",
                  "text-black/90 dark:text-white/90",
                  "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                ],
                innerWrapper: "bg-transparent",
                inputWrapper: [
                  "shadow-md",
                  "bg-default-200/50",
                  "dark:bg-default/60",
                  "backdrop-blur-xl",
                  "backdrop-saturate-200",
                  "hover:bg-default-200/70",
                  "dark:hover:bg-default/70",
                  "group-data-[focused=true]:bg-default-200/50",
                  "dark:group-data-[focused=true]:bg-default/60",
                  "!cursor-text",
                ],
              }}
            />
          </div>
          <Input
            isRequired
            label="address"
            name="address"
            onChange={handleOnChange}
            placeholder="Enter your address"
            classNames={{
              label: "text-black/50 dark:text-white/90",
              input: [
                "bg-transparent",
                "text-black/90 dark:text-white/90",
                "placeholder:text-default-700/50 dark:placeholder:text-white/60",
              ],
              innerWrapper: "bg-transparent",
              inputWrapper: [
                "shadow-md",
                "bg-default-200/50",
                "dark:bg-default/60",
                "backdrop-blur-xl",
                "backdrop-saturate-200",
                "hover:bg-default-200/70",
                "dark:hover:bg-default/70",
                "group-data-[focused=true]:bg-default-200/50",
                "dark:group-data-[focused=true]:bg-default/60",
                "!cursor-text",
              ],
            }}
          />
          <Input
            isRequired
            label="phone"
            name="phone"
            onChange={handleOnChange}
            placeholder="Enter your phone"
            classNames={{
              label: "text-black/50 dark:text-white/90",
              input: [
                "bg-transparent",
                "text-black/90 dark:text-white/90",
                "placeholder:text-default-700/50 dark:placeholder:text-white/60",
              ],
              innerWrapper: "bg-transparent",
              inputWrapper: [
                "shadow-md",
                "bg-default-200/50",
                "dark:bg-default/60",
                "backdrop-blur-xl",
                "backdrop-saturate-200",
                "hover:bg-default-200/70",
                "dark:hover:bg-default/70",
                "group-data-[focused=true]:bg-default-200/50",
                "dark:group-data-[focused=true]:bg-default/60",
                "!cursor-text",
              ],
            }}
          />
          <Input
            isRequired
            label="city"
            name="city"
            onChange={handleOnChange}
            placeholder="Enter your city"
            classNames={{
              label: "text-black/50 dark:text-white/90",
              input: [
                "bg-transparent",
                "text-black/90 dark:text-white/90",
                "placeholder:text-default-700/50 dark:placeholder:text-white/60",
              ],
              innerWrapper: "bg-transparent",
              inputWrapper: [
                "shadow-md",
                "bg-default-200/50",
                "dark:bg-default/60",
                "backdrop-blur-xl",
                "backdrop-saturate-200",
                "hover:bg-default-200/70",
                "dark:hover:bg-default/70",
                "group-data-[focused=true]:bg-default-200/50",
                "dark:group-data-[focused=true]:bg-default/60",
                "!cursor-text",
              ],
            }}
          />
          <div className="grid grid-cols-2 gap-4 items-center justify-between">
            {" "}
            <Input
              isRequired
              label="postal code"
              name="postal_code"
              onChange={handleOnChange}
              placeholder="Enter your postal code"
              classNames={{
                label: "text-black/50 dark:text-white/90",
                input: [
                  "bg-transparent",
                  "text-black/90 dark:text-white/90",
                  "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                ],
                innerWrapper: "bg-transparent",
                inputWrapper: [
                  "shadow-md",
                  "bg-default-200/50",
                  "dark:bg-default/60",
                  "backdrop-blur-xl",
                  "backdrop-saturate-200",
                  "hover:bg-default-200/70",
                  "dark:hover:bg-default/70",
                  "group-data-[focused=true]:bg-default-200/50",
                  "dark:group-data-[focused=true]:bg-default/60",
                  "!cursor-text",
                ],
              }}
            />
            <Select
              isRequired
              labelPlacement="inside"
              variant="bordered"
              onChange={(e) => {
                setInfo({ ...info, date_id: e.target.value });
              }}
              label="Select a Date"
              className="max-w-sm  "
              items={courseDetails?.data?.course?.dates}
            >
              {courseDetails?.data?.course?.dates?.map((date) => (
                <SelectItem key={date?.id} value={date.from_date}>
                  {date.from_date} to {date.to_date}
                </SelectItem>
              ))}
            </Select>
          </div>
          <label
            for="uploadFile1"
            className="bg-white  text-center rounded-md w-full sm:w-[360px] min-h-[160px] py-6 px-4 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-200 mx-auto font-[sans-serif] m-4"
          >
            <IoMdCloudUpload size={50} className="pb-2 text-slate-600" />
            <p className="text-gray-400 font-semibold text-sm">
              Drag & Drop or <span class="text-[#007bff]">Choose file</span> to
              upload contract
            </p>
            <input
              isRequired
              onChange={(e) => {
                setInfo({ ...info, contract: e.target.files[0] });
                setMessage("😄 ......Thank you...... 😄 ");
              }}
              accept="application/pdf"
              type="file"
              id="uploadFile1"
              className="hidden"
            />
            <p className="text-xs text-gray-400 mt-2">{message}</p>
          </label>
          <button
            type="submit"
            className="rounded-sm bg-gradient-to-br from-[#04001F] to-[#1f0c2c]  py-2 px-10   text-white outline-none "
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};
export default Register;