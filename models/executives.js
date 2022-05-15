const mongoose = require('mongoose')

const executives_schema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    fb: {type: String, unique: true},
    role: {type: String, default: "Member"},
    date: {type: Date, default: Date.now}
}, {timestamps: true})

export default mongoose.models.user || mongoose.model("user", user_schema)