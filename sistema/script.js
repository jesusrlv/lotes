function zoomIn() {
    let miDiv = document.getElementById('lotes');
    miDiv.style.transform = 'scale(1.5)'; /* Restablece el tamaño al 100% */
}
function zoomOut() {
    let miDiv = document.getElementById('lotes');
    miDiv.style.transform = 'scale(1)'; /* Restablece el tamaño al 100% */
}

function revisarDB(lote) {
    $.ajax({
        url: 'prcd/revisarLotes.php',
        type: 'POST',
        dataType: 'json',  // type of response we expect from the server
        data: {lote: lote},
        success: function(response) {
            var jsonData = JSON.parse(JSON.stringify(response));
            var success = jsonData.success;
            var capa = jsonData.capa;
            var nombre = jsonData.nombre;
            var direccion = jsonData.direccion;
            var telefono = jsonData.telefono;
            var manzana = jsonData.manzana;
            var lote = jsonData.lote
            var calle = jsonData.calle;
            var superficie = jsonData.superficie;
            console.log(jsonData);
            if (success = 1) {
               
                document.getElementById('capa').value = capa;
                
                document.getElementById('manzana').value = manzana; 
                document.getElementById('lote2').value = lote;
                document.getElementById('calle').value = calle;
                document.getElementById('superficie').value = superficie;
                console.log('capa: '+capa);
                document.getElementById('nombre').value = nombre;
                document.getElementById('direccion').value = direccion;
                document.getElementById('telefono').value = telefono;
                
            }
            else{
                alert('No existen datos en el lote');
            }
        }
    });
}