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
          <div className="flex justify-between">
            <input
              className="w-[350px] h-[45px] text-[#949494] text-[1.3rem] pl-[1.1rem] placeholder-#949494"
              placeholder="Ad, Soyad"
              name="name"
              type="text"
            />
            <input
              className="w-[350px] h-[45px] text-[#949494] text-[1.3rem] pl-[1.1rem] placeholder-#949494"
              placeholder="E-mail"
              name="email"
              type="email"
            />
            <input
              className="w-[350px] h-[45px] text-[#949494] text-[1.3rem] pl-[1.1rem] placeholder-#949494"
              placeholder="Nömrə"
              name="tel"
              type="email"
            />
          </div>

          <div className="flex pt-[5.1rem]">
            <textarea className="text-[#949494] text-[1.3rem] p-[1rem] w-[100%] h-[200px]">
              Messaj
            </textarea>
          </div>
        </section>
      </main>
    </>
  );
}
export default Contact;
