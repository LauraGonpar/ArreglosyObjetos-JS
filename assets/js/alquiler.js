const propiedadesAlquiler = [
  {
    nombre: "Apartamento en el centro de la ciudad",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: "2 Habitaciones |",
    baños: "2 Baños",
    costo: "2.000",
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento luminoso con vista al mar",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar",
    ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: "3 Habitaciones |",
    baños: "3 Baños",
    costo: "2.500",
    smoke: true,
    pets: true,
  },
  {
    nombre: "Condominio moderno en zona residencial",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion:
      "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: "2 Habitaciones |",
    baños: "2 Baños",
    costo: "2.200",
    smoke: false,
    pets: false,
  },
  {
    nombre: "Ático de lujo con terraza privada",
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    descripcion:
      "Este exclusivo ático cuenta con una terraza amplia y vistas impresionantes de la ciudad.",
    ubicacion: "742 Evergreen Terrace, Springfield, IL",
    habitaciones: "3 Habitaciones |",
    baños: "2 Baños",
    costo: "3.200",
    smoke: false,
    pets: true,
  },
  {
    nombre: "Casa moderna con piscina",
    src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
    descripcion:
      "Hermosa casa con diseño moderno, piscina privada y amplio jardín.",
    ubicacion: "1122 Boogie Woogie Avenue, Miami, FL",
    habitaciones: "4 Habitaciones |",
    baños: "3 Baños",
    costo: "4,.500",
    smoke: true,
    pets: true,
  },
  {
    nombre: "Departamento acogedor en zona residencial",
    src: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c",
    descripcion:
      "Cómodo departamento en un barrio tranquilo, ideal para parejas o familias pequeñas.",
    ubicacion: "221B Baker Street, New York, NY",
    habitaciones: "2 Habitaciones |",
    baños: "1 Baño",
    costo: "2.000",
    smoke: false,
    pets: false,
  },
  {
    nombre: "Loft industrial en el centro",
    src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion:
      "Moderno loft de estilo industrial, con techos altos y excelente ubicación.",
    ubicacion: "1600 Pennsylvania Avenue NW, Washington, DC",
    habitaciones: "1 Habitación |",
    baños: "1 Baño",
    costo: "2.500",
    smoke: true,
    pets: false,
  },
];

const alquiler = document.querySelector(".row");
let html = "";
for (let propiedad of propiedadesAlquiler) {
  let claseFumar = "";
  let claseMascotas = "";

  if (propiedad.smoke === true) {
    claseFumar = "text-success";
  } else {
    claseFumar = "text-danger";
  }

  if (propiedad.pets === true) {
    claseMascotas = "text-success";
  } else {
    claseMascotas = "text-danger";
  }
  html += `
  <div class="col-md-4 mb-4">
    <div class="card" style= width:300px; margin-left:50px; display: flex; justify-content:"space-around>
              <img
                src=${propiedad.src}
                class="card-img-top"
                alt=${propiedad.nombre}
              />
              <div class="card-body">
                <h5 class="card-title">
                  ${propiedad.nombre}
                </h5>
                <p class="card-text">
                  ${propiedad.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion} |
                  <i class="fas fa-bath"></i> ${propiedad.baños}
                </p>
                <p><i class="fas fa-dollar-sign"></i>${propiedad.costo}</p>
                <p class="${claseFumar}">
            <i class="fas fa-smoking${propiedad.smoke ? "" : "-ban"}"></i> ${
    propiedad.smoke ? "Permitido fumar" : "No se permite fumar"
  }
          </p>
          <p class="${claseMascotas}">
            <i class="fas fa-paw"></i> ${
              propiedad.pets ? "Mascotas permitidas" : "No se permiten mascotas"
            }
          </p>
              </div>
            </div>
            </div>
                `;
}
alquiler.innerHTML += html;
