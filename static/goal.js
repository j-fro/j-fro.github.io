var goalList = [
    "Introduce yourself to someone new!",
    "Make two phone calls - doesn't matter what!",
    "Make small talk with someone!",
    "Reconnect with an old friend on Facebook",
    "Spend a few minutes on Tinder~",
    "Send one email about an apartment"
];

var getRandomInt = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

var goalPicker = function(goals) {
    var index = getRandomInt(0, goals.length);
    var goal = goals[index];
    return goal;
};

var goalSetter = function(goal) {
    var element = document.getElementById("social-goal");
    console.log(element);
    element.innerHTML = "<h2>" + goal + "</h2>";
};

var goal = goalPicker(goalList);
goalSetter(goal);