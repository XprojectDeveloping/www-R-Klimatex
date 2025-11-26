import footerCallIco from "../assets/img/footer/footer-call-ico.svg";
import footerLocationIco from "../assets/img/footer/footer-location-ico.svg";
import footerEmailIco from "../assets/img/footer/footer-email-ico.svg";
import footerKlimatexIco from "../assets/img/footer/footer-klimatex-logo-ico.svg";
import footerCornIco from "../assets/img/footer/footer-corn-logo-ico.webp";
import useGlobalFech from "../components/GlobalAPI/GlobalFech";
import { getMultiLang as ml } from "../components/Language/translation/MultiLang.js";
import { useTranslation } from "react-i18next";
function Footer() {
  const { data } = useGlobalFech();
  const [t] = useTranslation("translation");
  return (
    <>
      <footer>
        <div className="flex items-center justify-between py-[1rem] px-[6rem] bg-[#EE2F41]">
          <div className="flex items-center  gap-[10rem]">
            <div className="flex items-center">
              <img
                src={footerCallIco}
                className="max-w-[48px] pr-[1rem]"
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
                className="max-w-[48px] pr-[1rem]"
                alt="location"
              />

              <div>
                <a href="#" className="text-[1.3rem]">
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
                className="max-w-[48px] pr-[1rem]"
              />

              <div>
                <a className="text-[1.3rem]" href="mailto:office@klimatex.az">
                  {data?.options?.options?.email}
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center">
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
        <div className="flex items-center justify-between py-[3rem] px-[6rem] bg-[#464E55]">
          <div>
            <img src={footerKlimatexIco} alt="klimatex-logo" />
          </div>

          <div className="flex items-center gap-[3rem] font-normal leading-[100%]">
            <p className="text-[1.75rem] text-[#ffffff]">{t("footerAuthor")}</p>
            <div className="max-w-[9rem]">
              <img src={footerCornIco} alt="corn" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
