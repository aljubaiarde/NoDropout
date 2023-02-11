<?php

$allowed_ips = array('111.111.111.111', '222.222.222.222', '333.333.333.333', '444.444.444.444');

if (!in_array($_SERVER['REMOTE_ADDR'], $allowed_ips)) {
    header('HTTP/1.0 403 Forbidden');
    echo 'Access is restricted to specific IP addresses only.';
    exit;
}

?>
