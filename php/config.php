<?php


require $_SERVER['DOCUMENT_ROOT'] .'/vendor/autoload.php';
 
// Using Medoo namespace
use Medoo\Medoo;
 
// Initialize
$database = new Medoo([
    'database_type' => 'mysql',
    'database_name' => 'name',
    'server' => 'localhost',
    'username' => 'your_username',
    'password' => 'your_password'
]);
 
// Enjoy
$database->insert('account', [
    'user_name' => 'foo',
    'email' => 'foo@bar.com'
]);
 
$data = $database->select('account', [
    'user_name',
    'email'
], [
    'user_id' => 50
]);
 
echo json_encode($data);
 
// [
//     {
//         "user_name" : "foo",
//         "email" : "foo@bar.com"
//     }
// ]



?>