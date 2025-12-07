import HomeBar from "../shared/organisms/HomeBar";
import HomeSummary from "../shared/organisms/HomeSummary";
import DefaultPage from "../shared/templates/DefaultPage";


const Home = () => {
  return (
    <DefaultPage>
      <HomeBar/>
      <HomeSummary/>
    </DefaultPage>
  );
};

export default Home;