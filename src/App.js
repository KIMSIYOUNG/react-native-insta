import './App.css';
import React from "react";
import HomeHeader from "./component/HomeHeader";
import CardContainer from "./component/CardContainer";
import ProfileContainer from "./component/ProfileContainer";

function App() {
  return (
    <div style={{flex:1}}>
      <div style={style.all}>
        <div style={style.left}/>
        <div className="App" style={style.container}>
          <HomeHeader/>
        </div>
        <div style={style.right}/>
      </div>
      <div style={style.homeBody}>
        <CardContainer/>
        <ProfileContainer/>
      </div>
    </div>

  )
}

const style = {
  all: {
    display: 'flex',
    borderBottomColor: 'gray',
    borderBottomWidth: 3,
    borderBottomStyle: 'solid',
  },
  homeHeader: {
    flex: 1,
  },
  homeBody: {
    flex: 9,
    backgroundColor: 'blue',
  },
  left: {
    flex: 2,
  },
  container: {
    flex: 6,
  },
  right: {
    flex: 2,
  }
}

export default App;
