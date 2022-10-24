import { storageService } from "./async-storage.service.js"

const STORAGE_KEY = "toys"

const labels = [
  "On wheels",
  "Box game",
  "Art",
  "Baby",
  "Doll",
  "Puzzle",
  "Outdoor",
  "Battery Powered",
]

export const toysService = {
  query,
  getById,
  save,
  remove,
  labels,
}

preloadData()

function query() {
  return storageService.query(STORAGE_KEY)
}
function getById(toyId) {
  return storageService.get(STORAGE_KEY, toyId)
}
function remove(toyId) {
  return storageService.remove(STORAGE_KEY, toyId)
}
function save(toy) {
  if (toy._id) {
    return storageService.put(STORAGE_KEY, toy)
  } else {
    return storageService.post(STORAGE_KEY, toy)
  }
}

function preloadData() {
  const toy = {
    _id: "101",
    name: "Talking Doll",
    imgUrl: "https://www.babyshop.com/images/698507/card_xlarge.jpg",
    price: 123,
    labels: ["Doll", "Battery Powered", "Baby"],
    createdAt: 1631031801011,
    inStock: true,
  }
  save(toy)
}
