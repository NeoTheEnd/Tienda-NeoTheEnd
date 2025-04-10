/* 7.js principal */
/* ============ VARIABLES GLOBALES ============ */
/* Definimos las variables globales que serán usadas en todo el script */
var carrito = []; // Array que almacena los productos del carrito
var totalCarrito = 0; // Total acumulado del carrito
var currentGame = null; // Juego actualmente seleccionado para ver detalles

/* ============ MOSTRAR DETALLES DEL JUEGO ============ */
/* Muestra los detalles de un juego cuando el usuario hace clic en un juego */
function showJuegoDetails(juegoId) {
  var juegos = {
    // ==== ACCIÓN ====
    'godofwar': {
      titulo: 'God of War',
      imagen: 'portadas/god-of-war.jpg',
      sinopsis: 'Kratos busca venganza contra Ares.',
      caracteristicas: 'Aventura, acción, single player.',
      video: 'videos/god of war.mp4',
      precio: 6
    },
    'godhand': {
      titulo: 'God Hand',
      imagen: 'portadas/god-hand.jpg',
      sinopsis: 'El protagonista recibe la God Hand para derrotar el mal.',
      caracteristicas: 'Beat \'em up, acción.',
      video: 'videos/god hand.mp4',
      precio: 6
    },
    'princewarrior': {
      titulo: 'Prince of Persia: Warrior Within',
      imagen: 'portadas/prince-of-persia-warrior-within.jpg',
      sinopsis: 'El Príncipe escapa de su destino enfrentando a Dahaka.',
      caracteristicas: 'Acción, plataformas.',
      video: 'videos/prince persia warrior.mp4',
      precio: 6
    },
    'mgs3': {
      titulo: 'Metal Gear Solid 3',
      imagen: 'portadas/metal-gear-solid-3-snake-eater.jpg',
      sinopsis: 'Snake se infiltra en territorio enemigo durante la Guerra Fría.',
      caracteristicas: 'Sigilo, acción táctica.',
      video: 'videos/metalgear solid 3.mp4',
      precio: 6
    },
    'devilmaycry3': {
      titulo: 'Devil May Cry 3',
      imagen: 'portadas/devil-may-cry-3-dantes-awakening-special-edition.jpg',
      sinopsis: 'Dante se enfrenta a su pasado y a su hermano Vergil.',
      caracteristicas: 'Hack and Slash, acción.',
      video: 'videos/devilmaycry3.mp4',
      precio: 6
    },
    'black': {
      titulo: 'Black',
      imagen: 'portadas/black.jpg',
      sinopsis: 'Shooter en primera persona con acción cinematográfica.',
      caracteristicas: 'FPS, acción intensa.',
      video: 'videos/black.mp4',
      precio: 6
    },

    // ==== TERROR ====
    'silenthill2': {
      titulo: 'Silent Hill 2',
      imagen: 'portadas/silent-hill-2.jpg',
      sinopsis: 'James busca a su esposa fallecida en Silent Hill.',
      caracteristicas: 'Terror psicológico.',
      video: 'videos/silenthill 2.mp4',
      precio: 6
    },
    'fatalframe2': {
      titulo: 'Fatal Frame II',
      imagen: 'portadas/fatal-frame-ii-crimson-butterfly.jpg',
      sinopsis: 'Dos hermanas enfrentan espíritus con una cámara.',
      caracteristicas: 'Terror, exploración.',
      video: 'videos/fatalframe 2.mp4',
      precio: 6
    },
    'recodeveronica': {
      titulo: 'Resident Evil Code: Veronica X',
      imagen: 'portadas/resident-evil-code-veronica-x.jpg',
      sinopsis: 'Claire Redfield busca a su hermano Chris.',
      caracteristicas: 'Terror, supervivencia.',
      video: 'videos/resident evil x codigo v.mp4',
      precio: 6
    },
    'ruleofrose': {
      titulo: 'Rule of Rose',
      imagen: 'portadas/rule-of-rose.jpg',
      sinopsis: 'Jennifer revive traumas en un orfanato.',
      caracteristicas: 'Terror, historia profunda.',
      video: 'videos/rule of rose.mp4',
      precio: 6
    },
    'resident4': {
      titulo: 'Resident Evil 4',
      imagen: 'portadas/Resident-Evil-4-Español-Latino.jpg',
      sinopsis: 'Leon rescata a la hija del presidente.',
      caracteristicas: 'Terror, acción.',
      video: 'videos/resident evil 4.mp4',
      precio: 6
    },
    'clocktower3': {
      titulo: 'Haunting Ground',
      imagen: 'portadas/haunting-ground.jpg',
      sinopsis: 'Fiona y su perro escapan de enemigos en una mansión.',
      caracteristicas: 'Terror, sigilo.',
      video: 'videos/haunting ground.mp4',
      precio: 6
    },

    // ==== PELEA ====
    'tekken5': {
      titulo: 'Tekken 5',
      imagen: 'portadas/Tekken-5-Japan-PS2.jpg',
      sinopsis: 'Torneo del Rey del Puño de Hierro.',
      caracteristicas: 'Pelea 3D.',
      video: 'videos/tekken 5.mp4',
      precio: 6
    },
    'mortalcombatshaolin': {
      titulo: 'Mortal Kombat Armageddon',
      imagen: 'portadas/mortal-kombat-armageddon.jpg',
      sinopsis: 'Batalla final de todos los luchadores MK.',
      caracteristicas: 'Pelea, fatality.',
      video: 'videos/mortal kombat.mp4',
      precio: 6
    },
    'dbzbt3': {
      titulo: 'DBZ Budokai Tenkaichi 3',
      imagen: 'portadas/DBZ-Budokai-Tenkaichi-2-Latino-PS2.jpg',
      sinopsis: 'Más de 150 personajes de DBZ en 3D.',
      caracteristicas: 'Lucha anime.',
      video: 'videos/dragonball z budoka tk3.mp4',
      precio: 6
    },
    'naruto5': {
      titulo: 'Naruto Ultimate Ninja 5',
      imagen: 'portadas/naruto-shippuden-ultimate-ninja-5.jpg',
      sinopsis: 'Naruto y Sasuke en combates ninja intensos.',
      caracteristicas: 'Lucha anime.',
      video: 'videos/naruto ninja 5.mp4',
      precio: 6
    },
    'soulcalibur3': {
      titulo: 'Soul Calibur 3',
      imagen: 'portadas/Soulcalibur-III-Japan-PS2.jpg',
      sinopsis: 'Espadas legendarias y guerreros únicos.',
      caracteristicas: 'Lucha 3D.',
      video: 'videos/soul calibur.mp4',
      precio: 6
    },
    'capcomvsnks2': {
      titulo: 'Marvel vs Capcom 2',
      imagen: 'portadas/marvel-vs-capcom-2-new-age-of-heroes.jpg',
      sinopsis: 'Lucha crossover entre héroes de Marvel y Capcom.',
      caracteristicas: 'Lucha 2D, combos.',
      video: 'videos/marvel vs capcom.mp4',
      precio: 6
    },

    // ==== RPG ====
    'finalfantasyx': {
      titulo: 'Final Fantasy X',
      imagen: 'portadas/final-fantasy-x.jpg',
      sinopsis: 'Tidus y Yuna luchan contra Sin.',
      caracteristicas: 'RPG por turnos.',
      video: 'videos/final fantasy x.mp4',
      precio: 6
    },
    'kingdomhearts': {
      titulo: 'Kingdom Hearts 2',
      imagen: 'portadas/kingdom-hearts-ii.jpg',
      sinopsis: 'Sora, Donald y Goofy luchan contra la oscuridad.',
      caracteristicas: 'RPG, acción.',
      video: 'videos/kingdom hearts 2.mp4',
      precio: 6
    },
    'ddsaga': {
      titulo: 'Digital Devil Saga',
      imagen: 'portadas/shin-megami-tensei-digital-devil-saga.jpg',
      sinopsis: 'Guerreros con poderes demoníacos en un mundo oscuro.',
      caracteristicas: 'RPG estratégico.',
      video: 'videos/devilsin saga.mp4',
      precio: 6
    },
    'suikoden5': {
      titulo: 'Suikoden V',
      imagen: 'portadas/suikoden-v.jpg',
      sinopsis: 'Política y guerra en un mundo de fantasía.',
      caracteristicas: 'RPG táctico.',
      video: 'videos/suikoden5.mp4',
      precio: 6
    },
    'persona3': {
      titulo: 'Persona 3',
      imagen: 'portadas/persona-3-fes-1.jpg',
      sinopsis: 'Estudiantes luchan contra sombras en la Hora Oscura.',
      caracteristicas: 'RPG por turnos.',
      video: 'videos/persona 3 fes.mp4',
      precio: 6
    },
    'dragonquest': {
      titulo: 'Dragon Quest VIII',
      imagen: 'portadas/dragon-quest-the-journey-of-the-cursed-king.jpg',
      sinopsis: 'Aventura épica contra una maldición oscura.',
      caracteristicas: 'RPG clásico.',
      video: 'videos/dragon quest 8.mp4',
      precio: 6
    }
  };

  currentGame = juegos[juegoId]; // Establece el juego actual seleccionado
  document.getElementById('juego-titulo').textContent = currentGame.titulo; // Muestra el título del juego
  document.getElementById('juego-imagen').src = currentGame.imagen; // Muestra la imagen del juego
  document.getElementById('juego-sinopsis').textContent = currentGame.sinopsis; // Muestra la sinopsis
  document.getElementById('juego-caracteristicas').textContent = currentGame.caracteristicas; // Muestra las características
  document.getElementById('juego-video-src').src = currentGame.video;
  document.getElementById('juego-video').style.display = currentGame.video ? 'block' : 'none';
  document.getElementById('juego-video').load(); // <- 🔥 ESTA ES LA LÍNEA CLAVE
  document.getElementById('juego-precio').innerHTML = `<strong>Precio: ${currentGame.precio} Bs</strong>`; // Muestra el precio
  document.getElementById('detalle-juego').style.display = 'block'; // Muestra el modal con los detalles del juego
}

