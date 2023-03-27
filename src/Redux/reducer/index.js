import image1 from '../../foto.jpg'
import image3 from '../../certificado2.jpg'
const initialState = {
 cards: [{image: image1, title: "Pedro Insausti", description: " Soy Fullstack developer y bienvenidos a mi portfolio, donde podran conocer algunas de mis skills, mis proyectos y parte de mi vida personal."},{title: "¿Qué significa Henry? ", image: image3, description:"Henry es un bootcamp que me dio herramientas, conocimientos y me intrudujo al mundo IT haciendome conocer una comunidad extraordinaria con una gran calidad humana. Significó un gran paso en mi vida "}]
 };
 
 const rootReducer = (state = initialState, action) => {
   // eslint-disable-next-line default-case
   switch (action.type) {
//     case GET_ALL_VIDEOGAMES:
//        return{...state, videogames: action.payload, videogamesComplete: action.payload}
    

    default: return state
   }

 };
 
 export default rootReducer;
 