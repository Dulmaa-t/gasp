const mongoose = require('mongoose')
const Podcast = require('../models/podcast')

/** шинэ podcast үүсгэх нь
 * @param {string} content.title       тухайн podcast гарчиг
 * @param {string} content.clock       тухайн podcast ны үргэлжлэх хугацаа
 * @param {string} content.text        товч тайлбар
 * @param {string} content.author      author ийн ID
 * @param {string} content.image       thumbnail зургийн холбоос
 */
exports.createPodcast = async (content) =>
{
    await Podcast.create(content)
}

/** Бүртгэлтэй бүх podcast жагсаалтыг авах  */
exports.getList = async () =>
{
    /** хайгаад олдсон podcast ууд */
    const news = await Podcast.find({}).populate("author", 'email nickName')
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
