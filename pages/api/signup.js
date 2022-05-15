import User from "../../models/user"
import connectDb from "../../middleware/mongoose"
import CryptoJs from "crypto-js"

const handler = async (req, res) => {
    if (req.method == 'POST') {
        // encrypting given password
        const password = CryptoJs.AES.encrypt(req.body.password, 'sumit625').toString()
        
        let user = new User ({
            userName: req.body.userName,
            email: req.body.email,
            phone: req.body.phone,
            password: password,
            memberCode: req.body.memberCode,
            section: req.body.section,
            class: req.body.class,
            roll: req.body.roll
        })
        await user.save( e => e ? res.status(200).json({error: e}) : res.status(200).json({ success: true}))
    }
    else {
        res.status(400).json({ error: "This method is not allowed" })
    }
}

export default connectDb(handler)