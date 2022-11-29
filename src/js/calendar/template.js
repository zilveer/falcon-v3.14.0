const getStackIcon = (icon, transform) => `
  <span class="fa-stack ms-n1 me-3">
    <i class="fas fa-circle fa-stack-2x text-200"></i>
    <i class="${icon} fa-stack-1x text-primary" data-fa-transform=${transform}></i>
  </span>
`;

const getTemplate = event => `
<div class="modal-header bg-light ps-card pe-5 border-bottom-0">
  <div>
    <h5 class="modal-title mb-0">${event.title}</h5>
    ${
      !!event.extendedProps.organizer
        ? `<p class="mb-0 fs--1 mt-1">
        by <a href="#!">${event.extendedProps.organizer}</a>
      </p>`
        : ''
    }
  </div>
  <button type="button" class="btn-close position-absolute end-0 top-0 mt-3 me-3" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div class="modal-body px-card pb-card pt-1 fs--1">
  ${
    event.extendedProps.description
      ? `
      <div class="d-flex mt-3">
        ${getStackIcon('fas fa-align-left')}
        <div class="flex-1">
          <h6>Description</h6>
          <p class="mb-0">
            
          ${event.extendedProps.description.split(' ').slice(0, 30).join(' ')}
          </p>
        </div>
      </div>
    `
      : ''
  } 
  <div class="d-flex mt-3">
    ${getStackIcon('fas fa-calendar-check')}
    <div class="flex-1">
        <h6>Date and Time</h6>
        <p class="mb-1">
          ${window.dayjs && window.dayjs(event.start).format('dddd, MMMM D, YYYY, h:mm A')} 
          ${
            event.end
              ? `– <br/>${
                  window.dayjs &&
                  window.dayjs(event.end).subtract(1, 'day').format('dddd, MMMM D, YYYY, h:mm A')
                }`
              : ''
          }
        </p>
    </div>
  </div>
  ${
    event.extendedProps.location
      ? `
        <div class="d-flex mt-3">
          ${getStackIcon('fas fa-map-marker-alt')}
          <div class="flex-1">
              <h6>Location</h6>
              <p class="mb-0">${event.extendedProps.location}</p>
          </div>
        </div>
      `
      : ''
  }
  ${
    event.schedules
      ? `
        <div class="d-flex mt-3">
        ${getStackIcon('fas fa-clock')}
        <div class="flex-1">
            <h6>Schedule</h6>
            
            <ul class="list-unstyled timeline mb-0">
              ${event.schedules.map(schedule => `<li>${schedule.title}</li>`).join('')}
            </ul>
        </div>
      `
      : ''
  }
  </div>
</div>
<div class="modal-footer d-flex justify-content-end bg-light px-card border-top-0">
  <a href="${document.location.href
    .split('/')
    .slice(0, 5)
    .join('/')}/app/events/create-an-event.html" class="btn btn-falcon-default btn-sm">
    <span class="fas fa-pencil-alt fs--2 mr-2"></span> Edit
  </a>
  <a href='${document.location.href
    .split('/')
    .slice(0, 5)
    .join('/')}/app/events/event-detail.html' class="btn btn-falcon-primary btn-sm">
    See more details
    <span class="fas fa-angle-right fs--2 ml-1"></span>
  </a>
</div>
`;

export default getTemplate;
