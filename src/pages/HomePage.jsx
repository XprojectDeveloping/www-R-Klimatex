import { useTranslation } from "react-i18next";
import useGlobalFech from "../components/GlobalAPI/GlobalFech";
import { getMultiLang as ml } from "../components/Language/translation/MultiLang.js";
import DOMPurify from "dompurify";
function HomePage() {
  const [t] = useTranslation();
  const { data } = useGlobalFech();
  return (
    <>
      <main>
        {data?.homebanner &&
          data?.homebanner?.map((item) => {
            return (
              <div className="relative" key={item?.id}>
                <img
                  src={item?.src}
                  alt={ml(item?.alt_az, item?.alt_ru, item?.alt_en)}
                />

                <div
                  className="banner absolute top-[34rem] left-[9rem]"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                      ml(item?.title_az, item?.title_ru, item?.title_en)
                    ),
                  }}
                />
              </div>
            );
          })}
      </main>
    </>
  );
}
export default HomePage;