/* ============ CERRAR DETALLES DEL JUEGO ============ */
function closeJuegoDetails() {
  document.getElementById('detalle-juego').style.display = 'none'; // Oculta el modal
}

/* ============ AGREGAR AL CARRITO ============ */
function agregarAlCarrito() {
  if (!currentGame) return; // Si no hay juego seleccionado, no hacer nada
  carrito.push({ titulo: currentGame.titulo, precio: currentGame.precio }); // Agrega el juego al carrito
  actualizarCarrito(); // Actualiza el carrito
  mostrarAvisoCarrito(); // Muestra un aviso de que el producto fue agregado al carrito
}

/* ============ ELIMINAR DEL CARRITO ============ */
function eliminarDelCarrito(indice) {
  carrito.splice(indice, 1); // Elimina el juego del carrito en el índice especificado
  actualizarCarrito(); // Actualiza el carrito
}

/* ============ ACTUALIZAR EL CARRITO ============ */
function actualizarCarrito() {
  const lista = document.getElementById('carrito-lista');
  lista.innerHTML = ''; // Limpia la lista de productos en el carrito
  totalCarrito = 0; // Reinicia el total del carrito

  carrito.forEach((item, i) => {
    const li = document.createElement('li');
    li.textContent = `${item.titulo} - ${item.precio} Bs`; // Muestra el nombre y precio del juego
    const btn = document.createElement('button');
    btn.textContent = 'Eliminar'; // Botón para eliminar el producto
    btn.onclick = () => eliminarDelCarrito(i); // Función de eliminar
    li.appendChild(btn);
    lista.appendChild(li);
    totalCarrito += item.precio; // Suma el precio del producto al total
  });

  document.getElementById('total-carrito').textContent = totalCarrito; // Actualiza el total del carrito
  document.getElementById('btn-carrito-text').textContent = `Carrito (${carrito.length})`; // Muestra el número de productos en el carrito
}

