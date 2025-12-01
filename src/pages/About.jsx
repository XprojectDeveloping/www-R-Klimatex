import { useTranslation } from "react-i18next";
import useGlobalFech from "../components/GlobalAPI/GlobalFech";
import Banner from "../components/Banner/Banner.jsx";

function About() {
  const [t] = useTranslation("translation");
  const { data } = useGlobalFech();
  return (
    <>
      {/* About banner section */}
      <section>
        <Banner img={data?.options?.pagetopbanner} text={t("aboutPageH2")} />
      </section>

      {/* About about section */}

      <section></section>
    </>
  );
}
export default About;
