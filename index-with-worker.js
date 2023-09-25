const { Worker } = require('node:worker_threads');

const doFib = async (iterations) => new Promise((resolve, reject) => {
  const start = Date.now();

  const worker = new Worker('./fib.js', {
    workerData: { iterations },
  });

  worker.once('message', (data) => {
    console.log(`worker ${worker.threadId}: done in ${Date.now() - start}ms`);
    resolve(data);
  });

  worker.once('error', (error) => reject(error));
});

const main = async () => {
  const start = Date.now();

  const values = await Promise.all([
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
  ]);

  console.log({ values });

  console.log(`fib done in ${Date.now() - start} ms`);
};

main();