/* ============ MOSTRAR Y CERRAR CARRITO ============ */
function mostrarCarrito() {
  const carritoDiv = document.getElementById('carrito');
  carritoDiv.style.display = carritoDiv.style.display === 'block' ? 'none' : 'block'; // Alterna la visibilidad del carrito
}

function cerrarCarrito() {
  document.getElementById('carrito').style.display = 'none'; // Oculta el carrito
}

/* ============ VACÍAR CARRITO ============ */
function vaciarCarrito() {
  carrito = []; // Reinicia el carrito
  actualizarCarrito(); // Actualiza la vista del carrito
}

/* ============ MOSTRAR AVISO CARRITO ============ */
function mostrarAvisoCarrito() {
  const aviso = document.getElementById('aviso-carrito');
  aviso.style.display = 'block'; // Muestra el aviso
  setTimeout(() => aviso.style.display = 'none', 2000); // Oculta el aviso después de 2 segundos
}

/* ============ REGISTRO DE USUARIO ============ */
document.addEventListener("DOMContentLoaded", () => {
  const formR = document.getElementById("form-registro");
  const formL = document.getElementById("form-login");

  // REGISTRO
  if (formR) {
    formR.addEventListener("submit", function (e) {
      e.preventDefault();

      const nombre = this.nombre.value;
      const email = this.email.value;
      const pass = this.contraseña.value;
      const confirmar = this.confirmar_contraseña.value;

      if (pass !== confirmar) {
        alert("Las contraseñas no coinciden.");
        return;
      }

      // Verifica si ya existe el usuario
      if (localStorage.getItem("usuario_" + email)) {
        alert("Este correo ya está registrado.");
        return;
      }

      // Asignar rol: admin si son las credenciales exactas, sino usuario
      const rol = (email === "fullmetal90000@gmail.com" && pass === "samurai9000") ? "admin" : "usuario";

      const usuario = {
        nombre,
        email,
        contraseña: pass,
        historial: [],
        rol: rol
      };

      localStorage.setItem("usuario_" + email, JSON.stringify(usuario));
      alert("¡Registro exitoso!");
      this.reset();
    });
  }

  // LOGIN
  if (formL) {
    formL.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = this.email_login.value;
      const pass = this.contraseña_login.value;
      const datos = localStorage.getItem("usuario_" + email);

      if (!datos) {
        alert("Usuario no registrado.");
        return;
      }

      const user = JSON.parse(datos);

      if (user.contraseña !== pass) {
        alert("Contraseña incorrecta.");
        return;
      }

      // Guardar al usuario actual en localStorage
      localStorage.setItem("usuario_actual", JSON.stringify(user));

      // Redirección según rol
      if (user.rol === "admin") {
        alert("Bienvenido administrador " + user.nombre);
        window.location.href = "admin.html";
      } else {
        alert("¡Bienvenido " + user.nombre + "!");
        window.location.href = "principal.html";
      }
    });
  }

  // Mostrar botón en el menú:
  // Si hay un usuario activo, muestra:
  //  - Para administrador: botón "Administrador"
  //  - Para usuario normal: botón "Historial"
  const currentUser = JSON.parse(localStorage.getItem("usuario_actual"));
  if (currentUser) {
    const menu = document.getElementById("menu-lista");
    if (currentUser.rol === "admin") {
      const liAdmin = document.createElement("li");
      liAdmin.innerHTML = '<a href="admin.html">Administrador</a>';
      menu.appendChild(liAdmin);
    } else {
      const liHist = document.createElement("li");
      liHist.innerHTML = '<a href="historial.html"><i class="fas fa-clock"></i> Historial</a>';
      menu.appendChild(liHist);
    }
  }
});

