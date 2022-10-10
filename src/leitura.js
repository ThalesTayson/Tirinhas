import {React, useState, useEffect } from "react"
import MyPage from './myPage';

var timeout = null;

function Leitura(props){
    //Arrays
    const sstr_btn = ['Ler', 'Lendo...'];
    const pages = ['Capa', 'Page 1', 'Page 2', 'Page 3'];
    const pagesAddress = ['capa.png', 'page1.png', 'page2.png', 'page3.png'];
    
    //componentes
    const [str_btn,setstr_btn]=useState(sstr_btn[0]);
    const [page,setpage]=useState(pages[0]);
    const [pageAddress,setpageAddress]=useState(pagesAddress[0]);

    useEffect(()=>{
        if(sstr_btn.indexOf(str_btn)){
            timeout = setTimeout(()=>{
                if (pages.indexOf(page) === 3) {
                    setpageAddress(pagesAddress[0]);
                    setpage(pages[0]);
                    setstr_btn(sstr_btn[0]);
                } else {
                    setpage(pages[pages.indexOf(page) + 1]);
                    setpageAddress(pagesAddress[pages.indexOf(page) + 1]);
                }
            },5000);
        } else {
            
            if (timeout) clearTimeout(timeout);
            
            timeout = null;

        }
    });
    return(
        <>  
            <header>
                <button className="button btn btn-outline-primary" onClick={()=>{setstr_btn(sstr_btn[1])}}>{str_btn}</button>
            </header>
            <MyPage address={pageAddress}/>
            <footer>
                <div>{page}</div>
            </footer>
        </>
    )
}

export default Leitura;
