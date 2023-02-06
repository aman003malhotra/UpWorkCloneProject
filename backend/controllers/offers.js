const Offers = require("../model/offer");

exports.makeOffer = (req,res) => {
    req.body.profile = req.freelanceProfile;
    req.body.offerUserId = req.profile;

    req.profile.encry_password = undefined;
    return res.json(req.profile);
       
}