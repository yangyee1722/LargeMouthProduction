import {Injectable} from '@angular/core';
import {LoginModelMockup} from "../mockups/LoginModel-mockup";
import { Http, Response, Headers } from '@angular/http';
import { Observable }     from 'rxjs/Rx';  //'rxjs/Observable';
import {TokenModel} from "../models/login";

@Injectable()
export class LoginService {
    private loginUrl = "/login";

    compare(loginName, password) {
        return Promise.resolve(loginName == LoginModelMockup.loginName && password == LoginModelMockup.password);
    }

    constructor(private http: Http) { }

    login(loginName, password):Observable<TokenModel> {

        this.loginUrl += "?name=" + encodeURIComponent(loginName);
        return this.http.get(this.loginUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
       let body =  JSON.parse(res['_body']);
       return body || { };
    }

    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }


}