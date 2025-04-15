/*
function getAllBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(data => {
        const breeds = Object.keys(data.message); 
        console.log('Todas las razas:', breeds); 
      })
        .catch(error => {
          console.error('Error al obtener las razas:', error); 
        }   
  }
  

  function getRandomDog() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        console.log('Imagen aleatoria de un perro:', data.message); 
      })
        .catch(error => {
            console.error('Error al obtener la imagen:', error); 
        });
   
  }
  
  function getAllImagesByBreed() {
    fetch('https://dog.ceo/api/breed/komondor/images')
      .then(response => response.json())
      .then(data => {
        console.log('Imágenes de komondor:', data.message);
      })
      .catch(error => console.error('Error al obtener imágenes de komondor:', error));
  }
  
  function getAllImagesByBreed2(breed) {
    fetch(`https://dog.ceo/api/breed/${breed}/images`)
      .then(response => response.json())
      .then(data => {
        console.log(`Imágenes de la raza ${breed}:`, data.message);
      })
      .catch(error => console.error(`Error al obtener imágenes de la raza ${breed}:`, error));
  }
  */
// 1. Obtener todas las razas de perro

function getAllBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(data => {
        const breeds = Object.keys(data.message);
        console.log('Todas las razas:', breeds);
      })
      .catch(error => console.error('Error al obtener las razas:', error));
  }
  
  // 2. Obtener una imagen aleatoria de cualquier perro
  function getRandomDog() {
    fetch('https://images.dog.ceo/api/breeds)
      .then(response => response.json())
      .then(data => {
        console.log('Imagen aleatoria de un perro:', data.message);
      })
      .catch(error => console.error('Error al obtener imagen aleatoria:', error));
  }
  
  // 3. Obtener todas las imágenes de la raza 'komondor'
  function getAllImagesByBreed() {
    fetch('https://dog.ceo/api/breed/komondor/images')
      .then(response => response.json())
      .then(data => {
        console.log('Imágenes de komondor:', data.message);
      })
      .catch(error => console.error('Error al obtener imágenes de komondor:', error));
  }
  
  // 4. Obtener imágenes de una raza pasada como parámetro
  function getAllImagesByBreed2(breed) {
    fetch(`https://dog.ceo/api/breed/${breed}/images`)
      .then(response => response.json())
      .then(data => {
        console.log(`Imágenes de la raza ${breed}:`, data.message);
      })
      .catch(error => console.error(`Error al obtener imágenes de la raza ${breed}:`, error));
  }
  