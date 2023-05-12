import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import TopMenu from "./components/TopMenu";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import LeftNavigation from "./components/LeftNavigation";
const HomeView = lazy(() => import("./views/Home"));
const SignInView = lazy(() => import("./views/account/SignIn"));
const ForgotPasswordView = lazy(() => import("./views/account/ForgotPassword"));
const EnrollmentView = lazy(() => import("./views/employee/EnrollmentView"));
const SearchMembersView = lazy(() => import("./views/employee/SearchMembersView"));
const MemberAnalytics = lazy(() => import("./views/employee/GymAnalytics"));
const ClassView = lazy(() => import("./views/member/ClassesView"));
const MemberActivities = lazy(() => import("../src/views/member/MyActivitiesView"));
const MyProfile = lazy(() => import("../src/views/member/MyProfile"));
const MemberAddActivity = lazy(() => import("../src/views/member/AddActivity"));




function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <TopMenu /> 

  
        <Suspense
          fallback={
            <div className="text-white text-center mt-3">Loading...</div>
          }
        >
          <Routes>
            <Route path="/" element={<HomeView/>} />
            <Route exact path="/account/signin" element={<SignInView/>} />
            <Route
              exact
              path="/account/forgotpassword"
              element={<ForgotPasswordView/>}
            />
            <Route exact path="/employee/enrollmember" element={<EnrollmentView/>} />
            <Route exact path="/employee/searchmembers" element={<SearchMembersView/>} />
            <Route exact path="/employee/viewAnalytics" element={<MemberAnalytics/>} />
            <Route exact path="/member/classesView" element={<ClassView/>} />
            <Route exact path="/member/activities" element={<MemberActivities/>} />
            <Route exact path="/member/MyProfile" element={<MyProfile/>} />
            <Route exact path="/member/AddActivity" element={<MemberAddActivity/>} />
  
          </Routes>
        </Suspense>
    
   
        <Footer />
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
