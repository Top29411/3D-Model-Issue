import * as OV from 'online-3d-viewer';                                                                                     
import React, {  useState, useEffect } from 'react';
const ThreeDOnline=(animation)=>{


    useEffect(()=>{
        OV.SetExternalLibLocation ('libs'); 
        OV.Init3DViewerElements (); 
      
    },[]) ;

    return  (
        <div className="online_3d_viewer"
            style={{width:'100%' , height:'80vh'}}
            model={animation}
        >
        </div>
    ) 
}

export default ThreeDOnline ;