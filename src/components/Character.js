// Write your Character component here
import React from 'react';
import styled from 'styled-components'

const Art = styled.div`
display: flex;
margin: 5%;
`
function Characters(props){   
         return (      
            <Art >
            <div className='character'>
               <h2>{props.character.name}</h2>
                <p>gender:{props.character.gender}</p>
                <p>height:{props.character.height}</p>
                <p>mass:{props.character.mass}</p>
                <p>birthYear:{props.character.birth_year}</p>
                <p>eyeColor:{props.character.eye_color}</p>
                <p>hairColor:{props.character.hair_color}</p>
                <p>skinColor:{props.character.skin_color}</p>
             </div> 
             </Art>
             )
             }
             

export default Characters;