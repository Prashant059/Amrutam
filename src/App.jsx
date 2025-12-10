import React, { useState } from "react";
import Router from "./router.jsx";
import Layout from "./features/layout/Layout.jsx";
import IntroPopup from "./features/affiliate/IntroPopup.jsx";

export default function App() {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <>
      {/* POPUP */}
      <IntroPopup open={showPopup} onClose={() => setShowPopup(false)} />

      {/* BLUR CONTENT WHEN POPUP OPEN */}
      <div className={showPopup ? "blur-sm transition-all duration-300" : "blur-0"}>
        <Layout>
          <Router />
        </Layout>
      </div>
    </>
  );
}
