import { useTranslation } from "react-i18next";
import useGlobalFech from "../components/GlobalAPI/GlobalFech";
import Banner from "../components/Banner/Banner.jsx";
import ProjectPageSection from "../components/Sections/ProjectPageSections/ProjectPageSection.jsx";
import defaultImg from "../assets/img/default-image.jpg";
function Projects() {
  const [t] = useTranslation("translation");
  const { data } = useGlobalFech();
  return (
    <>
      <main>
        <section>
          {/*Projects banner section */}
          {data?.options?.pagetopbanner && (
            <Banner
              img={data?.options?.pagetopbanner || defaultImg}
              text={t("ProjectsPageBanner")}
            />
          )}
        </section>
        {/*Projects items section */}
        <div className="bg-[#EFEFEF]">
          <section>
            <div className="py-[5rem]">
              {data?.layihe && (
                <ProjectPageSection
                  projectData={data?.layihe}
                  h2Title={t("projectPageH2")}
                  buttonText={t("projectButtonText")}
                />
              )}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Projects;
