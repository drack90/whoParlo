<?php


$id = '1azdedMIO5HmwjwJvC_h7PcVvIj6QFY93C4dTOfF7Y4Q';
$gid = $_GET['listID'];

$csv = file_get_contents('https://docs.google.com/spreadsheets/d/' . $id . '/export?format=csv&gid=' . $gid);
$csv = explode("\r\n", $csv);
$array = array_map('str_getcsv', $csv);


//for ($i=0; $i<count($array); $i++) {
//    if ($array[$i][7] === 'Fiat') {
//        print_r('<p>' . $array[$i][5] . ' ' . '<b style="color: red">' . $array[$i][7]) . '</b>' . '</p>';
//    }else{
//        print_r('<p>' . $array[$i][5] . ' ' . $array[$i][7]) . '</p>';
//
//    }
//}


$array_data = [];
foreach ($array as $value){
    $name = $value[5];
    $tarif = $value[7];
    $arr_name = [];
     array_push($arr_name, $name, $tarif);
     array_push($array_data, $arr_name);

}
$array_data = json_encode($array_data);
return $array_data;


//https://magnitalia.getcourse.ru/pl/api/account/groups?key=2m8rqxECTbgLWe18eQLgfQqGWAXrs4H8VyVJQaY7yxJ2dpPtKbSP1E7Q8SpDwcyPwE3VOXdeo4O9Rvk7HfHs0h7sKAQ1Oz7lKxyNJvdMpz6vHuaeqiYKNI46Yeop2yQI

//! {"id":"1070883","name":"[онлайн-встречи] поток 15"} 
//https://magnitalia.getcourse.ru/pl/api/account/groups/1070879/users?key=2m8rqxECTbgLWe18eQLgfQqGWAXrs4H8VyVJQaY7yxJ2dpPtKbSP1E7Q8SpDwcyPwE3VOXdeo4O9Rvk7HfHs0h7sKAQ1Oz7lKxyNJvdMpz6vHuaeqiYKNI46Yeop2yQI&status=active
//{"success":true,"info":{"export_id":3003140},"error_message":"","error":false}
//https://magnitalia.getcourse.ru/pl/api/account/exports/3003140?key=2m8rqxECTbgLWe18eQLgfQqGWAXrs4H8VyVJQaY7yxJ2dpPtKbSP1E7Q8SpDwcyPwE3VOXdeo4O9Rvk7HfHs0h7sKAQ1Oz7lKxyNJvdMpz6vHuaeqiYKNI46Yeop2yQI

//В ответ прилетает JSON (CVS)


//! {"id":"1070879","name":"[онлайн-встречи] доп доступ для Alfa и Ferrari"}