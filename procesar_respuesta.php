<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>¡Confirmación de Asistencia!</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <h1 class="header-title">¡Confirmación de Asistencia!</h1>
  </header>

  <main class="main-content">
    <p class="confirmation-message">¡Gracias [nombre de tu novia] por confirmar tu asistencia!</p>

    <?php
    if (isset($_POST['name'])) {
      $name = $_POST['name'];
      echo '<p class="confirmation-message">¡Gracias por confirmar tu asistencia, ' . $name . '!</p>';
    } else {
      echo '<p class="confirmation-message">Hubo un problema al procesar tu confirmación. Por favor, inténtalo de nuevo más tarde.</p>';
    }
    ?>

    <p class="confirmation-message">¡Esperamos que tengas una mágica noche viendo Barbie!</p>
  </main>

  <footer>
    <p>Con amor, [tu nombre]</p>
  </footer>
</body>
</html>
