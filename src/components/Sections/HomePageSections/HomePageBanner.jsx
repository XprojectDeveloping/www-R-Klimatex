import { getMultiLang as ml } from "../../Language/translation/MultiLang.js";
import DOMPurify from "dompurify";
function HomePageBanner({ dataBanner }) {
  if (!dataBanner || !dataBanner.length) {
    return null;
  }
  return (
    <>
      <section>
        {dataBanner &&
          dataBanner?.map((item, index) => {
            return (
              <div
                className="relative w-full h-[600px] overflow-hidden"
                key={item?.id ?? index}
              >
                <img
                  src={item?.src ?? "default-image.jpg"}
                  className="w-full h-full object-cover"
                  alt={
                    ml(item?.alt_az, item?.alt_ru, item?.alt_en) ?? "banner img"
                  }
                />

                <div
                  className="banner text-[5rem] text-[#ffffff] font-bold absolute inset-0 flex items-center justify-start px-20"
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
