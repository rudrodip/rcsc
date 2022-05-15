import User from '../../models/user'
import connectDb from "../../middleware/mongoose"
import JWT from "jsonwebtoken"

const handler = async (req, res) => {
    if (req.method == 'POST') {
        const token = req.body.token
        const data = JWT.verify(token, 'sumit625')
        let user = await User.findOne({email: data.email})
        res.status(200).json({ 
            userName: user.userName, 
            email: user.email, 
            phone: user.phone, 
            section: user.section, 
            class: user.class, 
            roll: user.roll,
            views: user.views,
            likes: user.likes,
            blogs: user.blogs,
            role: user.role
         })
    }
    else {
        res.status(400).json({ error: "This method is not allowed" })
    }
}

export default connectDb(handler)