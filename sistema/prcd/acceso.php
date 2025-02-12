<?php

require('conn.php');

$usr = $_POST['usr'];
$pwd = $_POST['pwd'];

$query = "SELECT * FROM usr WHERE usr = '$usr' AND pwd = '$pwd'";
$resultado = $conn->query($query);
$filas = $resultado->num_rows;

if($filas == 1){
    echo json_encode(array(
        'success'=>1
    ));
}
else{
    echo json_encode(array(
        'success'=>0
    ));
}
