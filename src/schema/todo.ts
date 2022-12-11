import z from "zod";

// 作成時のスキーマ
export const createTaskSchema = z.object({
  title: z.string().max(20),
  body: z.string().min(5),
});

export type CreateTaskInput = z.TypeOf<typeof createTaskSchema>;

// アップデート時のスキーマ
export const updateTaskSchema = z.object({
  taskId: z.string().cuid(),
  title: z.string().max(20),
  body: z.string().min(5),
});

export type updateTaskInput = z.TypeOf<typeof updateTaskSchema>;

export const getSingleTaskSchema = z.object({
  taskId: z.string().cuid(),
});

export const deleteTaskSchema = z.object({
  taskId: z.string().cuid(),
});
