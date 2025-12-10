import { useTranslation } from "react-i18next";
import defaultImg from "../assets/img/default-image.jpg";
import Banner from "../components/Banner/Banner";
import useGlobalFech from "../components/GlobalAPI/GlobalFech";
function Contact() {
  const { data } = useGlobalFech();
  const [t] = useTranslation("translation");
  return (
    <>
      <main>
        <section>
          {data?.options?.pagetopbanner && (
            <Banner
              img={data?.options?.pagetopbanner || defaultImg}
              text={t("ContactPageBanner")}
            />
          )}
        </section>

        <section className="px-[6rem] py-[6rem] bg-[#F1F1F1]">
          <div className="flex">
            <input name="name" type="text" />
            <input name="email" type="email" />
            <input name="tel" type="email" />
          </div>

          <div className="flex justify-center"></div>
        </section>
      </main>
    </>
  );
}
export default Contact;
