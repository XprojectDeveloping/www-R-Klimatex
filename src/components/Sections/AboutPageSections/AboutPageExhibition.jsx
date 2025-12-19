function AboutPageExhibition({ h2Title, pText, aboutDataImg }) {
  return (
    <>
      <section className="px-[6rem] lg:px-[3rem] md:px-[2.5rem] sm:px-[1.5rem] py-[6rem] lg:py-[3rem] md:py-[2.5rem] sm:py-[1.5rem]">
        <div className="pb-[7.5rem] lg:pb-[2.5rem]">
          <h2 className="text-[4rem] lg:text-[2.5rem] font-semibold leading-[100%]">
            {h2Title}
          </h2>
        </div>
        <div className="flex lg:flex-col-reverse gap-[6rem] lg:gap-[2rem]">
          <img src={aboutDataImg} alt="data-img" />
          <p className="text-[1.9rem] lg:text-[1.5rem] font-normal text-justify leading-[35px] lg:leading-normal">
            {pText}
          </p>
        </div>
      </section>
    </>
  );
}
export default AboutPageExhibition;
