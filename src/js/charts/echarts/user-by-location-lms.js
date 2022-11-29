import utils from '../../utils';
import { echartSetOption } from './echarts-utils';

/* -------------------------------------------------------------------------- */
/*                                User By Location Map                      */
/* -------------------------------------------------------------------------- */

const userByLocationInit = () => {
  const $userByLocationMap = document.querySelector(
    '.echart-user-by-location-map'
  );

  const data = [
    { name: 'Afghanistan', value: 28397 },
    { name: 'Angola', value: 19549 },
    { name: 'Albania', value: 3150 },
    { name: 'United Arab Emirates', value: 8441 },
    { name: 'Argentina', value: 40374 },
    { name: 'Armenia', value: 2963 },
    { name: 'French Southern and Antarctic Lands', value: 268 },
    { name: 'Australia', value: 22404 },
    { name: 'Austria', value: 8401 },
    { name: 'Azerbaijan', value: 9094 },
    { name: 'Burundi', value: 9232 },
    { name: 'Belgium', value: 10941 },
    { name: 'Benin', value: 9509 },
    { name: 'Burkina Faso', value: 15540 },
    { name: 'Bangladesh', value: 151125 },
    { name: 'Bulgaria', value: 7389 },
    { name: 'The Bahamas', value: 66402 },
    { name: 'Bosnia and Herzegovina', value: 3845 },
    { name: 'Belarus', value: 9491 },
    { name: 'Belize', value: 308 },
    { name: 'Bermuda', value: 64 },
    { name: 'Bolivia', value: 716 },
    { name: 'Brazil', value: 195210 },
    { name: 'Brunei', value: 27 },
    { name: 'Bhutan', value: 716 },
    { name: 'Botswana', value: 1969 },
    { name: 'Central African Rep.', value: 4349 },
    { name: 'Canada', value: 34126 },
    { name: 'Switzerland', value: 7830 },
    { name: 'Chile', value: 17150 },
    { name: 'China', value: 1359821 },
    { name: "Côte d'Ivoire", value: 60508 },
    { name: 'Cameroon', value: 20624 },
    { name: 'Dem. Rep. Congo', value: 62191 },
    { name: 'Congo', value: 3573 },
    { name: 'Colombia', value: 46444 },
    { name: 'Costa Rica', value: 4669 },
    { name: 'Cuba', value: 11281 },
    { name: 'Northern Cyprus', value: 1 },
    { name: 'Cyprus', value: 1103 },
    { name: 'Czech Republic', value: 10553 },
    { name: 'Germany', value: 83017 },
    { name: 'Djibouti', value: 834 },
    { name: 'Denmark', value: 5550 },
    { name: 'Dominican Republic', value: 10016 },
    { name: 'Algeria', value: 37062 },
    { name: 'Ecuador', value: 15001 },
    { name: 'Egypt', value: 78075 },
    { name: 'Eritrea', value: 5741 },
    { name: 'Spain', value: 46182 },
    { name: 'Estonia', value: 1298 },
    { name: 'Ethiopia', value: 87095 },
    { name: 'Finland', value: 5367 },
    { name: 'Fiji', value: 860 },
    { name: 'Falkland Islands', value: 49 },
    { name: 'France', value: 63230 },
    { name: 'Gabon', value: 1556 },
    { name: 'United Kingdom', value: 62066 },
    { name: 'Georgia', value: 4388 },
    { name: 'Ghana', value: 24262 },
    { name: 'Eq. Guinea', value: 10876 },
    { name: 'Guinea', value: 10876 },
    { name: 'Gambia', value: 1680 },
    { name: 'Guinea Bissau', value: 10876 },
    { name: 'Equatorial Guinea', value: 696 },
    { name: 'Greece', value: 11109 },
    { name: 'Greenland', value: 56 },
    { name: 'Guatemala', value: 14341 },
    { name: 'French Guiana', value: 231 },
    { name: 'Guyana', value: 786 },
    { name: 'Honduras', value: 7621 },
    { name: 'Croatia', value: 4338 },
    { name: 'Haiti', value: 9896 },
    { name: 'Hungary', value: 10014 },
    { name: 'Indonesia', value: 240676 },
    { name: 'India', value: 1205624 },
    { name: 'Ireland', value: 4467 },
    { name: 'Iran', value: 240676 },
    { name: 'Iraq', value: 30962 },
    { name: 'Iceland', value: 318 },
    { name: 'Israel', value: 7420 },
    { name: 'Italy', value: 60508 },
    { name: 'Jamaica', value: 2741 },
    { name: 'Jordan', value: 6454 },
    { name: 'Japan', value: 127352 },
    { name: 'Kazakhstan', value: 15921 },
    { name: 'Kenya', value: 40909 },
    { name: 'Kyrgyzstan', value: 5334 },
    { name: 'Cambodia', value: 14364 },
    { name: 'South Korea', value: 51452 },
    { name: 'Kosovo', value: 97 },
    { name: 'Kuwait', value: 2991 },
    { name: 'Laos', value: 6395 },
    { name: 'Lebanon', value: 4341 },
    { name: 'Liberia', value: 3957 },
    { name: 'Libya', value: 6040 },
    { name: 'Sri Lanka', value: 20758 },
    { name: 'Lesotho', value: 2008 },
    { name: 'Lithuania', value: 3068 },
    { name: 'Luxembourg', value: 507 },
    { name: 'Latvia', value: 2090 },
    { name: 'Morocco', value: 31642 },
    { name: 'Moldova', value: 103 },
    { name: 'Madagascar', value: 21079 },
    { name: 'Mexico', value: 117886 },
    { name: 'Macedonia', value: 507 },
    { name: 'Mali', value: 13985 },
    { name: 'Myanmar', value: 51931 },
    { name: 'Montenegro', value: 620 },
    { name: 'Mongolia', value: 2712 },
    { name: 'Mozambique', value: 23967 },
    { name: 'Mauritania', value: 3609 },
    { name: 'Malawi', value: 15013 },
    { name: 'Malaysia', value: 28275 },
    { name: 'Namibia', value: 2178 },
    { name: 'New Caledonia', value: 246 },
    { name: 'Niger', value: 15893 },
    { name: 'Nigeria', value: 159707 },
    { name: 'Nicaragua', value: 5822 },
    { name: 'Netherlands', value: 16615 },
    { name: 'Norway', value: 4891 },
    { name: 'Nepal', value: 26846 },
    { name: 'New Zealand', value: 4368 },
    { name: 'Oman', value: 2802 },
    { name: 'Pakistan', value: 173149 },
    { name: 'Panama', value: 3678 },
    { name: 'Peru', value: 29262 },
    { name: 'Philippines', value: 93444 },
    { name: 'Papua New Guinea', value: 6858 },
    { name: 'Poland', value: 38198 },
    { name: 'Puerto Rico', value: 3709 },
    { name: 'North Korea', value: 1 },
    { name: 'Portugal', value: 10589 },
    { name: 'Paraguay', value: 6459 },
    { name: 'Qatar', value: 1749 },
    { name: 'Romania', value: 21861 },
    { name: 'Russia', value: 21861 },
    { name: 'Rwanda', value: 10836 },
    { name: 'Western Sahara', value: 514 },
    { name: 'Saudi Arabia', value: 27258 },
    { name: 'Sudan', value: 35652 },
    { name: 'S. Sudan', value: 9940 },
    { name: 'Senegal', value: 12950 },
    { name: 'Solomon Islands', value: 526 },
    { name: 'Sierra Leone', value: 5751 },
    { name: 'El Salvador', value: 6218 },
    { name: 'Somaliland', value: 9636 },
    { name: 'Somalia', value: 9636 },
    { name: 'Republic of Serbia', value: 3573 },
    { name: 'Suriname', value: 524 },
    { name: 'Slovakia', value: 5433 },
    { name: 'Slovenia', value: 2054 },
    { name: 'Sweden', value: 9382 },
    { name: 'Swaziland', value: 1193 },
    { name: 'Syria', value: 7830 },
    { name: 'Chad', value: 11720 },
    { name: 'Togo', value: 6306 },
    { name: 'Thailand', value: 66402 },
    { name: 'Tajikistan', value: 7627 },
    { name: 'Turkmenistan', value: 5041 },
    { name: 'East Timor', value: 10016 },
    { name: 'Trinidad and Tobago', value: 1328 },
    { name: 'Tunisia', value: 10631 },
    { name: 'Turkey', value: 72137 },
    { name: 'Tanzania', value: 44973 },
    { name: 'Uganda', value: 33987 },
    { name: 'Ukraine', value: 46050 },
    { name: 'Uruguay', value: 3371 },
    { name: 'United States', value: 2526 },
    { name: 'Uzbekistan', value: 27769 },
    { name: 'Venezuela', value: 236 },
    { name: 'Vietnam', value: 89047 },
    { name: 'Vanuatu', value: 236 },
    { name: 'West Bank', value: 13 },
    { name: 'Yemen', value: 22763 },
    { name: 'South Africa', value: 51452 },
    { name: 'Zambia', value: 13216 },
    { name: 'Zimbabwe', value: 13076 },
  ];

  const maxZoomLevel = 5;
  const minZoomLevel = 1;

  if ($userByLocationMap) {
    const userOptions = utils.getData($userByLocationMap, 'options');
    const chart = window.echarts.init($userByLocationMap);

    const getDefaultOptions = () => ({
      tooltip: {
        trigger: 'item',
        padding: [7, 10],
        backgroundColor: utils.getGrays()['100'],
        borderColor: utils.getGrays()['300'],
        textStyle: { color: utils.getColors().dark },
        borderWidth: 1,
        transitionDuration: 0,
        formatter: (params) =>
          `<strong>${params.data?.name} :</strong> ${params.data?.value}`,
      },

      visualMap: {
        show: false,
        min: 800,
        max: 50000,
        inRange: {
          color: [
            utils.getColors().primary,
            utils.rgbaColor(utils.getColors().primary, 0.8),
            utils.rgbaColor(utils.getColors().primary, 0.6),
            utils.rgbaColor(utils.getColors().primary, 0.4),
            utils.rgbaColor(utils.getColors().primary, 0.2),
          ].reverse(),
        },
      },
      series: [
        {
          type: 'map',
          map: 'world',
          data,
          roam: 'move',

          scaleLimit: {
            min: minZoomLevel,
            max: maxZoomLevel,
          },
          left: 0,
          right: 0,
          label: {
            show: false,
          },
          itemStyle: {
            borderColor: utils.getGrays()['300'],
          },
          emphasis: {
            label: {
              show: false,
            },
            itemStyle: {
              areaColor: utils.getColor('warning'),
            },
          },
        },
      ],
    });

    echartSetOption(chart, userOptions, getDefaultOptions);

    let zoomLevel = 1;

    document
      .querySelector('.user-by-location-map-zoom')
      ?.addEventListener('click', () => {
        if (zoomLevel < maxZoomLevel) {
          zoomLevel += 1;
        }
        chart.setOption({
          series: {
            zoom: zoomLevel,
          },
        });
      });

    document
      .querySelector('.user-by-location-map-zoomOut')
      ?.addEventListener('click', () => {
        if (zoomLevel > minZoomLevel) {
          zoomLevel -= 1;
        }
        chart.setOption({
          series: {
            zoom: zoomLevel,
          },
        });
      });
  }
};

export default userByLocationInit;
