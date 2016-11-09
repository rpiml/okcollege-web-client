/**
 *
 * CanvasDrawing
 *
 */

import React from 'react';
import Circle from './circle';
import headerStyle from 'components/Header/styles.css';

const STUDENT = 0;
const COLLEGE = 1;

class ConnectionAnimation extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(){
    super();
    this.state = {
      circles: [new Circle(20,20)],
      width:100,
    };
  }

  componentDidMount() {
    const context = this.refs.canvas.getContext('2d');
    this.setState(state => {
      //state.tick = requestAnimationFrame(() => this.tick());
      state.tick =  setTimeout(() => this.tick(), 1000/24);
      return state;
    });
    this.draw(context);
  }

  componentDidUpdate() {
    const context = this.refs.canvas.getContext('2d');
    this.draw(context);
  }

  componentWillUnmount(){
    //cancelAnimationFrame(this.state.tick);
    clearTimeout(this.state.tick);
  }

  populationMax(){
    return this.state.width * this.props.height / 400 * 20;
  }

  tick() {
    const r = () => Math.random();
    const w = this.state.width;
    const h = this.props.height;

    this.setState(state => {
      if ( r() < .25 && state.circles.length < this.populationMax() ){
        state.circles.push(new Circle(r() * w, r() * h, r() < .1 ? 1 : 0));
      }
      const colleges = state.circles.filter(circle => circle.state.type == 1);
      state.circles.forEach(circle => circle.move(colleges));
      state.circles = state.circles.filter(circle => !circle.dead());
      const width = this.refs.container.offsetWidth;
      this.refs.canvas.width = width;
      state.width = width;
      //state.tick = requestAnimationFrame(() => this.tick());
      state.tick =  setTimeout(() => this.tick(), 1000/24);
      return state;
    });
  }

  draw(c) {
    c.fillStyle = '#fff';
    c.fillRect(0, 0, this.state.width, this.props.height);
    this.state.circles.filter(circle => circle.state.type === STUDENT)
      .forEach(circle => circle.draw(c, this.state.circles));
    this.state.circles.filter(circle => circle.state.type === COLLEGE)
      .forEach(circle => circle.draw(c));
  }

  render() {
    return (
      <div {...this.props} ref="container">
        <canvas ref="canvas" width={this.state.width} height={this.props.height}>
        </canvas>
      </div>
    );
  }
}
ConnectionAnimation.propTypes = {
  height: React.PropTypes.number.isRequired,
};


export default ConnectionAnimation;
