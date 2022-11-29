/*-----------------------------------------------
|   Data table
-----------------------------------------------*/
const dataTablesInit = () => {
  if (window.jQuery) {
    const $ = window.jQuery;

    const dataTables = $('.data-table');
    const customDataTable = (elem) => {
      elem.find('.pagination').addClass('pagination-sm');
    };
    dataTables.length &&
      dataTables.each((index, value) => {
        const $this = $(value);
        const options = $.extend(
          {
            dom:
              "<'row mx-0'<'col-md-6'l><'col-md-6'f>>" +
              "<'table-responsive scrollbar'tr>" +
              "<'row g-0 align-items-center justify-content-center justify-content-sm-between'<'col-auto mb-2 mb-sm-0 px-3'i><'col-auto px-3'p>>",
          },
          $this.data('options')
        );
        $this.DataTable(options);
        const $wrpper = $this.closest('.dataTables_wrapper');
        customDataTable($wrpper);
        $this.on('draw.dt', () => customDataTable($wrpper));
      });
  }
};
export default dataTablesInit;
