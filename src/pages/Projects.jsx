import { useTranslation } from "react-i18next";
import useGlobalFech from "../components/GlobalAPI/GlobalFech";
import Banner from "../components/Banner/Banner.jsx";
import { getMultiLang as ml } from "../components/Language/translation/MultiLang.js";
import ProjectPageSection from "../components/Sections/ProjectPageSections/ProjectPageSection.jsx";
function Projects() {
  const [t] = useTranslation("translation");
  const { data } = useGlobalFech();
  return (
    <>
      <main>
        <section>
          <Banner
            img={data?.options?.pagetopbanner}
            text={t("ProjectsPageBanner")}
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
      </main>
    </>
  );
}

export default Projects;
