console.log("Header.js initialized");

const header = document.createElement('template');

header.innerHTML = `
    <div class="header">
        <h1><a href="index.html">FlameFish</a></h1>
        <hr style="margin-top: 10px;">            
    </div>

    <div class="nav">
        <nobr>
        <h2><a href="index.html">HOME </a><a href="games.html"> GAMES</a></h2>
        </nobr>
        <hr>
    </div>
`;


document.body.prepend(header.content);

console.log("Header appended");