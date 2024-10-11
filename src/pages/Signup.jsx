import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="bg-[#101010] h-screen">
      <div className="flex justify-center items-center h-screen flex-col gap-7">
        <h1 className="text-white font-bold text-[30px]">
          Create your account
        </h1>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-[300px] h-11 rounded-lg p-3 bg-[#1E1E1E] text-white"
          />
          <input
            type="text"
            placeholder="Username"
            className="w-[200px] h-11 rounded-lg p-3 bg-[#1E1E1E] text-white"
            maxLength={20}
          />
        </div>
        <div className="flex gap-4">
          <input
            type="email"
            placeholder="Email"
            className="w-[300px] h-11 rounded-lg p-3 bg-[#1E1E1E] text-white"
          />
          <input
            type="text"
            placeholder="Password"
            className="w-[300px] h-11 rounded-lg p-3 bg-[#1E1E1E] text-white"
          />
        </div>
        <button className="bg-white text-black py-3 px-[130px] rounded-lg">
          Signup
        </button>
        <Link to={"/login"}>
          <p className="text-white underline">Login</p>
        </Link>
      </div>
    </div>
  );
}

export default Signup;
