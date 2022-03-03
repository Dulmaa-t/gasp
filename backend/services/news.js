const mongoose = require('mongoose')
const News = require('../models/news')

/** шинэ мэдээ үүсгэх нь
 * @param {string} content.title       тухайн мэдээний гарчиг
 * @param {string} content.text        тухайн мэдээний товч тайлбар
 * @param {string} content.author      тухайн мэдээг үүсгэсэн хүний ID
 * @param {string} content.image       тухайн мэдээний зураг
 * @param {string} content.category    ангилалын ID
 * @param {string} content.news        тухайн мэдээний үндсэн мэдээлэл
 */
exports.createNewNews = async (content) =>
{
    await News.create(content)
}

/** Бүртгэлтэй бүх мэдээний жагсаалтыг авах
 * @param {string} category ангиалалын iD
*/
exports.getNewsList = async (category) =>
{
    /** Хайх нөхцөл */
    const where = {}
    /** ангилал байвал ангилалаар нь шүүх */
    if (category)
        where['category'] = category

    /** хайгаад олдсон мэдээнүүд */
    const news = await News.find(where).populate("author", 'email nickName')
    return news
}

/** Тухайн нэг мэдээний дэлгэрэнгүйг авах нь
 * @param {string} newsId тухайн мэдээний ID
 */
exports.getNewsDetail = async (newsId) =>
{
    /** хайгаад олдсон мэдээ */
    const news = await News.findById(newsId).populate("author", 'email nickName')
    return news
}
