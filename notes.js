console.log(`Hello is this thing on?`);

const el =document.createElement(`div`);
const txt = document.createTextNode(`Hello World`);//This will create new element text and append it to page.
el.append(txt);//This will create new element text and append it to page.
el.classList.add(`addBg`)//adds the class .addBg to el. This can be accessed in css as .addBG 
el.innerText=`Hello World`;
documnet.body.append(el);//puts element at the bottom
documnet.body.prepend(el);//puts element at the top
documnet.body.appendChild(el);//Adds element to the body.

function handleClick(event){//You can also create a function for the click and add it into an element.
    console.log(event); 
    const el =document.createElement(`div`);
    el.innerText= this.innerText;
    document.body.appendChild(el);
    alert(this.innerText);
el.addEventListener(`click`,handleClick);//added the seperate function into the element.

el.addEventListener(`click`,function(event){
    console.log(event);// will print the effects of the event to the console. 
    const el =document.createElement(`div`);//will recreate el to the webpage itself.
    el.innerText= this.innerText;//will recreate el to the webpage itself.
    document.body.appendChild(el);//will recreate el to the webpage itself.
    alert(this.innerText);//when you click on the element it will print the text to an alert popup. 
});

let str ='12+3+5+2'//This code block allows the code to be split through each symbol.
const data= str.split(/\+/g);
console.log(data);