function cubeNumber(number,number1){
    if (typeof number !== 'number') {
      return "please input number";
    }
      let result = number * number * number;
      let result2 = number1 * number1 * number1;
      console.log(result,result2);
      return(result,result2);
    
  }
  
  const cube =(cubeNumber(3,4));
 
  
  