const newsService = require('../services/news');

/** Шинээр мэдээ үүсгэх нь
 * @param {string} req.body.title       тухайн мэдээний гарчиг
 * @param {string} req.body.text        тухайн мэдээний товч тайлбар
 * @param {string} req.body.author      тухайн мэдээг үүсгэсэн хүний ID
 * @param {string} req.body.image       тухайн мэдээний зураг
 * @param {string} req.body.news        тухайн мэдээний үндсэн мэдээлэл
 * TODO: authorId -г loginRequired аас авах
*/
exports.createNews = async (req, res) =>
{
    /** мэдээний зургийн замийг оноох хувьсагч */
    let imageUrl = ""

    /** req ээс жинхэнэ зургын холбоосыг авах нь */
    if (req.file)
    {
        imageUrl = req.file.realPath
    }

    /** зургийн холбоосыг оноох нь */
    req.body.image = imageUrl

    // мэдээг үүсгэж байна
    await newsService.createNewNews(req.body)
    res.sendInfo('Амжилттай хадгалалаа');
}

/** Бүх мэдээнүүдийг авах нь */
exports.getNews = async (req, res) =>
{
    const foundNews = await newsService.getNewsList(req.body)
    res.sendData(foundNews);
}

/** Тухайн нэг мэдээний дэлгэрэнгүйг авах нь
 * @param {string} req.params.newsId тухайн мэдээний ID
 */
exports.getNewsDetail = async (req, res) =>
{
    const { newsId } = req.params
    const foundNews = await newsService.getNewsDetail(newsId)
    res.sendData(foundNews);
}
