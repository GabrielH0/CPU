
 
    this.mem=[99]
    this.size=0
  function get_size(){
    return this.size
  }

  function add(x){
    mem [this.size]= x;
    this.size+=1;
    show()

  }
  function alter(){
    var x=document.getElementById("valor").value
    var y=document.getElementById("posição").value
    if(y>50){
      mem[y]=ajustar(to_bin(x),32)
    console.log(mem[y])
    show()
    }else{
      alert("escolha uma posição maior que 50")
    }
    

  }

  function getPos(end){
      return this.mem[end];
  }

  function show(){
    var i=0,show=""
    for(j=0;j*10<99;j++){
      i=0
      var aux="<tr>"
      for(i=j*10+i;i<(j+1)*10;i++){
        aux+='<td width="15%" height="10%">'+i.toString()+"</td>"
      }
      show+=aux
      show+="</tr>"
      aux="<tr>"
      
      i=0
      for(i=j*10+i;i<(j+1)*10;i++){
        aux+='<td width"15%" height="10%">'+mem[i]+"</td>"
      }
      show+=aux
      show+="</tr>"
    }

    document.getElementById("MEM").innerHTML=show
  }

  function init(){
    for(i=0;i<99;i++){
      mem[i]=ajustar(0,32)
    }
  }