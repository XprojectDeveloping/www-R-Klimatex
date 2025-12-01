import { getMultiLang as ml } from "../../Language/translation/MultiLang.js";
import DOMPurify from "dompurify";
function HomePageBanner({ dataBanner }) {
  return (
    <>
      <section>
        {dataBanner &&
          dataBanner?.map((item) => {
            return (
              <div className="relative" key={item?.id}>
                <img
                  src={item?.src}
                  alt={ml(item?.alt_az, item?.alt_ru, item?.alt_en)}
                />

                <div
                  className="banner text-[5rem] text-[#ffffff] font-bold absolute top-[34rem] left-[9rem]"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                      ml(item?.title_az, item?.title_ru, item?.title_en)
                    ),
                  }}
                />
              </div>
            );
          })}
      </section>
    </>
  );
}
export default HomePageBanner;
