import Button from "../button/Button";
import "./Herosection.css";

function Herosection() {
  return (
    <div>
      <div id="heromain">
        <div style={{lineHeight :1}}>
          <h1>Hi, I'm <strong>Julia Walker</strong>.</h1>
          <h1>Web Developer</h1>
          <p>Specialized in a11y and Core Web Vitals</p>
          <div style={{display:"flex"}}><Button  title = "Contact me" /> <Button classname = "btn2" title = "About me"></Button> </div>
        </div>
        <div id = "im"> <img src="./hero.jpg" alt="pichere"/> <img src="./pattern.png" alt="here "/> </div>
      </div>
    </div>
  );
}

export default Herosection;