/* ============ HISTORIAL DE COMPRAS ============ */
function mostrarBotonHistorial() {
  // Esta función se puede utilizar adicionalmente si se requiere
  const user = JSON.parse(localStorage.getItem("usuario_actual"));
  const menu = document.getElementById("menu-lista");
  if (user && user.rol !== "admin" && !document.querySelector("a[href='historial.html']")) {
    const li = document.createElement("li");
    li.innerHTML = '<a href="historial.html"><i class="fas fa-clock"></i> Historial</a>';
    menu.appendChild(li);
  }
}

// ===================== PROCESO DE PAGO =====================
function pagar() {
  if (carrito.length === 0) return alert("Carrito vacío.");
  const user = JSON.parse(localStorage.getItem("usuario_actual"));
  if (!user) return alert("Inicia sesión para pagar.");

  const compra = {
    fecha: new Date().toLocaleString(),
    productos: [...carrito],
    total: totalCarrito
  };

  // Agregar la compra al historial del usuario
  user.historial = user.historial || [];
  user.historial.push(compra);
  localStorage.setItem("usuario_" + user.email, JSON.stringify(user));
  localStorage.setItem("usuario_actual", JSON.stringify(user));
  vaciarCarrito();
  alert("¡Compra realizada!");
  document.getElementById('pago').style.display = 'block';
}

