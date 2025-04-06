import Banner from '../components/banner/Banner'
import Esco from '../components/esco/Esco'
import Foorter from '../components/footer/Foorter'
import HeaderTop from '../components/header-top/HeaderTop'
import Header from '../components/header/Header'
import LocalSchool from '../components/loacl-school/LocalSchool'
import Mission from '../components/mission/Mission'
import Testimonial from '../components/testimonial/Testimonial'
import Orthopatic from '../components/orthopatic/Orthopatic'
import Provider from '../components/provider/Provider'
import './home.css'

const Home = () => {
  return (
    <>
        <HeaderTop/>
        <Header/>
        <Banner/>
        <Esco/>
        <Mission/>
        <Orthopatic/>
        <Provider/>
        {/* <LocalSchool/> */}
        <Testimonial/>
        <Foorter/>
    </>
  )
}

export default Home