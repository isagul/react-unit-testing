import React, {Component} from 'react';
import Header from './component/header/index';
import Posts from './component/posts/index';
import './App.scss';

class App extends Component {

  constructor(props){
    super(props);
    
    this.state = {
      count: 0
    };
  }

  returnAsNumber(number){
    return number + 1;
  }

  changeCountValue(){
    this.setState({
      count: 1
    });
  }

  render(){
    const {count} = this.state;
    return (
    <div className="appComponent">
        <Header />
        <section>
          <button className="changeButton" onClick={() => this.changeCountValue()}>Change Count</button>
          <p className="countText">{count}</p>
        </section>        
        <Posts header="Posts" desc="Click the button to render posts" />
    </div>
    )
  }
}

export default App;
