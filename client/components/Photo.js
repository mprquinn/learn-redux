import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

class Photo extends React.Component{
	constructor() {
		super();

		this.log = this.log.bind(this);
	}
	log() {
		console.log(this.props);	
	}
	
	render() {
		const { post, i, comments } = this.props;
		return(
			<figure className="grid-figure">
				<div className="grid-photo-wrap">
					<Link to={`/view/${post.code}`}>
						<img src={post.display_src} alt={post.caption} className="grid-photo" />
					</Link>
					
					<CSSTransitionGroup transitionName="like"
						transitionEnterTimeout={500}
						transitionLeaveTimeout={500}>
						<span key={post.likes} className="likes-heart">{post.likes}</span>
					</CSSTransitionGroup>

				</div>

				<figcaption>
					<p>{post.caption}</p>
					<div class="control-buttons">
						<button class="likes button">💖 {post.likes}</button>
						<Link className="button" to={`/view/${post.code}`}>
							<span className="comment-count">
								<span className="speech-bubble"></span>
								{comments[post.code] ? comments[post.code].length : 0}
							</span>
						</Link>
					</div>
				</figcaption>
			</figure>
		)
	}
}

export default Photo;