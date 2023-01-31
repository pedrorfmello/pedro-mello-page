import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai'

import '../../styles/components/informationContainer.sass'

function InformationContainer() {
  return (
    <section id='information'>
      <div className='info-card'>
        <AiFillPhone id="phone-icon" />
        <div>
          <h3>Telefone</h3>
          <p>(32) 9 9966-4687</p>
        </div>
      </div>
      <div className='info-card'>
        <AiOutlineMail id="email-icon" />
        <div>
          <h3>E-mail</h3>
          <p>pedro.mello.rj@gmail.com</p>
        </div>
      </div>
      <div className='info-card'>
        <AiFillEnvironment id="pin-icon" />
        <div>
          <h3>Localização</h3>
          <p>Cataguases - MG</p>
        </div>
      </div>
    </section>
  )
}

export default InformationContainer