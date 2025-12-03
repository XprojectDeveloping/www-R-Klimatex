function AboutPageExhibition({ h2Title, pText, aboutDataImg }) {
  return (
    <>
      <section>
        <div className="px-[6rem] pt-[5.5rem]">
          <h2 className="text-[4rem] font-semibold leading-[100%]">
            {h2Title}
          </h2>
        </div>
        <div className="flex gap-[6rem] pb-[6rem] px-[6rem] pt-[7.5rem]">
          <img src={aboutDataImg} alt="data-img" />
          <p className="text-[1.9rem] font-normal text-justify leading-[35px]">
            {pText}
          </p>
        </div>
      </section>
    </>
  );
}
export default AboutPageExhibition;
