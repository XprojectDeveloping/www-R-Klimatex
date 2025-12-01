import DOMPurify from "dompurify";

function HoomePageAbout({
  aboutTextData,
  aboutDataimg,
  aboutDataImgTel,
  h2Title,
  h3Title,
  pText,
}) {
  return (
    <>
      <section className="px-[6rem] mt-[9rem] mb-[9rem] flex">
        <div className="flex flex-col gap-[4rem]">
          <h2 className="text-[4rem] ">{h2Title}</h2>
          <div
            className="text-[1.6rem] font-normal text-justify"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(aboutTextData),
            }}
          />
          <h3 className="text-[2.5rem] font-semibold">{h3Title}</h3>
          <p className="text-[1.6rem] font-normal text-justify">{pText}</p>

          <a
            className="hpTel-hov flex items-center text-[2rem] gap-[1.5rem]"
            href="tel:+994 51 325 13 25"
          >
            <img src={aboutDataImgTel} alt="tel" />
            {"+994 51 325 13 25"}
          </a>
        </div>
        <img
          src={aboutDataimg}
          className="px-[5rem] w-[50%]"
          alt="missiya_image"
        />
      </section>
    </>
  );
}

export default HoomePageAbout;
