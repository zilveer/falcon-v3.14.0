import * as d3 from 'd3';
import utils from '../../utils';

/* -------------------------------------------------------------------------- */
/*                           Trending Keywords                                */
/* -------------------------------------------------------------------------- */

const trendingKeywordsInit = () => {
  const $d3TrendingKeywords = document.querySelector('.d3-trending-keywords');

  if ($d3TrendingKeywords) {
    const width = 960;
    const height = 960;
    const itemsSpacing = 30;

    const svg = d3.select('.d3-trending-keywords-svg');
    const tooltip = d3.select('.d3-trending-keywords-tooltip');
    const tooltipDot = tooltip.select('.d3-tooltip-dot');
    const tooltipName = tooltip.select('.d3-tooltip-name');
    const tooltipValue = tooltip.select('.d3-tooltip-value');

    const tooltipStyles = {
      backgroundColor: utils.getColor('gray-100'),
      tooltipNameColor: utils.getColor('gray-700'),
      tooltipValueColor: utils.getColor('gray-700'),
    };

    const labelStyles = {
      fill: '#ffffff',
      fontSize: '1.8rem',
    };

    const trendingKeywordsData = [
      { name: 'Blockchain', value: 160, color: '#2A7BE4' },
      { name: 'NFT', value: 20, color: '#1956A6' },
      { name: 'HTML', value: 90, color: '#195099' },
      { name: 'Crypto', value: 57, color: '#2A7BE4' },
      { name: 'Photoshop', value: 117, color: '#2A7BE4' },
      { name: 'UX', value: 20, color: '#1956A6' },
      { name: 'AWS', value: 90, color: '#195099' },
      { name: '3D', value: 33, color: '#9DBFEB' },
      { name: 'Writing', value: 117, color: '#2A7BE4' },
      { name: 'sql', value: 20, color: '#1956A6' },
      { name: 'Blender', value: 90, color: '#195099' },
      { name: 'UI/UX', value: 33, color: '#9DBFEB' },
      { name: 'Blockchain', value: 117, color: '#2A7BE4' },
      { name: 'css', value: 20, color: '#1956A6' },
      { name: 'Marketing', value: 90, color: '#195099' },
      { name: 'Meta', value: 33, color: '#9DBFEB' },
      { name: 'js', value: 12, color: '#0F67D9' },
      { name: 'FOREX', value: 66, color: '#7FA5D5' },
      { name: 'UI', value: 33, color: '#8ABBFB' },
      { name: 'Vector', value: 56, color: '#85B6F5' },
      { name: 'CAD', value: 28, color: '#6486B4' },
      { name: 'Python', value: 66, color: '#2A7BE4' },
      { name: 'Adobe', value: 66, color: '#68A0E9' },
      { name: 'C#', value: 20, color: '#385780' },
      { name: 'Branding', value: 88, color: '#74A2DE' },
      { name: 'Bitcoin', value: 80, color: '#4E7AB4' },
      { name: 'AI', value: 34, color: '#71AFFF' },
    ];

    const generateChart = (data) => {
      const bubble = (bubbleData) =>
        d3.pack().size([width, height]).padding(itemsSpacing)(
          d3.hierarchy({ children: bubbleData }).sum((d) => d.value)
        );

      tooltip.style('visibility', 'hidden');

      svg
        .attr('width', '100%')
        .attr('height', '100%')
        .attr('viewBox', `-20 10 ${width} ${height}`);

      const root = bubble(data);

      const node = svg
        .selectAll()
        .data(root.children)
        .enter()
        .append('g')
        .style('cursor', 'pointer')
        .style('pointer-events', 'all')
        .attr('text-anchor', 'middle')
        .on('mousemove', (e) =>
          tooltip
            .style('top', `${e.clientY - 40}px`)
            .style('left', `${e.clientX - 40}px`)
        )
        .attr('transform', (d) => `translate(${d.x}, ${d.y})`);

      const circle = node
        .append('circle')
        .style('fill', (d) => d.data.color)
        .on('mouseover', (e, d) => {
          d3.select(e.target)
            .transition()
            .ease(d3.easeExpInOut)
            .duration(200)
            .attr('r', (diagram) => diagram.r * 1.1);
          tooltip
            .style('visibility', 'visible')
            .style('z-index', '100000')
            .style('background-color', tooltipStyles.backgroundColor)
            .style('border', `1px solid ${d.data.color}`);
          tooltipDot.style('background-color', d.data.color);
          tooltipName
            .text(d.data.name)
            .style('color', tooltipStyles.tooltipNameColor);
          tooltipValue
            .text(d.data.value)
            .style('color', tooltipStyles.tooltipValueColor);
        })
        .on('mouseout', (e) => {
          d3.select(e.target)
            .transition()
            .ease(d3.easeExpInOut)
            .duration(200)
            .attr('r', (d) => d.r);
          tooltip.style('visibility', 'hidden');
        });

      const label = node
        .append('text')
        .style('fill', labelStyles.fill)
        .style('font-size', labelStyles.fontSize)
        .style('pointer-events', 'none')
        .style('opacity', 0)
        .attr('dy', '.35em')
        .text((d) => d.data.name);

      node.transition().ease(d3.easeExpInOut).duration(1000);

      circle
        .transition()
        .ease(d3.easeExpInOut)
        .duration(1000)
        .attr('r', (d) => d.r);

      label
        .transition()
        .delay(400)
        .ease(d3.easeExpInOut)
        .duration(2000)
        .style('opacity', 1);
    };

    generateChart(trendingKeywordsData);
  }
};

export default trendingKeywordsInit;
