'use strict';

import utils from '../utils';
import managementEvents from './management-events';
import { renderCalendar } from '../fullcalendar';
import getTemplate from './template';

/*-----------------------------------------------
|   Project Management Calendar
-----------------------------------------------*/
const managementCalendarInit = () => {
  const Selectors = {
    ADD_EVENT_FORM: '#addEventForm',
    ADD_EVENT_MODAL: '#addEventModal',
    CALENDAR: '#managementAppCalendar',
    EVENT_DETAILS_MODAL: '#eventDetailsModal',
    EVENT_DETAILS_MODAL_CONTENT: '#eventDetailsModal .modal-content',
    DATA_EVENT: '[data-event]',
    DATA_VIEW_TITLE: '[data-view-title]',
    EVENT_START_DATE: '#addEventModal [name="startDate"]',
    EVENT_MANAGEMENT_INFO: '[data-calendar-events]',
  };

  const Events = {
    CLICK: 'click',
    SUBMIT: 'submit',
  };

  const managementEventList = [];
  const DataKeys = {
    EVENT: 'event',
  };

  const managementCalendar = document.querySelector(Selectors.CALENDAR);

  if (managementCalendar) {
    const calendarData = utils.getData(managementCalendar, 'calendar-option');
    const managementCalendarEvents = document.getElementById(
      calendarData?.events
    );
    const addEventForm = document.querySelector(Selectors.ADD_EVENT_FORM);
    const addEventModal = document.querySelector(Selectors.ADD_EVENT_MODAL);
    const eventDetailsModal = document.querySelector(
      Selectors.EVENT_DETAILS_MODAL
    );
    const updateTitle = (title) => {
      const selectTitle = document.getElementById(calendarData?.title);
      if (selectTitle) {
        selectTitle.textContent = title;
      }
    };

    const updateDay = (day) => {
      const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ];
      const selectDay = document.getElementById(calendarData?.day);
      if (selectDay) {
        selectDay.textContent = days[day];
      }
    };

    if (managementEvents) {
      managementEvents.forEach((e) => {
        managementEventList.push({
          start: e.start,
          end: e.end,
          display: 'background',
          classNames: `border border-2 border-${e.classNames} bg-100`,
        });
      });
    }

    if (managementCalendarEvents) {
      managementEvents.forEach((e) => {
        managementCalendarEvents.innerHTML += `
          <li class= 'border-top pt-3 mb-3 pb-1 cursor-pointer' data-calendar-events>
            <div class= 'border-start border-3 border-${
              e.classNames
            } ps-3 mt-1'>
              <h6 class="mb-1 fw-semi-bold text-700">${e.title}</h6>
              <p class= 'fs--2 text-600 mb-0'>${e.startTime || ''} ${
          e.endTime ? '-' : ''
        } ${e.endTime || ''}</p>
            </div>
          </li> `;
      });
    }

    const eventManagementInfo = document.querySelectorAll(
      Selectors.EVENT_MANAGEMENT_INFO
    );

    if (eventManagementInfo) {
      eventManagementInfo.forEach((li, index) => {
        li.addEventListener(Events.CLICK, () => {
          const event = managementEvents[index];
          const template = getTemplate(event);
          document.querySelector(
            Selectors.EVENT_DETAILS_MODAL_CONTENT
          ).innerHTML = template;
          const modal = new window.bootstrap.Modal(eventDetailsModal);
          modal.show();
        });
      });
    }

    if (managementCalendar) {
      const calendar = renderCalendar(managementCalendar, {
        headerToolbar: false,
        dayMaxEvents: 2,
        height: 360,
        stickyHeaderDates: false,
        dateClick(info) {
          const modal = new window.bootstrap.Modal(addEventModal);
          modal.show();
          /*eslint-disable-next-line*/
          const flatpickr = document.querySelector(
            Selectors.EVENT_START_DATE
          )._flatpickr;
          flatpickr.setDate([info.dateStr]);
        },
        events: managementEventList,
      });

      updateTitle(calendar.currentData.viewTitle);
      updateDay(calendar.currentData.currentDate.getDay());

      document.querySelectorAll(Selectors.DATA_EVENT).forEach((button) => {
        button.addEventListener(Events.CLICK, (e) => {
          const el = e.currentTarget;
          const type = utils.getData(el, DataKeys.EVENT);
          switch (type) {
            case 'prev':
              calendar.prev();
              updateTitle(calendar.currentData.viewTitle);
              break;
            case 'next':
              calendar.next();
              updateTitle(calendar.currentData.viewTitle);
              break;
            case 'today':
              calendar.today();
              updateTitle(calendar.currentData.viewTitle);
              break;
            default:
              calendar.today();
              updateTitle(calendar.currentData.viewTitle);
              break;
          }
        });
      });

      if (addEventForm) {
        addEventForm.addEventListener(Events.SUBMIT, (e) => {
          e.preventDefault();
          e.target.reset();
          window.bootstrap.Modal.getInstance(addEventModal).hide();
        });
      }
    }
  }
};

export default managementCalendarInit;
