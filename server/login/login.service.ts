import User from '../user/user';
import * as https from 'https';


export default class LoginService {
    private appCockpitToken : String = '';

	constructor() {
        
	}
    
    private initSmartInAppCockpit():Promise<String> {
        
        return new Promise((resolve, reject) => {
            let data = JSON.stringify({
                application: "SMART",
                userName: "org\\f034671",
                password: "Password123$"
            });
    
            let options = {
                headers: {
                    'Content-Type': 'application/json'
                },
                host: 'apptest.oebb.at',
                path: '/shared/domain/api/auth/basic',
                method: 'POST'
            };
    
            let request = https.request(options, function(res){
                
                let response = '';    
                res.on('data', function(data){
                    response += data;
                });
    
                res.on('end', function(){
                    let d = JSON.parse(response);
                    resolve(d.access_token);
                });
            });
    
            request.write(data);
            request.end();
        });
    }

    private getUserId(username: String, token : String): Promise<String> {
        
        return new Promise((resolve, reject)=>{
            let options = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
                host: 'apptest.oebb.at',
                path: '/shared/domain/api/query/users/bycode?Code='+username,
                method: 'GET'
            };
            
            let request = https.request(options, function(res){
                let response = '';
                res.on('data', function(data){
                    response += data;
                });
    
                res.on('end', function(){
                    resolve(JSON.parse(response).result);
                });
            });
    
            request.end();
        });

        
    }

    public loginUser(userId:String, password: String, token: String, tenantId: String): Promise<any> {
        return new Promise((resolve, reject) => {
            let data = JSON.stringify({
                userId: userId,
                password: password
            });
    
            let options = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token,
                    'X-Oebb-SentBy': '',
                    'X-Oebb-SentFrom': '',
                    'X-Oebb-TenantId': tenantId
    
                },
                host: 'apptest.oebb.at',
                path: '/shared/domain/api/command/authenticate',
                method: 'POST'
            };
            
            let request = https.request(options, function(res){
                
                let response = '';
                res.on('data', function(data){
                    response += data;
                });
    
                res.on('end', function(){
                    resolve(JSON.parse(response));
                });
            });
    
            request.write(data);
            request.end();
        });   
    }

    private getTenantId(userId:String, token: String):Promise<String> {
        return new Promise((resolve, reject) => {
            let options = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
                host: 'apptest.oebb.at',
                path: '/shared/domain/api/query/tenants/byuser?userid='+userId,
                method: 'GET'
            };
            
            let request = https.request(options, function(res){
                
                let response = '';
                res.on('data', function(data){
                    response += data;
                });
    
                res.on('end', function(){
                    resolve(JSON.parse(response).result);
                });
            });
            request.end();
        });
    }

    public async login(username:String, password: String) {
        let token = await this.initSmartInAppCockpit();
        console.log('token:'+token);
        let userId = await this.getUserId(username, token);
        console.log('userid:'+userId);
        let tenantId = await this.getTenantId(userId, token);
        console.log('teantid:'+tenantId);
        let login = await this.loginUser(userId, password, token, tenantId);

        if (login.id == userId) {
            return true;
        } else {
            return false;
        }
    }  
}