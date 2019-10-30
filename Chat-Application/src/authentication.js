// on form submit
// talk to database
// see if username is already taken.
// if it's not taken, add it.
// if it is taken, return false with error.

const express = require('express');
const app = express();
const port = 7217

app.get('/', (req,res) => res.send('Hello World!'))

app.get('/App.js', function (req, res) {
  res.render('/Chat.js',{
		local_css:"App.css",
		my_title:"Testing"
	});
})

app.listen(port, () => console.log('Example . . .'))
