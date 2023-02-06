import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/Home";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import Jobs from "./user/Jobs";
import Freelancers from "./user/Freelancers";
import chooseRole from "./user/chooseRole";
import NewJob from "./user/NewJob";
import NewProfile from "./user/NewProfile";
import MyProfile from "./user/MyProfile";
import MyJobs from "./user/MyJobs";
import UpdateProfile from "./user/UpdateProfile";
import UpdateJob from "./user/UpdateJob";
import AdminPanel from "./admin/AdminPanel";
import AdminAllJobs from "./admin/AdminAllJobs";
import AdminAllProfiles from "./admin/AdminAllProfiles";

import './App.css';


// import AdminRoute from "./auth/helper/AdminRoutes";
// import PrivateRoute from "./auth/helper/PrivateRoutes";
// import UserDashBoard from "./user/UserDashBoard";
// import AdminDashBoard from "./user/AdminDashBoard";
// import AddCategory from "./admin/AddCategory";
// import ManageCategories from "./admin/ManageCategories";
// import AddProduct from "./admin/AddProduct";
// import ManageProducts from "./admin/ManageProducts";
// import UpdateProduct from "./admin/UpdateProduct";
// import Cart from "./core/Cart";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/jobs" exact component={Jobs} />
        <Route path="/freelancers" exact component={Freelancers} />
        <Route path="/chooserole" exact component={chooseRole} />
        <Route path="/add/profile" exact component={NewProfile} />
        <Route path="/add/job" exact component={NewJob} />
        <Route path="/myprofile" exact component={MyProfile} />
        <Route path="/myjobs" exact component={MyJobs} />
        <Route path="/myprofile/update/:profileId" exact component={UpdateProfile} />
        <Route path="/myjobs/update/:jobId" exact component={UpdateJob} />
        <Route path='/adminportal' exact component={AdminPanel} />
        <Route path='/alljobs' exact component={AdminAllJobs} />
        <Route path='/allProfiles' exact component={AdminAllProfiles} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
