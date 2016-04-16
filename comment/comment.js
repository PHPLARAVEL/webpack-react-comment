
import React from "react";
import marked from "marked";

export default React.createClass({
        getDateTime:function(time){
            var date = new Date( parseInt(time));
            var Y = date.getFullYear() + '-';
            var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
            var D = date.getDate() + ' ';
            var h = date.getHours() + ':';
            var m = date.getMinutes() + ':';
            var s = date.getSeconds(); 
            return Y+M+D+h+m+s; //呀麻碟
        },
	render:function(){
		return (
			<div className="comment" key={this.props.key}>
                             <div className="title">
                                    <span className="author">{this.props.author}:</span>
                                    <span className="time"><i>{this.getDateTime(this.props.time)}</i></span>
                             </div>
			       <div className="content">
                                    <span className="text">{ this.props.text }</span>
                             </div>
			</div>
			)
	}
})