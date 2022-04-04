

//run code when the whole page has loaded.
window.onload = function(){
    //declaring components
    var quiz_body = [{
        question: "Which ASP command sends a web page to another web page but keeps the URL the same?",
        answers:{a:`Session["URL"]`,
        b:`Response.Redirect("URL")`,
        c:`Server.Transfer("URL")`,
        d:`None of above`},
        ans:"c"

    },
    {
        question: "Which ASP command allows easy navigation between web pages in a web site?  The URL which the user sees changes also for each web page.",
        answers:{a:`Convert.ToString(number)`,
        b:`Response.Redirect("URL")`,
        c:`Server.Transfer("URL")`,
        d:`Data Validation`},
        ans:"b"

    },
    {
        question: "Which is a client-side technology that saves data on a web page between refreshes?  It saves the state of the form and controls between postback page refreshes.",
        answers:{a:`Application State`,
        b:`Control State`,
        c:`View State`,
        d:`Session State`},
        ans:"c"

    },
    {
        question: "What alters the layout of a web page?",
        answers:{a:`CSS`,
        b:`XHTML`,
        c:`HTML`,
        d:`JavaScript`},
        ans:"a"

    },
    {
        question: "Which image tag is required for strict XHTML compliance?  It specifies text to be displayed whilst the image is loading which shows on the web page particularly if there is a slow connection and the image takes a long time to load",
        answers:{a:`Jpg`,
        b:`Img`,
        c:`Src`,
        d:`Alt`},
        ans:"d"

    },
    {
        question: "Which is a read-only control that a user cannot modify directly, but the contents of which may be changed programatically if required?",
        answers:{a:`ListBox`,
        b:`TextBox`,
        c:`label`,
        d:`ComboBox`},
        ans:"c"

    },
    {
        question: "What allows data to be sent between a web page and a server without fully refreshing the web page?",
        answers:{a:`DOM Document Object Model`,
        b:`JavaScript`,
        c:`Session State`,
        d:`AJAX`},
        ans:"d"

    },
    {
        question: "What is the name given to the library of all items stored in .NET?",
        answers:{a:`AJAX`,
        b:`FCL Framework Class Library`,
        c:`JQuery`,
        d:`DLL Dynamic Link Library`},
        ans:"c"

    },
    {
        question: "Which tool can be used to manage a website???",
        answers:{a:`HTML Hypertext Markup Language`,
        b:`WSAT Website Administration Tool`,
        c:`SQL Structured Query Language`,
        d:`ASP Active Server Pages`},
        ans:"b"

    },
    {
        question: "Which command is used to link an ASP.NET web page with a programming language eg C# so that C# commands are executed and linked to buttons and other controls on the web page?",
        answers:{a:`Cross Page Posting`,
        b:`AutoEvent Wireup`,
        c:`Postback`,
        d:`Visual Studio`},
        ans:"b"

    },
    // function shuffleArray(array) {
    //     let curId = array.length;
    //     // There remain elements to shuffle
    //     while (0 !== curId) {
    //       // Pick a remaining element
    //       let randId = Math.floor(Math.random() * curId);
    //       curId -= 1;
    //       // Swap it with the current element.
    //       let tmp = array[curId];
    //       array[curId] = array[randId];
    //       array[randId] = tmp;
    //     }
    //     return array;
    //   }
    //   // Usage of shuffle
    //   let arr = [1, 2, 3, 4, 5];
    //   arr = shuffleArray(arr);
    //   console.log(arr);




]
    var outer_container = document.querySelector("#b4-container");
    const center = "text-center";
    const margin_bottom = "2vh";
    const none = "none";
    const show = "block";
    var score = 0;
    var event_lis_counter = 0;
    var last_question = false;
    let hr = document.createElement("hr");
    let row = document.createElement("div");
    let row1 = document.createElement("div");
    let innerrow = document.createElement("div");
    let ul = document.createElement("ul");
    let h2 = document.createElement("h2");
    let h3 = document.createElement("h3");
    let p = document.createElement("p");
    let column = document.createElement("div");
    let button = document.createElement("button");
    let timer = document.querySelector("#time-counter");
    let quiz_container = document.querySelector("#quiz-container");
    var question_counter = 0;

    //section of Menu screen container
    var counter = 60;
    row.classList.add("row");
    row.classList.add("align-items-center");
    row.classList.add("justify-content-sm-center");
    row.classList.add("justify-content-md-center");
    row.classList.add("justify-content-lg-center");
    outer_container.append(row);
    h2.textContent="Coding Quiz Challange";
    h2.classList.add(center);
    row.append(h2);
    innerrow.classList.add("row");
    innerrow.classList.add("justify-content-center");
    innerrow.classList.add("col-md-12");
    p.classList.add("mb-5");
    p.textContent = "This quiz will test your knowledge of web development. Check how much you know about web development and your level of acknowledgement. You will have 60 seconds to complete all question. You can finish the game by finishing all the questions or when the timer turns to 0. ";
    p.classList.add(center);
    p.classList.add("col-md-8");
    innerrow.append(p);
    row.append(innerrow);
    button.classList.add("btn");
    button.classList.add("btn-primary");
    button.classList.add("btn-sm");
    button.classList.add("col-md-6");
    button.classList.add("col-sm-8");
    button.classList.add("col-xs-8");
    button.setAttribute("id","start-quiz");
    button.setAttribute("button","button");
    button.textContent = "Start";
    row.append(button);

    //Section for quiz container
    quiz_container.setAttribute("id","quiz-con");
    quiz_container.style.display = none;
    quiz_container.append(row1);
    row1.classList.add("row");
    row1.classList.add("justify-content-md-left");
    row1.append(column);
    column.append(h3);
    h3.textContent = "This is question 1";
    row1.append(ul);
    for (let index = 0; index < 4; index++) {
        let ans0 = document.createElement("li");
        let a = document.createElement("a");
        ul.append(ans0);
        ans0.append(a);
        ans0.style.listStyleType = none;
        ans0.style.marginBottom = '4px';
        a.setAttribute("class","answer");
        a.setAttribute("id",String.fromCharCode(97+index));
        a.style.borderRadius = ".2rem";  
    }
    var response = document.createElement("h5");
    row1.append(response);
    response.textContent = "None";
    function newQuestion(){
        if(question_counter < quiz_body.length){
           question_set = quiz_body[question_counter++];
           h3.textContent = question_counter+": " + question_set.question;
           var innercount = 0;
            for(const [key,value] of Object.entries(question_set.answers)){

                answers[innercount].textContent = String.fromCharCode(65+(innercount++))+": "+value;
            }
        }


    }
    function checkAns(event){
        if(question_counter-1 < quiz_body.length && !last_question){
            if(question_counter === 10){
                last_question = true;
            }
            if(event.target.getAttribute("id") === quiz_body[question_counter-1].ans){
                response.textContent = "Correct";
                console.log("Correct");
                score += 1;
            }
            else{
                response.textContent = "Incorrect";
                console.log("Incorrect");
            }
        }


    }


    var answers = document.querySelectorAll(".answer");
    button.addEventListener("click", function(){

        var quiz = setInterval(function(){
            if(counter === 60){
                newQuestion();
                console.log("log " +event_lis_counter);
                if(event_lis_counter === 0){
                    answers.forEach(answer => {
                        answer.addEventListener("click", function(event){
                            event.stopPropagation();
                            checkAns(event);
                            newQuestion();
                        });
                        
                    });
                    event_lis_counter += 1;
                }


                outer_container.style.display = none;
                quiz_container.style.display = show;
            }


            timer.textContent="Time: "+counter--;
            console.log(question_counter);
            if(counter === -1 || (question_counter === 10 && last_question === true)){
                alert("pass");
                
                quiz_container.style.display = none;
                outer_container.style.display = show;
                clearInterval(quiz);
                counter = 60;
                question_counter = 0;
                timer.textContent="Time: "+0;
            }
        },1000);
    }); 
}
   

