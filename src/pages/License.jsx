import Banner from "../components/Banner/Banner";
import defaultImg from "../assets/img/default-image.jpg";
import useGlobalFech from "../components/GlobalAPI/GlobalFech.jsx";
import { useTranslation } from "react-i18next";
import { motion as m } from "framer-motion";
import { useEffect, useState } from "react";
import PreLoader from "../components/PreLoader/PreLoader.jsx";
function License() {
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
              {/* License banner section */}
              {data?.options?.pagetopbanner && (
                <Banner
                  img={data?.options?.pagetopbanner || defaultImg}
                  text={t("LicensePageBanner")}
                />
              )}

              {/* License file section */}
              <section className="px-[6rem] lg:px-[3rem] md:px-[2.5rem] sm:px-[1.5rem] py-[6rem] lg:py-[3rem] md:py-[2.5rem] sm:py-[1.5rem] bg-[#F1F1F1]">
                <div className="flex md:flex-col flex-row gap-[2rem]">
                  {data?.licency &&
                    data?.licency?.map((item) => {
                      return (
                        <a href="#" className="" key={item.id}>
                          <img className="md:w-full" src={item?.src} alt="" />
                        </a>
                      );
                    })}
                </div>
              </section>
            </m.div>
          </main>
        </>
      )}
    </>
  );
}
export default License;
