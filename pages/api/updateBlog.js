import Blog from "../../models/blog"
import connectDb from "../../middleware/mongoose"


const handler = async (req, res) => {
    if (req.method == 'POST') {
        let blog = await Blog.findByIdAndUpdate(req.body._id, req.body)
        res.status(200).json({ success: "success" })
    }
    else {
        res.status(400).json({ error: "this method is not allowed" })
    }
}

export default connectDb(handler)