import Banner from "../components/Banner/Banner.jsx";
import { useTranslation } from "react-i18next";
import useGlobalFech from "../components/GlobalAPI/GlobalFech";
import { Link, useParams } from "react-router-dom";
import { getMultiLang as ml } from "../components/Language/translation/MultiLang.js";
import defaultImg from "../assets/img/default-image.jpg";
import { useEffect, useState } from "react";
import PreLoader from "../components/PreLoader/PreLoader.jsx";
function ProjectsSingle() {
  const [t] = useTranslation("translation");
  const { data } = useGlobalFech();
  const { slug } = useParams();
  const curretItem = data?.layihe?.find((item) => item?.slug_az === slug);
  const [loading, setLoading] = useState(true);
  useEffect(() => {}, [
    setTimeout(() => {
      setLoading(false);
    }, 2000),
  ]);
  return (
    <>
      {loading ? (
        <PreLoader />
      ) : (
        <>
          <main>
            {/* Project banner section */}
            <section>
              {data?.options && (
                <Banner
                  img={data?.options?.pagetopbanner || defaultImg}
                  text={t("ProjectSingleBanner")}
                />
              )}
            </section>
            {/* Project single section */}

            <section className="px-[6rem] lg:px-[3rem] md:px-[2.5rem] sm:px-[1.5rem] py-[6rem] lg:py-[3rem] md:py-[2.5rem] sm:py-[1.5rem]">
              <div className="flex pb-[6rem] lg:pb-[2rem] gap-[2rem]">
                <Link
                  className="text-[1.4rem] lg:text-[1.2rem] text-[#000000] font-normal bg-[#EFEFEF] px-[1.6rem] py-[0.7rem]"
                  to={"/projects"}
                >
                  {t("ProjectSingleHomeA")}
                </Link>
                <p className="text-[1.4rem] lg:text-[1.2rem] text-[#11B6E4] font-bold bg-[#EFEFEF] px-[1.6rem] py-[0.7rem]">
                  {t("ProjectSingleHomeATwo")}
                </p>
              </div>

              <div className="flex flex-col">
                <h2 className="text-[2.5rem] lg:text-[2.2rem] text-[#000000] font-semibold leading-[100%] pb-[7.4rem] lg:pb-[2.2rem]">
                  {ml(
                    curretItem?.name_az,
                    curretItem?.name_ru,
                    curretItem?.name_en
                  )}
                </h2>
                <p className="text-[1.5rem] lg:text-[1.2rem] text-[#000000] font-normal pb-[10rem] lg:pb-[2rem]">
                  {t("ProjectSingleP")}
                </p>
              </div>
              <div className="grid grid-cols-12">
                {curretItem?.images &&
                  curretItem?.images?.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className="col-span-4 md:col-span-6 sm:col-span-12"
                      >
                        <img src={item.src || defaultImg} alt="project-img" />
                      </div>
                    );
                  })}
              </div>
            </section>
          </main>
        </>
      )}
    </>
  );
}
export default ProjectsSingle;
