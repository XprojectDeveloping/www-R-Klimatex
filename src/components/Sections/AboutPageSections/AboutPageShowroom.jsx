function AboutPageShowroom({
  aboutImg,
  aboutImgTitle,
  h2Title,
  playButton,
  videoUrl,
}) {
  return (
    <>
      <section>
        <div className="px-[6rem] pt-[5rem]">
          <h2 className="text-[4rem] font-semibold leading-[100%]">
            {h2Title}
          </h2>
        </div>
        <div className="pb-[6rem] px-[6rem] pt-[5rem] relative">
          <img src={aboutImg} alt={aboutImgTitle} />

          <div className="absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
            <a href={videoUrl}>
              <img src={playButton} alt="play" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPageShowroom;
