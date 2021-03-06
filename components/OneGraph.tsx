import { useRef, useEffect } from 'react';
import Draw from './Draw';
import oneGraphStyles from '../styles/OneGraph.module.scss'
import { OneGraphType, showGraphType } from './TypeDefinition';

export const OneGraph = ( { graphData }: OneGraphType ) => {

    const graphHeight        = 300;
    const canvasRef          = useRef<HTMLCanvasElement | null>( null );
    const canvas_pointerRef  = useRef<HTMLCanvasElement | null>( null );
    
    const loadPocasiAsync = () => {
        const canvas         = canvasRef.current;
        const canvas_pointer = canvas_pointerRef.current;
        console.log(canvasRef)

        if (canvas && canvas_pointer) {
            const newDraw = new Draw( canvas, canvas_pointer, graphData ); 
            const showGraph: showGraphType = ( canvas, canvas_pointer, graphHeight ) => {
                const clientWidth  = document.documentElement.clientWidth;
                //const clientHeight = document.documentElement.clientHeight;
                canvas.width  = clientWidth;
                canvas.height = graphHeight;
                canvas_pointer.width  = clientWidth;
                canvas_pointer.height = graphHeight;    
                newDraw.graph();
            }
            canvas && canvas_pointer && showGraph(canvas, canvas_pointer, graphHeight)
            window.addEventListener( 'resize', () =>
                canvas && canvas_pointer && showGraph( canvas, canvas_pointer, graphHeight )
                )
        }
    }

    useEffect( loadPocasiAsync, [graphData] );

    return (
        <article className = { oneGraphStyles.allGraphs } >
            <canvas ref = { canvasRef } className = { oneGraphStyles.canvas } />
            <canvas ref = { canvas_pointerRef } className = { oneGraphStyles.canvas_pointer } />
        </article>
    )
}