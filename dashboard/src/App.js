import ALX from './ALX.jpg';
import Header from './component/Header.js';
import RecommendedJobs from './component/RecommendedJobs.js';
import HowItWorks from './component/HowItWorks.js';
import PopularCategories from './component/PopularCategories.js';
import TopCompanies from './component/TopCompanies.js';
import Testimonials from './component/Testimonials.js';
import GetStarted from './component/GetStarted.js';
import Footer from './component/Footer.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <RecommendedJobs />
      <HowItWorks />
      <PopularCategories />
      <TopCompanies />
      <Testimonials />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
