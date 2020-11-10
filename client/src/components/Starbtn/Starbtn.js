import {React, Component} from 'react';
import "./Starbtn.css";
import StarRatings from "react-star-ratings";

class Save extends Component {
    render() {
    changeRating( newRating, name ) {
      this.setState({
        rating: newRating
      });
    }
 
    
      // rating = 2;
      return (
        <StarRatings
          rating={this.state.rating}
          starEmptyColor="gray"
          starRatedColor="orange"
          starHoverColor="yellow"
          changeRating={this.changeRating}
          numberOfStars={1}
          name='rating'
        />
      );
    }
}

export default Save;