import DOMPurify from "dompurify";
function AboutPageServis({ h2Title, pText, aboutImg, aboutImgTtitle }) {
  return (
    <>
      <section>
        <div className="flex gap-[6rem] px-[6rem] py-[5rem]">
          <div className="flex flex-col">
            <h2 className="text-[3rem] pb-[5rem] text-[#000000] leading-[100%] font-bold">
              {h2Title}
            </h2>
            <div
              className="text-[1.5rem]"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(pText) }}
            />
            <img src={aboutImg} alt={aboutImgTtitle} />
          </div>
        </div>
      </section>
    </>
  );
}
export default AboutPageServis;
