const express = require("express");
const router = express.Router();
const { isSignedIn, isAuthenticated } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");
const { newProfile, 
    allProfiles, 
    getProfileById, 
    updateProfile, 
    myProfile, 
    getProfile,
    pushOfferInOffersList,
    deleteProfile
} = require("../controllers/freelanceProfile")

router.param("userId", getUserById);
router.param("profileId", getProfileById);

router.post(
    "/profile/post/:userId",
    newProfile
);

router.get(
    "/profiles",
    allProfiles
);

router.get(
    "/profile/:userId",
    myProfile
);

router.get(
    "/myprofile/:profileId",
    getProfile
);

router.put(
    "/profile/update/:profileId",
    updateProfile
)

router.put(
    "/offer/:userId/:profileId",
    pushOfferInOffersList
)

router.delete(
    "/profile/delete/:profileId",
    deleteProfile
);

module.exports = router;
