/* eslint-disable */
import utils from './utils';

/*-----------------------------------------------
|   Dropzone
-----------------------------------------------*/

window.Dropzone ? (window.Dropzone.autoDiscover = false) : '';

const dropzoneInit = () => {
  const { merge } = window._;

  const Selector = {
    DROPZONE: '[data-dropzone]',
    DZ_ERROR_MESSAGE: '.dz-error-message',
    DZ_PREVIEW: '.dz-preview',
    DZ_PROGRESS: '.dz-preview .dz-preview-cover .dz-progress',
    DZ_PREVIEW_COVER: '.dz-preview .dz-preview-cover'
  };

  const ClassName = {
    DZ_FILE_PROCESSING: 'dz-file-processing',
    DZ_FILE_COMPLETE: 'dz-file-complete',
    DZ_COMPLETE: 'dz-complete',
    DZ_PROCESSING: 'dz-processing'
  };

  const DATA_KEY = {
    OPTIONS: 'options'
  };

  const Events = {
    ADDED_FILE: 'addedfile',
    REMOVED_FILE: 'removedfile',
    COMPLETE: 'complete'
  };

  const dropzones = document.querySelectorAll(Selector.DROPZONE);

  !!dropzones.length &&
    dropzones.forEach(item => {
      let userOptions = utils.getData(item, DATA_KEY.OPTIONS);
      userOptions = userOptions ? userOptions : {};
      const data = userOptions.data ? userOptions.data : {};
      const options = merge(
        {
          url: '/assets/php/',
          addRemoveLinks: false,
          previewsContainer: item.querySelector(Selector.DZ_PREVIEW),
          previewTemplate: item.querySelector(Selector.DZ_PREVIEW).innerHTML,
          thumbnailWidth: null,
          thumbnailHeight: null,
          maxFilesize: 20,
          autoProcessQueue: false,
          filesizeBase: 1000,
          init: function init() {
            const thisDropzone = this;

            if (data.length) {
              data.forEach(v => {
                const mockFile = { name: v.name, size: v.size };
                thisDropzone.options.addedfile.call(thisDropzone, mockFile);
                thisDropzone.options.thumbnail.call(thisDropzone, mockFile, `${v.url}/${v.name}`);
              });
            }

            thisDropzone.on(Events.ADDED_FILE, function addedfile() {
              if ('maxFiles' in userOptions) {
                if (
                  userOptions.maxFiles === 1 &&
                  item.querySelectorAll(Selector.DZ_PREVIEW_COVER).length > 1
                ) {
                  item.querySelector(Selector.DZ_PREVIEW_COVER).remove();
                }
                if (userOptions.maxFiles === 1 && this.files.length > 1) {
                  this.removeFile(this.files[0]);
                }
              }
            });
          },
          error(file, message) {
            if (file.previewElement) {
              file.previewElement.classList.add('dz-error');
              if (typeof message !== 'string' && message.error) {
                message = message.error;
              }
              for (let node of file.previewElement.querySelectorAll('[data-dz-errormessage]')) {
                node.textContent = message;
              }
            }
          }
        },
        userOptions
      );
      // eslint-disable-next-line
      item.querySelector(Selector.DZ_PREVIEW).innerHTML = '';

      const dropzone = new window.Dropzone(item, options);

      dropzone.on(Events.ADDED_FILE, () => {
        if (item.querySelector(Selector.DZ_PREVIEW_COVER)) {
          item
            .querySelector(Selector.DZ_PREVIEW_COVER)
            .classList.remove(ClassName.DZ_FILE_COMPLETE);
        }
        item.classList.add(ClassName.DZ_FILE_PROCESSING);
      });
      dropzone.on(Events.REMOVED_FILE, () => {
        if (item.querySelector(Selector.DZ_PREVIEW_COVER)) {
          item.querySelector(Selector.DZ_PREVIEW_COVER).classList.remove(ClassName.DZ_PROCESSING);
        }
        item.classList.add(ClassName.DZ_FILE_COMPLETE);
      });
      dropzone.on(Events.COMPLETE, () => {
        if (item.querySelector(Selector.DZ_PREVIEW_COVER)) {
          item.querySelector(Selector.DZ_PREVIEW_COVER).classList.remove(ClassName.DZ_PROCESSING);
        }

        item.classList.add(ClassName.DZ_FILE_COMPLETE);
      });
    });
};

export default dropzoneInit;
