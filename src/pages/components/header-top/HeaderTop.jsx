import './header-top.css';
import facebok from '../../../assets/images/social-icon/facebook-fill.png';
import insta from '../../../assets/images/social-icon/instagram-fill.png';
import linkdin from '../../../assets/images/social-icon/linkedin-fill.png';
import twitter from '../../../assets/images/social-icon/twitter.png';
import youtube from '../../../assets/images/social-icon/youtube.png';
import { FaUserMd } from 'react-icons/fa';

const HeaderTop = () => {
  return (
    <section className="header-top">
      <div className="container-fluid px-lg-5 px-3">
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-12">
            <div className="top-header-menu">
              <ul>
                <li>Pay my bill</li>
                <li>Refer a patient</li>
                <li>Dme store</li>
                <li>locations</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="top-header-social">
              <ul>
                <li><img src={facebok} alt="Facebook" /></li>
                <li><img src={insta} alt="Instagram" /></li>
                <li><img src={linkdin} alt="LinkedIn" /></li>
                <li><img src={twitter} alt="Twitter" /></li>
                <li><img src={youtube} alt="YouTube" /></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-5 col-md-6">
            <div className="top-header-buttons">
              <button className='primary-border-btn'>patient portal</button>
              <button className='primary-border-btn'>Schedule Appointment</button>
              <button className='primary-btn'><FaUserMd className='mx-2' />Find a doctor</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderTop;