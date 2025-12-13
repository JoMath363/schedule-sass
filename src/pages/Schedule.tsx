import ScheduleBar from "../features/schedule/components/ScheduleBar";
import ScheduleList from "../features/schedule/components/ScheduleList";
import { ScheduleProvider } from "../features/schedule/service/ScheduleProvider";
import DefaultPage from "../shared/templates/DefaultPage";


const Schedule = () => {
  return (
    <DefaultPage>
      <ScheduleProvider>
        <ScheduleBar />
        <ScheduleList />
      </ScheduleProvider>
    </DefaultPage>
  );
};

export default Schedule;