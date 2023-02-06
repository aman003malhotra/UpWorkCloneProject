const express = require("express");
const router = express.Router();
const { getUserById } = require("../controllers/user");
const { newProfile, allProfiles, getProfileById, updateProfile, myProfile, getProfile } = require("../controllers/freelanceProfile")
const { makeOffer } = require("../controllers/user");



router.param("userId", getUserById);
router.param("profileId", getProfileById);


router.post("/offer/:userId/:profileId",
    makeOffer
);