import React, { useRef, useEffect } from 'react';
import Draw from './Draw';


export const ShowYearGraphCanvas = ( { covidData, covidData1, covidData2 } ) => {
    

    const graphHeight = 3;

    let isAllDownloaded = true;
    const dateStorage = 'datum';

    const canvasRef  = useRef(null);
    const canvas_pointerRef  = useRef(null);
    
    const canvas1Ref  = useRef(null);
    const canvas1_pointerRef  = useRef(null);
    
    const canvas2Ref  = useRef(null);
    const canvas2_pointerRef  = useRef(null);

        // start AJAX async
        const loadPocasiAsync = async () => {

            const canvas = canvasRef.current;
            const canvas_pointer = canvas_pointerRef.current;

            const canvas1 = canvas1Ref.current;
            const canvas1_pointer = canvas1_pointerRef.current;

            const canvas2 = canvas2Ref.current;
            const canvas2_pointer = canvas2_pointerRef.current;

            const allCanvasSize = () => {
                const canvasSize = ( can, can_pointer, size ) => {
                    const clientWidth  = document.documentElement.clientWidth;
                    const clientHeight = document.documentElement.clientHeight;
                    //can.width  = clientWidth > 724 ? 724 : clientWidth;
                    can.width  = clientWidth;
                    can.height = clientHeight / size;
                    //can.height = 300;
                    can_pointer.width  = clientWidth;
                    can_pointer.height = clientHeight / size;
                }
            
                canvasSize(canvas , canvas_pointer , graphHeight);
                canvasSize(canvas1, canvas1_pointer, graphHeight);
                canvasSize(canvas2, canvas2_pointer, graphHeight);

            }

            allCanvasSize();

            const hladina     = new Draw(
                [ canvas, canvas_pointer, dateStorage, covidData, isAllDownloaded, null ]
                , [ 'pozitivni_celkem', 'lime', 'area', 2, 'pozitivni_celkem > 65let', 1, [] ]
                , [ 'pozitivni_dokoncene_ockovani_relativni_pocet' , 'orange' , 'line', 1, 'pozitivni_dokoncene_ockovani_relativni_pocet > 65 let' , 2, [1] ]
                , [ 'pozitivni_dokoncene_ockovani' , 'red' , 'area', 2, 'pozitivni_dokoncene_ockovani > 65 let' , 1, [] ]
            ); 
        
            const teplota     = new Draw(
                [ canvas1, canvas1_pointer, dateStorage, covidData1, isAllDownloaded, null ]
                , [ 'pozitivni_celkem', 'white', 'area', 2, 'pozitivni_celkem', 1, [] ]
                , [ 'pozitivni_dokoncene_ockovani_relativni_pocet'     , 'yellow' , 'line', 1, 'pozitivni_dokoncene_ockovani_relativni_pocet'     , 2, [1] ]
                , [ 'pozitivni_dokoncene_ockovani'     , 'lime' , 'area', 2, 'pozitivni_dokoncene_ockovani'     , 1, [] ]
            ); 

            const vyleceni     = new Draw(
                [ canvas2, canvas2_pointer, dateStorage, covidData2, isAllDownloaded, null ]
                , [ 'hospitalizovani_celkem'     , 'red'  , 'area', 2, 'hospitalizovani_celkem'     , 1, [] ]
                , [ 'hospitalizovani_dokoncene_ockovani_relativni_pocet', 'lime', 'line', 1, 'hospitalizovani_dokoncene_ockovani_relativni_pocet', 2, [1] ]
                , [ 'hospitalizovani_dokoncene_ockovani', 'yellow', 'area', 1, 'hospitalizovani_dokoncene_ockovani', 1, [] ]
            ); 
            hladina.resizeCanvas();
            teplota.resizeCanvas();
            vyleceni.resizeCanvas();
            

            window.addEventListener('resize', () => {
                // set canvas size
                allCanvasSize();
                // reload graphs
                hladina.resizeCanvas();
                teplota.resizeCanvas();
                vyleceni.resizeCanvas();
            });
        }





    useEffect( () => {
       // load data + show graphs
        loadPocasiAsync();
    }, []);

    return (
        <div id="all-graphs">
            <article id="one-graph" className="one-graph">
                <canvas ref={canvasRef} className="canvas" />
                <canvas ref={canvas_pointerRef} className="canvas_pointer" />
            </article>
            <article id="one-graph" className="one-graph">
                <canvas ref={canvas1Ref} className="canvas" />
                <canvas ref={canvas1_pointerRef} className="canvas_pointer" />
            </article>
            <article id="one-graph" className="one-graph">
                <canvas ref={canvas2Ref} className="canvas" />
                <canvas ref={canvas2_pointerRef} className="canvas_pointer" />
            </article>
        </div>
    )
}