const categoryService = require('../services/category');

/** Шинээр ангилал үүсгэх нь
 * @param {string} req.body.name ангилалын нэр
*/
exports.create = async (req, res) =>
{
    // ангилал үүсгэж байна
    await categoryService.createAuthor(req.body)
    res.sendInfo('Амжилттай хадгалалаа');
}

/** Бүх ангилал ийн жагсаалтыг авах нь */
exports.getList = async (req, res) =>
{
    const foundCategories = await categoryService.getList()
    res.sendData(foundCategories);
}

/** Тухайн нэг ангилал дэлгэрэнгүйг авах нь
 * @param {string} req.params.categoryId тухайн ангилал ийн ID
 */
exports.getDetail = async (req, res) =>
{
    const { categoryId } = req.params
    const foundCategory = await categoryService.getDetail(categoryId)
    res.sendData(foundCategory);
}
