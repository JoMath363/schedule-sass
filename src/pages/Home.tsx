import { PiPlusBold } from "react-icons/pi";
import PrimaryBtn from "../components/atom/PrimaryBtn";
import FlexContainer from "../components/molecules/FlexContainer";
import WelcomeMessage from "../components/molecules/WelcomeMessage";
import DefaultPage from "../components/templates/DefaultPage";
import ClientCard from "../features/client/ClientCard";
import AppointmentCard from "../features/appointment/AppointmentCard";

const Home = () => {
  return (
    <DefaultPage>
      <FlexContainer justify="space-between">
        <WelcomeMessage />
        <PrimaryBtn icon={PiPlusBold} text="Agendar" link="" />
      </FlexContainer>

      <FlexContainer>
        <ClientCard />
        <AppointmentCard />
      </FlexContainer>
    </DefaultPage>
  );
};

export default Home;