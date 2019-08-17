import React from 'react';
import * as d3 from 'd3';

function Animation(props) {
  const numNodes = 300,
    width = window.innerWidth,
    height = window.innerHeight;
  
  const nodes = d3.range(numNodes).map(function(d) {
    let random = Math.random();
    return {radius: random * 2.5 + .5, color: `rgba(255,255,255, ${random})` }
  });

  const simulation = d3.forceSimulation(nodes)
    .force('charge', d3.forceManyBody().strength(-35))
    .force('center', d3.forceCenter(width / 2, height / 2))
    .force('collision', d3.forceCollide().radius(function(d) {
      return d.radius * 3
    })).on('tick', ticked);
  
  d3.select('.main')
    .on('mousemove', function() {
      const position = d3.mouse(this);

      d3.select('svg')
        .selectAll('circle')
        .attr('transform', function(d) {
          return `translate(${position[0] / width * -50}, ${position[1] / height * -50})`;
        });
    });
  
  setInterval(function() {
    const nodeIndex = Math.floor(Math.random() * numNodes);

    d3.select('svg')
      .selectAll('circle')
      .filter(function(d) {
        return d.index === nodeIndex;
      })
      .transition()
        .duration(800)
        .attr('fill', 'rgba(255,255,255, 0')
      .transition()
        .duration(800)
        .attr('fill', function(d) { return d.color });
  }, 30);
  
  function ticked() {
    var u = d3.select('svg')
      .selectAll('circle')
      .data(nodes);
  
    u.enter()
      .append('circle')
      .attr('r', function(d) {
        return d.radius
      })
      .attr('fill', function(d) {
        return d.color;
      })
      .merge(u)
      .attr('cx', function(d) {
        return d.x
      })
      .attr('cy', function(d) {
        return d.y
      });
  
    u.exit().remove();
  }

  return <svg className="animations"></svg>
}

export default Animation;