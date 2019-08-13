const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const profileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }, 
    address: {
        street: { type: String, required: true },
        suite: { type: String, required: true },

        city: { type: String, required: true },
        zipcode: { type: String, required: true },
        geo: {
            lat: { type: String, required: false },
            lng: { type: String, required: false }
        }
    },    

    phone: { type: String, required: true },
    website: { type: String, required: true },
    company: {
            name: { type: String, required: false },
            catchPhrase: { type: String, required: false },
            bs: { type: String, required: false },
    },
    date: {
        type: Date,
        default: Date.now
    }
   
})
module.exports = mongoose.model('profile', profileSchema)