const events = [{
        id: 1,
        title: "Internal Prep with Mike",
        start_timestamp: "2017-AUG-02 10:00:00",
        end_timestamp: "2017-AUG-02 11:00:00"
    },
    {
        id: 2,
        title: "Work on build-a-poc app",
        start_timestamp: "2017-AUG-02 14:00:00",
        end_timestamp: "2017-AUG-02 15:00:00"
    }
];

module.exports = {
    Query: {
        allEvents: () => events,
    },
    Mutation: {
        createEvent: (_, data) => {
            const newEvent = Object.assign({ id: events.length + 1 }, data);
            events.push(newEvent);
            return newEvent;
        }
    },
};