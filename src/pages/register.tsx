import React, {useRef} from "react";
const Register = () => {
    const form = useRef(null);
    const handleSubmit = (event) => {
        event.preventDefault();
        const form_data = new FormData(form.current);
        const payload = {};
        form_data.forEach(function (value, key) {
            payload[key] = value;
        });
         console.log("payload", payload);
        // Place your API call here to submit your payload.
    };

    return (
        <>
            <section className="bg-white {-- h-screen --}">
                <div className="mx-auto flex lg:justify-center h-full flex-col lg:flex-row">
                    <div className="w-full lg:w-1/2 px-2 py-20 sm:py-40 sm:px-12 flex flex-col justify-center items-center bg-pink-600 relative">
                        <div className="absolute left-0 top-0 pl-3 pt-3">
                        </div>
                        <div className="flex relative z-30 flex-col justify-center px-4 md:pr-12">
                            <div className="px-2 flex flex-col items-center justify-center">
                            <h1 className="bg-pink-100 text-pink-600 p-10 font-extrabold rounded-full text-center text-3xl">DO</h1>
                            </div>
                            <h3 className="text-4xl pt-8 leading-tight text-white text-center">Dukks Outlet</h3>
                        </div>
                        <div className="absolute right-0 bottom-0">
                            
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} ref={form} className="w-full lg:w-1/2 flex justify-center bg-white dark:bg-gray-800">
                        <div className="w-full sm:w-4/6 md:w-3/6 lg:w-2/3 text-gray-800 dark:text-gray-100 flex flex-col justify-center px-2 sm:px-0 py-16">
                            <div className="px-2 sm:px-6">
                                <h3 className="text-2xl sm:text-3xl md:text-2xl font-bold leading-tight">Login To Your Account</h3>
                            </div>
                            <div className="mt-8 w-full px-2 sm:px-6">
                                <div className="flex flex-col mt-8">
                                    <label htmlFor="email" className="text-lg font-semibold leading-tight">
                                        Email
                                    </label>
                                    <input id="email" required aria-required="true" name="email" className="h-10 px-2 w-full rounded mt-2 text-gray-600 focus:outline-none focus:border focus:border-pink-700 dark:focus:border-pink-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 border-gray-300 border shadow" type="email" />
                                </div>
                                <div className="flex flex-col mt-5">
                                    <label htmlFor="password" className="text-lg font-semibold fleading-tight">
                                        Password
                                    </label>
                                    <input id="password" required aria-required="true" name="password" type="password" className="h-10 px-2 w-full rounded mt-2 text-gray-600 focus:outline-none focus:border focus:border-pink-700 dark:focus:border-pink-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 border-gray-300 border shadow" />
                                </div>
                            </div>
                            <div className="pt-6 w-full flex justify-between px-2 sm:px-6">
                                <div className="flex items-center">
                                    <input id="rememberme" name="rememberme" className="w-3 h-3 mr-2" type="checkbox" />
                                    <label htmlFor="rememberme" className="text-xs">
                                        Remember Me
                                    </label>
                                </div>
                                <a className="text-xs text-pink-600" href="javascript: void(0)">
                                    Forgot Password?
                                </a>
                            </div>
                            <div className="px-2 sm:px-6">
                                <button type="submit" className="focus:outline-none w-full sm:w-auto bg-pink-700 transition duration-150 ease-in-out hover:bg-pink-600 rounded text-white px-8 py-3 text-sm mt-6">
                                    Login
                                </button>
                                <p className="mt-6 text-xs">
                                    Don’t Have An Account?{" "}
                                    <a className="underline text-pink-600" href="javascript: void(0)">
                                        Sign Up
                                    </a>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};
export default Register;
