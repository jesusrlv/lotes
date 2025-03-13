<?php

require('conn.php');

    $capa = $_POST['capa'];

    $query = "SELECT * FROM foto WHERE id_ext = '$capa'";
    $resultado = $conn->query($query);
    $filas = $resultado->num_rows;

    while($row = $resultado -> fetch_assoc()){
        echo'
            <div class="col-3 text-center position-relative">
                <img src="fotos/'.$row['ruta'].'" class="img-thumbnail" alt="..." onclick="inside(\''.$row['ruta'].'\')">
                    <span class="badge rounded-pill text-bg-danger mt-2 position-absolute" style="bottom: 10px; left: 50%; transform: translateX(-50%);" onclick="deleteImage('.$row['id'].')"><i class="bi bi-trash"></i></span>
            </div>
        ';

    }
?>
