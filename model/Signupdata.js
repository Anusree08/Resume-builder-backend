const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://resume_app:resume@cluster0.1zxwm.mongodb.net/ResumeBuilder?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true});
const schema = mongoose.Schema;

const SignupSchema = new schema({
    username: String,
    email: String,
    password: String
});

var Signupdata = mongoose.model('Signupdata',SignupSchema);

module.exports = Signupdata;