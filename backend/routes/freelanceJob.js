const express = require("express");
const router = express.Router();
const { isSignedIn, isAuthenticated } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");
const { newJob, 
    allJobs, 
    getJobById, 
    getJob, 
    deleteJob, 
    updateJob, 
    myJobs,
    pushProposalInProposalsList } = require("../controllers/freelanceJob")

router.param("userId", getUserById);
router.param("jobId", getJobById);

router.post(
    "/job/post/:userId",
    newJob
);

router.get(
    "/job/:jobId/",
    getJob
);

router.get(
    "/jobs",
    allJobs
);

router.delete(
    "/job/delete/:jobId",
    deleteJob
);

router.put(
    "/job/update/:jobId",
    updateJob
);

router.get(
    "/myjobs/:userId",
    myJobs
);

router.put(
    "/proposals/:userId/:jobId",
    pushProposalInProposalsList
)

module.exports = router;
