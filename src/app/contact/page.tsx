import ContactForm from "@/components/contact/ContactForm"
import Cover from "../../../public/images/cover.jpg";
import Image from "next/image";
const Contact = ()=>{
  return (
    <div  style={{
        backgroundImage: `url(${Cover.src})`,
        backgroundAttachment :"fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
       
      }}
      className="min-h-screen  py-16"
 >
  {/* <Image
            src="/images/about_logo.png"
            width={250}
            height={250}
          className="mx-auto mt-20"
            alt={"Background Image"}
          /> */}
      <ContactForm/>
    </div>
  )
}
export default Contact