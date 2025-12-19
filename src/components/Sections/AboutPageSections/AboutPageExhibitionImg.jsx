import { Link } from "react-router-dom";

function AboutPageExhibitionImg({
  aboutDataImg,
  h2Title,
  buttonTitle,
  aboutImgTitle,
}) {
  return (
    <>
      <section className="px-[6rem] lg:px-[3rem] md:px-[2.5rem] sm:px-[1.5rem] py-[6rem] lg:py-[3rem] md:py-[2.5rem] sm:py-[1.5rem]">
        <div className="pb-[6rem] lg:pb-[3.5rem]">
          <h2 className="text-[4rem] lg:text-[2.5rem] font-semibold leading-[100%]">
            {h2Title}
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-[1rem]">
          {aboutDataImg &&
            aboutDataImg.map((item) => {
              return (
                <>
                  <div
                    className="project-card col-span-6 md:col-span-6 sm:col-span-12"
                    key={item?.id}
                  >
                    <img
                      src={item.images}
                      alt={aboutImgTitle}
                      className="w-full h-[100%] object-cover"
                    />
                  </div>
                </>
              );
            })}
        </div>
        <div className="pt-[5.5rem] lg:pt-[2.5rem]">
          <Link
            className="about-pageEx-hov text-[2rem] lg:text-[1.5rem] text-[#3EA3DC] font-bold px-[5rem] lg:px-[3.5rem] py-[1.6rem] lg:py-[1.3rem] bg-[rgb(255,255,255)]"
            type="button"
            to={"/projects"}
          >
            {buttonTitle}
          </Link>
        </div>
      </section>
    </>
  );
}
export default AboutPageExhibitionImg;
