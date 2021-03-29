<?php
require 'db.php';
echo 'kek';

$datas = $database->select("geopoint", [
    "id"

]);

print_r($datas);