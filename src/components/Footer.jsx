import InstagramIcon from "../assets/images/instagram.svg";
import TelegramIcon from "../assets/images/telegram_app.svg";
import TwitterIcon from "../assets/images/twitter.svg";
import AparatIcon from "../assets/images/aparat.svg";

function Footer() {
  return (
    <footer className="flex flex-row-reverse gap-5 items-center w-full  border-t border-gray-300 py-3 px-5">
      <div className="font-bold text-xl text-navy">
        SHOESLAND
      </div>
      <div className="w-7 mr-15">
        <a href="#">
          <img src={InstagramIcon} alt="instagram" />
        </a>
      </div>
      <div className="w-7">
        <a href="#">
          <img src={TelegramIcon} alt="Telegram" />
        </a>
      </div>
      <div className="w-7">
        <a href="#">
          <img src={TwitterIcon} alt="Twitter" />
        </a>
      </div>
      <div className="w-7">
        <a href="#">
          <img src={AparatIcon} alt="Aparat" />
        </a>
      </div>
      <div className="text-dark-gray mr-auto">
        2026 © ShoesLand. All Rights Reseved.
      </div>
    </footer>
  );
}

export default Footer;
