<?php
        $commets_json = file_get_contents('comment.json');
        if($_POST['author']){
            $comment = array();
            $coments_array = json_decode($commets_json,true);
            $comment['id'] = trim($_POST['id']);
            $comment['author'] = trim($_POST['author']);
            $comment['text'] = trim($_POST['text']);
            $coments_array[] = $comment;
            $result = json_encode($coments_array);
            if(file_put_contents('comment.json', $result));
            echo $result;
         }else{
            if($commets_json){
                echo $commets_json;
            }else{
                echo json_encode(array());
            }
            
        }
 ?>