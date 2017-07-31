import { Injectable } from '@angular/core';
import { getApi, api, APIResponse, Predicates } from 'prismic-javascript'

const API_ENDPOINT = "https://aarhusrottenrollers.prismic.io/api/v2";
const API_CONFIGURATION = {};
const unmarshall = response => { return response.results.map(it => it.data) }

@Injectable()
export class PrismicService {
  constructor() {}

  private withApi() : Promise<api> {
    return getApi(API_ENDPOINT, API_CONFIGURATION);
  }

  public query(query: String | String[], options?: Object) : Promise<any> {
      return this.withApi()
        .then((api) => api.query(query)
        .then(response => unmarshall(response))
      );
  }

  public queryForType(type: String, options?: Object) : Promise<any[]> {
      return this.query(Predicates.at('document.type', type), options)
  }

}
