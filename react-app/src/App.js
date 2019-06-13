import React, { Component } from 'react';
import Navigation from './components/navigation';
import Content from './components/content';
import Subject from './components/subject';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode:'read',
      selected_content_id:2,
      subject:{title:'WEB', sub:'World Wide Web!!'},
      welcome:{title:'Welcome', desc:'Hello Home Page!!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is HyperTEXT...'},
        {id:2, title:'CSS', desc:'CSS is for design...'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive...'},
        {id:4, title:'WOW', desc:'JavaScript is for interactive...'}
      ]
    }
  }
  render(){
    console.log('App Render');
    var _title, _desc = null;
    if(this.state.mode ==='welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.mode==='read'){
      var i = 0;
      while(i<this.state.contents.length){
        var data= this.state.contents[i];
        if(data.id===this.state.selected_content_id){
          _title=data.title;
          _desc=data.desc;
          break;
        }
        i+=1;
      }
    }
    console.log('render', this);
    return (
      <div className="App">
        <Subject title={this.state.subject.title}
        sub={this.state.subject.sub}
        onChangePage={function(){
          this.setState({mode:'welcome'});
        }.bind(this)}
        />
        <Navigation onChangePage={function(id){
          this.setState({
            mode:'read',
            selected_content_id:Number(id)
        })
        }.bind(this)} 
        data={this.state.contents}
    
        />
        <Content title={_title} desc={_desc}/>
      </div>
    );
  }
}

export default App;
