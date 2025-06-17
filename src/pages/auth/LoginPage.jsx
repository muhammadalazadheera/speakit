import React, { use, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

function LoginPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { signInUser, user, signInUserWithGoogle } = use(AuthContext);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  const signinWithGoogle = (e) => {
    e.preventDefault();
    signInUserWithGoogle()
    .then((user) => {
      if (user) {
        toast.success(`Welcome, ${user.user.displayName}`);
        navigate(location.state || "/");
      }
    });
  }

  const loginUser = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password).then((user) => {
      if (user) {
        toast.success(`Welcome, ${user.user.displayName}`);
        navigate(location.state || "/");
      }
    });
  };

  
  return (
    <div className="flex flex-col items-center justify-center md:p-0">

      <Helmet><title>Login</title></Helmet>
      <form
        onSubmit={loginUser}
        className="border my-[40%] md:my-[12%] p-4 max-w-sm w-full shadow-md rounded-md"
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-(--primary-color)"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-(--primary-color)"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Login
        </button>
        <p className="text-center my-2">Or, Login with</p>
        <button onClick={signinWithGoogle} className="btn btn-success btn-block">GMail</button>
        <p className="my-2">
          Don't have a account?{" "}
          <b>
            <Link className="text-green-700" to="/register">
              Register
            </Link>
          </b>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;