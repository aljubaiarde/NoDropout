<?php

$allowed_ips = array("111.111.111.111", "222.222.222.222", "333.333.333.333", "444.444.444.444");
$client_ip = $_SERVER['REMOTE_ADDR'];

if (!in_array($client_ip, $allowed_ips)) {
    header("HTTP/1.0 403 Forbidden");
    echo "<h1>403 Forbidden</h1>";
    echo "You are not authorized to access this page.";
    exit();
}

?>


<html>
<head>
	<title>Hello World Website</title>
</head>
<body>
	<h1>Welcome to the Hello World Website</h1>
	<p>This page is protected by IP restriction. Only specific IP addresses can access this page.</p>
</body>
</html>
