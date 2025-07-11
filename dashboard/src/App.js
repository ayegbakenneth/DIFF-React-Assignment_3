import ALX from './ALX.jpg';
import Header from './component/Header.js';
import RecommendedJobs from './component/RecommendedJobs.js';
import HowItWorks from './component/HowItWorks.js';
import PopularCategories from './component/PopularCategories.js';
import TopCompanies from './component/TopCompanies.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <RecommendedJobs />
      <HowItWorks />
      <PopularCategories />
      <TopCompanies />
    </div>
  );
}

export default App;
