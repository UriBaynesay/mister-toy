import { storageService } from "./async-storage.service.js";

const STORAGE_KEY = "toys";

const labels = [
  "On wheels",
  "Box game",
  "Art",
  "Baby",
  "Doll",
  "Puzzle",
  "Outdoor",
  "Battery Powered"
];

export const toysService = {
  query,
  getById,
  save,
  remove,
  labels
  // getEmptyCar
};

function query() {
  // return axios.get(BASE_URL).then(res => res.data)
  return storageService.query(STORAGE_KEY);
}
function getById(toyId) {
  return storageService.get(STORAGE_KEY, toyId);
}
function remove(toyId) {
  // return Promise.reject('Not now!')
  return storageService.remove(STORAGE_KEY, toyId);
}
function save(toy) {
  if (toy._id) {
    return storageService.put(STORAGE_KEY, toy);
  } else {
    return storageService.post(STORAGE_KEY, toy);
  }
}

// function getEmptyCar() {
//     return {
//         vendor: 'Susita-' + (Date.now() % 1000),
//         price: utilService.getRandomIntInclusive(1000, 9000),
//     }
// }

// TEST DATA
// save({ "name": "Talking Doll","imgUrl":"https://www.babyshop.com/images/698507/card_xlarge.jpg","price": 123,"labels": ["Doll", "Battery Powered", "Baby"],"createdAt": 1631031801011,"inStock": true}).then(x => console.log(x))

// const toy = {
//   name: "Talking Doll",
//   price: 123,
//   labels: ["Doll", "Battery Powered", "Baby"],
//   createdAt: 1631031801011,
//   inStock: true,
// };
