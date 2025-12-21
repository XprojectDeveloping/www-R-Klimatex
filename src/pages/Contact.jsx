import { useTranslation } from "react-i18next";
import defaultImg from "../assets/img/default-image.jpg";
import Banner from "../components/Banner/Banner";
import useGlobalFech from "../components/GlobalAPI/GlobalFech";
import { motion as m } from "framer-motion";
import { useEffect, useState } from "react";
import PreLoader from "../components/PreLoader/PreLoader";
function Contact() {
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
              {data?.options?.pagetopbanner && (
                <Banner
                  img={data?.options?.pagetopbanner || defaultImg}
                  text={t("ContactPageBanner")}
                />
              )}

              <section className="px-[6rem] lg:px-[3rem] md:px-[2.5rem] sm:px-[1.5rem] py-[6rem] lg:py-[3rem] md:py-[2.5rem] sm:py-[1.5rem]  bg-[#F1F1F1]">
                <div className="flex lg:flex-col justify-between gap-[2rem]">
                  <input
                    className="w-full h-[45px] text-[#949494] text-[1.3rem] pl-[1.1rem] outline-none placeholder-#949494"
                    placeholder="Ad, Soyad"
                    name="name"
                    type="text"
                  />
                  <input
                    className="w-full h-[45px] text-[#949494] text-[1.3rem] pl-[1.1rem] outline-none placeholder-#949494"
                    placeholder="E-mail"
                    name="email"
                    type="email"
                  />
                  <input
                    className="w-full h-[45px] text-[#949494] text-[1.3rem] pl-[1.1rem] outline-none placeholder-#949494"
                    placeholder="Nömrə"
                    name="tel"
                    type="email"
                  />
                </div>

                <div className="flex pt-[5.1rem]">
                  <textarea className="text-[#949494] text-[1.3rem] outline-none resize-none p-[1rem] w-[100%] h-[200px]">
                    {t("ContactPageTextArea")}
                  </textarea>
                </div>
              </section>
            </m.div>
          </main>
        </>
      )}
    </>
  );
}
export default Contact;
