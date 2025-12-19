import DOMPurify from "dompurify";
function AboutPageProduction({ h2Title, pText, aboutImg, aboutImgTtitle }) {
  return (
    <>
      <section className="px-[6rem] lg:px-[3rem] md:px-[2.5rem] sm:px-[1.5rem] py-[6rem] lg:py-[3rem] md:py-[2.5rem] sm:py-[1.5rem]">
        <div className="flex lg:flex-col gap-[6rem] lg:gap-[3rem]">
          <div className="flex flex-col">
            <h2 className="text-[3rem] lg:text-[2.3rem] pb-[5rem] lg:pb-[3.5rem] text-[#000000] leading-[100%] font-bold">
              {h2Title}
            </h2>

            <div
              className="text-[1.5rem]"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(pText) }}
            />
          </div>
          <img src={aboutImg} alt={aboutImgTtitle} />
        </div>
      </section>
    </>
  );
}
export default AboutPageProduction;
