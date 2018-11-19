import { connect } from 'react-redux';
import React from 'react';
import { fetchTasks } from '../../actions/tasks';
import '../../styles/childcards.css'

const coin = require('../../images/coin_icon.png');
const trophy = require('../../images/trophy_icon.png');
const avatar = [
    require('../../images/avatars/boy1.png'), 
    require('../../images/avatars/boy2.png'), 
    ]
const mapStateToProps = state => ({
    user: state.auth.user,
    childInfo: state.auth.user.childId
});
class ParentCards extends React.Component {

    componentDidMount(){
        this.props.dispatch(fetchTasks());
    }

    render(){
        const childCards = this.props.childInfo.map((child, i) => (
            <div className='child-card'>
                <p className='child-name'>{child.name}</p>
                <p className='points'>
                    <span>{child.currentPoints}</span>
                    <img src={coin} alt='coin' />
                    <span>{child.totalPoints}</span>
                    <img src={trophy} alt='trophy' />
                </p>
                <img src={avatar[1]} 
                    alt='boy avatar'
                    className='avatar' />
            </div>
        ));
        return(
            <main className='parent-cards'>
                <h2>Hey {this.props.user.name}</h2>
                {childCards}
            </main>
        )
    }
}

export default connect(mapStateToProps)(ParentCards)