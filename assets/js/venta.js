const propiedadesVenta = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: "4 Habitaciones |",
    baños: "4 Baños",
    costo: "500.000",
    smoke: false,
    pets: false,
  },
  {
    nombre: "Apartamento acogedor en la montaña",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: "2 Habitaciones |",
    baños: "1 Baño",
    costo: "120.000",
    smoke: true,
    pets: true,
  },
  {
    nombre: "Penthouse de lujo con terraza panorámica",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: "3 Habitaciones |",
    baños: "3 Baños",
    costo: "400.000",
    smoke: false,
    pets: true,
  },
  {
    nombre: "Casa colonial con gran patio trasero",
    src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    descripcion:
      "Hermosa casa de estilo colonial con un amplio patio trasero y jardín recién renovado.",
    ubicacion: "742 Evergreen Terrace, Springfield, IL",
    habitaciones: "4 Habitaciones |",
    baños: "3 Baños",
    costo: "450,000",
    smoke: false,
    pets: true,
  },
  {
    nombre: "Mansión de lujo con vista al mar",
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
    descripcion:
      "Impresionante mansión con piscina infinita y vistas panorámicas al océano.",
    ubicacion: "90210 Beverly Hills, Los Angeles, CA",
    habitaciones: "6 Habitaciones |",
    baños: "5 Baños",
    costo: "1.200.000",
    smoke: true,
    pets: true,
  },
  {
    nombre: "Departamento moderno en el centro",
    src: "https://images.unsplash.com/photo-1556020685-ae41abfc9365?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion:
      "Moderno departamento con acabados de lujo, ubicado en pleno centro de la ciudad.",
    ubicacion: "1234 Market Street, San Francisco, CA",
    habitaciones: "2 Habitaciones |",
    baños: "2 Baños",
    costo: "780.000",
    smoke: true,
    pets: false,
  },
  {
    nombre: "Cabaña rústica en las montañas",
    src: "https://images.unsplash.com/photo-1525113990976-399835c43838?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion:
      "Acogedora cabaña de madera en una zona montañosa, ideal para desconectarse.",
    ubicacion: "5678 Rocky Mountain Road, Denver, CO",
    habitaciones: "3 Habitaciones |",
    baños: "2 Baños",
    costo: "350.000",
    smoke: false,
    pets: true,
  },
];
const venta = document.querySelector(".row");
let html = "";
for (let propiedad of propiedadesVenta) {
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
      <div class="card" >
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
                    <i class="fas fa-map-marker-alt"></i> ${
                      propiedad.ubicacion
                    } |
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
                propiedad.pets
                  ? "Mascotas permitidas"
                  : "No se permiten mascotas"
              }
            </p>
                </div>
              </div>
              </div>
                  `;
}
venta.innerHTML += html;
