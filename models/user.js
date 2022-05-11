const mongoose = require('mongoose')

const user_schema = new mongoose.Schema({
    userName: {type: String, required: true},
    email: {type: String, require: true},
    phone: {type: String, required: true},
    password: {type: String, required: true},
    date: {type: Date, default: Date.now}
}, {timestamps: true})

mongoose.models = {}
export default mongoose.model("user", user_schema)