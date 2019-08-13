const express = require('express')
const Profile = require('../models/Profile')
const passport = require('passport');

const validateProfileInput = require('../validation/profile');

const router = express.Router()

router.post('/profile', passport.authenticate('jwt', { session: false }), async (req, res) => {
    
    const { errors, isValid } = validateProfileInput(req.body);

    // Check Validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const profile = new Profile({
        user: req.user.id,
        address: {
            street: req.body.street,
            suite: req.body.suite,
    
            city: req.body.city,
            zipcode: req.body.zipcode,
            geo: {
                lat: req.body.lat,
                lng: req.body.lng
            }
        },   
        phone: req.body.phone,
        website: req.body.website,
        company: {
                name: req.body.name,
                catchPhrase: req.body.catchPhrase,
                bs: req.body.bs
        }
    })
   await profile
            .save()
            .then((prof) => res.json(prof))
            .then(() => console.log("\n==============Profile data successfully save ==============\n", profile))
            .catch(err => console.log(err))
})

module.exports = router;