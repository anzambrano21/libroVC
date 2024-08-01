import React from 'react';
import { createRoot } from 'react-dom/client'

export default function Home(){
    return(
        <div>ESTAMOS EN CODEA.APP</div>
    );
}

if(document.getElementById('codeareact')){
    createRoot(document.getElementById('codeareact')).render(<Home/>)
}