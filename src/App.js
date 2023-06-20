import { React,useState } from "react";
import "./style.css";
import play from "./play"
function App2(t,sett,nb,bool,setbool,setwin){
    
    const updatedArray = [...t];
    if(updatedArray[nb]!="X" && updatedArray[nb]!="O"){
    if(bool){
        updatedArray[nb] = "X";
        sett(updatedArray);
        setbool(!bool)
  
    }
    else{
        updatedArray[nb] = "O";
        sett(updatedArray);
        setbool(!bool)
    }
    play(updatedArray,setwin)}
    
}
function App(){
    const [t,sett]=useState(Array(9))
    var [bool,setbool] =useState(true)
    var [win,setwin]=useState("");
    
    if(win==""){
    return(<div className="zebi">
        <h1 style={{marginLeft:"65px"}}>tic-tac-toe</h1>
    <div className="grid-container">
      <div className="grid-item" onClick={()=>{App2(t,sett,0,bool,setbool,setwin)}}>{t[0]}</div>
      <div className="grid-item" onClick={()=>{App2(t,sett,1,bool,setbool,setwin)}}>{t[1]}</div>
      <div className="grid-item" onClick={()=>{App2(t,sett,2,bool,setbool,setwin)}}>{t[2]}</div>
      <div className="grid-item"onClick={()=>{App2(t,sett,3,bool,setbool,setwin)}}>{t[3]}</div>
      <div className="grid-item"onClick={()=>{App2(t,sett,4,bool,setbool,setwin)}}>{t[4]}</div>
      <div className="grid-item"onClick={()=>{App2(t,sett,5,bool,setbool,setwin)}}>{t[5]}</div>
      <div className="grid-item"onClick={()=>{App2(t,sett,6,bool,setbool,setwin)}}>{t[6]}</div>
      <div className="grid-item"onClick={()=>{App2(t,sett,7,bool,setbool,setwin)}}>{t[7]}</div>
      <div className="grid-item"onClick={()=>{App2(t,sett,8,bool,setbool,setwin)}}>{t[8]}</div>
    </div>
    </div>);}
    else{
        return(<div><h1>{win}</h1><button onClick={()=>{setwin("");sett(Array(9))}}>play again</button></div>);
    }
}
export default App