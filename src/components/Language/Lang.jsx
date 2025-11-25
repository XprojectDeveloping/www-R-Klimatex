import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function Lang({ toggle, swichLang }) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language ? i18n.language.split("-")[0] : "az";

  useEffect(() => {
    if (localStorage.getItem("i18nextLng") !== currentLang) {
      localStorage.setItem("i18nextLng", currentLang);
    }
  }, [currentLang]);

  return (
    <>
      <div className="relative text-black p-2 ">
        <div className="flex items-center cursor-pointer" onClick={toggle}>
          <button
            className="text-[#000] lowercase text-[1.4rem]"
            name="button"
            type="button"
          >
            {currentLang}
          </button>
        </div>
        {swichLang}
      </div>
    </>
  );
}
export default Lang;
