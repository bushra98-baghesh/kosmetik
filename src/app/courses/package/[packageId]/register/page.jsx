"use client";
import { BASEURL } from "@/components/data/BaseUrl";
import { Input } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";

const Register = ({ params }) => {
  async function getPackage(id) {
    setPackageDetails({
      loading: true,
      data: [],
      error: false,
    });
    const res = await fetch(`${BASEURL}/package/${id}`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    res.json().then((result) => {
      setPackageDetails({
        loading: false,
        error: false,
        data: result,
      });
    });
  }

  const [packageDetails, setPackageDetails] = useState({
    data: [],
    loading: false,
    error: false,
  });

  const { packageId } = params;

  console.log(packageDetails);

  useEffect(() => {
    getPackage(packageId);
  }, []);

  const [info, setInfo] = useState({ seats: 1, package_id: packageId });

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
    formdata.append("package_id", info.package_id);
    formdata.append("package_date_id", info.date_id);
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

    fetch(
      "http://192.168.43.146:8000/api/make-package-registration",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };

  if (packageDetails.loading) {
    return <p>Loading</p>;
  }
  console.log(info);
  return (
    <div className="max-w-4xl mx-auto ">
      <form onSubmit={handleOnSubmit} className=" space-y-6">
        <p>{packageDetails.data?.package.title}</p>{" "}
        <Input
          isRequired
          type="email"
          label="Email"
          name="email"
          placeholder="Enter your email"
          onChange={handleOnChange}
        />
        <Input
          isRequired
          label="first name"
          name="first_name"
          onChange={handleOnChange}
          placeholder="Enter your first name"
        />
        <Input
          isRequired
          label="last name"
          name="last_name"
          onChange={handleOnChange}
          placeholder="Enter your last name"
        />
        <Input
          isRequired
          label="address"
          name="address"
          onChange={handleOnChange}
          placeholder="Enter your address"
        />
        <Input
          isRequired
          label="phone"
          name="phone"
          onChange={handleOnChange}
          placeholder="Enter your phone"
        />
        <Input
          isRequired
          label="city"
          name="city"
          onChange={handleOnChange}
          placeholder="Enter your city"
        />
        <Input
          isRequired
          label="postal code"
          name="postal_code"
          onChange={handleOnChange}
          placeholder="Enter your postal code"
        />
        <Select
          onChange={(e) => {
            setInfo({ ...info, date_id: e.target.value });
          }}
          label="Select a Date"
          className="max-w-xs text-red-900"
          items={packageDetails?.data?.package.dates}
        >
          {packageDetails?.data?.package.dates?.map((date) => (
            <SelectItem key={date.id} value={date.from_date}>
              {date.from_date} = {date.to_date}
            </SelectItem>
          ))}
        </Select>
        <input
          isRequired
          onChange={(e) => {
            setInfo({ ...info, contract: e.target.files[0] });
          }}
          type="file"
          accept="application/pdf"
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
export default Register;
