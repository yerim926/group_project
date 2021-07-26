
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let User = mongoose.Schema(
    {
        username:{
            type: String,
            default: '',
            trim: true,
            required: 'username is required'
        },
        /*
        password:{
            type: String,
            default: '',
            trim: true,
            required: "Password is required"
        }
        */
        email:{
            type: String,
            default: '',
            trim: true,
            required: 'email address is required'
        },
        displayName:{
            type: String,
            default: '',
            trim: true,
            required: 'Display name is required'
        },
        created:{
            type: Date,
            default: Date.now
        },
        updated:{
            type: Date,
            default: Date.now
        }
    },
    {
        collection: "users"
    }
);

// configure options for user model
let options = ({ missingPasswordError: 'Wrong / Missing Password'});
User.plugin(passportLocalMongoose,options);
module.exports.User = mongoose.model('User',User);