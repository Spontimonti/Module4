(function () {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    for (var i = 0; i < names.length; i++) {

        var firstLatter = names[i].charAt(0).toLowerCase();
        if (firstLatter === 'j') {
            byeSpeaker.speak(names[i]);
        }
        else {
            helloSpeaker.speak(names[i]);
        }
    }
})();