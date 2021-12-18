import {Route, Routes} from "react-router-dom"
import Page1 from "./components/Page1/Page1" 
import Page2 from "./components/Page2/Page2";
import Page3 from "./components/Page3/Page3";
import Page4 from "./components/Page4/Page4";
import FailedPage1 from "./components/FailedPage1/FailedPage1";
import FailedPage2 from "./components/FailedPage2/FailedPage2";
import Sorry from "./components/Sorry/Sorry";
import UserInfo from "./components/DisplayUserInfo/UserInfo";

function App() {
  return (
    <div className="App">
     <Routes>
      <Route exact path="/" element={<Page1 />} />
      <Route exact path="two" element={<Page2 />} />
      <Route exact path="three" element={<Page3 />} />
      <Route exact path="four" element={<Page4 />} />
      <Route exact path="failed1" element={<FailedPage1 />} />
      <Route exact path="failed2" element={<FailedPage2 />} />
      <Route exact path="sorry" element={<Sorry/>} />
      <Route exact path="userInfo" element={<UserInfo/>} />
      <Route path="*" element={<Page1 />} />
    </Routes>
    </div>
  );
}

export default App;
