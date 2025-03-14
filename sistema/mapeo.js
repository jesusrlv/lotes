function datosGenerales() {
    var apartados = 0, no_apartados = 0;
    $.ajax({
        type: "POST",
        url: "prcd/mapeo.php", // Cambia esto por la ruta de tu script PHP
        dataType: "json",
        success: function(data) {
            // Asegúrate de que data sea un objeto JSON válido
            var jsonData = JSON.parse(JSON.stringify(data));
            console.log('Respuesta JSON:', jsonData);
            
            if (Array.isArray(jsonData)) {
                console.log('Número de elementos en el array:', jsonData.length);
                
                jsonData.forEach(function(item) {
                    // Suponiendo que cada item tiene un 'id' y 'estatus'
                    var grupo = document.getElementById(item.capa); // Obtener el grupo por su ID
                    var estatus = item.estatus; // Cambia 'estatus' por el nombre de la propiedad que contiene el estatus
                    var tipoLote = item.tipo_lote;

                    // Verifica si el grupo existe antes de modificarlo
                    if (grupo) {
                        // Selecciona el polygon dentro del grupo
                        var polygon = grupo.querySelector('polygon'); // Selecciona el primer polygon dentro del grupo

                        // Verifica si el polygon existe
                        if (polygon) {
                            // Cambia el color según la condición
                            if (estatus == 1) {
                                apartados = apartados + 1;
                                polygon.style.fill = "#0076FA"; // Color para estatus 1
                                polygon.style.stroke = "#6EDBFA"; // Color para estatus 1
                            } else if(estatus == 0) { // sin categoría
                                no_apartados = no_apartados + 1;
                                if(tipoLote == 0 || tipoLote == ""){
                                    polygon.style.fill = "#dc3545"; // Color para otros estatus
                                    polygon.style.stroke = "#0076FA"; // Color para otros estatus
                                }
                                else if(tipoLote == 1){ //urbanizado
                                    polygon.style.fill = "#198754"; // Color para otros estatus
                                    polygon.style.stroke = "#0076FA"; // Color para otros estatus
                                }
                                else if(tipoLote == 2){ //urbanizado
                                    polygon.style.fill = "#dc3545"; // Color para otros estatus
                                    polygon.style.stroke = "#0076FA"; // Color para otros estatus
                                }
                            }
                        } else {
                            console.error(`Polygon no encontrado dentro del grupo con ID "${item.id}".`);
                        }
                    } else {
                        console.error(`Grupo con ID "${item.id}" no encontrado en el DOM.`);
                    }
                });
            }
            document.getElementById("apartados").innerText =  apartados;
            document.getElementById("no_apartados").innerText =  no_apartados;

        },
        error: function(xhr, status, error) {
            console.error('Error en AJAX:', error);
            console.log('Estado:', status);
            console.log('Respuesta del servidor:', xhr.responseText);
        }
    });
}

function mostrarModalCarga() {
    const modal = document.getElementById('loadingModal');
    const progress = document.getElementById('progress');
    let width = 0;

    $("#loadingModal").modal('show');

    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            // modal.style.display = 'none'; // Ocultar el modal al finalizar
            $("#loadingModal").modal('hide');
        } else {
            width++; // Incrementar el ancho de la barra
            progress.style.width = width + '%'; // Actualizar el ancho de la barra
        }
    }, 12); // Ajusta el intervalo para que complete en 9 segundos
}