const hbs = require('hbs');

hbs.registerHelper('getYear', () => {
    return new Date().getFullYear()
});
hbs.registerHelper('capitalize', (text) => {
   let words = text.split(' ');
   words.forEach((word, id) => {
       words[id] = `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`;
   });
   return words.join(' ');
})