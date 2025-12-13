import Banner from "../components/Banner/Banner";
import defaultImg from "../assets/img/default-image.jpg";
import useGlobalFech from "../components/GlobalAPI/GlobalFech.jsx";
import { useTranslation } from "react-i18next";
function License() {
  const { data } = useGlobalFech();
  const [t] = useTranslation("translation");
  return (
    <>
      <main>
        <section>
          {/* License banner section */}
          {data?.options?.pagetopbanner && (
            <Banner
              img={data?.options?.pagetopbanner || defaultImg}
              text={t("LicensePageBanner")}
            />
          )}
        </section>
        {/* License file section */}
        <section className="px-[6rem] py-[6rem] bg-[#F1F1F1]">
          <div className="flex flex-row gap-[2rem]">
            {data?.licency &&
              data?.licency?.map((item) => {
                return (
                  <a href="#" className="" key={item.id}>
                    <img src={item?.src} alt="" />
                  </a>
                );
              })}
          </div>
        </section>
      </main>
    </>
  );
}
export default License;
