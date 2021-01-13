//Step1: Wire up an event handler for the fizz buzz button
document.getElementById("btn-Submit").addEventListener("click", function(){
    //Step2: Store the users input into a local variable named userWord
    let input1= document.getElementById("input1").value;
    input1 = input1.replace(/ /g,'');
    let newWord = input1.split( '' ).reverse( ).join( '' );
    if (newWord == input1){
       document.getElementById("output").innerText = "This is a palindrome";
    }
    else {
        document.getElementById("output").innerText = "This is not a palindrome";
    }
    console.log(input1);
});
