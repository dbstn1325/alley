import React from "react";

import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";

import Page404 from "pages/404page";
import { Home } from "pages/Home/Home";
import { Detail } from "pages/Detail/Detail";
import MapPage from "pages/map/map";
import Result from "pages/result/result";

function App() {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/*" element={<Page404 />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </RecoilRoot>
  );
}

export default App;
