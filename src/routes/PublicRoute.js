import React, { Fragment } from "react";

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

export default PublicRoute;
