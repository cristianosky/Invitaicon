document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('confirmation-form');
  const confirmButton = document.getElementById('confirm-button');
  const countdown = document.getElementById('countdown');
  const eventDetails = document.querySelector('.event-details');
  const invitationMessage = document.querySelector('.invitation-message');
  const nameInput = document.getElementById('name'); // Nuevo: Capturar el elemento del input de nombre

  // Verificar si la asistencia ya está confirmada en el LocalStorage
  const isAttendanceConfirmed = localStorage.getItem('attendanceConfirmed') === 'true';

  if (isAttendanceConfirmed) {
    // Si la asistencia ya está confirmada, ocultar el formulario y mostrar la vista regresiva
    form.style.display = 'none';
    countdown.style.display = 'block';
    invitationMessage.style.display = 'none';
    eventDetails.style.display = 'none';

    // Calcular la diferencia de tiempo entre la fecha actual y el 5 de agosto a las 16:00
    const targetDate = new Date('2023-08-05T16:00:00');
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;

    // Función para actualizar la vista regresiva cada segundo
    function updateCountdown() {
      const now = new Date();
      const timeRemaining = targetDate - now;

      // Si el tiempo restante es mayor a 0, actualizar la vista regresiva
      if (timeRemaining > 0) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        countdown.innerHTML = `
          <h2>Vista Regresiva</h2>
          <p>Hola, ${nameInput.value.trim()}! Faltan: ${days} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos</p>`; // Mostrar el nombre en el mensaje de cuenta regresiva

        // Actualizar cada segundo
        setTimeout(updateCountdown, 1000);
      } else {
        // Si el tiempo restante es menor o igual a 0, mostrar un mensaje de finalización
        countdown.innerHTML = `
          <h2>Vista Regresiva</h2>
          <p>¡Es el día mágico con Barbie!</p>
        `;
      }
    }

    // Llamar a la función para iniciar la vista regresiva
    updateCountdown();
  } else {
    // Si la asistencia no está confirmada, agregar el evento de escucha para el botón de confirmación
    confirmButton.addEventListener('click', function (event) {
      event.preventDefault();

      // Mostrar SweetAlert2 para confirmar la asistencia
      Swal.fire({
        title: '¡Confirmación de asistencia!',
        text: `¿Estás seguro de que deseas asistir a la mágica noche con Barbie, ${nameInput.value.trim()}?`, // Mostrar el nombre en la alerta
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#ff80bf', /* Rosa brillante */
        cancelButtonColor: '#aaa',
        confirmButtonText: '¡Sí, confirmar!',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          // Guardar el estado de confirmación de asistencia en el LocalStorage
          localStorage.setItem('attendanceConfirmed', 'true');

          // Ocultar el formulario y mostrar la vista regresiva
          form.style.display = 'none';
          countdown.style.display = 'block';
          invitationMessage.style.display = 'none';
          eventDetails.style.display = 'none';

          // Calcular la diferencia de tiempo entre la fecha actual y el 5 de agosto a las 16:00
          const targetDate = new Date('2023-08-05T16:00:00');
          const currentDate = new Date();
          const timeDifference = targetDate - currentDate;

          // Función para actualizar la vista regresiva cada segundo
          function updateCountdown() {
            const now = new Date();
            const timeRemaining = targetDate - now;

            // Si el tiempo restante es mayor a 0, actualizar la vista regresiva
            if (timeRemaining > 0) {
              const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
              const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
              const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
              const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

              countdown.innerHTML = `
                <h2>Vista Regresiva</h2>
                <p>Hola, ${nameInput.value.trim()}! Faltan: ${days} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos</p>`; // Mostrar el nombre en el mensaje de cuenta regresiva

              // Actualizar cada segundo
              setTimeout(updateCountdown, 1000);
            } else {
              // Si el tiempo restante es menor o igual a 0, mostrar un mensaje de finalización
              countdown.innerHTML = `
                <h2>Vista Regresiva</h2>
                <p>¡Es el día mágico con Barbie!</p>
              `;
            }
          }

          // Llamar a la función para iniciar la vista regresiva
          updateCountdown();
        }
      });
    });
  }
});
