var div=document.getElementById('mani');
var display=0;
function Siva(){
  if(display==1){
    div.style.display='block';
    display=0;
  }
  else{
    div.style.display='none'
    display=1;
  }
}
export default Siva();