import { useTranslation } from "react-i18next";

function Banner({ text, img }) {
  const [t] = useTranslation("translation");
  return (
    <>
      <div className="relative flex items-center justify-center flex-col">
        <img className="w-[100%] h-[40rem]" src={img} alt="about banner" />
        <h2 className="absolute text-[3.4rem] font-normal leading-[100%] text-[#ffffff]">
          {text}
        </h2>
      </div>
    </>
  );
}
export default Banner;
