import { Component, ElementRef, ViewChild, Renderer, ContentChild,OnInit } from '@angular/core';
import {HomeService} from "./app.services"
import {MediaModel} from './models/home';

@Component({
  selector: 'my-app',
  templateUrl: 'resources/partials/home.html',
  providers: [HomeService]
})

export class AppComponent implements OnInit {
  constructor(private homeService: HomeService) { }
  ngAfterViewInit() {
    this.scrollToBottom();
  }

  ngOnInit() {
    this.scrollToBottom();
    this.getList();
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    var mediaList = document.getElementById("mediaList");
    mediaList.scrollTop = mediaList.scrollHeight;
  }

  mediaList:MediaModel[];

  title = "Unknown";
  selectedText = "";
  description = "";
  getList():void{
    this.homeService.get().then(i => this.mediaList = i);
  }
  postComment(text) {
    var index = this.mediaList.length - 1;
    var incrementId = this.mediaList[index].id + 1;
    var model = {};
    this.homeService.update({ id: incrementId, heading: "Unknown", description: text, img: 'resources/contents/img/theme.jpg', date: new Date().toLocaleString() }).then(i => this.mediaList = i);
    this.description = "";
  }
}




