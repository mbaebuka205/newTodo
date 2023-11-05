import { Router } from "express";
import { createTodo, viewOneAndDeleteTodo, viewOneAndUpdateTodo, viewOneTodo, viewTodo, viewTodoTop } from "../controller/todoController";

const router: Router = Router()

router.route("/creat-todo").post(createTodo)
router.route("/view-todo").get(viewTodo)
router.route("/view-1-todo").get(viewTodoTop)
router.route("/viewOne-todo/:todoID").get(viewOneTodo)
router.route("/updat-todo/:todoID").patch(viewOneAndUpdateTodo)
router.route("/delete-todo/:todoID").delete(viewOneAndDeleteTodo)



export default router