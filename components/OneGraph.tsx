import React, { useRef, useEffect } from 'react';
import Draw from './Draw';
import { SpecificGraphType, CommonDataWithGetDataFnType } from './OnePage';
import styled from 'styled-components';

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
    <Article>
      <CanvasGraph ref={canvasRef} />
      <CanvasPointer ref={canvas_pointerRef} />
    </Article>
  );
};

export type OneGraphDataWithGetDataFn = {
  common: CommonDataWithGetDataFnType;
  specific: SpecificGraphType;
};

type OneGraphType = {
  graphData: OneGraphDataWithGetDataFn;
};

const Article = styled.article`
  text-align: left;
  background-color: black;

  position: relative;
  left: 0px;
  height: 300px;

  .canvas_pointer {
    background: transparent;
    position: absolute;
    z-index: 2;
  }
`;

const CanvasGraph = styled.canvas`
  background: black;
  position: absolute;
  z-index: 1;
`;

const CanvasPointer = styled.canvas`
  background: transparent;
  position: absolute;
  z-index: 2;
`;
