import { useTranslation } from "react-i18next";
import { getMultiLang as ml } from "../components/Language/translation/MultiLang.js";
import useGlobalFech from "../components/GlobalAPI/GlobalFech";
import DOMPurify from "dompurify";

function About() {
  const [t] = useTranslation("translation");
  const { data } = useGlobalFech();
  return (
    <>
      {/* About banner section */}
      <section>
        <div className="relative flex items-center justify-center flex-col">
          <img src={data?.options?.pagetopbanner} alt="about banner" />
          <h2 className="absolute text-[2.4rem] font-normal leading-[100%] text-[#ffffff]">
            {t("aboutPageH2")}
          </h2>
        </div>
      </section>

      {/* About about section */}

      <section></section>
    </>
  );
}
export default About;
