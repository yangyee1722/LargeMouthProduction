import {Injectable} from '@angular/core';
import {MediaModel} from './models/home';
import {MediaList} from './mockups/MediaModel-mockups';
import {List} from './mockups/MediaModel-mockups';

@Injectable()
export class HomeService{
    get():Promise<MediaModel[]>{
      return Promise.resolve(MediaList);
    }
    update(MediaModel):Promise<MediaModel[]>{
        MediaList.push(MediaModel);
        return Promise.resolve(MediaList);
    }
}