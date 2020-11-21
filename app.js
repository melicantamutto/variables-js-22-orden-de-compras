console.log('Orden de compras')
// Crear un programa que tome la orden de compra de un local. Pedir al usuario que ingrese la cantidad que desea comprar de tres productos distintos, uno por uno, mostrar el valor total de la compra y preguntar en cuántas cuotas desea realizar el pago. Mostrar un mensaje final con el detalle y el valor total la compra, cantidad de cuotas y valor de cada una de las cuotas. Los precios de los productos deben estar definidos de antemano en variables.

alert('Orden de compras')
const priceMedialunas = 30;
const priceCrema = 20;
const priceVigilantes = 35;

const cantidadMedialunas = prompt(`Ingrese la cantidad de medialunas que desea (la unidad está en $${priceMedialunas})`);
const cantidadCrema = prompt(`Ingrese la cantidad de facturas con crema que desea (la unidad está en $${priceCrema})`);
const cantidadVigilantes = prompt(`Ingrese la cantidad de vigilantes que desea (la unidad está en $${priceVigilantes})`);

const total = (Number(cantidadMedialunas)*priceMedialunas) + (Number(cantidadCrema)*priceCrema) + (Number(cantidadVigilantes)*priceVigilantes);

const cuotas = prompt(`El total de su compra serían $${total}, en cuántas cuotas desea pagar?`);

alert(`Detalle de la compra:
    (${cantidadMedialunas})Medialunas: $${Number(cantidadMedialunas)*priceMedialunas},
    (${cantidadCrema})Facturas con crema: $${Number(cantidadCrema)*priceCrema},
    (${cantidadVigilantes})Medialunas: $${Number(cantidadVigilantes)*priceVigilantes},
    El total de su compra serían $${total},
    El pago se va a realizar en ${cuotas}, cada una de $${total/Number(cuotas)}
`)
