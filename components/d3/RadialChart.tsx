import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

export default function RadialChart() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Clear previous

    const width = 400;
    const height = 400;
    const centerX = width / 2;
    const centerY = height / 2;
    
    // Create data for concentric circles of dots
    const rings = 5;
    const dotsPerRing = [8, 16, 24, 32, 40];
    const radii = [40, 70, 100, 130, 160];
    const colors = ["#ef4444", "#f97316", "#f59e0b", "#eab308", "#84cc16"]; // Red to Green/Yellow gradient

    const data = [];

    for (let r = 0; r < rings; r++) {
      const radius = radii[r];
      const count = dotsPerRing[r];
      const color = colors[r % colors.length];
      
      for (let i = 0; i < count; i++) {
        const angle = (i / count) * 2 * Math.PI;
        data.push({
          x: centerX + radius * Math.cos(angle),
          y: centerY + radius * Math.sin(angle),
          color: color,
          delay: r * 100 + i * 10 // Staggered animation delay
        });
      }
    }

    // Add dots
    svg.selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", d => d.x)
      .attr("cy", d => d.y)
      .attr("r", 4)
      .attr("fill", d => d.color)
      .attr("opacity", 0)
      .transition()
      .duration(1000)
      .delay(d => d.delay)
      .attr("opacity", 1)
      .on("end", function repeat() {
        // Simple pulsing effect
        d3.select(this)
          .transition()
          .duration(1000 + Math.random() * 1000)
          .attr("r", 6)
          .transition()
          .duration(1000 + Math.random() * 1000)
          .attr("r", 4)
          .on("end", repeat);
      });

  }, []);

  return (
    <svg ref={svgRef} width="100%" height="100%" viewBox="0 0 400 400" className="w-full h-full" style={{ overflow: 'visible' }} />
  );
}