import { useState } from "react";

export default function AuthPage() {
  // صفحه ورود به صورت پیش‌فرض نمایش داده می‌شود
  const [activeTab, setActiveTab] = useState("signin");

  const [newsletter, setNewsletter] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [loginPhone, setLoginPhone] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignup = (e) => {
    e.preventDefault();

    console.log({
      ...formData,
      newsletter,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    console.log({
      phone: loginPhone,
    });
  };

  return (
    <main
      dir="rtl"
      className="
        relative flex min-h-screen w-full
        items-center justify-center
        overflow-hidden
        bg-[url('/bg.jpg')]
        bg-cover
        bg-center
        bg-no-repeat
        px-4 py-8
      "
    >
      {/* لایه روی تصویر */}
      {/* <div className="absolute inset-0 bg-white/5 backdrop-blur-[10px]" /> */}

      {/* کارت احراز هویت */}
      <section
        className="
          relative z-10
          w-full max-w-[530px]
          
          border border-white/60
          bg-white/75
          px-8 py-9
          shadow-[0_20px_60px_rgba(80,60,100,0.15)]
          backdrop-blur-sm
          sm:px-10
          sm:py-10
        "
      >
        {/* تب‌ها */}
        <div
          className="
            mx-auto mb-11
            flex w-fit
            rounded-lg
            bg-gray-100/80
            p-1
          "
        >
          <button
            type="button"
            onClick={() => setActiveTab("signin")}
            className={`
              min-w-[100px]
              rounded-md
              px-3 py-2
              text-[15px]
              font-medium
              transition-all duration-200
              ${
                activeTab === "signin"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-800"
              }
            `}
          >
            ورود
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("signup")}
            className={`
              min-w-[100px]
              rounded-md
              px-3 py-2
              text-[15px]
              font-medium
              transition-all duration-200
              ${
                activeTab === "signup"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-800"
              }
            `}
          >
            ثبت‌نام
          </button>
        </div>

        {/* ================= ورود ================= */}

        {activeTab === "signin" ? (
          <div className="text-center">
            <h1 className="mb-3 text-[28px] font-bold tracking-[-0.7px] text-gray-900">
              خوش آمدید
            </h1>

            <p className="mb-8 text-[15px] leading-7 text-gray-500">
              برای ورود به حساب کاربری، شماره همراه خود را وارد کنید.
            </p>

            <form onSubmit={handleLogin}>
              {/* شماره همراه */}
              <div
                dir="ltr"
                className="
                  mb-5 flex h-[50px]
                  overflow-hidden
                  rounded-md
                  border border-gray-300
                  bg-white/75
                  focus-within:border-orange-500
                  focus-within:ring-2
                  focus-within:ring-gray-200
                "
              >
                <div
                  className="
                    flex items-center gap-2
                    border-r border-gray-200
                    px-4
                    text-gray-800
                  "
                >
                  <span className="text-[19px]">🇮🇷</span>

                  <span className="text-sm text-gray-600">+98</span>
                </div>

                <input
                  type="tel"
                  value={loginPhone}
                  onChange={(e) => setLoginPhone(e.target.value)}
                  placeholder="912 345 6789"
                  className="
                    min-w-0
                    flex-1
                    bg-transparent
                    px-4
                    py-3
                    text-sm
                    outline-none
                    placeholder:text-gray-400
                  "
                />
              </div>

              {/* دکمه ورود */}
              <button
                type="submit"
                className="
                  h-[45px]
                  w-full
                  rounded-md
                  bg-orange-400
                  font-medium
                  text-white
                  shadow-sm
                  transition-all
                  duration-200
                  hover:bg-gray-800
                  hover:shadow-md
                  active:scale-[0.99]
                "
              >
                ورود
              </button>
            </form>

            {/* رفتن به ثبت‌نام */}
            <p className="mt-7 text-center text-[14px] text-gray-500">
              حساب کاربری ندارید؟{" "}
              <button
                type="button"
                onClick={() => setActiveTab("signup")}
                className="
                  font-medium
                  text-orange-500
                  underline
                  underline-offset-2
                  hover:text-gray-600
                "
              >
                ثبت‌نام کنید
              </button>
            </p>
          </div>
        ) : (
          /* ================= ثبت نام ================= */

          <div className="text-center">
            <h1 className="mb-8 text-[28px] font-bold tracking-[-0.7px] text-gray-900">
              ایجاد حساب کاربری
            </h1>

            <form onSubmit={handleSignup}>
              {/* نام و نام خانوادگی */}
              <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="نام"
                  className="
                    h-[50px]
                    w-full
                    rounded-md
                    border border-gray-300
                    bg-white/75
                    px-4
                    py-3
                    text-sm
                    text-gray-900
                    outline-none
                    placeholder:text-gray-400
                    transition-all
                    focus:border-orange-500
                    focus:ring-2
                    focus:ring-gray-200
                  "
                />

                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="نام خانوادگی"
                  className="
                    h-[50px]
                    w-full
                    rounded-md
                    border border-gray-300
                    bg-white/75
                    px-4
                    py-3
                    text-sm
                    text-gray-900
                    outline-none
                    placeholder:text-gray-400
                    transition-all
                    focus:border-orange-500
                    focus:ring-2
                    focus:ring-gray-200
                  "
                />
              </div>

              {/* ایمیل */}
              <div className="relative mb-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ایمیل"
                  className="
                    h-[50px]
                    w-full
                    rounded-md
                    border border-gray-300
                    bg-white/75
                    px-4
                    py-3
                    text-sm
                    text-right
                    outline-none
                    placeholder:text-gray-400
                    transition-all
                    focus:border-orange-500
                    focus:ring-2
                    focus:ring-gray-200
                  "
                />
              </div>

              {/* شماره همراه */}
              <div
                dir="ltr"
                className="
                  mb-4 flex h-[50px]
                  py-3
                  text-sm
                  overflow-hidden
                  rounded-md
                  border border-gray-300
                  bg-white/75
                  focus-within:border-orange-500
                  focus-within:ring-2
                  focus-within:ring-gray-200
                "
              >
                <div
                  className="
                    flex items-center gap-2
                    border-r border-gray-200
                    px-4
                    text-gray-800
                  "
                >
                  <span className="text-[19px]">🇮🇷</span>

                  <span className="text-sm text-gray-600">+98</span>
                </div>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="912 345 6789"
                  className="
                    min-w-0
                    flex-1
                    bg-transparent
                    px-4
                    outline-none
                    placeholder:text-gray-400
                  "
                />
              </div>

              {/* خبرنامه */}
              <div className="mb-7 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setNewsletter(!newsletter)}
                  aria-pressed={newsletter}
                  className={`
                    relative
                    h-[20px]
                    w-[32px]
                    shrink-0
                    rounded-full
                    border
                    transition-all
                    duration-200
                    ${
                      newsletter
                        ? "border-orange-400 bg-orange-400"
                        : "border-gray-900 bg-white"
                    }
                  `}
                >
                  <span
                    className={`
                      absolute
                      top-[3px]
                      h-[12px]
                      w-[12px]
                      rounded-full
                      transition-all
                      duration-200
                      ${
                        newsletter
                          ? "left-[16px] bg-white"
                          : "left-[3px] bg-gray-900"
                      }
                    `}
                  />
                </button>

                <span className="text-right text-xs text-[14px] text-gray-600">
                  دریافت خبرنامه و پیشنهادهای ویژه
                </span>
              </div>

              {/* ثبت نام */}
              <button
                type="submit"
                className="
                  h-[45px]
                  w-full
                  rounded-md
                  bg-orange-400
                  font-medium
                  text-white
                  shadow-sm
                  transition-all
                  duration-200
                  hover:bg-gray-800
                  hover:shadow-md
                  active:scale-[0.99]
                "
              >
                ایجاد حساب کاربری
              </button>
            </form>

            {/* رفتن به ورود */}
            <p className="mt-7 text-center text-[14px] text-gray-500">
              قبلاً حساب کاربری ساخته‌اید؟{" "}
              <button
                type="button"
                onClick={() => setActiveTab("signin")}
                className="
                  font-medium
                  text-orange-500
                  underline
                  underline-offset-2
                  hover:text-gray-600
                "
              >
                وارد شوید
              </button>
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
