import axios from 'axios';

class Cocktail{
    constructor(){
    this.cocktail = axios.create({
        baseURL:'https://www.thecocktaildb.com//api/json/v1/1/',
    });
    }

    async random(){
        const response = await this.cocktail.get('random.php');
            return response.data.drinks;
    }

    async categoryList(){
        const response = await this.cocktail.get('list.php',{
            params:{
                c:'list'
            },
        });
        return response.data.drinks;
    }
    async itemList(){
        const response = await this.cocktail.get('list.php',{
            params:{
                i:'list'
            },
        });
        return response.data.drinks;
    }
    async category(q){
        const response = await this.cocktail.get('filter.php',{
            params:{
                c:q
            },
        });
        return response.data.drinks;
    }
    async item(q){
        const response = await this.cocktail.get('filter.php',{
            params:{
                i:q
            },
        });
        return response.data.drinks;
    }
    async name(q){
        const response = await this.cocktail.get('search.php',{
            params:{
                s:q
            },
        });
        return response.data.drinks;
    }
}

export default Cocktail;