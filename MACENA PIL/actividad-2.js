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
console.log('Los alumnos con nota mayor a 7 son:', aprobados)
