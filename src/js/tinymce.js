import utils from './utils';

/* -------------------------------------------------------------------------- */
/*                                   Tinymce                                  */
/* -------------------------------------------------------------------------- */

const tinymceInit = () => {
  if (window.tinymce) {
    const tinymces = document.querySelectorAll('.tinymce');
    if (tinymces.length) {
      window.tinymce.execCommand('mceFocus', false, 'course-description');
      window.tinymce.init({
        selector: '.tinymce',
        height: '50vh',
        menubar: false,
        skin: utils.settings.tinymce.theme,
        content_style: `.mce-content-body { color: ${utils.getGrays().black} }`,
        mobile: {
          theme: 'mobile',
          toolbar: ['undo', 'bold'],
        },
        statusbar: false,
        plugins: 'link,image,lists,table,media',
        toolbar:
          'styleselect | bold italic link bullist numlist image blockquote table media undo redo',
        directionality: utils.getItemFromStore('isRTL') ? 'rtl' : 'ltr',
        theme_advanced_toolbar_align: 'center',
        setup: (editor) => {
          editor.on('change', () => {
            window.tinymce.triggerSave();
          });
        },
      });
    }

    const themeController = document.body;
    themeController &&
      themeController.addEventListener(
        'clickControl',
        ({ detail: { control } }) => {
          if (control === 'theme') {
            window.tinyMCE.editors.forEach((el) => {
              el.dom.addStyle(
                `.mce-content-body{color: ${
                  utils.getGrays().black
                } !important;}`
              );
            });
          }
        }
      );
  }
};

export default tinymceInit;
