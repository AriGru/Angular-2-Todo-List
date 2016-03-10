import {Page, NavController} from 'ionic-angular';
import {AddItemPage} from '../add-item/add-item';
import {ItemDetailPage} from '../item-detail/item-detail';
import {SearchPlaceListPage} from '../search-place-list/search-place-list';

@Page({
  templateUrl: 'build/pages/list/list.html'
})

export class ListPage {
  private items: any;

  constructor(private nav: NavController) {
    this.nav = nav;
    this.items = [];
    this.testAPP();
  }

  addItem(){
    this.nav.push(AddItemPage, {listPage: this});
  }

  testAPP(){
    console.log("test");
  }

  saveItem(item){
    this.items.push(item);
  }

  viewItem(item) {
    this.nav.push(ItemDetailPage, {item: item});
  }

  searchPlaces() {
    this.nav.push(SearchPlaceListPage)
  }

}
