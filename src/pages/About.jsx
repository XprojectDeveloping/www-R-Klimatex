import { useTranslation } from "react-i18next";
import useGlobalFech from "../components/GlobalAPI/GlobalFech";
import Banner from "../components/Banner/Banner.jsx";
import AboutPageMissiya from "../components/Sections/AboutPageSections/AboutPageMissiya.jsx";
import { getMultiLang as ml } from "../components/Language/translation/MultiLang.js";
import aboutPageImg from "../assets/img/body/about/aboutPageExhibition-img.png";
import AboutPageExhibition from "../components/Sections/AboutPageSections/AboutPageExhibition.jsx";
import AboutPageExhibitionImg from "../components/Sections/AboutPageSections/AboutPageExhibitionImg.jsx";
function About() {
  const [t] = useTranslation("translation");
  const { data } = useGlobalFech();

  return (
    <>
      {/* About banner section */}
      <section>
        <Banner img={data?.options?.pagetopbanner} text={t("aboutPageH2")} />
      </section>

      {/* About about section */}

      <AboutPageMissiya
        h2Title={t("aboutPageMissiyaH2")}
        pText={t("aboutPageMissiyaP")}
        missytaDataimg={data?.options?.about_page?.about_1_img}
        missytaDataimgAlt={ml(
          data?.options?.about_page?.about_1_alt_az,
          data?.options?.about_page?.about_1_alt_ru,
          data?.options?.about_page?.about_1_alt_en
        )}
      />

      <div className="bg-[#EFEFEF]">
        <AboutPageExhibition
          h2Title={t("aboutPageExhibitionH2")}
          pText={t("aboutPageExhibitionP")}
          aboutDataImg={aboutPageImg}
        />

        <AboutPageExhibitionImg
          h2Title={t("AboutPageExhibitionImgH2")}
          aboutDataImg={data?.options?.about_page?.showroom_images}
          buttonTitle={t("AboutPageExhibitionImgButton")}
        />
      </div>
    </>
  );
}
export default About;
