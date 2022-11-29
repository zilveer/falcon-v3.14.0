'use strict';

import utils from '../utils';
import events from './events';
import getTemplate from './template';
import { renderCalendar } from '../fullcalendar';

/*-----------------------------------------------
|   Calendar
-----------------------------------------------*/
const appCalendarInit = () => {
  const Selectors = {
    ACTIVE: '.active',
    ADD_EVENT_FORM: '#addEventForm',
    ADD_EVENT_MODAL: '#addEventModal',
    CALENDAR: '#appCalendar',
    CALENDAR_TITLE: '.calendar-title',
    DATA_CALENDAR_VIEW: '[data-fc-view]',
    DATA_EVENT: '[data-event]',
    DATA_VIEW_TITLE: '[data-view-title]',
    EVENT_DETAILS_MODAL: '#eventDetailsModal',
    EVENT_DETAILS_MODAL_CONTENT: '#eventDetailsModal .modal-content',
    EVENT_START_DATE: '#addEventModal [name="startDate"]',
    INPUT_TITLE: '[name="title"]',
  };

  const Events = {
    CLICK: 'click',
    SHOWN_BS_MODAL: 'shown.bs.modal',
    SUBMIT: 'submit',
  };

  const DataKeys = {
    EVENT: 'event',
    FC_VIEW: 'fc-view',
  };

  const ClassNames = {
    ACTIVE: 'active',
  };

  const eventList = events.reduce(
    (acc, val) =>
      val.schedules ? acc.concat(val.schedules.concat(val)) : acc.concat(val),
    []
  );

  const updateTitle = (title) => {
    document.querySelector(Selectors.CALENDAR_TITLE).textContent = title;
  };

  const appCalendar = document.querySelector(Selectors.CALENDAR);
  const addEventForm = document.querySelector(Selectors.ADD_EVENT_FORM);
  const addEventModal = document.querySelector(Selectors.ADD_EVENT_MODAL);
  const eventDetailsModal = document.querySelector(
    Selectors.EVENT_DETAILS_MODAL
  );

  if (appCalendar) {
    const calendar = renderCalendar(appCalendar, {
      headerToolbar: false,
      dayMaxEvents: 2,
      height: 800,
      stickyHeaderDates: false,
      views: {
        week: {
          eventLimit: 3,
        },
      },
      eventTimeFormat: {
        hour: 'numeric',
        minute: '2-digit',
        omitZeroMinute: true,
        meridiem: true,
      },
      events: eventList,
      eventClick: (info) => {
        if (info.event.url) {
          window.open(info.event.url, '_blank');
          info.jsEvent.preventDefault();
        } else {
          const template = getTemplate(info.event);
          document.querySelector(
            Selectors.EVENT_DETAILS_MODAL_CONTENT
          ).innerHTML = template;
          const modal = new window.bootstrap.Modal(eventDetailsModal);
          modal.show();
        }
      },
      dateClick(info) {
        const modal = new window.bootstrap.Modal(addEventModal);
        modal.show();
        /*eslint-disable-next-line*/
        const flatpickr = document.querySelector(Selectors.EVENT_START_DATE)
          ._flatpickr;
        flatpickr.setDate([info.dateStr]);
      },
    });

    updateTitle(calendar.currentData.viewTitle);

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

    document.querySelectorAll(Selectors.DATA_CALENDAR_VIEW).forEach((link) => {
      link.addEventListener(Events.CLICK, (e) => {
        e.preventDefault();
        const el = e.currentTarget;
        const text = el.textContent;
        el.parentElement
          .querySelector(Selectors.ACTIVE)
          .classList.remove(ClassNames.ACTIVE);
        el.classList.add(ClassNames.ACTIVE);
        document.querySelector(Selectors.DATA_VIEW_TITLE).textContent = text;
        calendar.changeView(utils.getData(el, DataKeys.FC_VIEW));
        updateTitle(calendar.currentData.viewTitle);
      });
    });

    addEventForm &&
      addEventForm.addEventListener(Events.SUBMIT, (e) => {
        e.preventDefault();
        const {
          title,
          startDate,
          endDate,
          label,
          description,
          allDay,
        } = e.target;
        calendar.addEvent({
          title: title.value,
          start: startDate.value,
          end: endDate.value ? endDate.value : null,
          allDay: allDay.checked,
          className:
            allDay.checked && label.value ? `bg-soft-${label.value}` : '',
          description: description.value,
        });
        e.target.reset();
        window.bootstrap.Modal.getInstance(addEventModal).hide();
      });
  }

  addEventModal &&
    addEventModal.addEventListener(
      Events.SHOWN_BS_MODAL,
      ({ currentTarget }) => {
        currentTarget.querySelector(Selectors.INPUT_TITLE).focus();
      }
    );
};

export default appCalendarInit;
