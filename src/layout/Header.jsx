import headerSearchIco from "../assets/img/header/header-search-ico.svg";
import headerPhoneIco from "../assets/img/header/header-phone-ico.svg";
import headerYouTubeIco from "../assets/img/header/header-youtube-ico.svg";
import headerInstagramIco from "../assets/img/header/header-instagram-ico.svg";
import headerFacebookIco from "../assets/img/header/header-facebook-ico.svg";
import headerKlimatexLogo from "../assets/img/header/header-klimatex-logo.svg";
import GlobalFech from "../components/GlobalAPI/GlobalFech";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Lang from "../components/Language/Lang";
import { Link, NavLink } from "react-router-dom";

function Header({ text }) {
  const [t, i18n] = useTranslation("translation");
  const [open, setOpen] = useState(false);
  const langs = ["az", "ru", "en"];

  const changeLang = async (lang) => {
    await i18n.changeLanguage(lang);
    setOpen(false);
  };

  const filteredLang = (lang = "az") => {
    return lang != localStorage.getItem("i18nextLng");
  };

  const langFilter = langs?.filter(filteredLang);

  const { data } = GlobalFech();

  const [scroll, setScroll] = useState();
  const SCROLL_Y = 200;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > SCROLL_Y) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-[0] left-[0] right-[0] z-[200] transition-all duration-300 ease-in-out ${
          scroll ? "px-[0] py-[0]" : "px-[6rem] py-[3rem]"
        }`}
      >
        <div className={`flex justify-between ${scroll ? "hidden" : ""}`}>
          <div className="flex items-center gap-[2rem]">
            <Lang
              toggle={() => setOpen(!open)}
              swichLang={
                open && (
                  <div className="absolute mt-6 left-[-2px] top-10 h-[50px] flex flex-col items-center bg-white shadow-lg rounded-md border border-gray-300">
                    {langFilter?.map((item, i) => {
                      return (
                        <button
                          onClick={() => changeLang(item)}
                          name="button"
                          type="button"
                          className="text-[#000] z-[200] text-[1.2rem] p-[1rem] hover:bg-gray-200 transitions bg-[#f9f9f9] rounded-md w-full text-center"
                          key={i}
                        >
                          {item}
                        </button>
                      );
                    })}
                  </div>
                )
              }
            />
            <button type="submit">
              <img
                className="max-w-[2rem]"
                src={headerSearchIco}
                alt="search"
              />
            </button>
          </div>
          <div className="flex gap-[3rem]">
            <a
              className="tel-hov flex items-center text-[1.5rem] text-[#ffffff] font-normal leading-[100%] gap-[1rem]"
              href={data?.options?.options?.tel2}
            >
              <img className="max-w-[2rem]" src={headerPhoneIco} alt="phone" />
              {text ?? "+994 51 325 13 25"}
            </a>
            <div className="flex items-center gap-[3rem]">
              <a href={data?.options?.options?.youtube} target="_blank">
                <img
                  className="max-w-[2.4rem] object-contain"
                  src={headerYouTubeIco}
                  alt="youtube"
                />
              </a>
              <a href={data?.options?.options?.instagram} target="_blank">
                <img
                  className="max-w-[1.9rem] object-contain"
                  src={headerInstagramIco}
                  alt="instagram"
                />
              </a>
              <a href={data?.options?.options?.facebook}>
                <img
                  className="max-w-[2.4rem] object-contain"
                  src={headerFacebookIco}
                  alt="facebook"
                />
              </a>
            </div>
          </div>
        </div>
        <div
          className={`flex justify-between  bg-[#FFFFFF] p-[1.75rem] transition-all duration-300 ease-in-out ${
            scroll ? "mt-[0]" : "mt-[1rem]"
          }`}
        >
          <div className="logo">
            <Link to={"/"}>
              <img
                className="max-w-[13rem]"
                src={headerKlimatexLogo}
                alt="klimatex-logo"
              />
            </Link>
          </div>

          <div className="borderLeft flex items-center gap-[2rem]">
            <NavLink to={"/"}>{t("main")}</NavLink>
            <NavLink to={"/about"}>{t("about")}</NavLink>
            <NavLink to={"/services/layihelendirme"}>{t("services")}</NavLink>
            <NavLink to={"/projects"}>{t("projects")}</NavLink>
            <NavLink to={"/production"}>{t("products")}</NavLink>
            <NavLink to={"/distribution"}>{t("distribution")}</NavLink>
            <NavLink to={"/license"}>{t("license")}</NavLink>
            <NavLink to={"/bloq"}>{t("bloq")}</NavLink>
            <NavLink to={"contact"}>{t("contact")}</NavLink>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
