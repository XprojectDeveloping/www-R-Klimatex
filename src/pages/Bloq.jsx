import Banner from "../components/Banner/Banner";
import defaultImg from "../assets/img/default-image.jpg";
import BlogPageImg from "../assets/img/body/blog/bloq-page-img.png";
import useGlobalFech from "../components/GlobalAPI/GlobalFech.jsx";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";
import { useEffect, useState } from "react";
import PreLoader from "../components/PreLoader/PreLoader.jsx";

function Bloq() {
  const { data } = useGlobalFech();
  const [t] = useTranslation("translation");
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
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
            >
              {/* Bloq banner section */}
              {data?.options?.pagetopbanner && (
                <Banner
                  img={data?.options?.pagetopbanner || defaultImg}
                  text={t("BloqPageBanner")}
                />
              )}
              {/* Bloq content section */}
              <section className="px-[6rem] lg:px-[3rem] md:px-[2.5rem] sm:px-[1.5rem] py-[6rem] lg:py-[3rem] md:py-[2.5rem] sm:py-[1.5rem] bg-[#F0F0F0]">
                <div className="flex lg:flex-col">
                  <div className="w-[55%] lg:w-full pb-[3rem]">
                    <h3 className="text-[4rem] lg:text-[2.5rem] text-[#000000] pb-[2.9rem] font-semibold">
                      {t("BloqPageH2")}
                    </h3>
                    <p className="text-[1.8rem] lg:text-[1.5rem] text-[#000000] pb-[2.9rem]">
                      {t("BloqPageP")}
                    </p>

                    <Link
                      className="text-[1.6rem] lg:text-[1rem] text-[#000000] font-light leading-[100%] bg-[#ffffff] py-[1.2rem] px-[3.9rem]"
                      to={"/bloq/bloqsingle"}
                    >
                      {t("BloqPageLink")}
                    </Link>
                  </div>
                  <div>
                    <img
                      className="lg:w-full"
                      src={BlogPageImg}
                      alt="bloq-img"
                    />
                  </div>
                </div>
              </section>
            </m.div>
          </main>
        </>
      )}
    </>
  );
}

export default Bloq;
