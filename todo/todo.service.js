import Todo from "./todo.model.js"
import CategoryService from "../category/category.service.js"

class TodoService {
  async create(todo, user) {
    const category = await CategoryService.getOne(todo.category)
    if (!category) throw new Error("Category is fallen")

    const createdTodo = await Todo.create({ ...todo, user })

    return createdTodo
  }

  async getAll(user) {
    const todos = await Todo.find({ user })
    return todos
  }

  // async getOne(id) {
  //   if (!id) throw new Error("fallen id")

  //   const todo = await Todo.findById(id)
  //   return todo
  // }

  async update(todo, user) {
    if (!todo._id) throw new Error("fallen id")

    const permission = !!(await Todo.findOne({ user, _id: todo._id }))

    if (!permission) throw new Error("permission denied")

    const updatedTodo = await Todo.findByIdAndUpdate(todo._id, todo, {
      new: true,
    })

    return updatedTodo
  }

  async delete(id, user) {
    const permission = !!(await Todo.findOne({ user, _id: id }))

    if (!permission) throw new Error("permission denied")

    const deletedTodo = await Todo.findByIdAndDelete(id)

    return deletedTodo
  }
}

export default new TodoService()
