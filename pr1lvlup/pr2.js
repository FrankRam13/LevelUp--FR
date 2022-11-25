const keysAndValues = (diccionario) =>{
    let dic_llave = Object.keys(diccionario);
    let dic_valor = Object.values(diccionario);
    let dic_ambos = [dic_llave, dic_valor];
    return dic_ambos;
}

console.log(keysAndValues({a: 1, b: 2, c: 3}));
console.log(keysAndValues({a: "Apple", b: "Microsoft", c: "Google"}));
console.log(keysAndValues({key1: true, key2: false, key3: undefined}));

