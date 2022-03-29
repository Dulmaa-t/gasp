const Config = require('../models/config')

/**
 * Тохиргоог авах нь
 * @param {Array} names тохиргооны нэрнүүд
 */
exports.getConfigs = async (names) =>
{
    const configs = await Config.find(
        {
            name: {
                $in: names
            }
        }
    )

    return configs
}

/**
 * configs уудыг хадгалах нь эсвэл нэг object байж болно
 * @param {string} configs.name  config уудын нэр
 * @param {string} configs.value config уудын утга
 */
exports.saveConfigs = async (configs) =>
{
    /** Config руу хадгалах тохиргоо */
    let saveToConfigs = configs

    //  Хэрвээ array биш object байх юм бол array болгох
    if (!Array.isArray(saveToConfigs))
    {
        saveToConfigs = [configs]
    }

    await Config.create(saveToConfigs)

}

/**
 * configs уудыг засах нь эсвэл нэг object байж болно
 * @param {string} configs.name  config уудын нэр
 * @param {string} configs.value config уудын утга
 */
exports.updateConfigs = async (configs) =>
{
    /** Config ийг засах тохиргоо */
    let updateConfigs = configs

    //  Хэрвээ array биш object байх юм бол array болгох
    if (!Array.isArray(updateConfigs))
    {
        updateConfigs = [configs]
    }

    for (const config of updateConfigs)
    {
        const { name, value } = config

        await Config.updateOne(
            {
                name,
            },
            {
                value
            }
        )
    }
}