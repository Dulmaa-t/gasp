const Videos = require('../models/videos')

/** шинэ video үүсгэх нь
 * @param {string} content.url      тухайн бичлэгний зам
 * @param {string} content.title    тухайн бичлэгний гарчиг
 * @param {string} content.author   бичлэгийг үүсгэж буй author ийн ID
 * @param {string} content.category ангилалын ID
 * @param {number} content.views    бичлгэндээр дарж орсон хүний тоо
 */
exports.createAuthor = async (content) =>
{
    await Videos.create(content)
}

/** Бүх video ний жагсаалтыг авах нь */
exports.getList = async () =>
{
    const foundVideos = await Videos.find({}).populate("author", 'email nickName')
    return foundVideos
}

/** Тухайн video ний мэдээллийг авах нь
 * @param {string} videoId video ний ID
 */
exports.getDetail = async (videoId) =>
{
    const foundVideo = await Videos.findById(videoId).populate("author", 'email nickName')
    return foundVideo
}
