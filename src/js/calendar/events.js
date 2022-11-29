const { dayjs } = window;
const currentDay = dayjs && dayjs().format('DD');
const currentMonth = dayjs && dayjs().format('MM');
const prevMonth = dayjs && dayjs().subtract(1, 'month').format('MM');
const nextMonth = dayjs && dayjs().add(1, 'month').format('MM');
const currentYear = dayjs && dayjs().format('YYYY');
const events = [
  {
    title: 'Boot Camp',
    start: `${currentYear}-${currentMonth}-01 10:00:00`,
    end: `${currentYear}-${currentMonth}-03 16:00:00`,
    description:
      "Boston Harbor Now in partnership with the Friends of Christopher Columbus Park, the Wharf District Council and the City of Boston is proud to announce the New Year's Eve Midnight Harbor Fireworks! This beloved nearly 40-year old tradition is made possible by the generous support of local waterfront organizations and businesses and the support of the City of Boston and the Office of Mayor Marty Walsh.",
    className: 'bg-soft-success',
    location:
      'Boston Harborwalk, Christopher Columbus Park, <br /> Boston, MA 02109, United States',
    organizer: 'Boston Harbor Now',
  },
  {
    title: `Crain's New York Business `,
    start: `${currentYear}-${currentMonth}-11`,
    description:
      "Crain's 2020 Hall of Fame. Sponsored Content By Crain's Content Studio. Crain's Content Studio Presents: New Jersey: Perfect for Business. Crain's Business Forum: Letitia James, New York State Attorney General. Crain's NYC Summit: Examining racial disparities during the pandemic",
    className: 'bg-soft-primary',
  },
  {
    title: 'Conference',
    start: `${currentYear}-${currentMonth}-${currentDay}`,
    description:
      'The Milken Institute Global Conference gathered the best minds in the world to tackle some of its most stubborn challenges. It was a unique experience in which individuals with the power to enact change connected with experts who are reinventing health, technology, philanthropy, industry, and media.',
    className: 'bg-soft-success',
    allDay: true,
    schedules: [
      {
        title: 'Reporting',
        start: `${currentYear}-${currentMonth}-${currentDay} 11:00:00`,
        description:
          'Time to start the conference and will briefly describe all information about the event.  ',
        className: 'event-bg-soft-success',
      },
      {
        title: 'Lunch',
        start: `${currentYear}-${currentMonth}-${currentDay} 14:00:00`,
        description: 'Lunch facility for all the attendance in the conference.',
        className: 'event-bg-soft-success',
      },
      {
        title: 'Contest',
        start: `${currentYear}-${currentMonth}-${currentDay} 16:00:00`,
        description: 'The starting of the programming contest',
        className: 'event-bg-soft-success',
      },
      {
        title: 'Dinner',
        start: `${currentYear}-${currentMonth}-${currentDay} 22:00:00`,
        description: 'Dinner facility for all the attendance in the conference',
        className: 'event-bg-soft-success',
      },
    ],
  },
  {
    title: `ICT Expo ${currentYear} - Product Release`,
    start: `${currentYear}-${currentMonth}-16 10:00:00`,
    description: `ICT Expo ${currentYear} is the largest private-sector exposition aimed at showcasing IT and ITES products and services in Switzerland.`,
    end: `${currentYear}-${currentMonth}-18 16:00:00`,
    className: 'bg-soft-warning',
  },
  {
    title: 'Meeting',
    start: `${currentYear}-${currentMonth}-07 10:00:00`,
    description:
      'Discuss about the upcoming projects in current year and assign all tasks to the individuals',
  },
  {
    title: 'Contest',
    start: `${currentYear}-${currentMonth}-14 10:00:00`,
    description:
      'PeaceX is an international peace and amity organisation that aims at casting a pall at the striking issues surmounting the development of peoples and is committed to impacting the lives of young people all over the world.',
  },
  {
    title: 'Event With Url',
    start: `${currentYear}-${currentMonth}-23`,
    description:
      'Sample example of a event with url. Click the event, will redirect to the given link.',
    className: 'bg-soft-success',
    url: 'http://google.com',
  },
  {
    title: 'Competition',
    start: `${currentYear}-${currentMonth}-26`,
    description:
      'The Future of Zambia – Top 30 Under 30 is an annual award, ranking scheme, and recognition platform for young Zambian achievers under the age of 30, who are building brands, creating jobs, changing the game, and transforming the country.',
    className: 'bg-soft-danger',
  },
  {
    title: 'Birthday Party',
    start: `${currentYear}-${nextMonth}-05`,
    description: 'Will celebrate birthday party with my friends and family',
    className: 'bg-soft-primary',
  },
  {
    title: 'Click for Google',
    url: 'http://google.com/',
    start: `${currentYear}-${prevMonth}-10`,
    description:
      'Applications are open for the New Media Writing Prize 2020. The New Media Writing Prize (NMWP) showcases exciting and inventive stories and poetry that integrate a variety of formats, platforms, and digital media.',
    className: 'bg-soft-primary',
  },
];

export default events;
