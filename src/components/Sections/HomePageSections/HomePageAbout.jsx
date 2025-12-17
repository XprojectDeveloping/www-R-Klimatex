import DOMPurify from "dompurify";
import defaultImg from "../../../assets/img/default-image.jpg";
import { useTranslation } from "react-i18next";

function HomePageAbout({
  aboutTextData,
  aboutDataimg,
  aboutDataImgTel,
  aboutDataTel,
  h2Title,
  h3Title,
  pText,
}) {
  const [t] = useTranslation("translation");

  return (
    <>
      <section className="px-[6rem] lg:px-[3rem] md:px-[2.5rem] sm:px-[1.5rem] my-[9rem] lg:my-[5rem] md:my-[3.5rem] sm:my-[2.5rem] flex md:flex-col">
        <div className="flex flex-col gap-[4rem] lg:gap-[2rem] sm:gap-[1rem]">
          <h2 className="text-[4rem] lg:text-[2rem]">{h2Title}</h2>
          <div
            className="text-[1.6rem] lg:text-[1.2rem] font-normal text-justify"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(aboutTextData),
            }}
          />
          <h3 className="text-[2.5rem] lg:text-[2rem] font-semibold">
            {h3Title}
          </h3>
          <p className="text-[1.6rem] lg:text-[1.2rem] font-normal text-justify">
            {pText}
          </p>

          <a
            className="hpTel-hov flex items-center text-[2rem] lg:text-[1.5rem] gap-[1.5rem]"
            href="tel:+994 51 325 13 25"
          >
            <img
              className="lg:max-w-[3rem]"
              src={aboutDataImgTel}
              alt={t("homePageAboutTel")}
            />
            {aboutDataTel}
          </a>
        </div>
        <img
          src={aboutDataimg || defaultImg}
          className="px-[5rem] lg:px-[2rem] md:px-0 w-[50%] object-cover lg:h-[500px] md:h-full md:w-full md:mt-[3.5rem]"
          alt={t("homePageAboutMissiaImgAlt")}
        />
      </section>
    </>
  );
}

export default HomePageAbout;
