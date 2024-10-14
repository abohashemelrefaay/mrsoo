import React,{useState} from 'react';
import './navbar.css';

const Navbar = () => {
  const [classchange,setclasschange]=useState("links");
  document.addEventListener("click",(e)=>{
    if(e.target!== document.querySelector(".newclass") && e.target !== document.querySelector(".icon") ){
      setclasschange("links")
    }
  });
  const handel_click_icon=()=>{
    if(classchange==="links"){
      setclasschange("newclass")
    }else if(classchange==="newclass"){
      setclasschange("links")
    }
  }
  return (
    <div className='navbar'>
    
      <span className="icon" onClick={ handel_click_icon}>
              <span></span>
              <span></span>
              <span></span>
           </span>
      <div className="container">
       <div className="nav_cover">
        <div className="logo">Mrsool</div>
        <ul className={classchange}>
          <li><a  href='/'>Home</a></li>
          <li><a href='/About_Us'>About Us</a></li>
          <li><a href='/Services'>Services </a></li>
          <li><a href='/Our_mission'>Our mission</a></li>
          <li><a href='/Bills'>Bills</a></li>
        </ul>
      <form className='login'>
        <input type="submit" onClick={(o)=>o.preventDefault()} className='login_submit' value="Login as Patient" />
        <input type="submit" onClick={(o)=>o.preventDefault()} className='login_submit' value="Login as Dentist" />
      </form>
       </div>

      </div>
    </div>
  );
}

export default Navbar;
