import DefaultPage from "../components/templates/DefaultPage";
import CalendarTable from "../components/organisms/CalendarTable";
import CalendarBar from "../components/organisms/CalendarBar";
import { CalendarProvider } from "../services/calendar/CalendarProvider";

const Calendar = () => {
  return (
    <DefaultPage>
      <CalendarProvider>
        <CalendarBar />
        <CalendarTable />
      </CalendarProvider>
    </DefaultPage>
  );
};

export default Calendar;
