import DefaultPage from "../shared/templates/DefaultPage";
import CalendarTable from "../features/calendar/components/CalendarTable";
import CalendarBar from "../features/calendar/components/CalendarBar";
import { CalendarProvider } from "../features/calendar/service/CalendarProvider";

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
