import React from 'react';
import { Link } from 'react-router';
import Photo from './Photo';

class PhotoGrid extends React.Component{
	constructor() {
		super();

		this.log = this.log.bind(this);
	}
	log() {
		console.log(this.props.posts);	
	}
	
	render() {
		return(
			<div className="photo-grid">
				{this.props.posts.map((post, i) => <Photo {...this.props} key={i} index={1} post={post} />)}
			</div>
		)
	}
}

export default PhotoGrid;