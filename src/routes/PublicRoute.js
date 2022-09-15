import React, { Fragment } from "react";
import { connect } from "react-redux";

import Topbar from "../components/layout/Topbar";
// import Footer from "../components/layout/Footer";
// import SiteMessage from "../components/common/SiteMessage";

const PublicRoute = ({ component: Component }) => {
  return (
    <Fragment>
      {/* <SiteMessage /> */}
      <Topbar />
      <Component />
      {/* <Footer /> */}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  // auth: state.auth,
  // siteConfig: state.siteConfig,
});

export default connect(mapStateToProps)(PublicRoute);
