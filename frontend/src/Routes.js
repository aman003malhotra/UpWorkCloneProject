import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./core/Home";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import Jobs from "./user/Jobs";
import Freelancers from "./user/Freelancers";
import NewJob from "./user/NewJob";
import NewProfile from "./user/NewProfile";
import MyProfile from "./user/MyProfile";
import MyJobs from "./user/MyJobs";
import UpdateProfile from "./user/UpdateProfile";
import UpdateJob from "./user/UpdateJob";
import AdminPanel from "./admin/AdminPanel";
import AdminAllJobs from "./admin/AdminAllJobs";
import AdminAllProfiles from "./admin/AdminAllProfiles";
import NotFound from "./NotFound";
import './App.css';



const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/jobs" exact component={Jobs} />
        <Route path="/freelancers" exact component={Freelancers} />
        <Route path="/add/profile" exact component={NewProfile} />
        <Route path="/add/job" exact component={NewJob} />
        <Route path="/myprofile" exact component={MyProfile} />
        <Route path="/myjobs" exact component={MyJobs} />
        <Route path="/myprofile/update/:profileId" exact component={UpdateProfile} />
        <Route path="/myjobs/update/:jobId" exact component={UpdateJob} />
        <Route path='/adminportal' exact component={AdminPanel} />
        <Route path='/alljobs' exact component={AdminAllJobs} />
        <Route path='/allProfiles' exact component={AdminAllProfiles} />
        <Route path="/404" exact component={NotFound} />
        <Redirect from='*' to='/404' />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
