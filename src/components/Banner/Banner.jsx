import { useTranslation } from "react-i18next";

function Banner({ text, img }) {
  const [t] = useTranslation("translation");
  return (
    <>
      <section>
        <div className="relative flex items-center justify-center flex-col">
          <img
            className="w-[100%] h-[100%] lg:h-[400px] md:h-[350px] sm:h-[250px]"
            src={img}
            alt={t("bannerImgAlt")}
          />
          <h2 className="absolute text-[3.4rem] lg:text-[3rem] md:text-[2.5rem] sm:text-[2rem] font-normal leading-[100%] text-[#ffffff]">
            {text}
          </h2>
        </div>
      </section>
    </>
  );
}
export default Banner;
