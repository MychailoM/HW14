
// function delayedPromise(value, delay) {
//     return new Promise((resolve) => {
//     setTimeout(() => {
//         resolve(value);
//     }, delay);
//     });
// }


// const promises = [
//   delayedPromise("Проміс 1", Math.floor(Math.random() * 1000)),
//   delayedPromise("Проміс 2", Math.floor(Math.random() * 1000)),
//   delayedPromise("Проміс 3", Math.floor(Math.random() * 1000)),
//   delayedPromise("Проміс 4", Math.floor(Math.random() * 1000)),
//   delayedPromise("Проміс 5", Math.floor(Math.random() * 1000)),
// ];


// Promise.all(promises)
//     .then((results) => {
//         console.log("Всі проміси успішно виконано!");
//         console.log("Результати:", results);
//     })
//     .catch((error) => {
//         console.error("Сталася помилка:", error);
//     });


// function delayedPromises(value, delay) {
//     return new Promise((resolve) => {
//     setTimeout(() => {
//         resolve(value);
//     }, delay);
//     });
// }


// const promisesArr = [
//     delayedPromises("Проміс 1", Math.floor(Math.random() * 1000)),
//     delayedPromises("Проміс 2", Math.floor(Math.random() * 1000)),
//     delayedPromises("Проміс 3", Math.floor(Math.random() * 1000)),
//     delayedPromises("Проміс 4", Math.floor(Math.random() * 1000)),
//     delayedPromises("Проміс 5", Math.floor(Math.random() * 1000)),
// ];


// Promise.race(promisesArr)
//     .then((result) => {
//         console.log(`переміг ${result} проміс`);
//     })
//     .catch((eror) => {
//         console.error("Сталася помилка:", eror);
//     });






//для роботи данного коду потрібно підключити NPM
// (import axios from "axios";
// // async - ця функція буде асинхронною
// const getImgs = async () => {
//   // const img = fetch(
//   //   'https://pixabay.com/api/?key=37133631-8f51e9c6f744fc90bf0fea549&q=yellow+flowers&image_type=photo'
//   // );
//   // console.log(img);
//   // img
//   //   .then(value => {
//   //     return value.json();
//   //   })
//   //   .then(date => {
//   //     console.log(date);
//   //   });
//   // async await
//   // try catch
// try {
//     const { data } = await axios.get(
//         "https://pixabay.com/api/?key=37133631-8f51e9c6f744fc90bf0fea549&q=yellow+flowers&image_type=photo"
//     );

//         console.log(data.hits);
//     } catch (error) {
//         console.log(error);
//     }
// };

// getImgs();)