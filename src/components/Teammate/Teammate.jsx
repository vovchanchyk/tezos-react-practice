import React from 'react';
import styles from './Teammate.module.scss';
import PropTypes from "prop-types";

const Teammate = ({name,position,img}) => {
    return (
        <div className ={styles.teammate}>
        <img src={img} alt={`${name} pic`} className={styles.teammate__picture} />
        <span className ={styles.teammate__name}>{name}</span>
        <span className ={styles.teammate__position}>{position}</span>
      </div>
    )
}

Teammate.propTypes = {
  name:PropTypes.string,
  position:PropTypes.string
}
Teammate.defaultProps = {
  name:'',
  position:''
}
export {Teammate};
