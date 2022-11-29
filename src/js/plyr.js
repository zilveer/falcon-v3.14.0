import utils from './utils';
/*-----------------------------------------------
|   Inline Player [plyr]
-----------------------------------------------*/

const plyrInit = () => {
  if (window.Plyr) {
    const plyrs = document.querySelectorAll('.player');
    plyrs.forEach((plyr) => {
      const userOptions = utils.getData(plyr, 'options');
      const defaultOptions = { captions: { active: true } };
      const options = window._.merge(defaultOptions, userOptions);
      return new window.Plyr(plyr, options);
    });
  }
};

export default plyrInit;
