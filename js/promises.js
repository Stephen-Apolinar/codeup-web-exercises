"use strict";
const wait = seconds => {
    new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, seconds);
    });
};

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));



const request = fetch('https://api.github.com/users/Stephen-Apolinar/events/public', {
    headers: {'Authorization': '9196b06ad073571240dbf1bcbfe9719a81d254eb'}
});
request
    .then(response => response.json())
    .then(publicEvents => console.log(publicEvents[0].created_at))
;


