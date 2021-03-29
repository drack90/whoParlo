<?php

require_once 'autoloadClass.php';

try {
    $api = new studentApi();
    echo $api->run();
} catch (Exception $e) {
    echo json_encode(Array('error' => $e->getMessage()));
}

?>