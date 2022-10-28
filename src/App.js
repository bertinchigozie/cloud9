import "./App.css";
import BackgroundCheck from "./component/BackgroundCheck";
import DesignBook from "./component/DesignBook";
import Footer from "./component/Footer";
import IconSection from "./component/IconSection";
import Profile from "./component/Profile";
import PythonBooks from "./component/PythonBooks";
import SlackUsername from "./component/SlackUsername";
import TwitterLink from "./component/TwitterLink";
import ZuriBooks from "./component/ZuriBooks";
import ZuriTeam from "./component/ZuriTeam";

function App() {
  return (
    <div className="App">
      <div className="App-components">
        <div>
          <Profile />
        </div>
        <div>
          <SlackUsername />
        </div>
        <div>
          <TwitterLink />
        </div>
        <div>
          <ZuriTeam />
        </div>
        <div>
          <ZuriBooks />
        </div>
        <div>
          <PythonBooks />
        </div>
        <div>
          <BackgroundCheck />
        </div>
        <div>
          <DesignBook />
        </div>
        <div>
          <IconSection />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
