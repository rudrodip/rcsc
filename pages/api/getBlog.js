import Blog from "../../models/blog"
import connectDb from "../../middleware/mongoose"

const handler = async (req, res) => {
    try {
        let blogs = await Blog.findById(req.body.id)
        res.status(200).json({ blogs })
    } catch (error) {
        res.status(400).json({ error: error})
    }
}

export default connectDb(handler)