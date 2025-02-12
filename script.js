function accesos(){
    let usr = document.getElementById('usr').value;
    let pwd = document.getElementById('pwd').value;
    
    if (usr == "" || pwd == ""){
        alert("Debes llenar todos los campos");
        return;
    }
    
    $.ajax({
      type: "POST",
      data:{
        usr:usr,
        pwd:pwd
      },
      url: "sistema/prcd/acceso.php",
      dataType: "JSON",
      success: function(data){
        var datos = JSON.parse(JSON.stringify(data));
        
        var success = datos.success;
        if(success == 1){
          Swal.fire({
            icon: 'success',
            imageUrl: 'sistema/img/logo.png',
            imageHeight: 200,
            title: 'Usuario correcto',
            text: 'Credenciales correctas',
            confirmButtonColor: '#3085d6',
            footer: 'Lotes'
        }).then(function(){window.location='sistema/index.html';});
        }
        else
        {
            Swal.fire({
                icon: 'error',
                title: 'Datos incorrectos',
                text: 'Credenciales incorrectas',
                confirmButtonColor: '#3085d6',
                footer: 'Lotes'
            }).then(function(){window.location='index.html';});
            }
      }
    });
  }