// reducer for posts part of state

// a reducer takes in 2 things:
// 1: the action (info about what happend)
// 2: a copy of the current state

function posts(state = [], action) {
	// console.log(state, action);
	console.log('the post will change');
	console.log(state, action);
	return state;
}

export default posts;