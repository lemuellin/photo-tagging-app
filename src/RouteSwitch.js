import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import LeaderBoard from "./component/LeaderBoard";
import Welcome from "./component/Welcome";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/photo-tagging-app" element={<Welcome/>} />
        <Route path="/game" element={<App/>} />
        <Route path="/result" element={<LeaderBoard/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;