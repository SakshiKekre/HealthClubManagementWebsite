import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import TopMenu from "./components/TopMenu";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
const HomeView = lazy(() => import("./views/Home"));
const SignInView = lazy(() => import("./views/account/SignIn"));
// const SignUpView = lazy(() => import("./views/account/SignUp"));
const ForgotPasswordView = lazy(() => import("./views/account/ForgotPassword"));
const EnrollmentView = lazy(() => import("./views/employee/EnrollmentView"));
const SearchMembersView = lazy(() => import("./views/employee/SearchMembersView"));
const MemberAnalytics = lazy(() => import("./views/employee/Analytics"));


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
          </Routes>
        </Suspense>
        
        <Footer />
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
