import { useTranslation } from "react-i18next";
import useGlobalFech from "../components/GlobalAPI/GlobalFech";
import Banner from "../components/Banner/Banner.jsx";
import ProjectPageSection from "../components/Sections/ProjectPageSections/ProjectPageSection.jsx";
import defaultImg from "../assets/img/default-image.jpg";
import { motion as m } from "framer-motion";
import { useEffect, useState } from "react";
import PreLoader from "../components/PreLoader/PreLoader.jsx";
function Projects() {
  const [t] = useTranslation("translation");
  const { data } = useGlobalFech();
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
              {/*Projects banner section */}
              {data?.options?.pagetopbanner && (
                <Banner
                  img={data?.options?.pagetopbanner || defaultImg}
                  text={t("ProjectsPageBanner")}
                />
              )}
              {/*Projects items section */}
              <div className="bg-[#EFEFEF]">
                <section className="py-[6rem] lg:py-[3rem] md:py-[2.5rem] sm:py-[1.5rem]">
                  <div>
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
            </m.div>
          </main>
        </>
      )}
    </>
  );
}

export default Projects;
