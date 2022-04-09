

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

    }
    ]
    
    const center = "text-center";
    const margin_bottom = "2vh";
    const none = "none";
    const show = "block";
    var score = 0;
    var event_lis_counter = 0;
    var last_question = false;
    var question_counter = 0;
   
    
 
    
    
    
 
    // Session of navbar element
    let timer = $("#time-counter");
    let scoreboard_status = false;
    let scoreboard_link = $("#show-scoreboard");
    //scoreboard_link got clicked either open/close scoreboard
    scoreboard_link.click(function(){
        if(!scoreboard_status){
            showScoreboard();
            scoreboard_link.text("click here to return");
        }
        else{
            scoreboard.css("display",none);
            scoreboard_link.text("View Scoreboard");
            scoreboard_body = $("tbody");
            scoreboard_body.remove();
            scoreboard_status = false;
        }

    });
    

    //section of Menu screen container
    var counter = 60;
    var outer_container = $("#b4-container");
    let row = $("<div/>");
    let innerrow = $("<div/>");
    let h2 = $("<h2/>");
    let p = $("<p/>");
    let button = $("<button/>");
    row.attr("class","row align-items-center justify-content-sm-center justify-content-md-center justify-content-lg-center");
    outer_container.append(row);
    h2.text("Coding Quiz Challange");
    h2.addClass(center);
    row.append(h2);
    innerrow.attr("class","row justify-content-center col-md-12");
    p.attr("class","mb-5 col-md-8");
    p.text("This quiz will test your knowledge of web development. Check how much you know about web development and your level of acknowledgement. You will have 60 seconds to complete all question. You can finish the game by finishing all the questions or when the timer turns to 0. ");
    p.addClass(center);
    innerrow.append(p);
    row.append(innerrow);
    button.attr("class","btn btn-primary btn-sm col-md-6 col-sm-8 col-xs-8");
    button.attr("id","start-quiz");
    button.attr("button","button");
    button.text("Start");
    row.append(button);

    //Section for quiz container
    let quiz_container = $("#quiz-container");
    let row1 = $("<div/>");
    let column = $("<div/>");
    let h3 = $("<h3/>");
    let ul = $("<ul/>");
    quiz_container.attr("id","quiz-con");
    quiz_container.css("display",none);
    quiz_container.append(row1);
    row1.addClass("row");
    row1.addClass("justify-content-md-left");
    row1.append(column);
    column.append(h3);
    h3.text("This is question 1");
    row1.append(ul);
    for (let index = 0; index < 4; index++) {
        let ans0 = $("<li/>");
        let a = $("<a/>");
        ul.append(ans0);
        ans0.append(a);
        ans0.css("list-style-type",none);
        ans0.css("margin-bottom",'4px');
        a.attr("class","answer");
        a.attr("id",String.fromCharCode(97+index));
        a.css("border-radius",".2rem");  
    }
    var response = document.createElement("h5");
    row1.append(response);
    response.textContent = "None";
    function newQuestion(){
        if(question_counter < quiz_body.length){
           question_set = quiz_body[question_counter++];
           h3.text(question_counter+": " + question_set.question);
           var innercount = 0;
            for(const [key,value] of Object.entries(question_set.answers)){

                answers[innercount].textContent = String.fromCharCode(65+(innercount++))+": "+value;
            }
        }


    }
    
    // Session of after game 
    let after_container = $("#after-container");
    let after_row = $("<div/>");
    let over_heading = $("<h4/>");
    let over_p = $("<p/>");
    let submit_form = $("<form/>");
    let initials_inputs = $("<input/>");
    let submit_button = $("<input/>");
    let lebal = $("<p/>");
    after_container.append(after_row);
    after_container.css("display",none);
    after_row.attr("class","row justify-content-md-center");
    // after_row.classList.add(");
    after_row.append(over_heading);
    over_heading.text("All done!!!");
    after_row.append(over_p);
    after_row.append(submit_form);
    submit_form.append(lebal);
    lebal.text("Enter initials: ");
    submit_form.append(initials_inputs);
    initials_inputs.attr("id","initials-input");
    submit_form.append(submit_button);
    submit_button.text("submit");
    submit_button.attr("type","submit");
    submit_form.submit(function(event){
        console.log(initials_inputs.val());
        saveScore(initials_inputs.val(),score);
        event.preventDefault();
        after_container.css("display",none);
        outer_container.css("display",show);
    });

    //JQuery is much more convenient :(
    //scoreboard session
    let scoreboard = $("#scoreboard-container");
    scoreboard.css("display",none);
    let scoreboard_table = $("<table/>");
    let scoreboard_head = $("<thead/>");
    let tr_head = $("<tr/>");
    let th_score = $("<th/>");
    let th_name = $("<th/>");
    let th_rank = $("<th/>");
    scoreboard.append(scoreboard_table);
    scoreboard_table.attr("class","table table-dark table-striped");
    scoreboard_table.append(scoreboard_head);
    scoreboard_head.append(tr_head);
    tr_head.append(th_rank);
    th_rank.text("Rank");
    tr_head.append(th_name);
    th_name.text("Name");
    tr_head.append(th_score);
    th_score.text("Score");



    


    //randomise array
    function randomiseArray(array) { 
        for (var i = array.length - 1; i > 0; i--) {  
            var j = Math.floor(Math.random() * (i + 1)); 
            var temp = array[i]; 
            array[i] = array[j]; 
            array[j] = temp; 
        } 
        return array;

    }

    //selection reverse sort git 
    function sortByscore(array){
        let i;
        for(i = array.length-1; i> -1; i--){
            let largest = array[i];
            for (let j = i-1; j > i; j--) {
                if(array[j].score > largest.score){
                    largest = array[j];                   
                }
                var temp = largest;
                largest = array[i];
                array = temp;
                
            }
        }
        return ;
    }
    // save user score
    function saveScore(namestore,scorestore){
        var scores = {name:namestore,score:scorestore};
        if(localStorage.getItem("scores") === null){
            var firstscore = {name:namestore,score:scorestore};
            localStorage.setItem("scores",JSON.stringify(firstscore));
        }
        else{
        var storedScores = [];
        storedScores.push(JSON.parse(localStorage.getItem("scores")));
        storedScores.push(scores);
        localStorage.setItem("scores",JSON.stringify(storedScores));
        console.log(JSON.stringify(localStorage.getItem("scores")));
        }
    }
    // show the scoreboard
    function showScoreboard(){
        //show if localstorage not null
        if(localStorage.getItem("scores") !== null){
            scoreboard_status = true;
            let scoreboard_body = $("<tbody/>");
            scoreboard_table.append(scoreboard_body);
            var scores =  JSON.parse(localStorage.getItem("scores"));
            for(i = 0; i< scores.length; i++){
                const name = scores[i].name;
                const score = scores[i].score;
                let tr_data = $("<tr/>");
                let td_rank = $("<td/>");
                let td_name = $("<td/>");
                let td_score = $("<td/>");
                scoreboard_body.append(tr_data);
                tr_data.append(td_rank);
                td_rank.text(i+1);
                tr_data.append(td_name);
                td_name.text(name);
                tr_data.append(td_score);
                td_score.text(score);

            }
            scoreboard.css("display",show);
        }
        else{
            alert("There no scores stored");
        }
    }





    //check answer 
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
    //Button click and quiz starts
    button.click(function(){

        var quiz = setInterval(function(){
            if(counter === 60){
                
                quiz_body = randomiseArray(quiz_body);
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

                scoreboard_link.css("display",none);
                outer_container.css("display",none);
                quiz_container.css("display",show);
            }


            timer.text("Time: "+counter--);
            console.log(question_counter);
            if(counter === -1 || (question_counter === 10 && last_question === true)){                
                quiz_container.css("display",none);
                after_container.css("display",show);
                scoreboard_link.css("display",show);
                clearInterval(quiz);
                counter = 60;
                question_counter = 0;
                timer.text("Time: "+0);
                over_p.text("Your Final score is "+score + " out of 10");
            }
        },1000);
    }); 
}
   

