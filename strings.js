function reversal(string) {
	document.getElementById("reversal").innerHTML=string.split("").reverse().join("");


}

function alphabits(string) {
	document.getElementById("alphabits").innerHTML=string.split("").sort().join("")

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

