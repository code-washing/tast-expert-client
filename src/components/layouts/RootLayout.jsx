// react-router imports
import { Outlet } from "react-router-dom";

// component
import Header from "./../shared/Header/Header";
import Footer from "./../shared/Footer/Footer";

function RootLayout() {
  return (
    <div>
      <Header modifyClasses="mb-sectionGapMd" />
      <Outlet /> 
      <Footer /> 
    </div>
  );
}

export default RootLayout;
