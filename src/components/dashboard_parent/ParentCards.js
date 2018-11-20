import { connect } from 'react-redux';
import React from 'react';
import { fetchTasks } from '../../actions/tasks';
import '../../styles/childcards.css'

const coin = require('../../images/coin_icon.png');
const trophy = require('../../images/trophy_icon.png');
const avatars = [
    require('../../images/avatars/boy1.png'), 
    require('../../images/avatars/boy2.png'),
    require('../../images/avatars/boy3.png'),
    require('../../images/avatars/boy4.png'),
    require('../../images/avatars/boy5.png'),
    require('../../images/avatars/boy6.png'),
    require('../../images/avatars/girl1.png'),
    require('../../images/avatars/girl2.png'),
    require('../../images/avatars/girl3.png'),
    require('../../images/avatars/girl4.png') 
    ]
const mapStateToProps = state => ({
    user: state.auth.user,
    childInfo: state.auth.user.childId
});
export class ParentCards extends React.Component {
    render(){
        const childCards = this.props.childInfo.map((child, i) => (
            <div className='child-card' key={i}>
                <p className='child-name'>{child.name}</p>
                <p className='points'>
                    <span>{child.currentPoints}</span>
                    <img className='coin' src={coin} alt='coin' />
                    <span>{child.totalPoints}</span>
                    <img src={trophy} alt='trophy' />
                </p>
                <div className='avatar-task'>
                    <img src={avatars[Math.floor(Math.random()*avatars.length)]} 
                        alt='avatar'
                        className='avatar' />
                    <ul className='task-list'>
                        {child.tasks.length === 0 ? 
                        <li>
                            <p className='empty'>Add a task below...</p>
                        </li> : 
                        child.tasks.map((task, i) => (
                        <li key={i}>
                            <p>{task.name}</p>
                        </li> 
                        ))}
                    </ul>
                </div>
                <button type='button'
                    className='add-btn'>
                    add a task
                </button>
            </div>
        ));
        return(
            <main className='parent-cards'>
                <h2>Welcome back <span>{this.props.user.name}!</span></h2>
                {childCards}
            </main>
        )
    }
}

export default connect(mapStateToProps)(ParentCards)