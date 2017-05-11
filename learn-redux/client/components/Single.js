import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

// import { Link } from 'react-router';

class Single extends React.Component{
	render() {
		// index of the post
		const index = this.props.posts.findIndex((post) => post.code === this.props.params.postId);
		const post = this.props.posts[index];
		const postComments = this.props.comments[this.props.params.postId] || [];

		return (
			<div className="single-photo">
				<Photo index={index} post={post} {...this.props} />
	
				<Comments postComments={postComments} />
			</div>
		)
	}
};

export default Single;