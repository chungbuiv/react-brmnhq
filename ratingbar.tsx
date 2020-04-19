import React, { Component } from "react";

interface RatingBarProps{
  max: number
}


interface RatingBarState{
  ratings: Array<Rating>,
  current: number
}

interface Rating{
  key: number,
  activeClass: string
}

export default class RatingBar extends Component<RatingBarProps, RatingBarState> {
  constructor(props){
    super(props);
    let ratings = [];
    for(let i = 0; i< this.props.max; i++){
      ratings = [...ratings, {key: i}]
    }
    this.state = {
      ratings: ratings,
      current: 0
    };
  }
  mouseEnter = key => {
    const ratings = this.state.ratings.map(rating => {
      return {...rating, activeClass: rating.activeClass = rating.key <= key ? "active": ""}
    });
    this.setState({ratings});
  }
  
  onClick = key => {
    this.setState({current: key+1});
  }

  mouseLeave = () => {
    const ratings = this.state.ratings.map(rating => {
      return {...rating, activeClass: rating.activeClass = rating.key < this.state.current ? "active": ""}
    });
    this.setState({ratings});
  }
  render(){
    return (
        <div className="rating-bar">
        {
          this.state.ratings.map(rating => 
            {
              return (
                <div className={`rating-item ${rating.activeClass}`}
                  onMouseEnter={() => this.mouseEnter(rating.key)}
                  onClick={() => this.onClick(rating.key)}
                  onMouseLeave={() => this.mouseLeave()}
                >{rating.key + 1}</div>
              )
            }
          )
        }
          
        </div>
    );
  }
}