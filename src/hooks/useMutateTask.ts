import { trpc } from "utils/trpc";
import useStore from "../store/index";

const useMutateTask = () => {
  const utils = trpc.useContext();
  const reset = useStore((state) => state.resetEditedTask);

  const createTaskMutation = trpc.todo.createTask.useMutation({
    onSuccess: (res) => {
      const previousTodos = utils.todo.getTasks.getData();
      if (previousTodos) {
        utils.todo.getTasks.setData(undefined, [res, ...previousTodos]);
      }
      reset();
    },
  });
  const updateTaskMutation = trpc.todo.updateTask.useMutation({
    onSuccess: (res) => {
      const previousTodos = utils.todo.getTasks.getData();
      if (previousTodos) {
        utils.todo.getTasks.setData(
          undefined,
          previousTodos.map((task) => (task.id === res.id ? res : task))
        );
      }
    },
  });
  const deleteTaskMutation = trpc.todo.deleteTask.useMutation({
    onSuccess: (_, variables) => {
      const previousTodos = utils.todo.getTasks.getData();
      if (previousTodos) {
        utils.todo.getTasks.setData(
          undefined,
          previousTodos.filter((task) => task.id !== variables.taskId)
        );
      }
    },
  });
  return {
    createTaskMutation,
    updateTaskMutation,
    deleteTaskMutation,
  };
};

export default useMutateTask;
