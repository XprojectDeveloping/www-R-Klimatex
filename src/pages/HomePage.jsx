import homePageTelIco from "../assets/img/body/homePageTel-ico.svg";
import homePageServicesBg from "../assets/img/body/homepage-services-bg.png";
import { useTranslation } from "react-i18next";
import useGlobalFech from "../components/GlobalAPI/GlobalFech";
import { getMultiLang as ml } from "../components/Language/translation/MultiLang.js";
import DOMPurify from "dompurify";
function HomePage({ text }) {
  const [t] = useTranslation("translation");
  const { data } = useGlobalFech();
  return (
    <>
      <main>
        {data?.homebanner &&
          data?.homebanner?.map((item) => {
            return (
              <div className="relative" key={item?.id}>
                <img
                  src={item?.src}
                  alt={ml(item?.alt_az, item?.alt_ru, item?.alt_en)}
                />

                <div
                  className="banner text-[5rem] text-[#ffffff] font-bold absolute top-[34rem] left-[9rem]"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                      ml(item?.title_az, item?.title_ru, item?.title_en)
                    ),
                  }}
                />
              </div>
            );
          })}

        <div className="px-[6rem] mt-[9rem] mb-[9rem] flex">
          <div className="flex flex-col gap-[4rem]">
            <h2 className="text-[4rem] ">{t("homePageH2")}</h2>
            <p className="text-[1.6rem] font-normal text-justify">
              {t("homePageP1")}
            </p>
            <h3 className="text-[2.5rem] font-semibold">{t("homePageH3")}</h3>
            <p className="text-[1.6rem] font-normal text-justify">
              {t("homePageP2")}
            </p>

            <a
              className="flex items-center text-[2rem] gap-[1.5rem]"
              href="tel:+994 51 325 13 25"
            >
              <img src={homePageTelIco} alt="tel" />
              {text ?? "+994 51 325 13 25"}
            </a>
          </div>
          <img
            src={data?.options?.misiya?.missiya_image}
            className="px-[5rem]"
            alt="missiya_image"
          />
        </div>

        <div className="services-bg flex items-center justify-center flex-col relative">
          <img src={homePageServicesBg} alt="services-bg" />

          <div className="flex items-center justify-center flex-col h-[500px] absolute">
            <h2 className="pb-[1.3rem] text-[5.5rem] font-semibold leading-[100%] text-[#ffffff]">
              {t("homePageServicesH2")}
            </h2>
            <p className="text-[3.2rem] font-normal leading-[100%] text-[#ffffff]">
              {t("homePageServicesP")}
            </p>
          </div>
        </div>

        <div className="">
          
        </div>
      </main>
    </>
  );
}
export default HomePage;
