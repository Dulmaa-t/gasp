const Authors = require('../models/authors')

/** шинэ author үүсгэх нь
 * @param {string} req.body.nickName    тухайн үүсгэгчийн нийтэд харагдах нэр
 * @param {string} req.body.email       тухайн үүсгэгчийн цахим шуудан
 */
exports.createAuthor = async (content) =>
{
    await Authors.create(content)
}

/** Бүх aother ийн жагсаалтыг авах нь */
exports.getList = async () =>
{
    const foundAuthors = await Authors.find({})
    return foundAuthors
}

/** Тухайн author ийн мэдээллийг авах нь
 * @param {string} authorId author ийн ID
 */
exports.getDetail = async (authorId) =>
{
    const foundAuthor = await Authors.findById(authorId)
    return foundAuthor
}
