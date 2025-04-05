import "./esco.css";
import img1 from "../../../assets/images/esco.png";
const Esco = () => {
  return (
    <>
      <div className="learn-more">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="learn-more-sec">
              <p>TOI Now Offers Free Virtual Care for Orthopaedic Injuries</p>
              <button>Click Here to Learn More</button>
            </div>
          </div>
        </div>
      </div>

      <section className="esco-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="esco-content">
                <h2 className="mb-4">Esco <span>Orthopaedic</span> Institute</h2>
                <h3 className="mb-4">
                  Southern Arizona’s Largest and Most Advanced Multi-Specialty
                  Orthopaedic Group
                </h3>
                <p>
                  Since 1994, the Board-certified physicians of Esco Orthopaedic
                  Institute have been setting the highest standard for
                  orthopaedic care in Southern Arizona. Our goal has been to
                  consistently deliver world-class care and successful outcomes.
                  Almost three decades later, we have grown into the largest and
                  most comprehensive, private orthopaedic practice in the Esco
                  area.
                </p>
              </div>
            </div>
            <div className="col-md-6">
                <div>
                    <img src={img1} alt="image" />
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Esco;
