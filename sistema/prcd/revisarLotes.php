<?php

require('conn.php');

    $lote = $_POST['lote'];

    $query = "SELECT * FROM lote WHERE capa = '$lote'";
    $resultado = $conn->query($query);
    $filas = $resultado->num_rows;

    if($filas == 1){
        $row = $resultado->fetch_assoc();
        $capa = $row['capa'];
        $nombre = $row['nombre'];
        $direccion = $row['direccion'];
        $telefono = $row['telefono'];
        $manzana = $row['manzana'];
        $lote = $row['lote'];
        $calle = $row['calle'];
        $superficie = $row['superficie'];
        $estatus = $row['estatus'];
        $tipoLote = $row['tipo_lote'];

        echo json_encode(array(
            'success'=>1,
            'capa'=>$capa,
            'nombre'=>$nombre,
            'direccion'=>$direccion,
            'telefono'=>$telefono,
            'manzana'=>$manzana,
            'lote'=>$lote,
            'calle'=>$calle,
            'superficie'=>$superficie,
            'estatus'=>$estatus,
            'tipoLote'=>$tipoLote
        ));
    }
    else{
        echo json_encode(array(
            'success'=>0
        ));
    }
?>
