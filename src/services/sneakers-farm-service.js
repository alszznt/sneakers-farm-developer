export default class SwapiService {

  _apiBase = 'https://sneakers-farm.herokuapp.com';

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  }

  getSearchSneakers = async ( search_request ) => {
    const res = await this.getResource(`/sneakers/search?query=${search_request}`);
    return res.results.map(this._transformSneakers);
  }

  getSneaker = async (id) => {
    const res = await this.getResource(`/sneakers/${id}`);
    return this._transformSneaker(res.result);
  }

  _transformSneakers = (sneakers) => {
    return {
      id: sneakers.sneaker_id,
      model: sneakers.model,
      addition: sneakers.addition,
      image: sneakers.image,
      brands: sneakers.brands,
      sets: sneakers.sets,
      min: sneakers.min
    }
  }
  _transformSneaker = (sneaker) => {
    return {
      id: sneaker.sneaker_id,
      model: sneaker.model,
      addition: sneaker.addition,
      image: sneaker.image,
      brands: sneaker.brands,
      sets: sneaker.sets,
      prices: sneaker.prices
    }
  }

}
