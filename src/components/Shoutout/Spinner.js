import React from 'react'
import SpinnerStyles from './Spinner.module.css' 

function Spinner(props){
    const loading = props.isLoading; 
    if (loading) {
       return  <div className={SpinnerStyles.circleLoader}>
                 </div>
    } 
    return <div className={`${SpinnerStyles.circleLoader} ${SpinnerStyles.loadComplete}`}>
    <div className={`${SpinnerStyles.checkmark} ${SpinnerStyles.draw}`}></div>
</div>
    
}

export default Spinner