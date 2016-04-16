/**
 * Created by root on 4/4/16.
 */
import React from 'react';
import $ from 'jquery';
import CommentList from "./commentList";
import CommentForm from "./commentForm";
export default React.createClass({
	    getInitialState:function(){
			return {data:[]}
	    },
	    componentDidMount:function(){
    		$.ajax({
    			url:this.props.url,
    			dataType:'json',
    			cache:false,
    			success:function(data){
    				this.setState({data:data});
    			}.bind(this),
			       error: function(xhr, status, err) {
					console.error(this.props.url, status, err.toString());
			}.bind(this)
    		});
	    },
            handleCommentSubmit:function(comment){
            	var comments = this.state.data;
            	comment.id = Date.now();
            	var newComments = comments.concat([comment]);
            	 console.log(comment);
            	this.setState({data:newComments});
                $.ajax({
                    url:this.props.url,
                    dataType:'json',
                    type:'post',
                    data:comment,
                    cache:false,
                    success:function(data){
                        this.setState({data:data});
                    }.bind(this),
                       error: function(xhr, status, err) {
                       	this.setState({data:comments});
                        console.error(this.props.url, status, err.toString());
                }.bind(this)
                });
            },
	    render: function() {
		        return (
			        <div>
			        	<div className="commentBox">
			        		<h3 className="title">Comment List</h3>
        					<CommentList data={this.state.data} />
        					<h3 className="title">Your Comment</h3>
      						<CommentForm  onCommentSubmit={this.handleCommentSubmit} />
      					</div>
				</div>
			);
	},
});
