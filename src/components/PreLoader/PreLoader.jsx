import "./preLoader.css";
function PreLoader({}) {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 w-full min-h-screen bg-[#f6f6f6] z-[300]">
        <div className="loader">
          <div className="square" id="sq1"></div>
          <div className="square" id="sq2"></div>
          <div className="square" id="sq3"></div>
          <div className="square" id="sq4"></div>
          <div className="square" id="sq5"></div>
          <div className="square" id="sq6"></div>
          <div className="square" id="sq7"></div>
          <div className="square" id="sq8"></div>
          <div className="square" id="sq9"></div>
        </div>
      </div>
    </>
  );
}

export default PreLoader;
