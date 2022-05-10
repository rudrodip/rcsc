import Blog from "../../models/blog"
import connectDb from "../../middleware/mongoose"

const handler = async (req, res) => {
    let blogs = await Blog.find()
    console.
    res.status(200).json({ blogs })
}

export default connectDb(handler)