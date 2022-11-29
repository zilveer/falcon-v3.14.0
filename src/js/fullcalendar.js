/* -------------------------------------------------------------------------- */
/*                                FullCalendar                                */
/* -------------------------------------------------------------------------- */

import utils from './utils';
const { merge } = window._;

const renderCalendar = (el, option) => {
  const options = merge(
    {
      initialView: 'dayGridMonth',
      editable: true,
      direction: document.querySelector('html').getAttribute('dir'),
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      buttonText: {
        month: 'Month',
        week: 'Week',
        day: 'Day'
      }
    },
    option
  );
  const calendar = new window.FullCalendar.Calendar(el, options);
  calendar.render();
  document
    .querySelector('.navbar-vertical-toggle')
    ?.addEventListener('navbar.vertical.toggle', () => calendar.updateSize());
  return calendar;
};

const fullCalendarInit = () => {
  const calendars = document.querySelectorAll('[data-calendar]');
  calendars.forEach(item => {
    const options = utils.getData(item, 'calendar');
    renderCalendar(item, options);
  });
};

const fullCalendar = {
  renderCalendar,
  fullCalendarInit
};
export default fullCalendar;
