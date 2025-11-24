import headerSearchIco from "../assets/img/header/header-search-ico.svg";
import headerPhoneIco from "../assets/img/header/header-phone-ico.svg";
import headerYouTubeIco from "../assets/img/header/header-youtube-ico.svg";
import headerInstagramIco from "../assets/img/header/header-instagram-ico.svg";
import headerFacebookIco from "../assets/img/header/header-facebook-ico.svg";
import GlobalFech from "../components/GlobalAPI/GlobalFech";
function Header({ text }) {
  const { data } = GlobalFech();
  console.log(data);

  return (
    <>
      <header className="mx-[10.5rem] mt-[3.8rem] bg-slate-200">
        <div className="flex justify-between">
          <div className="flex gap-[2rem]">
            <select>
              <option>{text ?? "AZ"}</option>
              <option>{text ?? "RU"}</option>
              <option>{text ?? "EN"}</option>
            </select>
            <button type="submit">
              <img src={headerSearchIco} alt="search" />
            </button>
          </div>
          <div className="flex gap-[3rem]">
            <a
              className="flex items-center text-[1.5rem] gap-[1rem]"
              href={data?.options?.options?.tel2}
            >
              <img src={headerPhoneIco} alt="phone" />
              {text ?? "+994 51 325 13 25"}
            </a>
            <div className="flex items-center gap-[3rem]">
              <a href={data?.options?.options?.youtube} target="_blank">
                <img src={headerYouTubeIco} alt="youtube" />
              </a>
              <a href={data?.options?.options?.instagram} target="_blank">
                <img src={headerInstagramIco} alt="instagram" />
              </a>
              <a href={data?.options?.options?.facebook}>
                <img src={headerFacebookIco} alt="facebook" />
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
