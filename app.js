//Goal is to get each and every one of the texts to get their own <spans> so that it makes all the letters change colors since they are in their own <span>.

// TL;DR: It transforms everything like <h1> into <spans> so it does cool animations.

//So that all the individual letters can become <spans> adn that way we can animate each individual <span>

// So the JavaScript transforms all of the <h1> in the HTML into <spans>  //






//commments will be under the string//

const text = document.querySelector(".fancy");
// Reason: To grab the Class, In this case, <h1 class=.fancy> </h1> /


    //          console.log(text);     //
//Now this is what you DON'T want to put in, its gonna display all of the text to the console like this: <h1 class=.fancy></h1>.. and really we want it to select each individual single letter//
//WE wanna get the actual text "fancy"//
//So instead, just do this......

const strText = text.textContent;
//Now this will actually get just the word .fancy out to the console//

//////////////////////////////console.log(strText);
// ths will make it so Fancy Schemnzy will display on the browser console//

const splitText = strText.split("");
// We now want to split it up to Create an array of each individual letter!//
//split it by adding a pair of quotes ("") ///

text.textContent = "";
// to get rid of the first h1 that woulda appeared if you didnt include this, also it centers it too with your css lol
// so now just <span is shown which will be the split text

for(let i=0; i < splitText.length; i++){
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}

//to create a loop if i is smaller than split text so the array.length ( the ARRAY in our example is "splitText")
//cuz we want to loop over everything here we can add i++ to make it loop over the whole thing.
// in the curly braces ---> {} add (text.innerHTML)
// then +=  cuz we wanna add on to this within quotes so that you can actually generate a span in here {}
//splitText[i] so that it goes thru each individual letter [i], in this loop. splitText being the ARRAY. In this loop "for(let i=0;......"
//then just close the span with a plus and quotes "</span>"//

// need to create something to put in the colored letters one by one//
let char = 0;
// create a let character(char)

let timer = setInterval(onTick, 50);
//create a timer with a setInterval so this runs every sum amount of seconds, then add an ontick function to run every 50 miliseconds//

function onTick(){
    const span = text.querySelectorAll("span")[char];
    span.classList.add("fade");
    char++ //since its increasing its char with ++ it will loop over it
    if(char === splitText.length){
        complete();
        return;
    }
}

function complete(){
    clearInterval(timer);
    timer=null; //reset the timer//now you need to go back the css and add the class .fade in there, more css in there.//

}
//basically add a class to each span cuz querySelector means class, they the same//
//youre getting the spans that are generated up here (const text = document.querySelector(".fancy"); which are then generated from the for(let i=0;......))
