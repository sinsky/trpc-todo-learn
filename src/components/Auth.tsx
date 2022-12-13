import { signIn } from "next-auth/react";

const Auth = () => {
  return (
    <div className="flex flex-col [&>*]:my-4">
      <button
        className="rounded bg-blue-600 py-2 px-4 font-bold text-white hover:bg-blue-800"
        onClick={() => signIn("github")}
      >
        GitHub Auth
      </button>
      <button
        className="rounded bg-green-600 py-2 px-4 font-bold text-white hover:bg-green-800"
        onClick={() => signIn("line")}
      >
        LINE Auth
      </button>
    </div>
  );
};

export default Auth;
