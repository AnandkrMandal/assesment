import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";
import Loading from "components/Loading";
const LANDINGPAGE = React.lazy(() => import("pages/LANDINGPAGE"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<Loading/>}>
      <Router>
        <Routes>
          <Route path="/" element={<LANDINGPAGE />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;