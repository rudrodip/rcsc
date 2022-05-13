import User from "../../models/user"
import connectDb from "../../middleware/mongoose"
import jwt from "jsonwebtoken"

const handler = async (req, res) => {
    if (req.method == 'POST') {
        const token = req.body.token
        let matched = false
        const data = jwt.verify(token, 'sumit625', (e, id) => {
            if (e) {
                matched = false
            } else {
                matched = true
            }
        })
        if (matched){
            let user = await User.findOneAndUpdate(data, req.body)
            res.status(200).json({ success: "success" })
        } else {
            res.status(400).json({ error: "not matched" })
        }
    }
    else {
        res.status(400).json({ error: "this method is not allowed" })
    }
}

export default connectDb(handler)