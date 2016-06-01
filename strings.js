var input = document.getElementById('input');
input.addEventListener("keyup", function(){
	if(event.keyCode <65 || event.keyCode>91){
		input.value = input.value = input.value.replace(event.keyCode, "");
	}
	callFun(input.value);
})

function reversal(string) {
	document.getElementById("reversal").innerHTML=string.split("").reverse().join("");


}

function alphabits(string) {
	document.getElementById("alphabits").innerHTML=string.split("").sort(function(a,b) {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if( a == b) return 0;
    return a < b ? -1 : 1;
}).join("");

}

function palindrome(string) {
	if(string.split("").reverse().join("") == string){
	document.getElementById("palindrome").innerHTML= "Your string is a palindrome";
}
	else{
		document.getElementById("palindrome").innerHTML = "Your string is not a palindrome";}


}

function callFun(string){
reversal(string);
alphabits(string);
palindrome(string);
}

