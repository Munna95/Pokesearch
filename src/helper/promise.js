export default function promiseHelper(promise) {
  return promise.then((data) => [data]).catch((err) => [null, err]);
}
