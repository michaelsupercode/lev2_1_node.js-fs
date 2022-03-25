const fs = require('fs');
const data = require('./data.json');

const useStrings = data.map((e) => {
    return e.id + ' - ' + e.title + '\n' + e.description;
});

console.log(useStrings.join('\n\n'));

const stringOut = useStrings.join('\n\n');

fs.writeFile('string.txt', stringOut, () => {
    return;
});