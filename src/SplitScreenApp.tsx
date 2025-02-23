import Content from "./components/SplitScreenChallenge/Content";
import Footer from "./components/SplitScreenChallenge/Footer";
import Header from "./components/SplitScreenChallenge/Header";
import Sidebar from "./components/SplitScreenChallenge/Sidebar";
import SplitScreen from "./components/SplitScreenChallenge/SplitScreen";

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <SplitScreen leftWeight={3} rightWeight={60}>
        <Sidebar />
        <Content />
      </SplitScreen>
      <Footer />
    </div>
  );
};

export default App;
