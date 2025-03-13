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
    $tipoLote = $_POST['tipoLote'];

    $query = "INSERT INTO lote (
        capa,
        nombre,
        direccion,
        telefono,
        manzana,
        lote,
        calle,
        superficie,
        estatus,
        tipo_lote
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
        '$estatus',
        '$tipoLote'
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
