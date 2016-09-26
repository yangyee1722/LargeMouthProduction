import {Injectable} from '@angular/core';
import {LoginModelMockup} from "../mockups/LoginModel-mockup";

@Injectable()
export class LoginService {
    compare(loginName,password) {
        return Promise.resolve(loginName == LoginModelMockup.loginName && password == LoginModelMockup.password);
    }
}