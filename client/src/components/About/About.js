import React from "react";
import "./About.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function About(){
    return (
    <>
<div className="container">
  <div className="card">
    <img src="https://avatars2.githubusercontent.com/u/64981290?s=460&u=bd1bebd713cf9b54d11eb1aadd4fc869c0ffa520&v=4" alt="Elizabeth Lee" className="card__image"></img>
    <p className="card__name">Elizabeth Lee</p>
    <div className="grid-container">

      <div className="grid-child-posts">
        156 Post
      </div>

      <div className="grid-child-followers">
        1012 Likes
      </div>

    </div>
    <ul className="social-icons">
      <li><a href="#"><i className="fa fa-instagram"></i></a></li>
      <li><a href="#"><i className="fa fa-twitter"></i></a></li>
      <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
      <li><a href="#"><i className="fa fa-codepen"></i></a></li>
    </ul>
    <button className="btn draw-border">Follow</button>
    <button className="btn draw-border">Message</button>

  </div>
  <div className="card">
    <img src="https://avatars0.githubusercontent.com/u/65183415?s=460&u=e69995076940955d1d2c83d9e4bea2908a239592&v=4" alt="Andrea Gamez" className="card__image"></img>
    <p className="card__name">Andrea Gamez</p>
    <div className="grid-container">

      <div className="grid-child-posts">
        305 Post
      </div>

      <div className="grid-child-followers">
        2643 Likes
      </div>

    </div>
    <ul className="social-icons">
      <li><a href="#"><i className="fa fa-instagram"></i></a></li>
      <li><a href="#"><i className="fa fa-twitter"></i></a></li>
      <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
      <li><a href="#"><i className="fa fa-codepen"></i></a></li>
    </ul>
    <button className="btn draw-border">Follow</button>
    <button className="btn draw-border">Message</button>
  </div>
  <div className="card">
    <img src="https://avatars3.githubusercontent.com/u/61949164?s=460&u=46ac2bb3b962ee705bb9d7f7fb9fd8d5a8db42d9&v=4" alt="Ashley Holanda" className="card__image"></img>
    <p className="card__name">Ashley Holanda</p>
    <div className="grid-container">

      <div className="grid-child-posts">
        902 Post
      </div>

      <div className="grid-child-followers">
        1300 Likes
      </div>

    </div>
    <ul className="social-icons">
      <li><a href="#"><i className="fa fa-instagram"></i></a></li>
      <li><a href="#"><i className="fa fa-twitter"></i></a></li>
      <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
      <li><a href="#"><i className="fa fa-codepen"></i></a></li>
    </ul>
    <button className="btn draw-border">Follow</button>
    <button className="btn draw-border">Message</button>
  </div>
  <div className="card">
    <img src="https://avatars1.githubusercontent.com/u/64226204?s=460&u=44dd0fe627b9f38d703dd37a2b20e94edd248cb0&v=4" alt="Katelynn Nguyen" className="card__image"></img>
    <p className="card__name">Katelynn Nguyen</p>
    <div className="grid-container">

      <div className="grid-child-posts">
        902 Post
      </div>

      <div className="grid-child-followers">
        1300 Likes
      </div>

    </div>
    <ul className="social-icons">
      <li><a href="#"><i className="fa fa-instagram"></i></a></li>
      <li><a href="#"><i className="fa fa-twitter"></i></a></li>
      <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
      <li><a href="#"><i className="fa fa-codepen"></i></a></li>
    </ul>
    <button className="btn draw-border">Follow</button>
    <button className="btn draw-border">Message</button>
  </div>
</div>
</>
    )
}

export default About;