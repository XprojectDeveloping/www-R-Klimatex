import { getMultiLang as ml } from "../../Language/translation/MultiLang.js";
import defaultImg from "../../../assets/img/default-image.jpg";
import DOMPurify from "dompurify";
import { useTranslation } from "react-i18next";

function HomePageBanner({ dataBanner }) {
  const [t] = useTranslation("translation");

  return (
    <>
      <section>
        {dataBanner &&
          dataBanner?.map((item, index) => {
            return (
              <div
                className="relative w-full h-[600px] overflow-hidden lg:h-[500px] md:h-[400px] sm:h-[350px] xs:h-[300px]"
                key={item?.id || index}
              >
                <img
                  src={item?.src || defaultImg}
                  className="w-full h-full object-cover"
                  alt={
                    ml(item?.alt_az, item?.alt_ru, item?.alt_en) ||
                    t("homePageBanner")
                  }
                />

                <div
                  className="banner text-[5rem] lg:text-[3rem] sm:text-[2.5rem] xs:text-[1.8rem] text-[#ffffff] font-bold absolute inset-0 flex items-center justify-start px-20 lg:px-10 md:px-5 sm:px-4"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                      ml(
                        item?.title_az || "",
                        item?.title_ru || "",
                        item?.title_en || ""
                      )
                    ),
                  }}
                />
              </div>
            );
          })}
      </section>
    </>
  );
}
export default HomePageBanner;
