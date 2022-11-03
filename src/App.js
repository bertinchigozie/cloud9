import "./App.css";
import BackgroundCheck from "./component/layouts/BackgroundCheck";
import ContactButton from "./component/layouts/ContactButton";
import DesignBook from "./component/layouts/DesignBook";
import Footer from "./component/layouts/Footer";
import IconSection from "./component/layouts/IconSection";
import Profile from "./component/layouts/Profile";
import PythonBooks from "./component/layouts/PythonBooks";
import SlackUsername from "./component/layouts/SlackUsername";
import TwitterLink from "./component/layouts/TwitterLink";
import ZuriBooks from "./component/layouts/ZuriBooks";
import ZuriTeam from "./component/layouts/ZuriTeam";

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
          <ContactButton />
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
