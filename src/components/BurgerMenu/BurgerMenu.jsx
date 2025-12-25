import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Link } from "react-router-dom";
import headerBurgerMenuIco from "../../assets/img/header/header-burgerMenu-ico.svg";
import headerBurgerMenuCloseIco from "../../assets/img/header/header-burgerMenu-close-ico.svg";
function BurgerMenu() {
  const [t] = useTranslation("translation");
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  const mobileMenu = [
    {
      id: 1,
      name: `${t("main")}`,
      to: "/",
    },
  ];
  return (
    <>
      <button onClick={toggleMenu} className="burger-hide lg:flex">
        <img
          className="max-w-[3rem]"
          src={headerBurgerMenuIco}
          alt={t("headerBurgerImgAlt")}
        />
      </button>
      {open && (
        <div onClick={closeMenu} className="fixed inset-0 bg-black/40 z-1000" />
      )}
      <div
        className={`
          fixed top-0 right-0 h-full w-[350px] bg-[#808080]
          p-[2rem] flex flex-col gap-[2rem]
          z-[1050] transition-transform duration-300
          text-[2rem]
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <button onClick={closeMenu}>
          <img
            className="max-w-[3rem]"
            src={headerBurgerMenuCloseIco}
            alt={t("headerBurgerMenuCloseImgAlt")}
          />
        </button>

        <Link className={"burger-link-hov"} to={"/"}>
          {t("main")}
        </Link>
        <Link className={"burger-link-hov"} to={"/about"}>
          {t("about")}
        </Link>
        <Link className={"burger-link-hov"} to={"/services/layihelendirme"}>
          {t("services")}
        </Link>
        <Link className={"burger-link-hov"} to={"/projects"}>
          {t("projects")}
        </Link>
        <Link className={"burger-link-hov"} to={"/production"}>
          {t("products")}
        </Link>
        <Link className={"burger-link-hov"} to={"/distribution"}>
          {t("distribution")}
        </Link>
        <Link className={"burger-link-hov"} to={"/license"}>
          {t("license")}
        </Link>
        <Link className={"burger-link-hov"} to={"/bloq"}>
          {t("bloq")}
        </Link>
        <Link className={"burger-link-hov"} to={"contact"}>
          {t("contact")}
        </Link>
      </div>
    </>
  );
}
export default BurgerMenu;
