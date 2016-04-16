
import React from  "react";
import Comment from "./comment"
export default  React.createClass({
	render: function(){
		var CommentNodes = this.props.data.map(function(comment){
			return (
					<Comment author={comment.author} key={comment.id} text={comment.text} time={comment.id}>
					</Comment>
				)
		});
		return  (
			<div className="commentList">
				{CommentNodes}
			</div>
			);
			
 	}
});
