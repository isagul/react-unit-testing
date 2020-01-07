import React, {Component} from 'react';
import Header from './component/header/index';
import Footer from './component/footer/index';

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
    })
  }

  render(){
    return (
    <div className="appComponent">
        <Header />
        <Footer header="Posts" desc="Click the button to render props" />
    </div>
    )
  }
}

export default App;
