import React from "react";
import LogoRimac from "@/assets/images/logo.svg";
import IconPhone from "@/assets/icons/icon_phone.svg";
import "./header.scss";

export default function Header() {
  return (
    <header>
      <div>
        <img src={LogoRimac} alt="logo rimac" height={16} width={96} />
        <div className="info">
          <a href="#" rel="noopener noreferrer" className="info_suggestion text_desk">
            ¿Tienes alguna duda?
          </a>
          <a href="tel:(01) 411 6001" className="info_phone"> 
            <img src={IconPhone} alt='icon phone' height={20} width={20} />
            <span className='text_desk'> (01) 411 6001 </span>
            <span className='text_mobile'> Llámanos </span>
          </a>
        </div>
      </div>
    </header>
  );
}

export function HeaderContainer(){
  return(
    <div className='header_container'/>
  )
}