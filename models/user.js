const mongoose = require('mongoose')

const user_schema = new mongoose.Schema({
    userName: {type: String, required: true, unique: true},
    email: {type: String, require: true, unique: true},
    phone: {type: String, required: true, unique: true, minlength: 11, maxlength: 11},
    password: {type: String, required: true},
    memberCode: {type: String, required: true, unique: true},
    section: {type: String, required: true},
    roll: {type: Number, required: true, unique: true},
    blogs: {type: Number, default: 0},
    likes: {type: Number, default: 0},
    views: {type: Number, default: 0},
    role: {type: String, default: "Member"},
    date: {type: Date, default: Date.now}
}, {timestamps: true})

export default mongoose.models.user || mongoose.model("user", user_schema)