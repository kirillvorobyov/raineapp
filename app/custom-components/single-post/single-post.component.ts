import {Component, Input, Output} from '@angular/core';
import {ActionSheetController} from 'ionic-angular';
import {ImagePreloader} from '../../attribute-directives/image-preloader';

@Component({
    selector: 'post',
    template: `<div class="single-post">
    <img src="{{postImage}}" class="feed-image">
    <div class="app-feed-title">
      <h1 class="primary-font bold-weight post-title animated fadeInUp" [innerHTML]="postTitle"></h1>
      <!--<h6 class="light-weight animated fadeInDown">{{postCommentCount}} Comments | {{postNumberOfLikes}} likes | {{postNumberOfShares}} Shares</h6>-->
    </div>
    <div class="close-post-button" navPop>
    <ion-icon name="close"></ion-icon>
    </div>
    <h6 class="app-feed-category divider divider-text-right secondary-font semi-bold">{{postCategory}}</h6>
    <div  class="app-feed-date animated fadeIn">
      <h1 class="primary-font bold-weight">27</h1>
      <h6 class="primary-font light-weight">July</h6>
    </div>
    <div class="share-post-button" (click)="PresentActionSheet()"><ion-icon name="more"></ion-icon></div>
  </div>
  <div class="post-content">
    <div [innerHTML]="postContent"></div>
    <!--<h6 class="post-author divider divider-text-left">-->
      <!--Michelle Martinez-->
    <!--</h6>-->
  </div>`,
    directives: [ImagePreloader]
})

export class SinglePostComponent {
    constructor(private actionSheetCtrl: ActionSheetController) {

    }

    @Input() postTitle: string = 'Somewhere I belong, Somewhere I am not';
    @Input() postContent: string = 'Somewhere I belong, Somewhere I am not';
    @Input() postCategory: string = 'Miscellaneous';
    @Input() postImage: string = 'build/assets/blank-default-feed-bg.png';
    @Input() postCommentCount: number = 343;
    @Input() postNumberOfShares: number = 29;
    @Input() postNumberOfLikes: number = 2;


    PresentActionSheet() {
        let actionSheet = this.actionSheetCtrl.create({
            title: 'Where to share: ' + this.postTitle,
            buttons: [{
                text: ' Facebook',
                handler: () => {
                    console.log('Share Clicked');
                }
            },
                {
                    text: ' GooglePlus',
                    handler: () => {
                        console.log('Share Clicked');
                    }
                }]
        });
        actionSheet.present();
    }
}
