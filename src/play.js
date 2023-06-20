function play(t,setwin){
    console.log(t)
    if(t[0]=="X"&&t[1]=="X"&&t[2]=="X"){
        setwin("player 1 win");
    }else if(t[3]=="X"&&t[4]=="X"&&t[5]=="X"){
        setwin("player 1 win");
    }else if(t[6]=="X"&&t[7]=="X"&&t[8]=="X"){
        setwin("player 1 win");
    }else if(t[0]=="X"&&t[3]=="X"&&t[6]=="X"){
        setwin("player 1 win");
    }else if(t[1]=="X"&&t[4]=="X"&&t[7]=="X"){
        setwin("player 1 win");
    }else if(t[2]=="X"&&t[5]=="X"&&t[8]=="X"){
        setwin("player 1 win");
    }else if(t[0]=="X"&&t[4]=="X"&&t[8]=="X"){
        setwin("player 1 win");
    }else if(t[2]=="X"&&t[4]=="X"&&t[6]=="X"){
        setwin("player 1 win");
    }
    if(t[0]=="O"&&t[1]=="O"&&t[2]=="O"){
        setwin("player 2 win");
    }else if(t[3]=="O"&&t[4]=="O"&&t[5]=="O"){
        setwin("player 2 win");
    }else if(t[6]=="O"&&t[7]=="O"&&t[8]=="O"){
        setwin("player 2 win");
    }else if(t[0]=="O"&&t[3]=="O"&&t[6]=="O"){
        setwin("player 2 win");
    }else if(t[1]=="O"&&t[4]=="O"&&t[7]=="O"){
        setwin("player 2 win");
    }else if(t[2]=="O"&&t[5]=="O"&&t[8]=="O"){
        setwin("player 2 win");
    }else if(t[0]=="O"&&t[4]=="O"&&t[8]=="O"){
        setwin("player 2 win");
    }else if(t[2]=="O"&&t[4]=="O"&&t[6]=="O"){
        setwin("player 2 win");
    }
}
export default play;