const thisDay = window.dayjs && window.dayjs().format('DD');
const plus2Day = window.dayjs && window.dayjs().add(2, 'day').format('DD');
const thisMonthNumber = window.dayjs && window.dayjs().format('MM');
const thisMonthName = window.dayjs && window.dayjs().format('MMM');
const upcomingMonthNumber = window.dayjs && window.dayjs().add(1, 'month').format('MM');
const upcomingMonthName = window.dayjs && window.dayjs().format('MMM');

const thisYear = window.dayjs && window.dayjs().format('YYYY');
const managementEvents = [
  {
    title: 'Monthly team meeting for Falcon React Project',
    start: `${thisYear}-${thisMonthNumber}-07`,
    end: `${thisYear}-${thisMonthNumber}-09`,
    startTime: `07 ${thisMonthName}, ${thisYear}`,
    endTime: `10 ${thisMonthName}, ${thisYear}`,
    classNames: 'primary',
    extendedProps: {
      description:
        'Boston Harbor Now in partnership with the Friends of Christopher Columbus Park, the Wharf District Council.',
      location:
        'Boston Harborwalk, Christopher Columbus Park, <br /> Boston, MA 02109, United States',
      organizer: 'Boston Harbor Now'
    }
  },
  {
    title: 'Newmarket Nights',
    start: `${thisYear}-${thisMonthNumber}-16`,
    end: `${thisYear}-${thisMonthNumber}-18`,
    startTime: `16 ${thisMonthName}, ${thisYear}`,
    classNames: 'success',
    extendedProps: {
      description:
        'Boston Harbor Now in partnership with the Friends of Christopher Columbus Park, the Wharf District Council.',
      location:
        'Boston Harborwalk, Christopher Columbus Park, <br /> Boston, MA 02109, United States',
      organizer: 'Boston Harbor Now'
    }
  },
  {
    title: 'Folk Festival',
    start: `${thisYear}-${thisMonthNumber}-25`,
    end: `${thisYear}-${thisMonthNumber}-28`,
    startTime: `07 ${thisMonthName}, ${thisYear}`,
    endTime: `10 ${thisMonthName}, ${thisYear}`,
    classNames: 'warning',
    extendedProps: {
      description:
        'Boston Harbor Now in partnership with the Friends of Christopher Columbus Park, the Wharf District Council.',
      location:
        'Boston Harborwalk, Christopher Columbus Park, <br /> Boston, MA 02109, United States',
      organizer: 'Boston Harbor Now'
    }
  },
  {
    title: 'Film Festival',
    start: `${thisYear}-${upcomingMonthNumber}-${thisDay}`,
    end: `${thisYear}-${upcomingMonthNumber}-${plus2Day}`,
    startTime: `07 ${upcomingMonthName}, ${thisYear}`,
    endTime: `10 ${upcomingMonthName}, ${thisYear}`,
    classNames: 'danger',
    extendedProps: {
      description:
        'Boston Harbor Now in partnership with the Friends of Christopher Columbus Park, the Wharf District Council.',
      location:
        'Boston Harborwalk, Christopher Columbus Park, <br /> Boston, MA 02109, United States',
      organizer: 'Boston Harbor Now'
    }
  },
  {
    title: 'Meeting',
    start: `${thisYear}-${upcomingMonthNumber}-28`,
    startTime: `07 ${upcomingMonthName}, ${thisYear}`,
    classNames: 'warning',
    extendedProps: {
      description:
        'Boston Harbor Now in partnership with the Friends of Christopher Columbus Park, the Wharf District Council.',
      location:
        'Boston Harborwalk, Christopher Columbus Park, <br /> Boston, MA 02109, United States',
      organizer: 'Boston Harbor Now'
    }
  }
];

export default managementEvents;
