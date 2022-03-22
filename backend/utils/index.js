/**
 * тооны өмнө 0 ээр дүүргэж өгөх нь
 * @param {number} num тоо
 * @param {number} spliceNo
 * @returns 0 ээр дүүрсэн тоо
 */
exports.fullZero = (num, spliceNo=-2) => ("0" + num).slice(spliceNo)

/**
 * timezone ийг string date болгох
 * @param {string | number} timezone    date
 * @param {boolean}         hasHour     цагийг хамтад нь авах эсэх
 * @param {string}          symbol      өдрийн голд байх тэмдэгт
 * @returns бүтэн string date
 */
exports.timeZoneToDateString(timezone, hasHour=true, symbol="-", hasMs=false)
{
    const date = new Date(timezone)

    /** сар */
    const month = this.fullZero(date.getMonth() + 1)
    /** өдөр */
    const day = this.fullZero(date.getDate())
    /** жил */
    const year = date.getFullYear()

    /** цаг */
    const hour = this.fullZero(date.getHours())
    /** минут */
    const minute = this.fullZero(date.getMinutes())
    /** с */
    const seconds = this.fullZero(date.getSeconds())
    /** мс */
    const ms = date.getMilliseconds()

    const hours = `${hour}:${minute}:${seconds}${hasMs ? `:${ms}` : ""}`

    const full = `${year}${symbol}${month}${symbol}${day}${hasHour ? " " + hours : ""}`

    return full
}
