function AboutPageShowroom({
  aboutImg,
  aboutImgTitle,
  h2Title,
  playButton,
  videoUrl,
}) {
  return (
    <>
      <section className="px-[6rem] lg:px-[3rem] md:px-[2.5rem] sm:px-[1.5rem] py-[5rem] lg:py-[3rem] md:py-[2.5rem] sm:py-[1.5rem]">
        <div className="pb-[6rem] lg:pb-[3.5rem]">
          <h2 className="text-[4rem] lg:text-[2.5rem] font-semibold leading-[100%]">
            {h2Title}
          </h2>
        </div>
        <div className="relative">
          <img src={aboutImg} alt={aboutImgTitle} />

          <div className="absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
            <a href={videoUrl} target="_blank">
              <img
                className="max-w-[7rem] lg:max-w-[6rem] md:max-w-[4rem]"
                src={playButton}
                alt="play"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPageShowroom;
