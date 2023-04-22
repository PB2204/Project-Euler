const https = require('https');

https.get("https://projecteuler.net/project/resources/p022_names.txt", (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    let names = data.split(',');
    names = names.map(name => name.replace(/[^\w\s]|_/g, "").toUpperCase()).sort();
    let answer = 0;
    for (let i = 0; i < names.length; i++) {
        let value = names[i].split('').reduce((sum, char) => sum + char.charCodeAt(0) - 64, 0);
        value *= (i + 1);
        answer += value;
    }
    console.log(answer);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});
