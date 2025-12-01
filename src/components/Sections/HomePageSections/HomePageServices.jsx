function HomePageServices({ projectDataImg, h2Title, pText }) {
  return (
    <>
      <section className="services-bg flex items-center justify-center flex-col relative">
        <img src={projectDataImg} alt="services-bg" />

        <div className="flex items-center justify-center flex-col h-[500px] absolute">
          <h2 className="pb-[1.3rem] text-[5.5rem] font-semibold leading-[100%] text-[#ffffff]">
            {h2Title}
          </h2>
          <p className="text-[3.2rem] font-normal leading-[100%] text-[#ffffff]">
            {pText}
          </p>
        </div>
      </section>
    </>
  );
}
export default HomePageServices;
