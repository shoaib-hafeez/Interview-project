import "./mission.css";
import missionImg from "../../../assets/images/mission-image/mission.png";

const Mission = () => {
  return (
    <div className='container-fluid mission-main'>
      <div className="mission-header"></div>
      <div className="mission-wraper">
        <div className="mission-content col-md-6 col-12">
          <h2 className="mb-4">Our <span>Mission</span></h2>
          <p>To provide the residents of our communities the highest quality, state-of-the-art and comprehensive orthopaedic care.</p>
          <button>READ MORE</button>
        </div>

        <div className="mission-img col-md-6 col-12">
          <img src={missionImg} alt="Mission Illustration" />
        </div>
      </div>
    </div>
  );
};

export default Mission;