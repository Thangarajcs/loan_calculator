import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
            value:500,
            month:6,
            monthlyPayment:'',
            interest:''    
      };
            this.handleChange = this.handleChange.bind(this);
            this.handleChange1 = this.handleChange1.bind(this);
  }
  handleChange(event) {
            this.setState({value:parseInt(event.target.value)}); 
            axios.get(`https://ftl-frontend-test.herokuapp.com/interest?amount=${event.target.value}&numMonths=${this.state.month}`)
            .then(res => {
            var persons = res.data;
            this.setState({monthlyPayment:persons.monthlyPayment.amount,interest:persons.interestRate});
            }) 
  }
  handleChange1(event) {
            this.setState({month:parseInt(event.target.value)}); 
            axios.get(`https://ftl-frontend-test.herokuapp.com/interest?amount=${this.state.value}&numMonths=${event.target.value}`)
            .then(res => {
            var persons = res.data;
            this.setState({monthlyPayment:persons.monthlyPayment.amount,interest:persons.interestRate});
            })    
  }
  
  render() {
  return (
  <div className="content">
    <div className="container">
      <div className="content-wrapper">
          <div className="input_wrapper" id="sty">
                  <div className="amount panel">
                        <div className="range-slider">
    <h1>hello</h1>
                            <label>Loan Amount :</label>
                            <input type="number" value={this.state.value} min="500" max="5000" onChange={this.handleChange}/>
                            <br/>
                            <input id="rs-range-line" className="rs-range" type="range" step="1" value={this.state.value} min="500" max="5000" onChange={this.handleChange}/>
                        </div>
                            <div className="box-minmax">
                              <span>500</span><span>5000</span>
                            </div>
                  </div>
                    <div className="month panel">
                        <div className="range-slider month">
                              <label>Tenure(Months):</label>
                              <input type="number" value={this.state.month} min="6" max="24" onChange={this.handleChange1}/>
                              <br/>
                              <input id="rs-range-line" className="rs-range" type="range" step="1" value={this.state.month} min="6" max="24" onChange={this.handleChange1}/>
                        </div>
                        <div className="box-minmax">
                            <span>6</span><span>24</span>
                        </div>
                    </div>
                    <div className="response-wrapper">
                        <div className="result-section">
                            <div className="instalment" id="">Monthly Payment <br /><span className="amount">&#36; {this.state.monthlyPayment}</span></div>
                            <div className="interest" id="">Interest Rate <br /><span className="amount">{this.state.interest} %</span></div>
                        </div>
                </div>
            </div>
                  
      </div>
    </div>
</div>
)
};
}
export default App;
