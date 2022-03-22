const mongoose = require('mongoose')
const Podcast = require('../models/podcast')

/** шинэ podcast үүсгэх нь
 * @param {string} content.title       тухайн podcast гарчиг
 * @param {number} content.clock       тухайн podcast ны үргэлжлэх хугацаа
 * @param {string} content.text        товч тайлбар
 * @param {string} content.author      author ийн ID
 * @param {string} content.category    ангилалын ID
 * @param {string} content.image       thumbnail зургийн холбоос
 */
exports.createPodcast = async (content) =>
{
    await Podcast.create(content)
}

/** Бүртгэлтэй бүх podcast жагсаалтыг авах
 * @param {string} category ангиалалын iD
*/
exports.getList = async (category) =>
{
    /** Хайх нөхцөл */
    const where = {}
    /** ангилал байвал ангилалаар нь шүүх */
    if (category)
        where['category'] = category

    /** хайгаад олдсон podcast ууд */
    const news = await Podcast.find(where).populate("author", 'email nickName')
    return news
}

/** Тухайн нэг podcast дэлгэрэнгүйг авах нь
 * @param {string} podcastId тухайн podcast ID
 */
exports.getDetail = async (podcastId) =>
{
    /** хайгаад олдсон podcast */
    const news = await Podcast.findById(podcastId).populate("author", 'email nickName')
    return news
}
