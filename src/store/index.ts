import { updateTaskInput } from "schema/todo";
import create from "zustand";

type State = {
  editedTask: updateTaskInput;
  updateEditedTask: (payload: updateTaskInput) => void;
  resetEditedTask: () => void;
};

const emptyTask: updateTaskInput = { taskId: "", title: "", body: "" };

const useStore = create<State>((set) => ({
  editedTask: { ...emptyTask },
  updateEditedTask: (payload) => set({ editedTask: payload }),
  resetEditedTask: () => set({ editedTask: { ...emptyTask } }),
}));

export default useStore;
