<?php    
    session_start();
    include('conn.php');

    date_default_timezone_set('America/Mexico_City');
    setlocale(LC_TIME, 'es_MX.UTF-8');
    
    // $id=$_SESSION['id'];
    $capa = $_POST['capa'];
    // $tipo_doc = 1;
    $fecha_sistema = strftime("%Y-%m-%d,%H:%M:%S");
    $link= 'foto';
    
    //query id ++

    $query = "SELECT * FROM foto WHERE id_ext = '$capa' ORDER BY id DESC LIMIT 1";
    $resultado = $conn->query($query);
    $filas = $resultado->num_rows;
    if($filas == 0){
        $id = 1;
    }
    else{
        $row = $resultado->fetch_assoc();
        $id = $row['id']+1;
    }
    

$fileName = $_FILES["file"]["name"]; // The file name
$fileTmpLoc = $_FILES["file"]["tmp_name"]; // File in the PHP tmp folder
$fileType = $_FILES["file"]["type"]; // The type of file it is
$fileSize = $_FILES["file"]["size"]; // File size in bytes
$fileErrorMsg = $_FILES["file"]["error"]; // 0 for false... and 1 for true
if (!$fileTmpLoc) { // if file not chosen
    echo "ERROR: Please browse for a file before clicking the upload button.";
    exit();
}


$archivo_ext=$_FILES['file']['name'];
$extension = pathinfo($archivo_ext, PATHINFO_EXTENSION);

    if(move_uploaded_file($_FILES["file"]["tmp_name"],"../fotos/". $link .'_'. $capa .'_'. $id .'.'.$extension)){
    echo "$fileName carga completa";
    
    $ruta = $link .'_'. $capa .'_'. $id .'.'.$extension;
    $sqlInsert= "INSERT INTO foto (
    ruta,
    id_ext
    ) 
    VALUES(
    '$ruta',
    '$capa'
    )";
    $resultado= $conn->query($sqlInsert);
    
    
} else {
    echo "move_uploaded_file function failed";
}
    
?>
