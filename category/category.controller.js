import CategoryService from "./category.service.js"

class CategoryController {
  async create(req, res) {
    try {
      const category = await CategoryService.create({
        ...req.body,
        user: req.user.id,
      })
      res.json(category)
    } catch (e) {
      res.status(400).json(e)
    }
  }

  async getAll(req, res) {
    try {
      const categories = await CategoryService.getAll(req.user.id)
      res.json(categories)
    } catch (e) {
      res.status(500).json(e)
    }
  }

  // async getOne(req, res) {
  //   try {
  //     const category = await CategoryService.getOne(req.params.id)
  //     res.json(category)
  //   } catch (e) {
  //     res.status(500).json(e)
  //   }
  // }

  async update(req, res) {
    try {
      const updatedCategory = await CategoryService.update(
        req.body,
        req.user.id
      )

      res.json(updatedCategory)
    } catch (e) {
      res.status(500).json(e.message)
    }
  }

  async delete(req, res) {
    try {
      const category = await CategoryService.delete(req.params.id, req.user.id)

      res.json(category)
    } catch (e) {
      res.status(500).json(e.message)
    }
  }
}

export default new CategoryController()
