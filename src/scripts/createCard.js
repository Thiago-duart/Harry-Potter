export function createCard(array){
    const sectionCharacters = document.querySelector('.card__container');
    const arrayApi = array
    let functionInSchool = ''
  arrayApi.forEach(e=> {
    if(e.hogwartsStudent){
        functionInSchool  = 'Estudante'
    }else if (e.hogwartsStaff){
        functionInSchool = 'Professor(a)'
    }else{
        functionInSchool = 'Não faz parte da escola de hogwarts'
    }
    if(e.image !== ''){
        sectionCharacters.insertAdjacentHTML('beforeend', 
       ` <div class="card__characters">
                <h2>${e.name}</h2>
                <img class="card__img" src="${e.image}" alt="">
                <div class="card__info"><p class="card__text">Species</p><div><p class="card__text">${e.species}</p></div></div>
                <div class="card__info"><p class="card__text">Gender</p><div><p class="card__text">${e.gender}</p></div></div>
                <div class="card__info"><p class="card__text">House</p><div><p class="card__text">${e.house}</p></div></div>
                <div class="card__info"><p class="card__text">Date of Birth</p><div><p class="card__text">${e.dateOfBirth}</p></div></div>
                <div class="card__info"><p class="card__text">Year of Birth</p><div><p class="card__text">${e.yearOfBirth}</p></div></div>
                <div class="card__info"><p class="card__text">Ancestry</p><div><p class="card__text">${e.ancestry}</p></div></div>
                <div class="card__info"><p class="card__text">Wand</p><div><p class="card__text">${e.wand.core}, ${e.wand.length}, ${e.wand.wood}</p></div></div>
                <div class="card__info"><p class="card__text">Patronus</p><div><p class="card__text">${e.patronus}</p></div></div>
                <div class="card__info"><p class="card__text">Hogwarts Student</p><div><p class="card__text">${functionInSchool}</p></div></div>
            </div>`);
    }
  });
}