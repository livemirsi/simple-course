import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const root = document.getElementById('root');

if (root !== null) {

	ReactDOM.render(<App />, root);

}

// import React from 'react';
// import ReactDOM from 'react-dom';

// import { observer } from 'mobx-react';
// import { observable, decorate, action } from 'mobx';

// class UserStore {

// 	counter = 0

// 	setCounter = () => {

// 		console.log('fasf', this.counter);
// 		this.counter = this.counter + 1;

// 	}

// }

// const User = decorate(UserStore, {
// 	counter:    observable,
// 	setCounter: action
// });

// const store = new User();

// setInterval(() => {

// 	store.setCounter();

// }, 1000);

// const MyTimer = observer(class Timer extends React.Component {

// 	render() {

// 		console.log(this.props.timerData.counter);

// 		return <span>Seconds passed: { this.props.timerData.counter } </span>;

// 	}

// });

// ReactDOM.render(<MyTimer timerData={store} />, document.getElementById('root'));
