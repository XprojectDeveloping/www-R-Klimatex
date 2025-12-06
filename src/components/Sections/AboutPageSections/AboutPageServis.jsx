import DOMPurify from "dompurify";
function AboutPageServis({ h2Title, pText, aboutImg, aboutImgTtitle }) {
  return (
    <>
      <section className="px-[6rem] py-[6rem]">
        <div className="flex flex-row items-center gap-[6rem]">
          <div className="flex flex-col">
            <h2 className="text-[3rem] pb-[5rem] text-[#000000] leading-[100%] font-bold">
              {h2Title}
            </h2>
            <img src={aboutImg} alt={aboutImgTtitle} />
          </div>
          <div
            className="text-[1.5rem] w-[50%]"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(pText) }}
          />
        </div>
      </section>
    </>
  );
}
export default AboutPageServis;
