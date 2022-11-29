/*-----------------------------------------------
|   Select2
-----------------------------------------------*/

const select2Init = () => {
  if (window.jQuery) {
    const $ = window.jQuery;

    const select2 = $('.selectpicker');
    select2.length
      && select2.each((index, value) => {
        const $this = $(value);
        const options = $.extend({ theme: 'bootstrap-5' }, $this.data('options'));
        $this.select2(options);
      });
  }
};

export default select2Init;
