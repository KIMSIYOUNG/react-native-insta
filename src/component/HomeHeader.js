import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faEnvelopeOpenText,
  faHeart,
  faHome,
  faIdBadge
} from "@fortawesome/free-solid-svg-icons";


const HomeHeader = () => {
  return (
    <div style={style.container}>
      <div style={style.title}>Instagram</div>
      <textarea style={style.search}/>
      <div style={style.navigators}>
        <div style={style.iconLeft}/>
        <div style={style.iconRight}>
          <FontAwesomeIcon icon={faHome} size="2x"/>
          <FontAwesomeIcon icon={faEnvelopeOpenText} size="2x"/>
          <FontAwesomeIcon icon={faCompass} size="2x"/>
          <FontAwesomeIcon icon={faHeart} size="2x"/>
          <FontAwesomeIcon icon={faIdBadge} size="2x"/>
        </div>
      </div>
    </div>
  )
};

const style = {
  container: {
    marginTop: 15,
    display: 'flex',
    justifyContent: 'space-between',
    height: 50,
  },
  title: {
    flex: 1,
    fontFamily: "serif",
    marginLeft: 30,
    fontSize: 29,
  },
  search: {
    width: 180,
    height: 25,
    marginTop: 4,
    marginLeft: 20,
  },
  navigators: {
    display: 'flex',
    justifyContent: 'flex-end',
    flex: 1,
  },
  iconLeft: {
    flex: 4,
  },
  iconRight: {
    display: 'flex',
    flex: 6,
    justifyContent: 'space-around',
  },
}

export default HomeHeader;