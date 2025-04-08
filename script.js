
function delayedPromise(value, delay) {
    return new Promise((resolve) => {
    setTimeout(() => {
        resolve(value);
    }, delay);
    });
}


const promises = [
  delayedPromise("Проміс 1", Math.floor(Math.random() * 1000)),
  delayedPromise("Проміс 2", Math.floor(Math.random() * 1000)),
  delayedPromise("Проміс 3", Math.floor(Math.random() * 1000)),
  delayedPromise("Проміс 4", Math.floor(Math.random() * 1000)),
  delayedPromise("Проміс 5", Math.floor(Math.random() * 1000)),
];


Promise.all(promises)
    .then((results) => {
        console.log("Всі проміси успішно виконано!");
        console.log("Результати:", results);
    })
    .catch((error) => {
        console.error("Сталася помилка:", error);
    });


function delayedPromises(value, delay) {
    return new Promise((resolve) => {
    setTimeout(() => {
        resolve(value);
    }, delay);
    });
}


const promisesArr = [
    delayedPromises("Проміс 1", Math.floor(Math.random() * 1000)),
    delayedPromises("Проміс 2", Math.floor(Math.random() * 1000)),
    delayedPromises("Проміс 3", Math.floor(Math.random() * 1000)),
    delayedPromises("Проміс 4", Math.floor(Math.random() * 1000)),
    delayedPromises("Проміс 5", Math.floor(Math.random() * 1000)),
];


Promise.race(promisesArr)
    .then((result) => {
        console.log(`переміг ${result} проміс`);
    })
    .catch((eror) => {
        console.error("Сталася помилка:", eror);
    });
