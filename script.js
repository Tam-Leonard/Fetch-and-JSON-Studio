// TODO: add code here
window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json")
    .then(function(response) {
        return response.json();
     }).then(function(response){

       //console.log(response)

       //Bonus Mision: 
       response.sort(function(a,b) {
        return a.hoursInSpace < b.hoursInSpace ? 1 : -1; //quick way to do if else statement w/simple argument
       });
       //a and b compare to each other and 
       //either puts them in two diffrent places or keep them the same KW explination 44:56 
       //KW's code is let sortedAstronauts = response.sort(function(a,b{ return a.hoursInSpace - b.hoursInSpace}))
       //CJ's code


        //push out each astro to the screen
        let myContainer = document.getElementById('container');
        let allMyHtml = "";

        //Bonus Mission:3
        let myCount = `
        <h3> Astro Count: ${response.length} </h3>`
        allMyHtml += myCount;



        for(let i = 0; i < response.length; i++){
            console.log(response[i]);
            let myHtml = `<div class="astronaut">
            <div class="bio">
               <h3>${response[i].firstName} ${response[i].lastName}</h3>
               <ul>
                  <li>Hours in space: ${response[i].hoursInSpace}</li>
                  <li ${response[i].active ? 'class="green-text"' : ''}>Active: ${response[i].active}</li> 
                  <li>Skills: ${response[i].skills.join(", ")}</li>
               </ul>
            </div>
            <img class="avatar" src="${response[i].picture}">
         </div>`;
         //Bonus Mission: 3 is li text green-text

        allMyHtml += myHtml; 
        //or we can just put += myHtml here w/o delaring allMyHtml as a variable at the top and at the end outside of the for loop
        }
        
        myContainer.innerHTML = allMyHtml;

     })
        
} );
//KW Reg code
//CJ Bonus Mission: 17:16 (when she says data = response on my code)