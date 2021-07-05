import Header from "./components/Header";
import QuickActions from "./sections/QuickActions";
import Services from "./sections/Services";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      <div className="container">
        {/* Quick Actions Section */}
        <QuickActions />
        {/* Services Section */}
        <Services />
      </div>
    </div>
  );
};

export default App;
