import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="bg-[#101010] h-screen">
      <div className="flex justify-center items-center h-screen flex-col gap-7">
        <h1 className="text-white font-bold text-[30px]">
          Log in with your account
        </h1>
        <input
          type="text"
          placeholder="Username"
          className="w-[300px] h-11 rounded-lg p-3 bg-[#1E1E1E] text-white"
        />
        <input
          type="text"
          placeholder="Password"
          className="w-[300px] h-11 rounded-lg p-3 bg-[#1E1E1E] text-white"
        />
        <button className="bg-white text-black py-3 px-[130px] rounded-lg">
          Log in
        </button>
        <Link to={"/signup"}>
          <p className="text-white underline">Signup</p>
        </Link>
      </div>
    </div>
  );
}

export default Login;
