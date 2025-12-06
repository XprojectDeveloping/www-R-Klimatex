function AboutPageMissiya({
  h2Title,
  pText,
  missytaDataimg,
  missytaDataimgAlt,
}) {
  return (
    <>
      <section className="px-[6rem]">
        <div className="flex mt-[17rem] gap-[12rem]">
          <div className="flex flex-col">
            <h2 className="text-[#000000] text-[5rem] font-bold leading-[100%] pb-[5rem]">
              {h2Title}
            </h2>
            <p className="text-[#000000] text-[1.9rem] font-normal">{pText}</p>
          </div>
          <img
            className="max-w-[600px]"
            src={missytaDataimg}
            alt={missytaDataimgAlt}
          />
        </div>
      </section>
    </>
  );
}

export default AboutPageMissiya;
