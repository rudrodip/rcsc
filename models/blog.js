const mongoose = require('mongoose')

const blog_schema = new mongoose.Schema({
    userId: {type: String, required: true},
    title: {type: String, require: true},
    img: {
        data: Buffer,
        contentType: String
    },
    paragraphs: [
        {
            paragraph: {type: String, required: true}
        }
    ],
    date: {type: Date, default: Date.now}
}, {timestamps: true})

mongoose.models = {}
export default mongoose.model("blog", blog_schema)