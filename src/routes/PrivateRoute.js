import React, { Fragment } from "react";
import { connect } from "react-redux";

import { Navigate } from "react-router-dom";
import Topbar from "../components/layout/Topbar";
// import Footer from "../components/layout/Footer";
// import SiteMessage from "../components/common/SiteMessage";

const PrivateRoute = ({
  component: Component,
  auth: { userLoading, isAuthenticated },
}) => {
  if (userLoading) {
    return <Topbar />;
  } else {
    if (isAuthenticated) {
      return (
        <Fragment>
          {/* <SiteMessage /> */}
          <Topbar />
          <Component />
          {/* <Footer /> */}
        </Fragment>
      );
    } else {
      return <Navigate to="/" />;
    }
  }
};

const mapStateToProps = (state) => ({
  // auth: state.auth,
  // siteConfig: state.siteConfig,
});

export default connect(mapStateToProps)(PrivateRoute);
