// a reducer takes in 2 things: 

// 1 the action

// 2 a copy of the current state

function posts (state = [], action) {
	switch (action.type) {
		case 'INCREMENT_LIKES':
			//return updated state
			const index = action.index;
			return [
				...state.slice(0,index), // before were updating
				{...state[index], likes: state[index].likes + 1},
				...state.slice(index + 1) // after
			]
		default:
			return state;
	}
}

export default posts;