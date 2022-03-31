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

/** Бүх video ний жагсаалтыг авах нь
 * @param {string} category ангиалалын iD
*/
exports.getList = async (category) =>
{
    /** Хайх нөхцөл */
    const where = {}
    /** ангилал байвал ангилалаар нь шүүх */
    if (category)
        where['category'] = category

    const foundVideos = await Videos.find(where).populate(
        [
            {
                path: "author",
                select: 'email nickName'
            },
            {
                path: "category",
                select: "name"
            }
        ]
    ).sort("-createdAt")
    return foundVideos
}

/** Тухайн video ний мэдээллийг авах нь
 * @param {string} videoId video ний ID
 */
exports.getDetail = async (videoId) =>
{
    const foundVideo = await Videos.findById(videoId).populate(
        [
            {
                path: "author",
                select: 'email nickName'
            },
            {
                path: "category",
                select: "name"
            }
        ]
    )
    return foundVideo
}

exports.update = async (videoId, body) =>
{
    await Videos.updateOne(
        {
            _id: videoId,
        },
        body
    )
}

exports.delete = async (videoId) =>
{
    const cat = await Videos.findById(videoId)
    await Videos.deleteOne({ _id:  cat._id })
}
