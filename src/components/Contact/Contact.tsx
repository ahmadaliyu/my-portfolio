import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Let's build something useful</h2>
        <p>Looking for an engineer for your team or your next product?</p>
        <p>Based in Nigeria and open to remote opportunities. Tell me about your role, project, or technical challenge.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:aliyuahmad1996@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:aliyuahmad1996@gmail.com">aliyuahmad1996@gmail.com</a>
        </div>
        <div>
        <a href="tel:+2348132943547"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+2348132943547">(+234) 813 294 3547</a>
        </div>  
      </div>
    </Container>
  )
}
