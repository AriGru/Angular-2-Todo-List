import {Page, NavController, NavParams} from 'ionic-angular';

/*
  Generated class for the AddItemPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/add-item/add-item.html',
})
export class AddItemPage {
  private title: string;
  private description: string;

  constructor(private nav: NavController, private navParams: NavParams) {
    this.nav = nav;
    this.navParams = navParams;

    this.title = '';
    this.description = '';
  }

  saveItem(){
    let newItem = {
      title: this.title,
      description: this.description
    };

    this.navParams.get('listPage').saveItem(newItem);
    this.nav.pop();
  }
}
