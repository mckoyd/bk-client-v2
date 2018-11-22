import React from 'react';
import '../../styles/task-list.css';
import '../../styles/landing.css';
import { coin } from './PointsDisplay';

const mapStateToProps = state => ({
    loading: state.tasks.loading
})
export const TaskList = props => 
    // props.loading ?  
    // <section className="wrapper">
    //     <div className="spinner">
    //         <i></i>
    //         <i></i>
    //         <i></i>
    //         <i></i>
    //         <i></i>
    //         <i></i>
    //         <i></i>
    //     </div>
    // </section> : 
    (
    <ul className='task-list'>
        {props.child.tasks.length === 0 ? 
        <li>
            <p className='empty'>Add a task below...</p>
        </li> : 
        props.child.tasks.map((task, i) => (
        <li className='task' key={i}>
            <p className='title'>{task.name}</p>
            <p className='points-preview'>
                <span>{task.pointValue}</span>
                <img src={coin} alt='a gold coin'/>
            </p>
        </li> 
        ))}
    </ul>
);