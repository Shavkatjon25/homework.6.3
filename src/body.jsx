import {useState} from 'react'





function Id(k){
   return k.length > 0? k[k.length-1].id+1 : 1;
}



function Body() {



    const [qiymat , fun]=useState([]);
    const [val , fan]=useState();
    const [izx, ix]=useState();
    const [belgi , qosh]=useState([])
    
    let Matn={
        id:0,
        nom:"",
        iz:"",
        copleted:false
    };
    function Nom1(e){
        fan(e.target.value);
      
        
        
    }
    function Nom2(e){
        ix(e.target.value)
       
    
    }
    const Submit = e=>{
        e.preventDefault();
        Matn.id=Id(qiymat);
        Matn.nom=izx;
        Matn.iz=val;
        const copy=[...qiymat]
        copy.push(Matn);
        fun(copy)
        console.log(qiymat);
        fan(``);
        ix(``);
    }

    function Och(x){
        const cpy = qiymat.filter(el=> el.id !== x ? el:"" );
        fun(cpy);
        const bel=[...belgi];
        let tf=false;
        let index=-1;
        let indek=null;
        bel.forEach(element => {
            index++;
            if (element==x) {
                tf=true
                indek=index
            }
        });
        if(tf){
         bel.splice(indek, 1)
        };
        qosh(bel);

    }


function Bosdi(z){
    const bel=[...belgi];
    let tf=false;
    let index=-1;
    let indek=null;
    bel.forEach(element => {
        index++;
        if (element==z) {
            tf=true
            indek=index
        }
    });
    if(!tf){
        bel.push(z);
    }else bel.splice(indek, 1);
    qosh(bel);
}

function qayta(m){
    qiymat.forEach(element=>{
        if(element.id==m){
            fan(element.nom);
            ix(element.iz);
        }
    })
    Och(m);
}


  return (
    <div>
      <div className="flex flex-col gap-5 justify-center items-center">
            <h1 className="font-bold text-[24px] text-white">Todo App</h1>
            <form className="flex gap-[10px]" onSubmit={Submit}>
                <input type="text" onChange={e=>Nom1(e)} value={val}  placeholder="Nomni kiriting" className="input input-bordered input-info w-full max-w-xs"/>
                <input type="text" onChange={e=>Nom2(e)} value={izx}  placeholder="Bayonati (ixtiyoriy)" className="input input-bordered input-info w-full max-w-xs" />
                <button className="btn btn-primary" >Kiritish</button>
            </form>
   
        </div>





<div className='w -[600px]  overflow-auto h-[400px] bg-gradient-to-r from-blue-300 to-green-200 flex flex-col m-5 gap-2 rounded-md p-4'>


{qiymat.map(e   =>{
        
        
        return( 


            <div className=" border border-indigo-600 rounded-lg">
            <table className="table">
                <tr>
                    <th>
                    <label onClick={()=>Bosdi(e.id)} key={e.id}>
                        <input type="checkbox" className="checkbox"/>
                    </label>
                    </th>
                    <td>
                    <div className="flex items-center gap-3 ">
                        <div>
                        <div className="font-bold w-[300px] h-auto" >{e.iz}</div>
                        <div className="text-sm opacity-50 w-[300px] h-auto">{e.nom}</div>
                        </div>
                    </div>
                    </td>
                    <button className="btn btn-ghost btn-xl mt-1" key={e.id} onClick={()=>qayta(e.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(0,0,0,0.67)"><path d="M5 18.89H6.41421L15.7279 9.57627L14.3137 8.16206L5 17.4758V18.89ZM21 20.89H3V16.6473L16.435 3.21231C16.8256 2.82179 17.4587 2.82179 17.8492 3.21231L20.6777 6.04074C21.0682 6.43126 21.0682 7.06443 20.6777 7.45495L9.24264 18.89H21V20.89ZM15.7279 6.74785L17.1421 8.16206L18.5563 6.74785L17.1421 5.33363L15.7279 6.74785Z"></path></svg>
                    </button>
                    <button className="btn btn-ghost btn-xl mt-1" key={e.id} onClick={()=>{Och(e.id)}} >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(0,0,0,0.56)"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM13.4142 13.9997L15.182 15.7675L13.7678 17.1817L12 15.4139L10.2322 17.1817L8.81802 15.7675L10.5858 13.9997L8.81802 12.232L10.2322 10.8178L12 12.5855L13.7678 10.8178L15.182 12.232L13.4142 13.9997ZM9 4V6H15V4H9Z"></path></svg>
                    </button>
                </tr>        
            </table>
            </div>


       
)})}

     </div>
     <div className='text-white flex'>
        <p className='block w-[200px]'>Kiritlganlar soni: {qiymat.length}</p>
        <p className='block w-[200px]'>Belgilanganlar soni: {belgi.length}</p>
        <p className='block w-[200px]'>Belgilanmaganlar soni: {qiymat.length-belgi.length}</p>
    </div>


    </div>

  )
}



// import React, { useState } from 'react';

// const Body = () => {
//   const [inputData, setInputData] = useState('');

//   const handleInputChange = (event) => {
//     setInputData(event.target.value);
//   };

//   const handleButtonClick = () => {
//     setInputData('');
//   };

//   return (
//     <div>
//       <input type="text" value={inputData} autoFocus onChange={handleInputChange} />
//       <button onClick={handleButtonClick} className='text-[#fff]'>O'chirish</button>
//     </div>
//   );
// };

export default Body

