const signService = require("../services/sign")

/** Нэвтрэх үйлдлийг хийх нь */
exports.login = async (req, res, next) =>
{
    const { email, password } = req.body

    await signService.in(email, password, res)

    res.sendInfo("Амжилттай нэвтэрлээ")
}

/**
 * Системээс гарах Logout
 */
exports.logout = async (req, res) =>
{
    await signService.out(req, res)
    res.sendInfo('Гарах үйлдэл амжилттай')
};

/** нууц үг сэргээх */
exports.resetPassword = async (req, res) =>
{
    await signService.sendMailResetPassword(req)
}

/** Шинэ нууц үгийг хадгалах */
exports.confirmPassword = async (req, res) =>
{
    await signService.reset(req)
}