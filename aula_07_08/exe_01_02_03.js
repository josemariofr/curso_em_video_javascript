// ###Ordem de precedência###
//Aritiméticos
// (), **, /, +, -, *
//Relacionais
//>, <, >=
//Lógicos
//!, &&, ||
//Ternário
//?, :
// ####################################################################################
// // > 5 > 2
// // true
// // > 5<=1
// // false
// // > var a = 4
// // undefined
// // > var b = 3
// // undefined
// // > a > b
// // true
// // > a >= b
// // true
// // > a == b
// // false
// // >
// ##################################################################################
// Primeiro NÃO depois E(&&) e depois OU(||)

// > var a = 8
// undefined
// > var b = 8
// undefined
// >
// > true && true
// true
// > true && false
// false
// > false && false
// false
// > false || false
// false
// > false || true
// true
// > true || true
// true
// > a > b && b % 2 == 0
// false
// > a <= b || b / 2 == 2
// true
// >
//######################################################################################
//Ternário
//> var x = 8
// undefined
// > var res = x % 2 == 0 ? 5:9
// undefined
// > x
// 8
// > res
// 5
// > var idade  = 19
// undefined
// > var r = idade >= 18 ? 'MAIOR' : 'MENOR'
// undefined
// > r
// 'MAIOR'
// >
