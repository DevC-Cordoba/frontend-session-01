import axios from 'axios';
import CryptoJS from 'crypto-js'
import moment from 'moment'

class HeroService {

    static getHeroById(id){
        return axios.get('https://gateway.marvel.com:443/v1/public/characters/' + id + this.getHash());
    }

    static getHash(){
        const timeStamp = moment().unix();
        const privateKey = 'c9682b07bf7b12d5a241d838a7c7bf42b3261366';
        const publicKey = '9ba165bcee4eca20e64c061dd2713537';
        const hash = CryptoJS.MD5(timeStamp + privateKey + publicKey)
            .toString(CryptoJS.enc.Hex);

        return `?apikey=${publicKey}&ts=${timeStamp}&hash=${hash}`;
    }
}

export default HeroService