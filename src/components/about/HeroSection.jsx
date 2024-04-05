import Cover from "../../../public/images/courses-cover.jpg";
export default function HeroSection() {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.6643032212885154) 100%, rgba(0,0,0,0) 100%),url(${Cover.src})`,

        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className=" min-h-[250px] w-full flex items-center justify-center relative "
    >
      <h1 className=" font-bold text-3xl pt-10 bg-gradient-to-r tracking-widest from-[#FFEEF0] via-[#f3b7be] to-[#f1919c] bg-clip-text text-transparent">
        Wer wir sind
      </h1>
    </div>
  );
}
