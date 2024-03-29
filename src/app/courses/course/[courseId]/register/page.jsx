/* eslint-disable react/no-unescaped-entities */
"use client";
import { BASEURL } from "@/components/data/BaseUrl";
import { Input } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import Cover from "@/../../public/images/courses-cover.jpg";
import { IoMdCloudUpload } from "react-icons/io";
const Register = ({ params }) => {
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

  console.log(courseId, "course id");
  const [info, setInfo] = useState({ seats: 1, course_id: courseId });

  const handleOnSubmit = (e) => {
    e.preventDefault();
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

    console.log(formdata);
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      //   redirect: "follow",
    };

    fetch(`${BASEURL}/make-course-registration`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };

  if (courseDetails.loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div id="loader"></div>
      </div>
    );
  }
  console.log(info);
  return (
    <div className=" mx-auto ">
      <div
        style={{
          // backgroundImage: `url(${BASEURL_IMG}${courseDetails.src})`,
          backgroundImage: `url(${Cover.src})`,
          backgroundPosition: "center",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
        className="min-h-[500px] w-full mx-auto "
      ></div>
      <form
        onSubmit={handleOnSubmit}
        className=" space-y-6 max-w-3xl mx-auto my-10 px-4"
      >
        {/* <p>{courseDetails.data?.course?.title}</p>{" "} */}
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
            required
            variant="faded"
            onChange={(e) => {
              setInfo({ ...info, date_id: e.target.value });
            }}
            label="Select a Date"
            className="max-w-sm text-red-900"
            items={courseDetails?.data?.course?.dates}
          >
            {courseDetails?.data?.course?.dates?.map((date) => (
              <SelectItem key={date.id} value={date.from_date}>
                {date.from_date} = {date.to_date}
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
            }}
            accept="application/pdf"
            type="file"
            id="uploadFile1"
            className="hidden"
          />
          <p className="text-xs text-gray-400 mt-2">Only PDF'S Are Allowed.</p>
        </label>
        <button
          type="submit"
          className="rounded-sm bg-gradient-to-br from-[#04001F] to-[#1f0c2c]  py-2 px-8 text-sm  text-white outline-none "
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default Register;
