const mongoose = require('mongoose')

const blog_schema = new mongoose.Schema({
    userId: {type: String, required: true},
    title: {type: String, require: true},
    img: {
        data: Buffer,
        contentType: String
    },
    paragraphs: {type: Array, required: true},
    category: {type: String, default: "uncategorized"},
    date: {type: Date, default: Date.now}
}, {timestamps: true})

mongoose.models = {}
export default mongoose.model("blog", blog_schema)