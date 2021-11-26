/**
 * Created by Rick on 2021-11-11.
 */
'use strict';
const root_component = {
  data(){
    return {
      width: 1000,
      height: 540,
      xorigin: 20,
      yorigin: 500,
      r: 4,
      t: 0,
      x: 20,
      y: 0,
      g: 0,
      vx: 10,
      vy: 10,
      x2: 20,
      y2: 500,
      handle: null,
      svg: null,
      status: 'Status'
    };
  },
  template: `
    <section class='traject'>
      <section class="traject_controlSec">   
        <section class="traject_outputSec">
          <h2>Playing With Trajectory</h2>
          <ul>
            <li>Time: <input v-model="t"/></li>
            <li>x: <input v-model="x"/></li>
            <li>y: <input v-model="y"/></li>
            <li>Gravity:: <input type="range" min="-10" max="10" v-model="g"></li>
            <li>Velocity-X: <input type="range" min="1" max="40" v-model="vx"></li>
            <li>Velocity-Y: <input type="range" min="1" max="40" v-model="vy"></li>
          </ul>
        </section>
       
        <section class="traject_buttonSec">
          <button @click="start_traject">Start</button>
          <button @click="reset_traject">Reset</button>
        </section>
      </section>
      
      <svg ref="svg" class="traject_svgBox" :width="width" :height="height">
        <defs>
          <marker id ="markerArrow" markerWidth = "13" markerHeight = "13" refx = "2" refy = "6" orient = "auto">
            <path d ="M2,2 L2,11 L10,6 L2,2" style = "fill: green;"/>
          </marker>
        </defs>
        <!-- the initial velocity vector -->
        <line 
          :style="{stroke:'gold'}"
          :x1=xorigin
          :y1=yorigin
          :x2=x2
          :y2=y2>
        </line>
        <circle 
          :style="{opacity:0.4, fill:'red', stroke:'white'}"
          :r=r 
          :cx=xorigin 
          :cy=yorigin>
        </circle>
      </svg>
      <div class="traject_statusBox">{{status}}</div>
    </section>
  `,
  methods: {
    start_traject: function(){
      this.svg = this.$refs.svg;
      this.x2 = this.xorigin + (4 * this.vx);
      this.y2 = this.yorigin - (4 * this.vy);
      this.trail = [];
      this.status = 'Starting Trajectory';
      this.handle = setInterval(() => {this.update_circles();},1000);
    },
    reset_traject: function(){
      clearInterval(this.handle);
      for(let circle of this.trail){
        this.svg.removeChild(circle);
      }
      this.t = 0;
      this.x = 20;
      this.y = 0;
      this.vx = 10;
      this.vy = 10;
      this.g = 0;
      this.x2 = 20;
      this.y2 = 500;
    },
    update_circles: function(){
      this.x2 = this.xorigin + (4 * this.vx);
      this.y2 = this.yorigin - (4 * this.vy);
      this.t = this.t + 0.05;
      this.x = this.x + (this.vx * this.t);
      this.y = this.yorigin - (this.vy * this.t) + ((0.5 * this.g) * Math.pow(this.t, 2));
      const aCircle = document.createElementNS('http://www.w3.org/2000/svg','circle');
      aCircle.setAttributeNS(null,'id','acircle');
      aCircle.setAttributeNS(null,'cx',this.x);
      aCircle.setAttributeNS(null,'cy',this.y);
      aCircle.setAttributeNS(null,'r',2);
      aCircle.setAttributeNS(null,'opacity',0.4);
      aCircle.setAttributeNS(null,'fill','none');
      aCircle.setAttributeNS(null,'stroke','white');
      this.trail.push(aCircle);
      this.svg.appendChild(aCircle);

      if(this.y < 0){
        clearInterval(this.handle);
        this.status = 'HIT THE GROUND!!!';
      }else if(this.y > this.height || this.x > this.width){
        clearInterval(this.handle);
        this.status = 'WE\'RE OUT OF BOUNDS';
      }
    }
  }
};
const app = Vue.createApp(root_component);
const vm = app.mount('#app');