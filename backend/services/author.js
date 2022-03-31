const Authors = require('../models/authors')

/** шинэ author үүсгэх нь
 * @param {string} content.nickName    тухайн үүсгэгчийн нийтэд харагдах нэр
 * @param {string} content.email       тухайн үүсгэгчийн цахим шуудан
 */
exports.createAuthor = async (content) =>
{
    await Authors.create(content)
}

/** Бүх aother ийн жагсаалтыг авах нь */
exports.getList = async () =>
{
    const foundAuthors = await Authors.find({}).select("-password").sort("-createdAt")
    return foundAuthors
}

/** Тухайн author ийн мэдээллийг авах нь
 * @param {string} authorId author ийн ID
 */
exports.getDetail = async (authorId) =>
{
    const foundAuthor = await Authors.findById(authorId).select("-password")
    return foundAuthor
}

exports.update = async (authorId, body) =>
{
    await Authors.updateOne(
        {
            _id: authorId,
        },
        body
    )
}
