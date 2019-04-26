      
      this.texto="ld r0, M[10]\nld r1, M[11]\nadd r0, r0, r1\nst r0, M[80]\nhlt "

      this.operacao=[]
      this.operacao["hlt"]="0x00"
      this.operacao["ld"]="0x01"
      this.operacao["st"]="0x02"
      this.operacao["add"]="0x03"
      this.operacao["sub"]="0x04"
      this.operacao["mul"]="0x05"
      this.operacao["div"]="0x06"
      this.operacao["lsh"]="0x07"
      this.operacao["rsh"]="0x08"
      this.operacao["cmp"]="0x09"
      this.operacao["je"]="0x0A"
      this.operacao["jne"]="0x0B"
      this.operacao["jl"]="0x0C"
      this.operacao["jle"]="0x0D"
      this.operacao["jg"]="0x0E"
      this.operacao["jge"]="0x0F"
      this.operacao["jmp"]="0x10"
      this.operacao["movih"]="0x11"
      this.operacao["movil"]="0x12"
      this.operacao["addi"]="0x13"
      this.operacao["subi"]="0x14"
      this.operacao["muli"]="0x15"
      this.operacao["divi"]="0x16"
      this.operacao["movrr"]="0x17"

      this.reg=[]
      this.reg["r0"]="00"
      this.reg["r1"]="01"
      this.reg["r2"]="10"
      this.reg["r3"]="11"
      var op="0"
    


  function get_texto(){
    return this.texto;
  }
  function id_op(op){
    return this.operacao[op]
  }

  function id_reg(reg){
    return this.reg[reg]
  }
  function converter04(word,i){
    console.log("WORD"+word,"OP="+op);
      var reg="",end="",instruction="",imm=""
      console.log(word)
      if(id_op(op)=="0x01"|| id_op(op)=="0x02"){
        i=3
        while(word[i]!=","){
          reg+=word[i]
          i++
        }
        instruction+=this.id_reg(reg)
        i++
        instruction+=word[i]
        i+=3
       while(word[i]!=']'){
          end+=word[i]
          i++
        }  
        end=to_bin(end)
        console.log(end)
        end=to_hex(end,6)
        instruction+=end

      }else if(id_op(op)=="0x09" || id_op(op)=="0x17"){
        
        while(word[i]!=","){
          reg+=word[i]
          i++
        }
        console.log(reg)
        instruction+=id_reg(reg)
        i++
        instruction+=word[i]
        i++
        reg=""
        while(i<word.length){
          reg+=word[i]
          i++
        }
        instruction+=id_reg(reg)

        }else{
        
        while(word[i]!=","){
          reg+=word[i]
          i++
        }
        console.log("REG="+reg)
        instruction+=id_reg(reg)
        i++
        instruction+=word[i]
        i++
        while(i<word.length){
          imm+=word[i]
          i++
        }
        if(id_op(op)!="0x11" && id_op(op)!= "0x12"){
          imm=to_bin(imm)
          imm=imm.toString()
        }
        console.log(imm)
        imm=to_hex(imm,6)
        console.log(imm)
        instruction+=imm
        console.log(instruction)
      }

    return instruction
  }
  function converter03(word){
    var regx="",i=4,regy="",regz="",instruction=""
    while(word[i]!=","){
      regx+=word[i]
      i+=1
    }
    console.log("REGGG"+regx)
    i+=2
    while(word[i]!=","){
      regy+=word[i]
      i+=1
    }
    i+=2
    while(i<word.length){
      regz+=word[i]
      i+=1
    }
    instruction+=this.id_reg(regx)+" "+this.id_reg(regy)+" "+this.id_reg(regz)
    return instruction
  }
  function converter02(word){
    var i=5,end="",instruction=""
    while(word[i]!="]"){
      end+=word[i]
      i++
    }
    end=to_bin(end)
    end=to_hex(end,6)
    instruction+=end
    return instruction
  }
  function converter01(word){

   return id_op(word)
  }

  function converter(){

    var texto=document.getElementById("caixa"),j=0
    console.log(texto.value)
    texto=texto.value
    texto=texto.split("\n")
    console.log("aqui:"+texto, texto.length)

    while(texto.length>j){
      var i=0,instruction="",word=texto[j]
      op=""
       while(word[i]!=" " && i<word.length){
        console.log(word[i],op)
         op+=word[i]
         i++
       }
       console.log("op="+id_op(op),op)
       instruction+=id_op(op)
       instruction+=word[i]
       i++
       if(id_op(op)=="0x00"){
         instruction=converter01(word)
       }else if(id_op(op)=="0x03" || id_op(op)=="0x04" || id_op(op)=="0x05" || id_op(op)=="0x06"){
         instruction+=converter03(word)
       }else if(id_op(op)=="0x0A" ||id_op(op)=="0x0B" ||id_op(op)=="0x0C" ||id_op(op)=="0x0D" ||id_op(op)=="0x0E" 
                ||id_op(op)=="0x0F" ||id_op(op)=="0x10"){
          instruction+=converter02(word)
        }else{
         instruction+=converter04(word,i)
       }
       console.log(instruction)
       add(instruction)
       j++

     }
   }

     function atualizar(){
          var i=0,pos=""
          while(i<get_size()){
            pos=getPos(i)
            i++
          }
        }
  


