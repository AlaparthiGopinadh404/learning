    var ar = [100,200,300,500];
            var br = [100,200,400];
             var cr = 0;
            if(ar.length===br.length){
                for(var i=0;i<ar.length;i++){
                    if(ar[i]===br[i]){
                        cr++;
                    }
                }
                if(ar.length===cr){
                    console.log("arrays are same");
                }
                else{
                    console.log("arrays are not same");
                }
            }
            else{
                console.log("arrays are not same");
            }
          
            
   