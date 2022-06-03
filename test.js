const algoritmos = require('./testeFundamentais');

//somatório
test('somatório de 3 inteiros', () => {
  expect(algoritmos.somatorio([10,20,30])).toEqual(60);
});

test('somatório de 2 inteiros', () => {
  expect(algoritmos.somatorio([15,25])).toEqual(40);
});


//numeros primos
test('retorna numeros primos', () => {
  expect(algoritmos.primo(3)).toEqual(true);
});

test('retorna numeros primos', () => {
  expect(algoritmos.primo(8)).toEqual(false);
});

//fibonacci
test('sequencia fibonacci com 5 termos', () => {
  expect(algoritmos.fibo(5)).toEqual([0,1,1,2,3,5,8]);
});

test('sequencia fibonacci com 3 termos', () => {
  expect(algoritmos.fibo(3)).toEqual([0,1,1,2,3]);
});

//MDC
test('dois termos', () => {
  expect(algoritmos.mdc(20,40)).toEqual(20);
});

test('sequencia fibonacci com 3 termos', () => {
  expect(algoritmos.mdc(30,60)).toEqual(30);
});




// describe("fibo", () => {
//   context("Quando", () => {
//     it("Quando for a 3 sequencia de fibonnaci deve retornar")
//   })

//   context("Quando da errado", () => {

//   })
// })