function AboutPageMissiya({
  h2Title,
  pText,
  missytaDataimg,
  missytaDataimgAlt,
}) {
  return (
    <>
      <section className="px-[6rem] lg:px-[3rem] md:px-[2.5rem] sm:px-[1.5rem] mt-[17rem] lg:mt-[3rem]">
        <div className="flex lg:flex-col gap-[12rem] lg:gap-0">
          <div className="flex flex-col">
            <h2 className="text-[#000000] text-[5rem] lg:text-[2.5rem] font-bold leading-[100%] pb-[5rem] lg:pb-[3rem]">
              {h2Title}
            </h2>
            <p className="text-[#000000] text-[1.9rem] lg:text-[1.5rem] font-normal">
              {pText}
            </p>
          </div>
          <img
            className="max-w-[600px] lg:max-w-none"
            src={missytaDataimg}
            alt={missytaDataimgAlt}
          />
        </div>
      </section>
    </>
  );
}

export default AboutPageMissiya;
