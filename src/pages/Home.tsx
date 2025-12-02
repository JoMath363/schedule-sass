import HomeBar from "../components/organisms/HomeBar";
import HomeSummary from "../components/organisms/HomeSummary";
import DefaultPage from "../components/templates/DefaultPage";

const Home = () => {
  return (
    <DefaultPage>
      <HomeBar />
      <HomeSummary />
    </DefaultPage>
  );
};

export default Home;