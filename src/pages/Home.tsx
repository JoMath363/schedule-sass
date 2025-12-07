
import DefaultPage from "../components/templates/DefaultPage";
import HomeBar from "../components/organisms/HomeBar";
import HomeSummary from "../components/organisms/HomeSummary";

const Home = () => {
  return (
    <DefaultPage>
      <HomeBar/>
      <HomeSummary/>
    </DefaultPage>
  );
};

export default Home;