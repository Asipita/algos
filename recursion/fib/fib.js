// ---- nth number in a Fibonacci series

function fibonacci(n, obj = {}){
    if(n <= 2) return 1
    if(n in obj) return obj[n]
    
    obj[n] = fibonacci(n-1, obj) + fibonacci(n-2, obj)
    return obj[n]
}

console.log(fibonacci(100))