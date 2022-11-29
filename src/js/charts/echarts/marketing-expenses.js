import utils from '../../utils';
import { echartSetOption } from './echarts-utils';

/* -------------------------------------------------------------------------- */
/*                            Bandwidth Saved                                 */
/* -------------------------------------------------------------------------- */

const marketingExpensesInit = () => {
  const $echartsMarketingExp = document.querySelector(
    '.echart-marketing-expenses'
  );

  if ($echartsMarketingExp) {
    const userOptions = utils.getData($echartsMarketingExp, 'options');
    const chart = window.echarts.init($echartsMarketingExp);

    const marketingExpenses = [
      {
        value: 412600,
        name: 'Offline Marketing',
        itemStyle: { color: utils.getColor('primary') },
        label: {
          rich: {
            per: {
              color: '#1C4F93',
            },
          },
        },
      },
      {
        value: 641500,
        name: 'Digital Marketing',
        itemStyle: {
          color: utils.rgbaColor(utils.getColor('info'), 0.35),
        },
        label: {
          rich: {
            per: {
              color: '#1978A2',
            },
          },
        },
      },
    ];

    const detailedExpenses = [
      {
        value: 91600,
        name: 'Event Sponsorship',
        itemStyle: {
          color: utils.rgbaColor(utils.getColor('primary'), 0.4),
        },
      },
      {
        value: 183000,
        name: 'Outrich Event',
        itemStyle: {
          color: utils.rgbaColor(utils.getColor('primary'), 0.6),
        },
      },
      {
        value: 138000,
        name: 'Ad Campaign',
        itemStyle: {
          color: utils.rgbaColor(utils.getColor('primary'), 0.8),
        },
      },
      {
        value: 183000,
        name: 'Social Media',
        itemStyle: {
          color: utils.rgbaColor(utils.getColor('info'), 0.2),
        },
      },
      {
        value: 45900,
        name: 'Google Ads',
        itemStyle: {
          color: utils.rgbaColor(utils.getColor('info'), 0.35),
        },
      },
      {
        value: 138000,
        name: 'Influencer Marketing',
        itemStyle: {
          color: utils.rgbaColor(utils.getColor('info'), 0.5),
        },
      },
      {
        value: 183000,
        name: 'Email Marketing',
        itemStyle: {
          color: utils.rgbaColor(utils.getColor('info'), 0.7),
        },
      },
      {
        value: 91600,
        name: 'Generate Backlinks',
        itemStyle: {
          color: utils.rgbaColor(utils.getColor('info'), 0.8),
        },
      },
    ];

    const getDefaultOptions = () => ({
      tooltip: {
        trigger: 'item',
        backgroundColor: utils.getGrays()['100'],
        textStyle: { color: utils.getColors().dark },
        formatter: '{b}<br/> {c} ({d}%)',
      },
      series: [
        {
          name: 'Marketing Expenses',
          type: 'pie',
          selectedMode: 'single',
          radius: ['45%', '60%'],
          label: {
            show: false,
          },
          labelLine: {
            show: false,
          },
          itemStyle: {
            borderColor: utils.getColor('gray-100'),
            borderWidth: 2,
          },

          data: detailedExpenses,
        },
        {
          name: 'Marketing Expenses',
          type: 'pie',
          radius: ['70%', '75%'],
          barWidth: 10,
          labelLine: {
            length: 0,
            show: false,
          },
          label: {
            formatter: '{per|{d}%}',
            rich: {
              per: {
                fontSize: 14,
                fontWeight: 'bold',
                lineHeight: 33,
              },
            },
          },
          data: marketingExpenses,
        },
      ],
    });

    const initChart = () => {
      if (utils.isScrolledIntoView($echartsMarketingExp)) {
        echartSetOption(chart, userOptions, getDefaultOptions);
        window.removeEventListener('scroll', initChart);
      }
    };

    window.addEventListener('scroll', initChart);
  }
};

export default marketingExpensesInit;
