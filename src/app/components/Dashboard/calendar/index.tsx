'use client';

import type { CalendarEvent } from '@/app/interface/calendar';

import MyCalendar from '../../Calendar';

const events: CalendarEvent[] = [
  {
    id: 0,
    title: 'Board meeting',
    start: new Date(2024, 5, 28, 10, 0), // Note: months are 0-indexed
    end: new Date(2024, 5, 28, 12, 0),
  },
  {
    id: 1,
    title: 'Team lunch',
    start: new Date(2024, 5, 26, 13, 0),
    end: new Date(2024, 5, 26, 14, 0),
  },
];

const CalendarDashboard = () => {
  return (
    <div className='mt-7 px-7 mx-.5'>
      {' '}
      <h1 className='heading font-gilroy-bold mb-4 leading-5'>Calendar View</h1>
      <div className="App !py-6 !px-7 bg-white rounded-lg shadow-tableShadow">
        <MyCalendar events={events}  />
      </div>
    </div>
  );
};

export default CalendarDashboard;
