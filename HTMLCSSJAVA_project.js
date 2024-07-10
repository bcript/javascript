<!DOCTYPE HTML>
<html>
<head>
  <meta charset ='utf-8'>
  <title>Example Page</title>
</head>
<body>
  <h1 id='greeting'>Hello world</h1>
  <p id='info'></p>
  <p id='datetime'></p>
  <script>
    // add alert and prompt
    alert('Hello world!');
    let name = prompt('Enter name: ');
    if (name) {
      alert('Hello ' + name +'!!!');
      document.getElementById('greeting').textContent = 'Hello ' + name.trim() + '!';
    }
	else {
		alert('Name error detected');
	}
	
	// prompt for other info
	let	info = prompt('Tell us something about yourself: ');
	document.getElementById('info').textContent = info;
	
    // get current date and time
	let now = new Date();
	let dateStr = now.toLocaleDateString();
	let timeStr = now.toLocaleTimeString();
	
	document.getElementById('datetime').innerHTML = 'Date: <b>' + dateStr + '</b><br>';
  document.getElementById('datetime').innerHTML += 'Time <b>' + timeStr + '</b>';
  </script>
</body>
</html>
