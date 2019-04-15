import React, { Component } from 'react'
import gallowsImg from '../assets/gallows.png'

export default class Gallows extends Component {
    constructor(props) {
      super(props)
      this.gallowsRef = React.createRef()
    }
    componentDidMount(){
        const ctx = this.gallowsRef.current.getContext("2d")
        const bg = new Image()
        bg.src = gallowsImg
        //fixes small bug of bg image not getting rendered
        bg.onload = function(){
          ctx.drawImage(bg,0,0)
        }
    }
    componentDidUpdate(){
      const ctx = this.gallowsRef.current.getContext('2d')
      this.drawMan(ctx,this.props.guesses)
      
    }
    clearMan(ctx){
      ctx.clearRect(50,38,300,300)
    }

    phase1(ctx) { //Head
        ctx.lineWidth = 5
        ctx.strokeColor = 'black'
        ctx.beginPath()
        //ctx.moveTo(50,50)
        ctx.ellipse(200,80,40,40,0,0,6.3)
        ctx.stroke()
    }
    phase2(ctx){ //Body
        ctx.moveTo(200,120)
        ctx.lineTo(200,250)
        ctx.stroke()
    }
    phase3(ctx){ //Left Leg
        ctx.moveTo(200,250)
        ctx.lineTo(140,320)
        ctx.stroke()
    }
    phase4(ctx){ //Right Leg
        ctx.moveTo(200,250)
        ctx.lineTo(260,320)
        ctx.stroke()
    }
    phase5(ctx){ //Left Arm
        ctx.moveTo(200,150)
        ctx.lineTo(140,200)
        ctx.stroke()
    }
    phase6(ctx){ //Left Arm
        ctx.moveTo(200,150)
        ctx.lineTo(260,200)
        ctx.stroke()
    }

    drawMan(ctx,stage){
      switch (stage) {
        case 1:
          this.phase1(ctx)
          break;
        case 2:
          this.phase1(ctx)
          this.phase2(ctx)
          break;
        case 3:
          this.phase1(ctx)
          this.phase2(ctx)
          this.phase3(ctx)
          break;
        case 4:
          this.phase1(ctx)
          this.phase2(ctx)
          this.phase3(ctx)
          this.phase4(ctx)
          break;
        case 5:
          this.phase1(ctx)
          this.phase2(ctx)
          this.phase3(ctx)
          this.phase4(ctx)
          this.phase5(ctx)
          break;
        case 6:
          this.phase1(ctx)
          this.phase2(ctx)
          this.phase3(ctx)
          this.phase4(ctx)
          this.phase5(ctx)
          this.phase6(ctx)
          break;

        
        default:
          this.clearMan(ctx)
          break;
      }
    }
  render() {
    return (
      <div>
        <canvas width="400px" height="400px" ref={this.gallowsRef}>
        </canvas>
      </div>
    )
  }
}

