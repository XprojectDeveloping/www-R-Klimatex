import { Link } from "react-router-dom";
import { getMultiLang as ml } from "../../Language/translation/MultiLang.js";
function ProjectPageSection({ projectData, h2Title, buttonText }) {
  return (
    <>
      <section className="px-[6rem]">
        <div className="grid grid-cols-12">
          <div className="col-span-4 md:col-span-6 sm:col-span-12 bg-[#3EA3DC] flex items-center justify-center flex-col relative cursor-pointer col-lg-4 col-md-6 col-6">
            <div className="text-[3.6rem] text-[#ffffff] font-light leading-[100%]">
              {h2Title}
            </div>
            <div className="project-bg-hov mt-[3.5rem] px-[5rem] py-[1.6rem] bg-[#ffffff]">
              <Link
                className="text-[#3EA3DC] text-[2.2rem] font-bold leading-[100%]"
                to={"/projects"}
              >
                {buttonText}
              </Link>
            </div>
          </div>
          {projectData &&
            projectData.slice(0, 5).map((item) => {
              return (
                <div
                  className="project-card col-span-4 md:col-span-6 sm:col-span-12"
                  key={item?.id}
                >
                  <Link to={"/projects"}>
                    <img
                      src={item?.cover}
                      className="grayscale"
                      alt={ml(item?.alt_az, item?.alt_ru, item?.alt_en)}
                    />
                  </Link>
                </div>
              );
            })}
        </div>
      </section>
    </>
  );
}
export default ProjectPageSection;
