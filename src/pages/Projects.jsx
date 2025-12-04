import { useTranslation } from "react-i18next";
import useGlobalFech from "../components/GlobalAPI/GlobalFech";
import Banner from "../components/Banner/Banner.jsx";
import { getMultiLang as ml } from "../components/Language/translation/MultiLang.js";
import ProjectPageSection from "../components/Sections/ProjectPageSections/ProjectPageSection.jsx";
function Projects(params) {
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
          <div className="py-[5rem]">
            <ProjectPageSection
              projectData={data?.layihe}
              h2Title={t("projectPageH2")}
              buttonText={t("projectButtonText")}
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default Projects;
