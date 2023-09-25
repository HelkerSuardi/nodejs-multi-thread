const { workerData, parentPort } = require('node:worker_threads');

const fibonacci = (n) => (n < 1 ? 0
  : n <= 2 ? 1
    : fibonacci(n - 1) + fibonacci(n - 2));

const result = fibonacci(workerData.iterations);

parentPort.postMessage(result);

module.exports = { fibonacci };
