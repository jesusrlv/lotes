<?php

require('conn.php');

    $capa = $_POST['capa'];
    $nombre = $_POST['nombre'];
    $direccion = $_POST['direccion'];
    $telefono = $_POST['telefono'];
    $manzana = $_POST['manzana'];
    $lote = $_POST['lote'];
    $calle = $_POST['calle'];
    $superficie = $_POST['superficie'];
    $estatus = $_POST['estatus'];

    $query = "INSERT INTO lote (
        capa,
        nombre,
        direccion,
        telefono,
        manzana,
        lote,
        calle,
        superficie,
        estatus
    )
    VALUES(
        '$capa',
        '$nombre',
        '$direccion',
        '$telefono',
        '$manzana',
        '$lote',
        '$calle',
        '$superficie',
        '$estatus'
    )";
    $resultado = $conn->query($query);

    if($resultado){

        echo json_encode(array(
            'success'=>1
        ));
    }
    else{
        $error = $conn->error;
        echo json_encode(array(
            'success'=>0,
            'error'=>$error
        ));
    }
?>
