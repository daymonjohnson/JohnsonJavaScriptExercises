var total=0;

for (var num=1; num<=5; num++){
  total= total + num;
}
console.log("The total is:" + total)


//--------------------------------------------------------//

String word;
String word2;
String response;System.out.println("Do you want to play?");
string input = sc.next();if(input.equals("yes"))
{	
do{		System.out.println("Enter a word");
		word2 = sc.next();	
		word = word + " " + word2;		
		System.out.println("Do you want to play again?");	
		String response = sc.next();while(!response.equals("no"))
			}
}

//-----------------------------------------------------------------//


	
public static void main(String args[])
{ Scanner sc = new Scanner(System.in); 
String name; 
String response; 
String myname = "Hello. My name is DJ"; 
System.out.println("Would you like to print your name?"); 
response = sc.next(); 
if(!response.equals("no")) { 
  do { System.out.println(myname); 
  System.out.println("Would you like to print your name again?");
  response = sc.next(); myname = myname + "!"; }
  while(!response.equals("no")); }
  } 
  }	
  
  
  //-----------------------------------------------------------------//
  
  <!DOCTYPE html>
<html>
<body>

<p>Click the button to display a dialog box which will ask you what time of day it is</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
    var text;
    var time = prompt("What time of day is it?", "Morning,Noon,evening");
    switch(time) {
        case "Morning":
        text = "It is breakfast time. How about some eggs and toast?";
        break;
    case "Noon":
        text = "OOOO lunch time, how about a salad!";
        break;
        case "Evening":
        text = "Gather round the table, its dinner time. How would you like chicken and rice";
        break;
        default:
        text = "I have never heard of that one..";
    }
    document.getElementById("demo").innerHTML = text;
}
</script>

</body>
</html>
  