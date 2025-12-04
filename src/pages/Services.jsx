import { useTranslation } from "react-i18next";
import useGlobalFech from "../components/GlobalAPI/GlobalFech";
import Banner from "../components/Banner/Banner.jsx";
import { getMultiLang as ml } from "../components/Language/translation/MultiLang.js";
import ServicesSlider from "../components/Banner/ServicesSlider.jsx";
function Services() {
  const [t] = useTranslation("translation");
  const { data } = useGlobalFech();
  return (
    <>
      <section>
        <Banner
          img={data?.options?.pagetopbanner}
          text={t("SevicesPageBanner")}
        />
      </section>

      <div className="bg-[#EFEFEF]">
        <section>
          <div className="py-[10rem]">
            <ServicesSlider sliderData={data?.service} />
          </div>
        </section>
      </div>
    </>
  );
}
export default Services;
