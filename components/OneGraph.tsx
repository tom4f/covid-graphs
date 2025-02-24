import React, { useRef, useEffect } from 'react';
import Draw from './Draw';
import oneGraphStyles from '../styles/OneGraph.module.scss';
import { OneGraphType } from './TypeDefinition';

export const OneGraph = ({ graphData }: OneGraphType) => {
  const graphHeight = 300;
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvas_pointerRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const canvas_pointer = canvas_pointerRef.current;

    if (!canvas || !canvas_pointer) return;

    const newDraw = new Draw(canvas, canvas_pointer, graphData);

    const showGraph = () => {
      const clientWidth = document.documentElement.clientWidth;
      canvas.width = clientWidth;
      canvas.height = graphHeight;
      canvas_pointer.width = clientWidth;
      canvas_pointer.height = graphHeight;
      newDraw.graph();
    };

    showGraph();

    window.addEventListener('resize', showGraph);
    return () => {
      window.removeEventListener('resize', showGraph);
    };
  }, [graphData]);

  return (
    <article className={oneGraphStyles.allGraphs}>
      <canvas ref={canvasRef} className={oneGraphStyles.canvas} />
      <canvas
        ref={canvas_pointerRef}
        className={oneGraphStyles.canvas_pointer}
      />
    </article>
  );
};
