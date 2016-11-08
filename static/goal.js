var goalList = [
    "Introduce yourself to someone new!",
    "Make two phone calls - doesn't matter what!",
    "Make small talk with someone!",
    "Reconnect with an old friend on Facebook",
    "Spend a few minutes on Tinder~",
    "Send one email about an apartment"
];

var getRandomInt = function(floor, ceiling) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

var goalPicker = function(goals) {
    var index = getRandomInt(0, goals.length);
    var goal = goals[index];
};

var goalSetter = function(goal) {
    var element = document.getElementById("social-goal");
    element.innerHTML = goal;
};

var goal = goalPicker(goalList);
goalSetter(goal);