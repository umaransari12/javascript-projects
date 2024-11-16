function number(num){
    document.getElementById("calculator").value +=num;
}

function operator(op){
    document.getElementById("calculator").value +=op;
}

function clearall(){
    document.getElementById("calculator").value ='';
}
function cancel() {
    const cancelNum = document.getElementById("calculator").value;
    document.getElementById("calculator").value = cancelNum.slice(0, -1);
  }
  
  function calculateResult() {
    try {
      let result = eval(document.getElementById("calculator").value);
      document.getElementById("calculator").value = result;
    } catch (error) {
      document.getElementById("calculator").value = "Error";
    }
  }