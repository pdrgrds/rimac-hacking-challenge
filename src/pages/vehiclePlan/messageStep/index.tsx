import React from "react"
import { HeaderContainer } from "@/components/header/header"
import Footer from "@/components/footer/footer"
import ImageContent from "@/assets/images/image-message-step.svg"
import ImageContentMobile from "@/assets/images/image-message-step-mobile.svg"
import "./message.scss"
import "./message.min.scss"

export default function MessageSuccess() {
  return (
    <>
      <HeaderContainer />
      <div className="container_message container_custom">
        <section className="section_background">
          <img
            src={ImageContent}
            alt="assitant rimac"
            className="image_content"
            loading="lazy"
          />
          <img
            src={ImageContentMobile}
            alt="assitant rimac"
            className="image_mobile"
            loading="lazy"
          />
        </section>
        <section className="section_message">
          <div className="content_message">
            <h3>¡Te damos la bienvenida!</h3>
            <h3>Cuenta con nosotros para proteger tu vehículo</h3>
            <p>
              Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a
              tu correo:
              <span>joel.sanchez@gmail.com</span>
            </p>
            <a className='btn-default' href="#" rel="noopener noreferrer"> CÓMO USAR MI SEGURO </a>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
