<?php
require '../vendor/autoload.php';

use Medoo\Medoo;

$db = new Medoo([
    // required
    'database_type' => 'mysql',
    'database_name' => 'cb39858_wsp',
    'server' => '5.23.50.173',
    'username' => 'cb39858_hdif',
    'password' => 'JinsUd6ottyu',

//    // [optional]
//    'charset' => 'utf8mb4',
//    'collation' => 'utf8mb4_general_ci',
//    'port' => 3306,
//
//    // [optional] Table prefix
//    'prefix' => 'PREFIX_',
//
//    // [optional] Enable logging (Logging is disabled by default for better performance)
//    'logging' => true,
//
//    // [optional] MySQL socket (shouldn't be used with server and port)
////    'socket' => '/tmp/mysql.sock',
//
    // [optional] driver_option for connection, read more from http://www.php.net/manual/en/pdo.setattribute.php
    'option' => [
        PDO::ATTR_CASE => PDO::CASE_NATURAL
    ]
//
//    // [optional] Medoo will execute those commands after connected to the database for initialization
//    'command' => [
//        'SET SQL_MODE=ANSI_QUOTES'
//    ]
]);
