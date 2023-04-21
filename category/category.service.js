import Category from "./category.model.js"

class CategoryService {
  async create(category) {
    const { _id, title, color } = await Category.create(category)
    return { _id, title, color }
  }

  async getAll(user) {
    const categories = await Category.find({ user })
    return categories
    // return categories.map((c) => {
    //   c._id, c.title, c.color
    // })
  }

  async getOne(id) {
    if (!id) throw new Error("fallen id")

    const category = await Category.findById(id)
    return category
  }

  async update(category, user) {
    if (!category._id) throw new Error("fallen id")

    const permission = !!(await Category.findOne({ user, _id: category._id }))

    if (!permission) throw new Error("permission denied")

    const updatedCategory = await Category.findByIdAndUpdate(
      category._id,
      category,
      {
        new: true,
      }
    )

    return updatedCategory
  }

  async delete(id, user) {
    const permission = !!(await Category.findOne({ user, _id: id }))

    if (!permission) throw new Error("permission denied")

    const { _id, title, color } = await Category.findByIdAndDelete(id)

    return { _id, title, color }
  }
}

export default new CategoryService()
