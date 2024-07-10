/* eslint-disable import/no-extraneous-dependencies */
import 'react-big-calendar/lib/css/react-big-calendar.css';

import moment from 'moment';
import React, { useState } from 'react';
import type { View } from 'react-big-calendar';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';

import type { CalendarEvent } from '@/app/interface/calendar';

const localizer = momentLocalizer(moment);

interface Props {
  events: CalendarEvent[];
}
const MyCalendar: React.FC<Props> = ({ events }) => {
  const [view, setView] = useState<View | undefined>(Views.WEEK);
  const [date, setDate] = useState(new Date());

  const handleViewChange = (newView: View | undefined) => {
    setView(newView);
  };

  const handleNavigate = (newDate: Date) => {
    setDate(newDate);
  };

  return (
    <div style={{ height: '700' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        views={[Views.DAY, Views.WEEK, Views.MONTH]}
        view={view}
        onView={handleViewChange}
        date={date}
        onNavigate={handleNavigate}
        defaultView={Views.WEEK}
        selectable={true}
      />
    </div>
  );
};

export default MyCalendar;
