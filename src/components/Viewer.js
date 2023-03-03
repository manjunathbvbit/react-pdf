import { useEffect, useRef, useState } from 'react';

import * as pdfjsLib from 'pdfjs-dist';

export const Viewer = (props) => {
    // const [scale, setScale] = useState(1.5);

    // const ZoomIn = () => {
    //   setScale(scale - 0.25)
    // }
    // const ZoomOut = () => {
    //   setScale(scale + 0.25)
    // }

    pdfjsLib.GlobalWorkerOptions.workerSrc ='./pdf.worker.js';
    useEffect(() => {
        const url = '/sample.pdf';
        const loadingTask = pdfjsLib.getDocument(url);
        (async () => {
            
            const pdf = await loadingTask.promise;
          const page = await pdf.getPage(1);
          var scale = props.scale;
   console.log("Sca: ", scale)
          const viewport = page.getViewport({ scale });
        
          const outputScale = window.devicePixelRatio || 1;
      
        // const canvas = canvasRef.current;
          const canvas = document.getElementById("the-canvas");
          const context = canvas.getContext("2d");
      
          canvas.width = Math.floor(viewport.width * outputScale);
          canvas.height = Math.floor(viewport.height * outputScale);
          canvas.style.width = Math.floor(viewport.width) + "px";
          canvas.style.height = Math.floor(viewport.height) + "px";
      
          const transform = outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : null;
    
          const renderContext = {canvasContext: context, transform, viewport};
          page.render(renderContext);
        })();
    }, [props.scale])

    return (
        <div>
            {/* <div className="toolbar" >
                <button onClick={ZoomIn}>-</button>
                <button onClick={ZoomOut}>+</button>
            </div> */}
            <br/>
            <canvas id="the-canvas" style={{border: "1px solid black", direction: "ltr",}}></canvas>
        </div>
    )
}