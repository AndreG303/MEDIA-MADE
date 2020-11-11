import React from "react";
import "./About.css";

function About(){
    return (
    <>
<div className="container">
  <div className="card">
    <img src="https://avatars2.githubusercontent.com/u/64981290?s=460&u=bd1bebd713cf9b54d11eb1aadd4fc869c0ffa520&v=4" alt="Elizabeth Lee" className="card__image"></img>
    <p className="card__name">Elizabeth Lee</p>
    <div>

      <div className="usTitle">
      Front-end, Back-end, &amp; Database
      </div>

    </div>
    <ul className="social-icons">
      <li><a href="https://github.com/dlekwjd347"><i className="fa fa-github"></i></a></li>
      <li><a href="https://www.linkedin.com/in/elizabeth-lee2018/"><i className="fa fa-linkedin"></i></a></li>
    </ul>
    <a href="mailto:andreamgamez@gmail.com"><button className="btn draw-border">Message</button></a>

  </div>
  <div className="card">
    <img src="https://avatars0.githubusercontent.com/u/65183415?s=460&u=e69995076940955d1d2c83d9e4bea2908a239592&v=4" alt="Andrea Gamez" className="card__image"></img>
    <p className="card__name">Andrea Gamez</p>
    <div>

      <div className="usTitle">
      Project Manager &amp; Front-end
      </div>

    </div>
    <ul className="social-icons">
      <li><a href="https://github.com/AndreG303"><i className="fa fa-github"></i></a></li>
      <li><a href="https://www.linkedin.com/in/andrea-gamez-b228901a9/"><i className="fa fa-linkedin"></i></a></li>
    </ul>
    <a href="mailto:dlekwjd347@gmail.com"><button className="btn draw-border">Message</button></a>
  </div>
  <div className="card">
    <img src="https://avatars3.githubusercontent.com/u/61949164?s=460&u=46ac2bb3b962ee705bb9d7f7fb9fd8d5a8db42d9&v=4" alt="Ashley Holanda" className="card__image"></img>
    <p className="card__name">Ashley Holanda</p>
    <div>

      <div className="usTitle">
      Back-end &amp; authentication
      </div>


    </div>
    <ul className="social-icons">
      <li><a href="https://github.com/aholanda12"><i className="fa fa-github"></i></a></li>
      <li><a href="https://www.linkedin.com/in/ashley-holanda-0585671a4/"><i className="fa fa-linkedin"></i></a></li>
    </ul>
    <a href="mailto:dlekwjd347@gmail.com"><button className="btn draw-border">Message</button></a>
  </div>
  <div className="card">
    <img src="https://avatars1.githubusercontent.com/u/64226204?s=460&u=44dd0fe627b9f38d703dd37a2b20e94edd248cb0&v=4" alt="Katelynn Nguyen" className="card__image"></img>
    <p className="card__name">Katelynn Nguyen</p>
    <div>

      <div className="usTitle">
      Back-end &amp; Digital drawing
      </div>


    </div>
    <ul className="social-icons">
      <li><a href="https://github.com/ktlnn"><i className="fa fa-github"></i></a></li>
      <li><a href="https://www.linkedin.com/in/katelynn-nguyen-639aa4186/"><i className="fa fa-linkedin"></i></a></li>
    </ul>
    <a href="mailto:dlekwjd347@gmail.com"><button className="btn draw-border">Message</button></a>
  </div>
</div>
</>
    )
}

export default About;