import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';


const Calendar = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">📅 Events Calendar</h2>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={[
          { title: 'Project Review', date: '2025-06-25' },
          { title: 'Team Meeting', date: '2025-06-28' },
        ]}
        height="auto"
      />
    </div>
  );
};

export default Calendar;