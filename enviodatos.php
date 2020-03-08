<?php
$destino = "elisa1603@gmail.com";
$nombre= $_POST["nombre"];
$apellido= $_POST["apellido"];
$correo= $_POST["correo"];
$telefono= $_POST["telefono"];
$mensaje= $_POST["mensaje"];
$contenido= "Nombre: ". $nombre ."Apellido: ". $apellido ."Correo: " . $correo . "Telefono: " .$telefono . "Mensaje: " . $mensaje;
mail($destino,"CONTACTO", $contenido);
header("Location:gracias.html");
?>