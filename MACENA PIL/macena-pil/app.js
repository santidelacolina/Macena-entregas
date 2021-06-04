const app = Vue.createApp({
  data() {
    return {
      ejemplo: "Prueba mostrame",
      arrayA: ["entity", "models", "services", "interfaces"],
      arrayB: ["controllers", "services", "entity", "views", "filters"],
      alumnos: [
        {
          nombre: "Diego",
          nota: 7,
        },
        {
          nombre: "Juan",
          nota: 2,
        },
        {
          nombre: "Pedro",
          nota: 4,
        },
        {
          nombre: "Carlos",
          nota: 8,
        },
        {
          nombre: "Hector",
          nota: 9,
        },
        {
          nombre: "Riki",
          nota: 7,
        },
        {
          nombre: "Maicol",
          nota: 5,
        },
        {
          nombre: "Ricardo",
          nota: 10,
        },
      ],
    };
  },
  methods: {
    actividad1() {
      compartidos = [];
      arrayA.forEach((elementA) => {
        arrayB.forEach((elementB) => {
          if (elementA === elementB) {
            compartidos.push(elementA);
          }
        });
      });
      document.getElementById("boton-actividad1").onclick=function(){
          console.log("Los elementos que comparten son :", compartidos)
      }
    //   console.log("Los elementos que comparten son :", compartidos);
      return compartidos;
    },
    actividad2() {
      aprobados = [];
      alumnos.forEach((alumno) => {
        if (alumno.nota >= 7) {
          aprobados.push(alumno);
        }
      });
      console.log("Los alumnos aprobados son: ", aprobados);
      return aprobados;
    },
  },
  props: ["compartidos", "aprobados"],
});
app.mount("#ejercicios-macena");

// Actividad 1:
// Se tienen dos array
// A:["entity", "models" , "services", "interfaces"]
// B:[ "controllers", "services", "entity", "views", "filters"]
// Se necesita saber que elementos comparten los dos array. Los elementos compartidos guardarlos en un array C

arrayA = ["entity", "models", "services", "interfaces"];
arrayB = ["controllers", "services", "entity", "views", "filters"];

compartidos = [];

function actividad1(arrayA, arrayB) {
  arrayA.forEach((elementA) => {
    arrayB.forEach((elementB) => {
      if (elementA === elementB) {
        compartidos.push(elementA);
      }
    });
  });
}
actividad1(arrayA, arrayB);
console.log("Los elementos que comparten los array son: ", compartidos);

// Actividad 2:
const alumnos = [
  {
    nombre: "Diego",
    nota: 7,
  },
  {
    nombre: "Juan",
    nota: 2,
  },
  {
    nombre: "Pedro",
    nota: 4,
  },
  {
    nombre: "Carlos",
    nota: 8,
  },
  {
    nombre: "Hector",
    nota: 9,
  },
  {
    nombre: "Riki",
    nota: 7,
  },
  {
    nombre: "Maicol",
    nota: 5,
  },
  {
    nombre: "Ricardo",
    nota: 10,
  },
];
aprobados = [];
alumnos.forEach((alumno) => {
  if (alumno.nota >= 7) {
    aprobados.push(alumno);
  }
});
console.log("Los alumnos con nota mayor a 7 son:", aprobados);
