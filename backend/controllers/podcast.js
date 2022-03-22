const podcastService = require('../services/podcast');

/** Шинээр podcast үүсгэх нь
 * @param {string} req.body.title       тухайн podcast гарчиг
 * @param {number} req.body.clock       тухайн podcast ны үргэлжлэх хугацаа
 * @param {string} req.body.text        товч тайлбар
 * @param {string} req.body.author      author ийн ID
 * @param {string} req.body.category    ангилалын ID
 * @param {string} req.file.realPath    thumbnail зургийн холбоос
*/
exports.create = async (req, res) =>
{
    /** podcast зургийн замийг оноох хувьсагч */
    let imageUrl = ""

    /** req ээс жинхэнэ зургын холбоосыг авах нь */
    if (req.file)
    {
        imageUrl = req.file.realPath
    }

    /** зургийн холбоосыг оноох нь */
    req.body.image = imageUrl

    // podcast үүсгэж байна
    await podcastService.createPodcast(req.body)
    res.sendInfo('Амжилттай хадгалалаа');
}

/** Бүх podcast ийн жагсаалтыг авах нь
 * @param {string} req.query.category ангиалалын iD
*/
exports.getList = async (req, res) =>
{
    const { category } = req.query
    const foundVideos = await podcastService.getList(category)
    res.sendData(foundVideos);
}

/** Тухайн нэг podcast ний дэлгэрэнгүйг авах нь
 * @param {string} req.params.podcastId тухайн podcast ны ID
 */
exports.getPodcast = async (req, res) =>
{
    const { podcastId } = req.params
    const foundVideo = await podcastService.getDetail(podcastId)
    res.sendData(foundVideo);
}
