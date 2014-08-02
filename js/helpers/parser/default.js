module.exports = function (rawData) {
    var talks = [],
        id = 1;

    for (date in rawData) {
        var schedule = rawData[date];

        var schedule_length = schedule.length;
        for (var i = 0; i < schedule_length; i++) {
            var slot = schedule[i];

            var talk_length = slot.talks.length;
            for (var j = 0; j < talk_length; j++) {
                var talk = slot.talks[j];

                if (!talk.description) {
                    talk.description = 'No description available.';
                }

                talk.date = date;
                talk.time = slot.time;

                if (!talk.id) talk.id = id++;

                talks.push(talk);
            }
        }
    }

    return talks;
};