/* ============ FUNCIONES PARA FILTRAR JUEGOS POR CATEGORÍA ============ */
function filtrarCategoria(cat) {
  document.querySelectorAll('.categoria').forEach(c => {
    c.style.display = (cat === 'todas' || c.dataset.categoria === cat) ? 'flex' : 'none';
  });
}

/* ============ MODAL SERVICIOS ================== */
function abrirModalServicio(servicio) {
  const titulo = document.getElementById("titulo-servicio");
  const descripcion = document.getElementById("descripcion-servicio");
  const link = document.getElementById("whatsapp-link");

  let texto = "", mensaje = "";
  if (servicio === "consolas") {
    titulo.textContent = "Reparación de consolas";
    texto = "Mantenimiento, cambio de pasta térmica y limpieza.";
    mensaje = "Hola, quiero reparación de consolas.";
  } else if (servicio === "controles") {
    titulo.textContent = "Reparación de controles";
    texto = "Drift, botones rotos, joystick flojo.";
    mensaje = "Hola, quiero reparar mis controles.";
  } else if (servicio === "ps2") {
    titulo.textContent = "Instalación y pirateo de PS2";
    texto = "Instalamos FreeMCBoot, OPL y configuramos por USB.";
    mensaje = "Hola, quiero piratear mi PS2.";
  }

  descripcion.textContent = texto;
  link.href = "https://wa.me/59178664277?text=" + encodeURIComponent(mensaje);
  document.getElementById("modal-servicio").style.display = "block";
}

/* Cierra el modal de servicios */
function cerrarModalServicio() {
  document.getElementById("modal-servicio").style.display = "none";
}

/* ============ FUNCIONES DE PAGO ============ */
function mostrarOpcionesPago() {
  document.getElementById('opciones-pago').style.display = 'block';
}

function mostrarMetodoPago() {
  const metodo = document.querySelector('input[name="metodo-pago"]:checked').value;
  document.getElementById('pago-qr').style.display = 'none';
  document.getElementById('pago-efectivo').style.display = 'none';
  document.getElementById('pago-tarjeta').style.display = 'none';
  if (metodo === 'qr') {
    document.getElementById('pago-qr').style.display = 'block';
  } else if (metodo === 'efectivo') {
    document.getElementById('pago-efectivo').style.display = 'block';
  } else if (metodo === 'tarjeta') {
    document.getElementById('pago-tarjeta').style.display = 'block';
  }
}

function confirmarPagoTarjeta() {
  alert('✅ Pago procesado con tarjeta. ¡Gracias por tu compra!');
  // Aquí puedes limpiar el carrito, registrar compra, etc.
}
