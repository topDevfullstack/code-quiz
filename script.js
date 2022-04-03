var outer_container = document.querySelector(".container");
const center = "text-center";
const margin_bottom = "2vh";
//run code when the whole page has loaded.
window.onload = function(){
    let row = document.createElement("div");
    let innerrow = document.createElement("div");
    let intro = document.createElement("h2");
    let subtitle = document.createElement("p");
    let button = document.createElement("button");
    
    row.classList.add("row");
    row.classList.add("align-items-center");
    row.classList.add("justify-content-sm-center");
    row.classList.add("justify-content-md-center");
    row.classList.add("justify-content-lg-center");
    outer_container.append(row);
    intro.textContent="Coding Quiz Challange";
    intro.classList.add(center);
    row.append(intro);
    innerrow.classList.add("row");
    innerrow.classList.add("justify-content-center");
    innerrow.classList.add("col-md-12");
    subtitle.classList.add("mb-5");
    subtitle.textContent = "This quiz will test your knowledge of web development. Check how much you know about web development and your level of acknowledgement";
    subtitle.classList.add(center);
    subtitle.classList.add("col-md-8");
    innerrow.append(subtitle);
    row.append(innerrow);
    button.classList.add("btn");
    button.classList.add("btn-primary");
    button.classList.add("btn-sm");
    button.classList.add("col-md-6");
    button.classList.add("col-sm-8");
    button.classList.add("col-xs-8");
    // debugger;
    button.setAttribute("id","start-quiz");
    button.setAttribute("button","button");
    button.textContent = "Start";
    row.append(button);
    button.addEventListener("click", function(){
        alert("gogoge");
        }); 
}
   

