import ContactForm from "@/components/contact/ContactForm"
import Cover from "../../../public/images/cover.jpg";

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

      <ContactForm/>
    </div>
  )
}
export default Contact