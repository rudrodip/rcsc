import User from "../../models/user"
import connectDb from "../../middleware/mongoose"
import jwt from "jsonwebtoken"
import CryptoJs from "crypto-js"

const handler = async (req, res) => {
    if (req.method == 'POST') {
        const token = req.body.token
        const data = jwt.verify(token, 'sumit625')

        try {
            let user = await User.findOne({ email: req.body.email })
            const bytes = CryptoJs.AES.decrypt(user.password, 'sumit625')
            const user_password = bytes.toString(CryptoJs.enc.Utf8)

            if (req.body.password == user_password) {
                let update = await User.findByIdAndUpdate(user._id, {
                    phone: req.body.phone,
                    section: req.body.section,
                    class: req.body.class,
                    roll: req.body.roll
                })
                let token = jwt.sign({ email: req.body.email, userName: user.userName }, 'sumit625', { expiresIn: "2d" })
                res.status(200).json({ success: "success" })
            } else {
                res.status(400).json({ error: "password not matched" })
            }
        } catch (error) {
            res.status(400).json(error)
        }



    }
    else {
        res.status(400).json({ error: "this method is not allowed" })
    }
}

export default connectDb(handler)