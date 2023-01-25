<?php 

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
	exit(0);
}
function send($message) {
	$command = "cd ..;node index.js '$message' 2>&1"; 
	return shell_exec($command);
}
// Send sommation
$result = send("<@1067757463601938452> Incoming");
//691335864797626430

// Read json body
$json = file_get_contents('php://input');
$data = json_decode($json);

// Execute command
$result = $result . send($data->message);

// Return result
echo($result);
