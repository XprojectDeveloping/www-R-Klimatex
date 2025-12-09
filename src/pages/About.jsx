import { useTranslation } from "react-i18next";
import useGlobalFech from "../components/GlobalAPI/GlobalFech";
import { getMultiLang as ml } from "../components/Language/translation/MultiLang.js";
import Banner from "../components/Banner/Banner.jsx";
import AboutPageMissiya from "../components/Sections/AboutPageSections/AboutPageMissiya.jsx";
import AboutPageImg from "../assets/img/body/about/aboutPageExhibition-img.png";
import AboutPagePlayImg from "../assets/img/body/about/showRoomPlay.svg";
import defaultImg from "../assets/img/default-image.jpg";
import AboutPageExhibition from "../components/Sections/AboutPageSections/AboutPageExhibition.jsx";
import AboutPageExhibitionImg from "../components/Sections/AboutPageSections/AboutPageExhibitionImg.jsx";
import AboutPageShowroom from "../components/Sections/AboutPageSections/AboutPageShowroom.jsx";
import AboutPageProduction from "../components/Sections/AboutPageSections/AboutPageProduction.jsx";
import AboutPageServis from "../components/Sections/AboutPageSections/AboutPageServis.jsx";
function About() {
  const [t] = useTranslation("translation");
  const { data } = useGlobalFech();

  return (
    <>
      <main>
        {/* About banner section */}
        <section>
          {data?.options?.pagetopbanner && (
            <Banner
              img={data?.options?.pagetopbanner}
              text={t("aboutPageBanner")}
            />
          )}
        </section>

        {/* About about section */}

        {data?.options?.about_page && (
          <AboutPageMissiya
            h2Title={t("aboutPageMissiyaH2")}
            pText={t("aboutPageMissiyaP")}
            missytaDataimg={
              data?.options?.about_page?.about_1_img || defaultImg
            }
            missytaDataimgAlt={ml(
              data?.options?.about_page?.about_1_alt_az || "",
              data?.options?.about_page?.about_1_alt_ru || "",
              data?.options?.about_page?.about_1_alt_en || ""
            )}
          />
        )}

        <div className="bg-[#EFEFEF]">
          <AboutPageExhibition
            h2Title={t("aboutPageExhibitionH2")}
            pText={t("aboutPageExhibitionP")}
            aboutDataImg={AboutPageImg}
          />

          {data?.options?.about_page && (
            <AboutPageExhibitionImg
              h2Title={t("AboutPageExhibitionImgH2")}
              aboutDataImg={
                data?.options?.about_page?.showroom_images || defaultImg
              }
              buttonTitle={t("AboutPageExhibitionImgButton")}
              aboutImgTitle={ml(
                data?.options?.about_page?.showroom_360_alt_az || "",
                data?.options?.about_page?.showroom_360_alt_ru || "",
                data?.options?.about_page?.showroom_360_alt_en || ""
              )}
            />
          )}
        </div>
        {data?.options?.about_page && (
          <AboutPageShowroom
            h2Title={t("AboutPageShowroomH2")}
            aboutImg={
              data?.options?.about_page?.showroom_360_image || defaultImg
            }
            aboutImgTitle={ml(
              data?.options?.about_page?.showroom_360_alt_az || "",
              data?.options?.about_page?.showroom_360_alt_ru || "",
              data?.options?.about_page?.showroom_360_alt_en || ""
            )}
            playButton={AboutPagePlayImg}
            videoUrl={data?.options?.about_page?.showroom_360_video_link || ""}
          />
        )}

        <div className="bg-[#EFEFEF]">
          {data?.options?.about_page && (
            <AboutPageProduction
              h2Title={t("AboutPageProductionH2")}
              pText={ml(
                data?.options?.about_page?.about_2_text_az,
                data?.options?.about_page?.about_2_text_ru,
                data?.options?.about_page?.about_2_text_en
              )}
              aboutImg={data?.options?.about_page?.about_2_img || defaultImg}
              aboutImgTtitle={ml(
                data?.options?.about_page?.about_2_alt_az || "",
                data?.options?.about_page?.about_2_alt_ru || "",
                data?.options?.about_page?.about_2_alt_en || ""
              )}
            />
          )}
        </div>

        {data?.options?.about_page && (
          <AboutPageServis
            h2Title={t("AboutPageServisH2")}
            pText={ml(
              data?.options?.about_page?.about_3_text_az,
              data?.options?.about_page?.about_3_text_ru,
              data?.options?.about_page?.about_3_text_en
            )}
            aboutImg={data?.options?.about_page?.about_3_img || defaultImg}
          />
        )}
      </main>
    </>
  );
}
export default About;
