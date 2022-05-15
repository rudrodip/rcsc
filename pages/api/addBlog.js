import Blog from "../../models/blog"
import connectDb from "../../middleware/mongoose"


const handler = async (req, res) => {
    if (req.method == 'POST') {
        let blog = new Blog ({
            userId: req.body.userId,
            title: req.body.title,
            paragraphs: req.body.paragraphs,
            category: req.body.category
        })
        await blog.save()
        res.status(200).json({ success: "success" })
    }
    else {
        res.status(400).json({ error: "This method is not allowed" })
    }
}

export default connectDb(handler)