import { HttpHeaders } from "@angular/common/http"

export class Configuration {

    //parametros staticos para serem usados na aplicação toda
    //build comando
    //ng build --prod --deploy-url=app/ --base-href="./"     
    
    public static APP = 'gerador-prova/';
    //pra local
    public static SERVER = 'http://localhost:8080/';
    public static WEBAPP = 'http://localhost:4200/';
    public static IMGSRC = './assets/logo.png';
    //pra server
    //public static SERVER = '../';
    //public static WEBAPP = '/b1988/';    
    //public static IMGSRC = './app/assets/logo.png/';
    
    public static SERVERPATH = Configuration.SERVER + Configuration.APP;
    public static JWT_TIMEOUT_SECONDS = 3600;    
    public static headers() {        
        return new HttpHeaders().set(
            "Content-Type",
            "application/x-www-form-urlencoded"
        )
    }

}
