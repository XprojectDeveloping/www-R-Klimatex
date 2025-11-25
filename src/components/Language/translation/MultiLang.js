const getMultiLang = (az, ru, en) => {
  const lang = localStorage.getItem("i18nextLng");

  if (lang === "az") {
    return az;
  } else if (lang === "ru") {
    return ru;
  } else if (lang === "en") {
    return en;
  } else {
    return az;
  }
};

export { getMultiLang };
