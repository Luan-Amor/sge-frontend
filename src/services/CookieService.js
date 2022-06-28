import Cookies from "universal-cookie"

const cookie = new Cookies()

export class CookieService {

    static get(key){
        return cookie.get(key);
    }

    static set(key, value, options){
        cookie.set(key, value, options);
    }

    static remove(key){
        cookie.remove(key)
    }
}