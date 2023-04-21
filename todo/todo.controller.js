import TodoService from "./todo.service.js"

class TodoController {
  async create(req, res) {
    try {
      const todo = await TodoService.create(req.body, req.user.id)
      res.json(todo)
    } catch (e) {
      res.status(400).json(e.message)
    }
  }

  async getAll(req, res) {
    try {
      const todos = await TodoService.getAll(req.user.id)
      res.json(todos)
    } catch (e) {
      res.status(500).json(e.message)
    }
  }

  // async getOne(req, res) {
  //   try {
  //     const todo = await TodoService.getOne(req.params.id)
  //     res.json(todo)
  //   } catch (e) {
  //     res.status(500).json(e.message)
  //   }
  // }

  async update(req, res) {
    try {
      const updatedTodo = await TodoService.update(req.body, req.user.id)

      res.json(updatedTodo)
    } catch (e) {
      res.status(500).json(e.message)
    }
  }

  async delete(req, res) {
    try {
      const todo = await TodoService.delete(req.params.id, req.user.id)

      res.json(todo)
    } catch (e) {
      res.status(500).json(e.message)
    }
  }
}

export default new TodoController()
