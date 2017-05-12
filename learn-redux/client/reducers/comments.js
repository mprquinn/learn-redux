// a reducer takes in 2 things: 

// 1 the action

// 2 a copy of the current state

function postComments(state = [], action) {
	switch(action.type) {
		case 'ADD_COMMENT':
			return [...state, {
				user: action.author,
				text: action.comment
			}];
		case 'REMOVE_COMMENT':
			console.log(action);
			return [
				...state.slice(0, action.index),
				...state.slice(action.index + 1)
			]

		default:
			return state;
	}
	return state;
}


function comments (state = [], action) {
	// console.log(state, action);
	if (typeof action.postId !== undefined) {
		return {
			// take the current state
			...state,
			// overwrite this post with a new one
			[action.postId]: postComments(state[action.postId], action)
		}
	}
	return state;
}

export default comments;