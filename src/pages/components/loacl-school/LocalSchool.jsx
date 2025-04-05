import './local-school.css'
import img1 from '../../../assets/images/localschool.png'

const LocalSchool = () => {
  return (
    <section className='local-school-sec'>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className='local-school-content'>
                        <h2>We Proudly Support Our <span>Local Schools</span></h2>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className='mt-5'>
                        <img src={img1} alt="image" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default LocalSchool