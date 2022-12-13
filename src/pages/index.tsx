import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";
import Auth from "components/Auth";
import { Layout } from "components/Layout";
import { TaskForm } from "components/TaskForm";
import { TaskList } from "components/TaskList";
import { type NextPage } from "next";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

const Home: NextPage = () => {
  // login sessionを取得
  const { data: session, status } = useSession();
  if (status === "loading") return <Layout title="loading">get session....</Layout>
  if (!session)
    return (
      <Layout title="Login">
        <Auth />
      </Layout>
    );
  return (
    <Layout title="Todo App">
      <div className="flex justify-between items-center mb-4">
        <div className="flex justify-center">
          {session.user?.image && (
            <Image
              className="rounded-full border-2 border-blue-300 pointer-events-none"
              src={session.user?.image ?? ""}
              alt=""
              width={60}
              height={60}
            />
          )}
        </div>
        <p className="my-3 mx-2 text-xl text-blue-800">{session.user?.name}</p>
        <div
          className="flex flex-col justify-center items-center text-blue-700 hover:text-blue-900 cursor-pointer hover:bg-blue-200 m-1 p-1"
          onClick={() => signOut()}
        >
          <ArrowLeftOnRectangleIcon className="h-6 w-6" />
          <span>logout</span>
        </div>
      </div>
      <TaskForm />
      <TaskList />
    </Layout>
  );
};

export default Home;
