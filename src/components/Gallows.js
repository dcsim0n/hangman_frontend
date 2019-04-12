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
        console.log("Drawing...")
        console.log(bg)
        ctx.drawImage(bg,0,0)
        //ctx.stroke()
        
        this.phase1(ctx)
        this.phase2(ctx)
        this.phase3(ctx)
        this.phase4(ctx)
        this.phase5(ctx)
        this.phase6(ctx)
    }

    phase1(ctx) { //Head
        ctx.lineWidth = 5
        ctx.strokeColor = 'black'
        ctx.beginPath()
        //ctx.moveTo(50,50)
        ctx.ellipse(380,158,50,50,0,0,6.3)
        ctx.stroke()
    }
    phase2(ctx){ //Body
        ctx.moveTo(380,208)
        ctx.lineTo(380,358)
        ctx.stroke()
    }
    phase3(ctx){ //Left Leg
        ctx.moveTo(380,358)
        ctx.lineTo(300,458)
        ctx.stroke()
    }
    phase4(ctx){ //Right Leg
        ctx.moveTo(380,358)
        ctx.lineTo(460,458)
        ctx.stroke()
    }
    phase5(ctx){ //Left Arm
        ctx.moveTo(380,250)
        ctx.lineTo(300,320)
        ctx.stroke()
    }
    phase6(ctx){ //Left Arm
        ctx.moveTo(380,250)
        ctx.lineTo(460,320)
        ctx.stroke()
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

