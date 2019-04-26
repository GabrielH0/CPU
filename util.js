
  
   function ajustar(str,n){
    str=str.toString()
    var adicionar=n-str.length
    for(var i=0;i<adicionar;i++){
      str='0'+str
    }
    if(adicionar<0){
      var aux=""
      for(var i=0;i<n;i++){
        aux=str[str.length-i-1]+aux
      }
      str=aux
    }

    return str
  }

   function to_hex(n,t){

    var hex=""
    hex=parseInt(n,2)
    hex=hex.toString(16)
    while(hex.length<t-2){
      hex="0"+hex
    }

    return "0x"+hex
  }

   function soma_bin(s1,s2){
    var i=31,res=0,resultado=[],j=0,r
    while(i>=0){
      if(parseInt(s1[i])+parseInt(s2[i])+parseInt(res)<=1){
        resultado[j]=s1[i]|s2[i]|res
        res="0"

      }else if(parseInt(s1[i])+parseInt(s2[i])+parseInt(res)==2){

         resultado[j]=s1[i]&0
        res=1
      }else if(parseInt(s1[i])+parseInt(s2[i])+parseInt(res)==3){
        resultado[i]=1
        res=1
      }
      i--
      j++
    }
    i=s1.length-1
    r=""
    var retorne=""
    while(i>=0){
      r+=resultado[i]
      i--
    }
      return r
  }

   function to_bin(n){
    n=n.toString()
    if(n.indexOf("0x") != -1){
      n=(parseInt(n,16));
    }
    var res=0,bin=""

    if((n/2)>0){
      res=n%2
      n=n/2
      n=Math.trunc(n)
      bin=to_bin(parseInt(n,10))
    }
    if(res!=undefined ){
      if(n==0){
        bin+= n.toString()+res.toString()
      }else{
        bin+= res.toString()
      }
    }
    return bin


  }
function shift(x,y){
    n=y
    var i=0,aux="",j=0
    while(j<parseInt(n,2)){
      aux+="0"
      j++
    }
     while(i<x.length){
      aux=x[x.length-i-1] +aux
      i++
      }
  aux=ajustar(aux,32)
  return aux
  }
