import DOMPurify from "dompurify";
function AboutPageServis({ h2Title, pText, aboutImg, aboutImgTtitle }) {
  return (
    <>
      <section className="px-[6rem] lg:px-[3rem] md:px-[2.5rem] sm:px-[1.5rem] py-[6rem] lg:py-[3rem] md:py-[2.5rem] sm:py-[1.5rem]">
        <div>
          <h2 className="text-[3rem] lg:text-[2.3rem] pb-[5rem] lg:pb-[1.5rem] text-[#000000] leading-[100%] font-bold">
            {h2Title}
          </h2>
        </div>
        <div className="flex lg:flex-col gap-[6rem] lg:gap-[2rem]">
          <img src={aboutImg} alt={aboutImgTtitle} />
          <div
            className="text-[1.5rem]"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(pText) }}
          />
        </div>
      </section>
    </>
  );
}
export default AboutPageServis;
