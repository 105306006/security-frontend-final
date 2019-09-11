import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 }
  
];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, percent, value,
  } = props;
  
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  const colorFunction = (score) => {
    if(score < 30) {
      return "#55ed6c";
    }else if(score < 70) {
      return "#f0a33e";
    }else {
      return "#de351f";
    }
  }
  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={colorFunction(payload.name)} style={{fontSize: '30px'}}>{payload.name+"%"}</text>
      <text x={cx} y={cy+25} dy={8} textAnchor="middle" fill={colorFunction(payload.name)} style={{fontSize: '14px',fontFamily:'微軟正黑體',fontWeight:'750'}}>安全總指數</text>
      <text x={cx} y={cy+104} dy={8} textAnchor="middle" fill={"rgba(0,0,0,.0.7)"} style={{fontSize: '14px',fontFamily:'微軟正黑體',fontWeight:'750'}}>企業安全總指數(指數越低越安全)</text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={colorFunction(payload.name)}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      
    </g>
  );
};


export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/hqnrgxpj/';

  state = {
    activeIndex: 0,
  };

  onPieEnter = (data, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    return (
      <PieChart width={250} height={220}>
        <Pie
          activeIndex={this.state.activeIndex}
          activeShape={renderActiveShape}
          data={this.props.data}
          cx={120}
          cy={85}
          innerRadius={60}
          outerRadius={80}
          fill="#e7e8e6"
          dataKey="value"
          
          // onMouseEnter={this.onPieEnter}
        />
      </PieChart>
    );
  }
}