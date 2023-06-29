const JobDescription = require('../models/freelanceJob');
const formidable = require("formidable");
const _ = require("lodash");

exports.newJob = (req, res) => {
    req.body.user = req.profile
    newjob = new JobDescription(req.body);
    newjob.save((err, savedJob) => {
      if (err) {
        console.log(err)
        return res.status(400).json({
          err: "NOT able to save new job in DB"
        });
      }
      res.json({savedJob});
    });
};

exports.getJobById = (req, res, next, id) => {
    JobDescription.findById(id)
      .exec((err, job) => {
        if (err) {
          return res.status(400).json({
            error: "Specific Job not found"
          });
        }
        req.job = job;
        next();
      });
  };

exports.getJob = (req, res) => {
    return res.json(req.job);
};

exports.deleteJob = (req, res) => {
    let job = req.job;
    job.remove((err, deletedJob) => {
      if (err) {
        return res.status(400).json({
          error: "Failed to delete the job"
        });
      }
      res.json({
        message: "Deletion was a success",
        deletedJob
      });
    });
};


exports.updateJob = (req, res) => {
    let job = req.job;
    //save to the DB
    job.updateOne(req.body, (err, updatedJob) => {
    if (err) {
        res.status(400).json({
        error: "Updation of product failed"
        });
    }
    res.json(updatedJob);
    });
};


exports.allJobs = (req,res) => {
    JobDescription.find()
    .exec((err, alljobs) => {
        if (err){
            return res.status(400).json({
                error:"No Product Found"
        })
    }
        res.json(alljobs);
    });
};

exports.myJobs = (req,res) => {
  JobDescription.find({user:req.profile._id}, (err,myJobs) => {
    if (err) {
      res.status(400).json({
        error:"No Jobs Found"
      });
    }
    res.json(myJobs);
  });
}

exports.pushProposalInProposalsList = (req, res) => {
  req.job.updateOne(
    { $addToSet: 
      { proposals: 
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