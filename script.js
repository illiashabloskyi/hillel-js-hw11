// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

const array = [1, 2, 3, 4, 5, 6, 7];

// TODO: Оголошення за допомогою function

// function removeElement(arr, element) {
//   for (i = 0; i < arr.length; ++i) {
//     if (arr[i] === element) {
//       arr.splice(i, 1);
//     }
//   }
// }

// removeElement(array, 5);

// console.log(array);

// TODO: Оголошення за допомогою () => {}

const removeElement = (arr, element) => {
  for (i = 0; i < arr.length; ++i) {
    if (arr[i] === element) {
      arr.splice(i, 1);
      return arr
    }
  }
}

console.log(removeElement(array, 7))

// Результат: [1, 2, 3, 4, 6, 7]
