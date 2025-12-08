import { Link, useParams } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import useGlobalFech from "../components/GlobalAPI/GlobalFech";
import { useTranslation } from "react-i18next";
function ProductionSingle() {
  const [t] = useTranslation("translation");
  const { slug } = useParams();
  const { data } = useGlobalFech();
  const curretItem = data?.istehsalat?.find((item) => item?.slug_az === slug);
  console.log(curretItem);

  return (
    <>
      <main>
        <section>
          <Banner
            img={data?.options?.pagetopbanner}
            text={t("ProductionPageBanner")}
          />
        </section>

        <section className="px-[6rem] py-[6rem] flex flex-row gap-[1rem]">
          <Link
            className="text-[1.5rem] text-[#000000] font-normal leading-[100%]"
            to={"/production"}
          >
            {t("ProductionPageLink")}
          </Link>
          <p className="text-[1.5rem] text-[#3EA3DC] font-bold leading-[100%]">
            {t("ProductionPageP")}
          </p>
        </section>

        <section className="px-[6rem] pu-[6rem]">
          <div className="grid grid-cols-12">
            {curretItem?.products &&
              curretItem?.products.map((item) => {
                return (
                  <div className="" key={item?.id}>
                    <img src={item?.src} alt="" />
                  </div>
                );
              })}
          </div>
        </section>
      </main>
    </>
  );
}
export default ProductionSingle;
