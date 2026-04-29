import { useState } from "react";
import { loginUser } from "../features/auth/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error);
  const handleLoginSub = (e) => {
    e.preventDefault();
    dispatch(loginUser({phone: phone, password: password}));
    if(error) {
      setFormError(error);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="max-w-[1800px] w-screen h-screen flex flex-row-reverse gap-05 justify-between">
      {isLogin ? (
        <div
          className="w-1/2 flex flex-col items-center justify-center px-32"
          dir="rtl"
        >
          <h1 className="text-4xl text-dark-gray mt-20">
            به
            <span className="text-primary-blue font-bold tracking-widest">
              SHOESLAND
            </span>
            خوش آمدید
          </h1>
          <form action="" onSubmit={handleLoginSub} className="mt-20 w-full">
            <div className="w-full flex flex-col gap-3">
              <label
                htmlFor="phone"
                className="text-dark-gray/80 font-bold mr-3"
              >
               شماره تلفن
              </label>
              <input
                className="border-2 placeholder:text-sm placeholder:font-bold focus:outline-2 focus:outline-primary-blue border-primary-blue rounded-full text-xl px-10 py-2"
                type="text"
                id="phone"
                placeholder="شماره تلفن خود را وارد کنید ...."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="w-full flex flex-col gap-3 mt-10">
              <label
                htmlFor="password"
                className="text-dark-gray/80 font-bold mr-3"
              >
                رمز عبور
              </label>
              <input
                className="border-2 placeholder:text-sm placeholder:font-bold focus:outline-2 focus:outline-primary-blue border-primary-blue rounded-full text-xl px-10 py-2"
                type="text"
                id="password"
                placeholder="رمز عبور خود را وارد کنید ...."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full p-5 cursor-pointer text-white bg-primary-blue hover:bg-light-blue hover:text-dark-gray mt-20 rounded-full font-bold text-xl"
            >
              ورود به حساب کاربری
            </button>
          </form>
          <div className="text-red-300">{formError}</div>
        </div>
      ) : (
        <div></div>
      )}
      <div className="bg-primary-blue w-1/2 h-full text-8xl font-black tracking-widest text-white flex justify-center items-center">
        SHOESLAND
      </div>
    </div>
  );
}

export default Auth;
