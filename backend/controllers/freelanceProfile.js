const FreelanceProfile = require('../models/freelanceProfile');

exports.newProfile = (req, res) => {
    req.body.user = req.profile
    newProfile = new FreelanceProfile(req.body);
    newProfile.save((err, savedProfile) => {
      if (err) {
        return res.status(400).json({
          error: err
        });
      }
      res.json({savedProfile});
    });
  };


exports.allProfiles = (req,res) => {
    FreelanceProfile.find()
    .exec((err, allprofiles) => {
        if (err){
            return res.status(400).json({
                error:"No Profiles"
        });
    } 
        res.json(allprofiles);
    });
}

exports.getProfileById = (req, res, next, id) => {
  FreelanceProfile.findById(id)
      .exec((err, freelanceProfile) => {
        if (err) {
          return res.status(400).json({
            error: "Specific Profile not found"
          });
        }
        req.freelanceProfile = freelanceProfile;
        next();
      });
  };

exports.getProfile = (req, res) => {
    return res.json(req.freelanceProfile);
};

exports.updateProfile = (req, res) => {
    let profile = req.freelanceProfile;

    //save to the DB
    profile.updateOne(req.body, (err, updatedProfile) => {
    if (err) {
        res.status(400).json({
        error: "Updation of profile failed"
        });
    }
    res.json(updatedProfile);
    });
};

exports.deleteProfile = (req, res) => {
  let profile = req.freelanceProfile;
  profile.remove((err, deletedProfile) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to delete the job"
      });
    }
    res.json({
      message: "Deletion was a success",
      deletedProfile
    });
  });
};


exports.myProfile = (req,res) => {
  FreelanceProfile.find({user:req.profile._id}, (err,myProfile) => {
    if (err) {
      res.status(400).json({
        error:"No Profile Found"
      });
    }
    res.json(myProfile);
  });
}

exports.pushOfferInOffersList = (req, res) => {
  req.freelanceProfile.updateOne(
    { $addToSet: 
      { offers: 
        [
          {id:req.profile._id,
            email:req.profile.email
          }
        ]
      } 
    },
    (err, result) => {
      if (err) {
        res.status(400).json({
          error:"Error in DB, Visit Again"
        });
      }
      res.json(result)
    }
)
};