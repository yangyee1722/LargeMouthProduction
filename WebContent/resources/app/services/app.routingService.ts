import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class RouterLinkService {
    constructor(private router: Router) { }
    routeTo(path): void {
        let link = ["/" + path];
        this.router.navigate(link);
    }
}