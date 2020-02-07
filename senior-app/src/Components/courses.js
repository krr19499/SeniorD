import React,{Component} from 'react';
import Board from 'react-trello';

const data = {
    lanes: [
      {
        id: 'lane1',
        title: 'Courses',
        style:{backgroundColor:'#343a40', color:'white', textAlign:'center' },
        cards: [
          {id: 'Card1', title: 'COMP 110', },
          {id: 'Card2', title: 'COMP 100'}
        ]
      },
      {
        id: 'lane2',
        style:{backgroundColor:'#343a40', color:'white', textAlign:'center'},
        title: 'Current Courses',
        cards: []
      }
    ] 

  }
class courses extends Component{
    render(){
        return(
            <Board 
            style={{backgroundColor:'#6c757d', fontFamily:'Verdana'}}
            cardStyle={{backgroundColor:'silver', textAlign:'center'}}
            hideCardDeleteIcon={'true'}
            data={data}/>
        )
    }
}

export default courses;