const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`<html lang="en-us"><head>
   <meta charset="utf-8">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>DOOM</title>
      <meta name="twitter:card" content="player">
	<meta name="twitter:site" content="@izzyz">
	<meta name="twitter:title" content="puppies">
	<meta name="twitter:description" content="great stuff">
	<meta name="twitter:image" content="https://twitter.com/izzyz">
	<meta name="twitter:player" content="https://observablehq.com/embed/@iz/yt-pip3?cell=*">
	<meta name="twitter:player:width" content="480">
	<meta name="twitter:player:height" content="480">
   </head>
   <body>
     
    <div>
      <iframe width="100%" height="500" frameborder="0"
  src="https://observablehq.com/embed/@iz/yt-pip3?cell=*"></iframe>
      <a href="https://twitter.com/izzyz" class="handle">
          @izzyz
        </a>
     
   

</div>


</body></html>`)
});

app.listen(3000, () => {
  console.log('server started');
});
