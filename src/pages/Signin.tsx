import { useForm, SubmitHandler } from "react-hook-form";
import ISignup from "../interface/auth";

type Props = {};

const Signin = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ISignup>();
  return (
    <>
      <section className="bg-gray-50 mt-[50px]">
        <div className="flex items-center justify-center">
          <div className=" flex bg-white rounded-lg shadow dark:border md:mt-0 xl:p-0 dark:bg-[#F8F8F8] dark:border-gray-700">
            <div className="p-6 ">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-gray-900">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
                  >
                    Your email
                  </label>
                  <input
                    {...register("email", {
                      required: true,
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Địa chỉ email không đúng định dạng cần",
                      },
                    })}
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                  />
                  {errors.email?.type === "required" && (
                    <small id="emailHelp" className="form-text text-muted">
                      Trường email là bắt buộc
                    </small>
                  )}
                  {errors.email?.type === "pattern" && (
                    <small id="emailHelp" className="form-text text-muted">
                      {errors.email.message}
                    </small>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
                  >
                    Password
                  </label>
                  <input
                    {...register("password", {
                      required: true,
                      minLength: {
                        value: 6,
                        message: "Mật khẩu phải có ít nhất 6 ký tự",
                      },
                    })}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  {errors.password?.type === "required" && (
                    <small id="emailHelp" className="form-text text-muted">
                      Trường Password là bắt buộc
                    </small>
                  )}
                  {errors.password?.type === "minLength" && (
                    <small id="emailHelp" className="form-text text-muted">
                      {errors.password.message}
                    </small>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full text-gray-900 bg-primary-600 bg-red-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Đăng Nhập
                </button>
                <div>
                  <p className="text-center">Hoặc đăng ký bằng</p>
                  <div className="flex justify-center mt-4 gap-5">
                    <a href="">
                      <img src="./fac.png" alt="" />
                    </a>
                    <a href="">
                      <img src="./google.png" alt="" />
                    </a>
                  </div>
                </div>
              </form>
            </div>
            <div className="bg-[#F8F8F8] flex justify-center items-center mx-16">
              <img src="./logo.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Signin;
