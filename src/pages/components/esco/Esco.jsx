import "./esco.css";
import img1 from "../../../assets/images/esco.png";

const Esco = () => {
  return (
    <>
      <div className="learn-more">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-sm-10">
            <div className="learn-more-sec">
              <p>TOI Now Offers Free Virtual Care for Orthopaedic Injuries</p>
              <button className="mb-2">Click Here to Learn More</button>
            </div>
          </div>
        </div>
      </div>

      <section className="esco-sec">
        <div className="wraper">
          <div className=" esco-content">
          
              <div className="esco-text mt-4">
                <h2 className="mb-4">Esco <span>Orthopaedic</span> Institute</h2>
                <h3 className="mb-4">
                  Southern Arizona's Largest and Most Advanced <br /> Multi-Specialty
                  Orthopaedic Group
                </h3>
                <p className="esco-pera">
                  Since 1994, the Board-certified physicians of <br /> Esco Orthopaedic
                  Institute have been setting the highest <br /> standard for
                  orthopaedic care in Southern Arizona. Our goal <br /> has been to
                  consistently deliver world-class care and <br /> successful outcomes.
                  Almost three decades later, we have <br /> grown into the largest and
                  most comprehensive, private <br /> orthopaedic practice in the Esco
                  area.
                </p>
              </div>
            
            <div>
              <div className="esco-image">
                <img src={img1} alt="Esco Orthopaedic" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Esco;