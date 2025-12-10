import Banner from "../components/Banner/Banner";
import defaultImg from "../assets/img/default-image.jpg";
import { getMultiLang as ml } from "../components/Language/translation/MultiLang.js";
import BlogPageImg from "../assets/img/body/blog/bloq-page-img.png";
import useGlobalFech from "../components/GlobalAPI/GlobalFech.jsx";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Bloq() {
  const { data } = useGlobalFech();
  const [t] = useTranslation("translation");
  return (
    <>
      <main>
        <section>
          {/* Bloq banner section */}
          {data?.options?.pagetopbanner && (
            <Banner
              img={data?.options?.pagetopbanner || defaultImg}
              text={t("BloqPageBanner")}
            />
          )}
        </section>
        {/* Bloq content section */}
        <section className="px-[6rem] py-[6rem] bg-[#F0F0F0]">
          <div className="flex">
            <div className="w-[55%]">
              <h3 className="text-[4rem] text-[#000000] pb-[2.9rem] font-semibold">
                {t("BloqPageH2")}
              </h3>
              <p className="text-[1.8rem] text-[#000000] pb-[2.9rem]">
                {t("BloqPageP")}
              </p>

              <Link
                className="text-[1.6rem] text-[#000000] font-light leading-[100%] bg-[#ffffff] py-[1.2rem] px-[3.9rem]"
                to={"/bloq/bloqsingle"}
              >
                {t("BloqPageLink")}
              </Link>
            </div>
            <div>
              <img src={BlogPageImg} alt="bloq-img" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Bloq;
