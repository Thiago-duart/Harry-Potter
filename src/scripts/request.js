
import { createCard } from "./createCard.js"

export async function receivApi(){
    
    const charactersHarryPotter = await fetch('https://hp-api.onrender.com/api/characters',{
        method: 'GET'
    })
    .then((response)=>{
       if(response.ok){
        return response.json()
       }else{
        throw new Error('Algo deu errado')
       }
    })
    .catch(error => console.log(error))
    
    return charactersHarryPotter
}

export function houseHogwarts(){

    const btnFilterHouse = document.querySelectorAll('.filterHouse')
    const cardContainer = document.querySelector('.card__container')

    btnFilterHouse.forEach((btn)=>{
        btn.addEventListener('click', async (e) =>{
            cardContainer.innerHTML = ""
            
            const houseFilter = await fetch(`https://hp-api.onrender.com/api/characters/house/${e.target.value}`,{
                method:'GET'
            })
            .then((response)=>{
                if(response.ok){
                    return response.json()
                }else{
                    throw new Error('Algo deu errado')
                   }
            })
            .catch(error => console.log(error))
            createCard(houseFilter)
        })
    })

    const btnAllHouse = document.querySelector('#btnAll')
    btnAllHouse.addEventListener('click', async ()=>{
        cardContainer.innerHTML = ""

        const houseFilterAll = await fetch('https://hp-api.onrender.com/api/characters',{
            method:'GET'
        })
        .then((response)=>{
            if(response.ok){
                return response.json()
            }else{
                throw new Error('Algo deu errado')
            }
        })
        .catch(error=>console.log(error))
        createCard(houseFilterAll)
    })
}