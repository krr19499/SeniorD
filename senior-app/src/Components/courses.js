import React,{Component, useState} from 'react';
import Selector from 'react-awesome-selector'
import 'react-awesome-selector/dist/style.css'
import isEmpty from "lodash/isEmpty";
import axios from 'axios';
import Board from 'react-trello';

const classes=[{}];
class courses extends Component{
  
  constructor(props, context){
    super(props, context);
    this.state={
      test:[],
      another:[]
    };
  }

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/senior/universities/californiastateuniversitynorthridge?format=json")
      .then(response =>{
        const classes = response.data;
        const id =response.data.map(input=>input.californiastateuniversitynorthridge_id);
        this.setState({
          test: classes,
          another: id
        },
        function(){console.log("response",this.state.test, this.state.another)});
        
      })
      
      .catch(error => this.setState({ error }));
  };

  setTable(){
    const card=this.state.test.filter(input=>input.californiastateuniversitynorthridge_courses!==null);
    const data ={
      lanes: [
        {
          id: "Courses",
          title: "Courses",
          style:{backgroundColor:'#343a40', color:'white', textAlign:'center' },
          cards:card.map(input=>({
            id:input.californiastateuniversitynorthridge_id.toString(),
            title:input.californiastateuniversitynorthridge_courses
          }))
          
         
        },
        {
          id: 'lane2',
          style:{backgroundColor:'#343a40', color:'white', textAlign:'center'},
          title: 'Current Courses',
          cards: []
        }
      ]
    };

    return(
       <Board  
        style={{backgroundColor:'#6c757d', fontFamily:'Verdana'}}
        selectedTitle='Current Courses'
         data={data} 
      />)
  }
	
  render(){
    //var classes = this.state.test.map(input=>input.input.californiastateuniversitynorthridge_courses);
    const something = this.setTable();
    console.log("classes",this.state.test)    
        return( 
          <div>
            
          <h1>Something</h1>
          {something}
            </div>
           //            {this.state.test.map(input=><div>{input}</div>)}

           // <Board  
           // style={{backgroundColor:'#6c757d', fontFamily:'Verdana'}}
            //selectedTitle='Current Courses'
          //    data={classes} 
           // > 
        )
    }
    
}


export default courses;