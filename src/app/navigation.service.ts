import { Injectable } from '@angular/core';
import { PrismicService } from './prismic.service';

export class NavigationItem {
  name: String;
  items: String[];
}

const ITEMS = [
    {
      name : "Home",
      items : ["The most rotten place on earth", "Come roll with us"]
    },
    {
      name : "Roster",
      items : ["Niels", "Thorbjørn", "Brian", "Jens", "Jonas", "Anders"]
    },
    {
      name : "Come roll with us",
      items : []
    },
    {
      name : "What is Roller Derby",
      items : []
    },
    {
      name : "The road to Barcelona 2018",
      items : []
    }
  ];

const NAVIGATION_ITEMS_TYPE_NAME = "navigationitem";
const itemsFlatten = it => { return { name: it.name, items: it.items.map(subIt => subIt.item)} };


@Injectable()
export class NavigationService {

  constructor(private prismicService : PrismicService) { }

  public getItems() : Promise<NavigationItem[]> {
    return this.prismicService
      .queryForType(NAVIGATION_ITEMS_TYPE_NAME)
      .then(results => results.map(itemsFlatten))
  }
}
