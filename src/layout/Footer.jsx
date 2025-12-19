import footerCallIco from "../assets/img/footer/footer-call-ico.svg";
import footerLocationIco from "../assets/img/footer/footer-location-ico.svg";
import footerEmailIco from "../assets/img/footer/footer-email-ico.svg";
import footerKlimatexIco from "../assets/img/footer/footer-klimatex-logo-ico.svg";
import footerCornIco from "../assets/img/footer/footer-corn-logo-ico.webp";
import useGlobalFech from "../components/GlobalAPI/GlobalFech";
import { getMultiLang as ml } from "../components/Language/translation/MultiLang.js";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
function Footer() {
  const { data } = useGlobalFech();
  const [t] = useTranslation("translation");
  return (
    <>
      <footer>
        <div className="flex items-center lg:flex-col justify-between py-[3rem] lg:py-[2.5rem] md:py-[1.5rem] px-[6rem] lg:px-[3rem] md:px-[2.5rem] bg-[#EE2F41]">
          <div className="flex sm:flex-col items-center gap-[10rem] md:gap-[4rem] sm:gap-[1rem]">
            <div className="flex items-center">
              <img
                src={footerCallIco}
                className="max-w-[48px] pr-[1rem] sm:max-w-[3rem]"
                alt="call"
              />
              <div className="flex flex-col">
                <a className="text-[1.3rem]" href="tel:+994 12 514 19 44">
                  {data?.options?.options?.tel1}
                </a>
                <a className="text-[1.3rem]" href="tel:+994 51 325 13 25">
                  {data?.options?.options?.tel2}
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src={footerLocationIco}
                className="max-w-[48px] pr-[1rem] sm:max-w-[3rem]"
                alt="location"
              />

              <div>
                <a href="#" className="text-[1.3rem] hover:text-[#ffffff]">
                  {ml(
                    data?.options?.options?.unvan_az,
                    data?.options?.options?.unvan_ru,
                    data?.options?.options?.unvan_en
                  )}
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src={footerEmailIco}
                alt="email"
                className="mxax-w-[48px] pr-[1rem] sm:max-w-[3rem]"
              />

              <div>
                <a
                  className="text-[1.3rem] hover:text-[#ffffff] sm:max-w-[3rem]"
                  href="mailto:office@klimatex.az"
                >
                  {data?.options?.options?.email}
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center lg:mt-[2rem] sm:hidden">
            <input
              name="input-text"
              type="text"
              className="w-[350px] h-[40px] text-[#000000] outline-none text-[1.3rem] pl-[1rem]"
            />
            <button
              name="button"
              type="button"
              className="px-[3rem] py-[1rem] bg-[#ffffff] text-[1.3rem]"
            >
              {t("footerSub")}
            </button>
          </div>
        </div>
        <div className="flex sm:flex-col gap-[1rem] items-center justify-between py-[3rem] lg:py-[2.5rem] md:py-[1.5rem] px-[6rem] lg:px-[3rem] md:px-[2.5rem] bg-[#464E55]">
          <div>
            <Link to={"/"}>
              <img
                className="lg:max-w-[13rem]"
                src={footerKlimatexIco}
                alt="klimatex-logo"
              />
            </Link>
          </div>

          <div className="flex items-center gap-[3rem] font-normal leading-[100%]">
            <p className="text-[1.75rem] lg:text-[1.65rem] sm:text-[1rem] text-[#ffffff]">
              {t("footerAuthor")}
            </p>
            <div className="max-w-[9rem]">
              <a href="https://corn.az/">
                <img src={footerCornIco} alt="corn" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
