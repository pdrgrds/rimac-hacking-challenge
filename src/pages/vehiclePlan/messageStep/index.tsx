import React, { useContext } from "react"
import { HeaderContainer } from "@/components/header/header"
import Footer from "@/components/footer/footer"
import ImageContent from "@/assets/images/image-message-step.svg"
import ImageContentMobile from "@/assets/images/image-message-step-mobile.svg"
import "./message.scss"
import "./message.min.scss"
import { UserContext } from "@/context/UserContext"
import { StepContext } from "@/context/StepContext"

export default function MessageSuccess() {
  const { user, prices } = useContext(UserContext)
  const { setStep } = useContext(StepContext)
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
              <span onClick={() => alert(JSON.stringify(prices) + JSON.stringify(user)) }>{user.email}</span>
            </p>
            <a className='btn-default' href="#" rel="noopener noreferrer" onClick={() => setStep(1)}> CÓMO USAR MI SEGURO </a>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
