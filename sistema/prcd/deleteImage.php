<?php
require('conn.php');

$id = $_POST['id'];

// Primero, obtenemos la ruta de la imagen antes de eliminarla de la base de datos
$sqlSelect = "SELECT ruta FROM foto WHERE id = '$id'";
$resultadoSelect = $conn->query($sqlSelect);

if ($resultadoSelect && $resultadoSelect->num_rows > 0) {
    $row = $resultadoSelect->fetch_assoc();
    $ruta_imagen = $row['ruta']; // Suponiendo que la columna se llama "ruta"

    // Eliminamos el registro de la base de datos
    $sqlDelete = "DELETE FROM foto WHERE id = '$id'";
    $resultadoDelete = $conn->query($sqlDelete);

    if ($resultadoDelete) {
        // Si la eliminación en la base de datos fue exitosa, eliminamos la imagen del servidor
        if (file_exists("../fotos/".$ruta_imagen)) {
            unlink("../fotos/".$ruta_imagen); // Elimina el archivo físico
        }

        echo json_encode(array(
            "success" => 1
        ));
    } else {
        echo json_encode(array(
            "success" => 0,
            "message" => "Error al eliminar el registro de la base de datos"
        ));
    }
} else {
    echo json_encode(array(
        "success" => 0,
        "message" => "No se encontró la imagen en la base de datos"
    ));
}
?>