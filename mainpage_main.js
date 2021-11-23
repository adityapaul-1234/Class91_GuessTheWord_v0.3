var player1 = localStorage.getItem("User1");
var player2 = localStorage.getItem("User2");
var score1 = 0;
var score2 = 0;
var qt = player1;
var at = player2;

document.getElementById("player1_score").innerHTML = player1 + ": " + score1;
document.getElementById("player2_score").innerHTML = player2 + ": " + score2;
document.getElementById("player_question").innerHTML = "Question Turn: " + qt;
document.getElementById("player_answer").innerHTML = "Answer Turn: " + at;

function send(){
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    new_word = get_word.toLowerCase();
    len = word.length;
    for(var i=1; i<len;){
        temp = word.charAt(i);
        word = word.replace(temp, "_");
        i = i + 2;
    }
    console.log(word);

    question_word = "<h4> Your word to guess in lowercase is: " + word + "</h4>";
    input_box = "<input class='form-control' placeholder='Enter your answer here' id='answer'>";
    check_button = "<br><button type='button' class='btn btn-info' id='check' onclick='check()'>Check</button>"; 
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}