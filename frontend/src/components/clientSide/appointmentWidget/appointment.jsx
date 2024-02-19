import Step1 from '../../../assets/bookNow/step1.png';
import Step2 from '../../../assets/bookNow/step2.png';
import Step3 from '../../../assets/bookNow/step3.png';
import './appointment.css'
const Appointment = () => {
  return (
    <div className='widget-container'>
        <img src={Step1} alt="" />
        <img src={Step2} alt="" />
        <img src={Step3} alt="" />
    </div>
  )
}

export default Appointment