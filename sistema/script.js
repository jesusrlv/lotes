function abrirModal(lote) {
    console.log("ID recibido:", lote); // Para verificar que llega el ID correctamente
    document.getElementById('capa').value = "";

    // Modificar el contenido del modal con el ID recibido
    // document.getElementById('lote').innerText = 'Información del lote ' +lote;
    document.getElementById('capa').value = lote;

    // Mostrar el modal
    const modal = new bootstrap.Modal(document.getElementById('loteModal'));
    modal.show();
    revisarDB(lote);
}

function updateZoom(event) {
    const svgContainer = document.getElementById('svgContainer');
    const rect = svgContainer.getBoundingClientRect(); // Obtener el tamaño y posición del contenedor
    const offsetX = event.clientX - rect.left; // Calcular la posición X del clic
    const offsetY = event.clientY - rect.top; // Calcular la posición Y del clic

    // Ajustar el origen de la transformación
    svgContainer.style.transformOrigin = `${offsetX}px ${offsetY}px`;
    svgContainer.style.transform = `scale(${scale})`; // Aplicar la transformación de escala
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
            var estatus = jsonData.estatus;
            var tipoLote = jsonData.tipoLote;
            console.log(jsonData);
            if (success == 1) {
               
                document.getElementById('btnGuardar').hidden = true; 
                document.getElementById('btnActualizar').hidden = false; 
                
                document.getElementById('manzana').value = manzana; 
                document.getElementById('lote2').value = lote;
                document.getElementById('calle').value = calle;
                document.getElementById('superficie').value = superficie;
                console.log('capa: '+capa);
                document.getElementById('nombre').value = nombre;
                document.getElementById('direccion').value = direccion;
                document.getElementById('telefono').value = telefono;
                document.getElementById('estatus').value = estatus;
                document.getElementById('tipoLote').value = tipoLote;

                queryPhoto(capa);
                
            }
            else{
                alert('No existen datos en el lote');
                document.getElementById('btnGuardar').hidden = false; 
                document.getElementById('btnActualizar').hidden = true; 
                document.getElementById('manzana').value = ""; 
                document.getElementById('lote2').value = "";
                document.getElementById('calle').value = "";
                document.getElementById('superficie').value = "";
                console.log('capa: '+capa);
                document.getElementById('nombre').value = "";
                document.getElementById('direccion').value = "";
                document.getElementById('telefono').value = "";
                document.getElementById('estatus').value = "";
            }
        }
    });
}

function queryPhoto(capa){
    $.ajax({
        url: 'prcd/queryPhotos.php',
        type: 'POST',
        data:{
            capa: capa
        },
        dataType: 'html', 
        success: function(data) {
            $('#fotosLote').html(data);  
        }
    });
  }
  function inside(imagen){
    $("#modalInside").modal("show");
    document.getElementById("inside").setAttribute("src", "fotos/"+imagen+"");
  }

function guardarDatos(){
    let capa = document.getElementById('capa').value;
    let manzana = document.getElementById('manzana').value; 
    let lote = document.getElementById('lote2').value;
    let calle = document.getElementById('calle').value;
    let superficie = document.getElementById('superficie').value;
    let nombre = document.getElementById('nombre').value;
    let direccion = document.getElementById('direccion').value;
    let telefono = document.getElementById('telefono').value;
    let estatus = document.getElementById('estatus').value;
    let tipoLote = document.getElementById('tipoLote').value;

    if(estatus == "" || estatus == null){
        alert('Debes seleccionar estatus del lote para guardar');
        return;
    }

    $.ajax({
        url: 'prcd/guardarLotes.php',
        type: 'POST',
        dataType: 'json',  // type of response we expect from the server
        data: {
            capa: capa,
            manzana: manzana,
            lote: lote,
            calle: calle,
            superficie: superficie,
            nombre: nombre,
            direccion: direccion,
            telefono: telefono,
            estatus: estatus,
            tipoLote:tipoLote

        },
        success: function(response) {
            var jsonData = JSON.parse(JSON.stringify(response));
            var success = jsonData.success;

            if(success == 1){
                Swal.fire({
                    title: "Datos guardados correctamente",
                    text: "Agregado correctamente",
                    icon: "success",
                    showCancelButton: false,
                    confirmButtonText: "Aceptar",
                    cancelButtonText: "Cancelar",
                    confirmButtonColor: "#3085d6", // Azul
                    cancelButtonColor: "#d33" // Rojo
                });
                datosGenerales();
            }
            else{
                alert("No se guardaron los datos");
                console.log(jsonData.error);
            }
        }
    });
}

function actualizarDatos(){
    let capa = document.getElementById('capa').value;
    let manzana = document.getElementById('manzana').value; 
    let lote = document.getElementById('lote2').value;
    let calle = document.getElementById('calle').value;
    let superficie = document.getElementById('superficie').value;
    let nombre = document.getElementById('nombre').value;
    let direccion = document.getElementById('direccion').value;
    let telefono = document.getElementById('telefono').value;
    let estatus = document.getElementById('estatus').value;
    let tipoLote = document.getElementById('tipoLote').value;

    if(estatus == "" || estatus == null){
        alert('Debes seleccionar estatus del lote para guardar');
        return;
    }

    $.ajax({
        url: 'prcd/actualizarLotes.php',
        type: 'POST',
        dataType: 'json',  // type of response we expect from the server
        data: {
            capa: capa,
            manzana: manzana,
            lote: lote,
            calle: calle,
            superficie: superficie,
            nombre: nombre,
            direccion: direccion,
            telefono: telefono,
            estatus: estatus,
            tipoLote: tipoLote

        },
        success: function(response) {
            var jsonData = JSON.parse(JSON.stringify(response));
            var success = jsonData.success;

            if(success == 1){
                Swal.fire({
                    title: "Datos actualizados correctamente",
                    text: "Actualizado correctamente",
                    icon: "success",
                    showCancelButton: false,
                    confirmButtonText: "Aceptar",
                    cancelButtonText: "Cancelar",
                    confirmButtonColor: "#3085d6", // Azul
                    cancelButtonColor: "#d33" // Rojo
                });
                datosGenerales();
            }
            else{
                alert("No se guardaron los datos");
                console.log(jsonData.error);
            }
        }
    });
}