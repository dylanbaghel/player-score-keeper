var winCount = 5;
var pOneScore = 0;
var pTwoScore = 0;
var gameOver = false;

$("input").change(function() {
    winCount = Number($("input").val());
    $("#maxScore").text(winCount);
});

$("#pOneBtn").click(function() {
    if (!gameOver) {
        pOneScore++;
        if (pOneScore === winCount) {
            gameOver = true;
            $("#pOneScore").addClass("win");
            $("#pOneBtn").css({
                "color": "white",
                "background": "blue",
                "width": "110px",
                "padding": "5px 20px",
                "border-radius": "50px" 
            }).text("Won");
            // $("#pOneBtn").text("Won");    
        }
        $("#pOneScore").text(pOneScore);
    }
});

$("#pTwoBtn").click(function() {
    if (!gameOver) {
        pTwoScore++;
        if (pTwoScore === winCount) {
            gameOver = true;
            $("#pTwoScore").addClass("win");
            $("#pTwoBtn").css({
                "color": "white",
                "background": "blue",
                "width": "110px",
                "padding": "5px 20px",
                "border-radius": "50px" 
            }).text("Won");
        }

        $("#pTwoScore").text(pTwoScore);

    }
});

$("#reset").click(function() {
    pOneScore = 0;
    pTwoScore = 0;
    gameOver = false;
    $("#pOneScore,#pTwoScore").removeClass("win");
    $("#pOneScore,#pTwoScore").text("0"); 
    $("#pOneBtn,#pTwoBtn").removeAttr("style");
    $("#pTwoBtn").text("Player Two");
    $("#pOneBtn").text("Player One");
});