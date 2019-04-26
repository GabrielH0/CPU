
    this.estado=""
    this.pc=ajustar(0,8)
    this.mbr=""
    this.mar
    this.ir=""
    this.ro0
    this.ro1
    this.ro2
    this.imm=""
    this.r0=""
    this.r1
    this.r2
    this.r3
    this.e=""
    this.l=""
    this.g=""
    this.prefix="_"
    this.hash=[]
    this.hash[ajustar(0,8)]="_0x00"
    this.hash[ajustar(1,8)]="_0x01"
    this.hash[ajustar(10,8)]="_0x02"
    this.hash[ajustar(11,8)]="_0x03"
    this.hash[ajustar(100,8)]="_0x04"
    this.hash[ajustar(101,8)]="_0x05"
    this.hash[ajustar(110,8)]="_0x06"
    this.hash[ajustar(111,8)]="_0x07"
    this.hash[ajustar(1000,8)]="_0x08"
    this.hash[ajustar(1001,8)]="_0x09"
    this.hash[ajustar(1010,8)]="_0x0a"
    this.hash[ajustar(1011,8)]="_0x0b"
    this.hash[ajustar(1100,8)]="_0x0c"
    this.hash[ajustar(1101,8)]="_0x0d"
    this.hash[ajustar(1110,8)]="_0x0e"
    this.hash[ajustar(1111,8)]="_0x0f"
    this.hash[ajustar(10000,8)]="_0x10"
    this.hash[ajustar(10001,8)]="_0x11"
    this.hash[ajustar(10010,8)]="_0x12"
    this.hash[ajustar(10011,8)]="_0x13"
    this.hash[ajustar(10100,8)]="_0x14"
    this.hash[ajustar(10101,8)]="_0x15"
    this.hash[ajustar(10110,8)]="_0x16"
    this.hash[ajustar(10111,8)]="_0x17"

  

  function get_r1(){
    return this.r1
  }
  function set_mbr(val) {
    this.mbr=val
  } 
  function get_mbr() {
    return this.mbr
  }
  function get_pc(){
    return this.pc;
  }

  function buscar(){
    this.mbr=getPos(parseInt(this.pc,2))
    document.getElementById("mbr").innerHTML=mbr
  }
  function _0x00(){
    this.pc=get_size()-1
    return
  }

  function _0x01(){
    var r=reg[ro0]
    console.log("r "+r,"ro0 "+ro0,"REG "+this.reg["00"])
    this[r]=getPos(parseInt(this.mar,2))
    this[r]=ajustar(to_bin(this[r]),32)
    this.pc=ajustar(soma_bin(ajustar(pc,32),ajustar(1,32)),8)

  }
  function _0x02(){
    var r=this.reg[this.ro0]
    
    alter(this[r],parseInt(this.mar,2))
    console.log("Stored "+this[r]+" in "+ parseInt(this.mar,2));
    this.pc=ajustar(soma_bin(ajustar(pc,32),ajustar(1,32)),8)

  }
  function _0x03(){


   var i=31,res=0,resultado="",j=0,s1,s2,s3
   if(ir==ajustar(11,8)|| ir==ajustar(100,8)){
     s1=this.reg[this.ro1]
     s2=this.reg[this.ro2]
     console.log("AQUI",s1,s2)
     s3=""
     s1=this[s1]
     s2=this[s2]
   }else{
    s1=this.reg[this.ro0]
    s1=this[s1]
    s2=this.imm
   }
   console.log(s1,s2)
   while(i>=0){
    aux=""

      if(parseInt(s1[i])+parseInt(s2[i])+parseInt(res)<=1){
        aux=s1[i]|s2[i]|res
        resultado=aux.toString()+resultado
        res="0"

      }else if(parseInt(s1[i])+parseInt(s2[i])+parseInt(res)==2){
        aux=s1[i]&0
        resultado=aux.toString()+resultado
        res=1
      }else if(parseInt(s1[i])+parseInt(s2[i])+parseInt(res)==3){
         resultado=1+resultado
         res=1
      }
       i--
       j++
    }
      var aux=this.reg[this.ro0]
      this[aux]=resultado
      this.pc=ajustar(soma_bin(ajustar(pc,32),ajustar(1,32)),8)
      }

  function cd2(n){
    n=n.toString()
    n=ajustar(n,32)
    var i=0,resultado=""
    while(i<=n.length-1){
      var aux=~n[i]
      if(aux==-1){
          resultado+='1'
      }else{
           resultado+='0'
      }
      i++
    }
    resultado= soma_bin(resultado,ajustar(1,32))
    return resultado

  }
  function _0x04(){
    var aux=this.reg[this.ro2]
    this[aux]=cd2(this[aux])
    _0x03()
    this.pc=ajustar(soma_bin(ajustar(pc,32),ajustar(1,32)),8)

  }

  function _0x05(x,y){
    var x, y,z
    if(ir==ajustar(10101,8)){
      x=this.reg[this.ro0]
      x=this[x]
      y=this.imm
      z=this.reg[this.ro0]
      
    }else{
      x=this.reg[this.ro1]
      x=this[x]
      y=this.reg[this.ro2]
      y=this[y]
      z=this.reg[this.ro0]
    }
    console.log(x,y,z,"op="+op)
    var i,resultado,j=31,total=ajustar(0,32)
    while(j>=0){
      i=0
      resultado=""
      while(i<32){
        resultado+=x[i] & y[j]
        i++
      }
      console.log(shift(resultado,i-j-1), resultado)
      total=soma_bin(total,shift(resultado,to_bin(i-j-1)))
      j--
    }
    console.log("TOTAL="+total)
    this[z]=total
    this.pc=ajustar(soma_bin(ajustar(pc,32),ajustar(1,32)),8)
  }

  function _0x06(){
    n=this.reg[this.ro1]
    n=this[n]
    d=this.reg[this.ro2]
    d=this[d]
    var z=this.reg[ro0]
    var aux="",i=0,q=""
    while(i<n.length){
      aux+=n[i]
      aux=ajustar(aux,32)
      if(aux>=d){
        q+=1
        aux=soma_bin(aux,(cd2(d)))
      }else{
        q+="0"
      }
      i++
    }
    this[z]=q
    this.pc=ajustar(soma_bin(ajustar(pc,32),ajustar(1,32)),8)
  }

  function _0x07(){
  	var x=this.reg[this.ro0]
  	x=this[x]
  	y=this.reg[this.ro0]
  	n=imm
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
	this[y]=aux
  this.pc=ajustar(soma_bin(ajustar(pc,32),ajustar(1,32)),8)
  }

  function _0x08(){
  	var x=this.reg[this.ro0]
    x=this[x]
    y=this.reg[this.ro0]
    n=imm
  var i=0,aux="",j=0
  while(j<parseInt(n,2)){
      aux+="0"
      j++
  }
  while(i<x.length-parseInt(n,2)){
    aux+=x[i] 
      i++
  }
  aux=ajustar(aux,32)
  this[x]=""
  this[y]=aux.toString()
  
  }
  function _0x09(){
    x=this.reg[this.ro0]
    x=this[x]
    y=this.reg[this.ro1]
    y=this[y]
    var i=0,res=""
    if(x==y){
      this.e=1
    }else{
      this.e=0
    }
    if(x<y){
      this.l=1
    }else{
      this.l=0
    }
    if(x>y){
      this.g=1
    }else{
      this.g=0
    }
  
    document.getElementById("E").innerHTML=this.e
    document.getElementById("L").innerHTML=this.l
    document.getElementById("G").innerHTML=this.g
    this.pc=ajustar(soma_bin(ajustar(pc,32),ajustar(1,32)),8)
  }

  function _0x0a(){
    if(this.e==1){
      this.pc=mar
    }
  }
  function _0x0b(){
    if(this.e==0){
      this.pc=mar
    }
  }
  function _0x0c(){
    if(this.l==1){
      this.pc=mar
    }
  }
  function _0x0d(){
    if(this.e==1 || this.l==1){
      this.pc=mar
    }
  }
  function _0x0e(){
    if(this.g==1){
      this.pc=mar
    }
  }
  function _0x0f(){
    if(this.e==1 || this.g==1){
      this.pc=mar
    }
  }
  function _0x10(){
    this.pc=this.mar
  }
  function _0x11(){
    var aux="",x
    x=this.reg[this.ro0]
    x=this[x]
    aux=imm.substring(32,16)
    aux=aux+x.substring(32,16)
    x=this.reg[this.ro0]
    this[x]=aux
  }
  function _0x12(){

    var aux="",x
    x=this.reg[this.ro0]
    x=this[x]
    aux=imm.substring(32,16)
    console.log("AUX=",aux)
    for(var i=16;i<32;i++){
      aux="0"+aux
    }
    console.log(aux,aux.length)
    x=this.reg[this.ro0]
    this[x]=aux
   
  }
  function _0x13(){
    _0x03()
    this.pc=ajustar(soma_bin(ajustar(pc,32),ajustar(1,32)),8)
    return
   }
   function _0x14(){
      var aux=this.imm
      this.imm=cd2(aux)
      _0x03()
      this.pc=ajustar(soma_bin(ajustar(pc,32),ajustar(1,32)),8)
   }
   function _0x15(){
    var aux=this.imm
    _0x05()
    this.pc=ajustar(soma_bin(ajustar(pc,32),ajustar(1,32)),8)

   }
   function _0x16(){
    n=this.reg[this.ro0]
    n=this[n]
    d=this.imm
    var z=this.reg[ro0]
    var aux="",i=0,q=""
    while(i<n.length){
      aux+=n[i]
      aux=ajustar(aux,32)
      if(aux>=d){
        q+=1
        aux=soma_bin(aux,(cd2(d)))
      }else{
        q+="0"
      }
      i++
    }
    this[z]=q
    this.pc=ajustar(soma_bin(ajustar(pc,32),ajustar(1,32)),8)
   }
  function _0x17(){
    x=this.reg[this.ro0]
    y=this.reg[this.ro1]
    y=this[y]

    this[x]=y

  }
  function decod4(composicao){
  	if(this.ir==ajustar(1,8)||this.ir==ajustar(10,8)){
	    this.ro0=composicao[1]
	    console.log("comp1"+composicao[1])
	    this.mar=to_bin(parseInt(composicao[2]))
	}else if(this.ir==ajustar(1001,8) || this.ir== ajustar(10111,8)){
    this.ro0=composicao[1]
    this.ro1=composicao[2]

  }else{
		this.ro0=composicao[1]
		this.imm=ajustar(to_bin(parseInt(composicao[2])),32)
		console.log("IMM "+imm)
	}

  }
  function decod2(composicao){
    this.ro0=composicao[1]
    this.ro1=composicao[2]
    this.ro2=composicao[3]

  }
  function decod1(composicao){
    this.mar=to_bin(parseInt(composicao[1]))
  }

  function decodificar(){

    var cod=this.get_mbr().split(" ")
    this.ir=ajustar(to_bin(cod[0]),8)
    if(this.ir==ajustar(0,8)){
      return
    }else if(this.ir==ajustar(11,8)|| this.ir==ajustar(100,8) || this.ir==ajustar(101,8)
              || this.ir==ajustar(110,8)){
      this.decod2(cod)
    }else if(this.ir==ajustar(1010,8) ||this.ir==ajustar(1011,8) ||this.ir==ajustar(1100,8) ||this.ir==ajustar(1101,8) 
            ||this.ir==ajustar(1110,8) ||this.ir==ajustar(1111,8) ||this.ir==ajustar(10000,8) ){
    
      this.decod1(cod)
    }else{
      this.decod4(cod)
    }
    document.getElementById("mar").innerHTML=this.mar
    document.getElementById("ro0").innerHTML=this.ro0
    document.getElementById("ro1").innerHTML=this.ro1
    document.getElementById("ro2").innerHTML=this.ro2
    document.getElementById("IR").innerHTML=this.ir
    document.getElementById("IMM").innerHTML=this.imm



  }

  function executar(){
    this.reg=[]
    this.reg["00"]="r0"
    this.reg["01"]="r1"
    this.reg["10"]="r2"
    this.reg["11"]="r3"

    var func=this.hash[this.ir]
    console.log("IR="+this.ir);
    console.log("FUNC="+func);
    this[func]()

    document.getElementById("R0").innerHTML=this.r0
    document.getElementById("R1").innerHTML=this.r1
    document.getElementById("PC").innerHTML=this.pc
    document.getElementById("R2").innerHTML=this.r2
    document.getElementById("R3").innerHTML=this.r3
    }

    function ciclo(){
      if(this.ir==ajustar(0,8)){
        return
      }
        if(estado==""){
          estado="busca"
          buscar()
        }else if (estado=="busca"){
          estado="decodifica"
          decodificar()
        }else if(estado=="decodifica"){
          estado=""
          executar()
        }
      
    }

    
