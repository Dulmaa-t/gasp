//  model оруулж ирж байгаа
const configService = require('../services/config')

/**
 * Config ийг авах нь
 * @param {Array} req.query.names тохиргооны нэрнүүд
 */
exports.get = async (req, res) =>
{
    const { names } = req.query

    const configs = await configService.getConfigs(names)

    res.sendData(configs)
}

/**
 * Config ийг хадгалах нь
 * @param {*} req.body.configs Config ийг хадгалах
 */
exports.post = async (req, res) =>
{
    const { configs } = req.body

    await configService.saveConfigs(configs)

    res.sendInfo('Амжилттай үүсгэлээ')
}

/**
 * Config ийг засах нь
 * @param {*} req.body.configs Config ийг хадгалах
 */
exports.put = async (req, res) =>
{
    const { configs } = req.body

    await configService.updateConfigs(configs)

    res.sendInfo('Амжилттай заслаа')
}
