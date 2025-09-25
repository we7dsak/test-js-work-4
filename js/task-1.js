function isEnoughCapacity(products, containerSize) {
    let totalProd = 0;
    for (const key in products) {
        totalProd += products[key]
    }
    
    return totalProd <= containerSize

    }
        
    


console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true

console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false

console.log(
  isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
); // true

console.log(
  isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
); // false

console.log(
  isEnoughCapacity({ apples: 1, grapes: 4, carrots: 3 }, 8)
); // true