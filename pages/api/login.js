import User from "../../models/user"
import connectDb from "../../middleware/mongoose"
import CryptoJs from "crypto-js"
import JWT from "jsonwebtoken"

const handler = async (req, res) => {
    if (req.method == 'POST') {
        let user = await User.findOne({email: req.body.email})
        if (user) {
            // decrypting password
            const bytes = CryptoJs.AES.decrypt(user.password, 'sumit625')
            const user_password = bytes.toString(CryptoJs.enc.Utf8)
            
            if (req.body.email == user.email && req.body.password == user_password){
                let token = JWT.sign({email: user.email, userName: user.userName }, 'sumit625', {expiresIn: "2d"})
                res.status(200).json({success: "success", token})
            } else {
                res.status(400).json({ error: "email or password not matched"})
            }
        } else {
            res.status(400).json({ error: "email or password not matched"})
        }
    }
    else {
        res.status(400).json({ error: "This method is not allowed" })
    }
}

export default connectDb(handler)