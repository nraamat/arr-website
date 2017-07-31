import { Injectable } from '@angular/core';
import { PrismicService } from './prismic.service';

export class PlayerItem {
  name: String;
  items: String[];
}

const PLAYER_ITEMS_TYPE_NAME = "navigationitem";

@Injectable()
export class PlayerService {

  constructor(private prismicService : PrismicService) { }

  public getItems() : Promise<PlayerItem[]> {
    return this.prismicService
      .queryForType(PLAYER_ITEMS_TYPE_NAME)
  }
}