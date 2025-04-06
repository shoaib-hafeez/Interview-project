import "./Orthopatic.css";
import specialtiesImage from "../../../assets/images/banner-images/orthopatic.png";

const Orthopatic = () => {
  return (
    <section className="container-fluid">
      <div className="wraper">
        <div className="specialties-content">
          <div className="specialties-image">
            <img src={specialtiesImage} alt="Orthopaedic Specialties" />
          </div>
          
          <div className="specialties-text">
            <h2>Our Orthopaedic Specialties</h2>
            <p className="intro-text">
              We provide the most comprehensive orthopaedic care available in Southern Arizona. 
              Whether it's orthopaedic surgery, fracture care, imaging, physical therapy, 
              or other orthopaedic treatments, we've got you covered by a team of experts 
              throughout our six locations.
            </p>
            
            <p className="subtitle">We offer care for the following orthopaedic sub-specialties:</p>
            
            <div className="specialties-list">
              <div className="specialty-item">
                <div className="checkbox-icon"></div>
                <span>Elbow, Hand, Shoulder</span>
              </div>
              <div className="specialty-item">
                <div className="checkbox-icon"></div>
                <span>Regenerative Medicine</span>
              </div>
              <div className="specialty-item">
                <div className="checkbox-icon"></div>
                <span>Foot & Ankle</span>
              </div>
              <div className="specialty-item">
                <div className="checkbox-icon"></div>
                <span>Spine</span>
              </div>
              <div className="specialty-item">
                <div className="checkbox-icon"></div>
                <span>General Orthopaedics</span>
              </div>
              <div className="specialty-item">
                <div className="checkbox-icon"></div>
                <span>Sports Medicine</span>
              </div>
              <div className="specialty-item">
                <div className="checkbox-icon"></div>
                <span>Pediatric Orthopaedics</span>
              </div>
              <div className="specialty-item">
                <div className="checkbox-icon"></div>
                <span>Total Joint Replacement</span>
              </div>
              <div className="specialty-item">
                <div className="checkbox-icon"></div>
                <span>Physiatry & Pain Management</span>
              </div>
            </div>
            
            <button className="view-all-btn">VIEW ALL</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Orthopatic;