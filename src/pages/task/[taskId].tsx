import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import { Layout } from "components/Layout";
import { format } from "date-fns";
import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { trpc } from "utils/trpc";

const SingleTaskPage = () => {
  const router = useRouter();
  const taskId = router.query.taskId as string;
  const { data, isLoading, error } = trpc.todo.getSingleTask.useQuery({ taskId });
  if (isLoading) return <Layout title={`${taskId} loading now`}>Loading single task...</Layout>;
  if (error) return <Layout title="Not found task">{error.message}</Layout>;
  return (
    <Layout title={`${data?.title}`}>
      <p className="mb-3 text-xl font-bold text-blue-600">{data?.title}</p>
      <p>{data?.body}</p>
      <p className="my-1 text-sm">{data && format(new Date(data.createdAt), "yyyy/MM/dd HH:mm:ss")}</p>
      <p className="my-1 text-sm">{data && format(new Date(data.updatedAt), "yyyy/MM/dd HH:mm:ss")}</p>
      <Link href={`/`}>
        <ArrowUturnLeftIcon className="mt-3 h-6 w-6 cursor-pointer text-blue-600" />
      </Link>
    </Layout>
  );
};

export default SingleTaskPage;
