<?php
require('conn.php');
// Configurar las cabeceras para la descarga del archivo Excel
header('Content-Type: application/vnd.ms-excel');
header('Content-Disposition: attachment; filename="reporte_lotes.xls"');
header('Pragma: no-cache');
header('Expires: 0');

    echo'
    <table class="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Dirección</th>
            <th scope="col">Teléfono</th>
            <th scope="col">Manzana</th>
            <th scope="col">Lote</th>
            <th scope="col">Calle</th>
            <th scope="col">Superficie</th>
            <th scope="col">Estatus</th>
            </tr>
        </thead>
        <tbody>
    ';
    $x = 0;
    $sql = "SELECT * FROM lote";
    $resultado = $conn->query($sql);
    while($row = $resultado->fetch_assoc()){
        $x++;
        echo'
            <tr>
                <th scope="row">'.$x.'</th>
                <td>'.$row['nombre'].'</td>
                <td>'.$row['direccion'].'</td>
                <td>'.$row['telefono'].'</td>
                <td>'.$row['manzana'].'</td>
                <td>'.$row['lote'].'</td>
                <td>'.$row['calle'].'</td>
                <td>'.$row['superficie'].'</td>
                <td>'.$row['estatus'].'</td>
            </tr>

        ';
    }

    echo'
        </tbody>
    </table>
    ';
?>