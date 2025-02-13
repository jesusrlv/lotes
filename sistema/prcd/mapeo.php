<?php
require('conn.php');

    $sql = "SELECT * FROM lote";
    $resultado = $conn->query($sql);
    
    $data = []; // Array para almacenar los resultados.

    if ($resultado) {
        while ($row = $resultado->fetch_assoc()) {
            $data[] = $row; // Agregar cada fila al array.
    }
     // Convertir el array a JSON
     $json_resultados = json_encode($data);

        echo $json_resultados; // Devolver los datos en formato JSON.
    
    // Devolver los datos en formato JSON.
    } else {
        // No se encontraron resultados, puedes devolver un mensaje de error o un JSON vacío
        echo json_encode(array('mensaje' => 'No se encontraron resultados'));
    }
?>