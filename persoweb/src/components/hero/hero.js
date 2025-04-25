import "./hero.css";
import name from "../../images/HIBA.svg";

function Hero() {
  return (
    <div id="hero" className="hero">
      <img className="name" src={name} alt=""></img>
 
    
<div className="Hero-content">
  
<div className="Hero-text">
<p className="text-1">Hey there!</p>
<p className="text-2">I am Hiba...</p>
<p className="text-3">thank you for stopping by...</p>
<p className="text-4">In this world full of matcha lovers I love Vanilla Latte</p>
</div>
</div>
    </div>
  );
}

export default Hero;
