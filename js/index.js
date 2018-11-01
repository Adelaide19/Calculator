//lettimeTag=document.getElementeById("time")
//timeTag=new date();
//console.log(timeTag);
const isArmstrong= () =>{
	let digits= document.getElementById('input').value.split('').map(digit=> parseInt(digit))
let digitscube=digits.map(digits*digits*digits )
let sumo=0
for(let digit of digitscube){
	sum+=digits
}
if (sum===digits){
alert('is an armstrong number')
}
else
{
	alert('it is not an armstrong number')
}
}
