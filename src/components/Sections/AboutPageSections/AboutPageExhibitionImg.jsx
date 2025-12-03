import { getMultiLang as ml } from "../../Language/translation/MultiLang.js";
function AboutPageExhibitionImg({ aboutDataImg, h2Title, buttonTitle }) {
  return (
    <>
      <section>
        <div className="px-[6rem] pt-[5.5rem] pb-[5.5rem]">
          <h2 className="text-[4rem] font-semibold leading-[100%]">
            {h2Title}
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-[1rem] px-[6rem]">
          {aboutDataImg &&
            aboutDataImg.map((item) => {
              return (
                <>
                  <div
                    className="project-card col-span-4 md:col-span-6 sm:col-span-12"
                    key={item?.id}
                  >
                    <img
                      src={item.images}
                      alt={ml(
                        item?.options?.about_page?.showroom_images?.alt_az,
                        item?.options?.about_page?.showroom_images?.alt_ru,
                        item?.options?.about_page?.showroom_images?.alt_en
                      )}
                      className="w-full h-[100%] object-cover"
                    />
                  </div>
                </>
              );
            })}
        </div>
        <div className="px-[6rem] pt-[5.5rem] pb-[5.5rem]">
          <button
            className="text-[2rem] text-[#3EA3DC] font-bold px-[5rem] py-[1.6rem] bg-[rgb(255,255,255)]"
            type="button"
          >
            {buttonTitle}
          </button>
        </div>
      </section>
    </>
  );
}
export default AboutPageExhibitionImg;
