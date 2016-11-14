import argmin from 'compute-argmin';

export default class Circle{
  constructor(x = 0, y = 0, type=0){
    this.state = { x: x, y: y, type: type, dx:0, dy:0, life:0 };
  }
  move(colleges = []) {
    this.state.life ++;
    this.state.x += this.state.dx;
    this.state.y += this.state.dy;
    this.state.dx = (this.state.dx + (Math.random()*2-1) * 0.09) / 1.001;
    this.state.dy = (this.state.dy + (Math.random()*2-1) * 0.09) / 1.001;

    const nearestCollege = colleges[argmin(colleges.map(college => {
      if (college == this) return Math.Infinity;
      const [distx, disty] = [this.state.x - college.state.x, this.state.y - college.state.y];
      const dist = Math.sqrt(distx*distx + disty*disty);
      return dist;
    }))];

    if (nearestCollege && nearestCollege != this){
      const [distx, disty] = [this.state.x - nearestCollege.state.x, this.state.y - nearestCollege.state.y];
      const dist = Math.sqrt(distx*distx + disty*disty);

      if (this.state.type == 0){
        if (dist < 40) this.state.life = Math.max(this.state.life, 550);
        this.state.dx -= distx / 250 / dist;
        this.state.dy -= disty / 250 / dist;
      }else if (this.state.type == 1){
        if (dist < 60 && this.state.life < 50){
          this.state.x = nearestCollege.state.x + distx/dist * 60;
          this.state.y = nearestCollege.state.y + disty/dist * 60;
        }
      }
    }
  }
  alpha() {
    return this.state.life < 50 ? this.state.life/50
      :this.state.life > 550? (600 - this.state.life)/50
      :1;
  }
  dead() { return this.state.life > 600; };
  draw(con, circles=[]){
    con.save();
    circles.forEach(circle => {
      const [distx, disty] = [this.state.x - circle.state.x, this.state.y - circle.state.y];
      const dist = Math.sqrt(distx*distx + disty*disty);
      if (dist < 150 && dist > 15){
        con.globalAlpha = .05 * (1 - dist / 150) * this.alpha() * circle.alpha();
        con.strokeStyle = "#000";
        con.lineWidth = 2;
        con.beginPath();
        con.moveTo(this.state.x - distx/dist * 5, this.state.y - disty/dist * 5);
        con.lineTo(circle.state.x + distx/dist * 5, circle.state.y + disty/dist * 5);
        con.stroke();
        con.closePath();
      }
    });
    con.restore();
    con.save();
    con.translate(this.state.x, this.state.y);
    con.beginPath();
    con.globalAlpha = this.alpha() * .15;
    con.fillStyle = this.state.type == 0 ? "#00FF47" : "#0090FF";
    con.arc(0,0, this.state.type == 0? 5 : 30, 0, 2 * Math.PI);
    con.fill();
    con.closePath();
    con.restore();
  }
};
