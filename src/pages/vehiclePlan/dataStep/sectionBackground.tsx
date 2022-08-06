import ImageContent from "@/assets/images/image-data-step.svg";
import ImageContentMobile from "@/assets/images/image-data-step-mobile.svg";

export default function SectionBackground() {
  console.log('background')
  return (
    <section className="section_background">
      <div className="background_content">
        <img src={ImageContent} alt="image girl" className="image_content" loading="lazy"/>
        <div className="desc_content">
          <p>!NUEVO!</p>
          <h1>
            Seguro <span> Vehicular </span> <span> Tracking </span>
          </h1>
          <span>Cuentanos donde le harás seguimiento a tu seguro</span>
        </div>
        <img src={ImageContentMobile} alt="image girl mobile" className='image_content_mobile' loading='lazy' />
      </div>
      <div className="author">
        <span>© 2021 RIMAC Seguros y Reaseguros.</span>
      </div>
    </section>
  );
}
