/**
 * Created by root on 3/31/16.
 */
import React from "react";
import ReactDom from "react-dom";
import CommentBox from "./comment/commentBox";
import Style from "./style/style"

ReactDom.render(
    <CommentBox url="./api/comment.php" />,
    document.getElementById('main')
);
