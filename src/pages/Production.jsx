import { useTranslation } from "react-i18next";
import useGlobalFech from "../components/GlobalAPI/GlobalFech";
import Banner from "../components/Banner/Banner";
import { getMultiLang as ml } from "../components/Language/translation/MultiLang.js";
import { Link, useParams } from "react-router-dom";
import defaultImg from "../assets/img/default-image.jpg";
function Production() {
  const [t] = useTranslation("translation");
  const { data } = useGlobalFech();
  const { slug } = useParams();
  // const curretItem = data?.istehsalat?.find((item) => item?.slug_az === slug);
  return (
    <>
      <main>
        {/* Production banner section */}
        <section>
          {data?.options?.pagetopbanner && (
            <Banner
              img={data?.options?.pagetopbanner || defaultImg}
              text={t("ProductionPageBanner")}
            />
          )}
        </section>

        {/* Production items section */}
        <section className="px-[6rem] py-[6rem] bg-[#F0F0F0]">
          <div className="flex flex-row gap-[5rem]">
            {data?.istehsalat &&
              data?.istehsalat?.map((item) => {
                return (
                  <div
                    className="flex flex-col items-center gap-[2.9rem]"
                    key={item.id}
                  >
                    <img
                      src={item?.src || defaultImg}
                      alt={ml(item?.alt_az, item?.alt_ru, item?.alt_en) || ""}
                    />

                    <Link
                      to={`/production/s/${item?.id}/${item?.slug_az}`}
                      className="product-hov text-center text-[1.5rem] text-[#000000] font-normal leading-[100%] bg-[#ffffff] px-[3.7rem] py-[1.8rem]"
                    >
                      {ml(item?.name_az, item?.name_en, item?.name_ru)}
                    </Link>
                  </div>
                );
              })}
          </div>
        </section>
      </main>
    </>
  );
}

export default Production;
