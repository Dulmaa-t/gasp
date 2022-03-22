const Category = require('../models/categories')

/** шинэ ангилал үүсгэх нь
 * @param {string} req.body.name ангилалын нэр
 */
exports.createAuthor = async (content) =>
{
    await Category.create(content)
}

/** Бүх aother ийн жагсаалтыг авах нь */
exports.getList = async () =>
{
    const foundCategories = await Category.find({})
    return foundCategories
}

/** Тухайн ангилал ийн мэдээллийг авах нь
 * @param {string} categoryId ангилал ийн ID
 */
exports.getDetail = async (categoryId) =>
{
    const foundCategory = await Category.findById(categoryId)
    return foundCategory
}
