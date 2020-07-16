// Problema:
//Dado un conjunto de palabras u oraciones devolver el o los palindromos mas largos.
    
// Tercer elemento es el mas grande
let package = ["ANA","Alí tomó tila","Allí ves Sevilla.","Hola","Anita lava la tina","Ene"]
let palindromos = {}
var bool = false

for (var i = 0; i < package.length; i++) 
{
    bool = espalindromo(package[i]);

    if (bool == true)
    {
        palindromos[package[i]] = package[i].length
    }
    // Si quieres ver si la funcion lo tomo como palindromo o no.
    // console.log(bool)
}
// Valor de numero de caracteres y compararlo (guardar un array con los tamaños)

// Si quieres ver los palindromos en el diccionario.
// console.log(palindromos);
result = getMax(palindromos)

// Imprimir resultado
console.log(result);


// Function obtain max
function getMax(palindromos)
{
    return Object.keys(palindromos).filter(x => {
         return palindromos[x] == Math.max.apply(null, 
         Object.values(palindromos));
   });
}

//Function obtener palidromo
function espalindromo(cadena) 
{
    var result = false
    var str = cadena;
    // Eliminar espacios
    var st = str.replace(/\s/g, '');
    // Eliminar acentos
    var s = st.normalize("NFD").replace(/[\u0300-\u036f]/g, "")

    // Revisar como se cambio la cadena de caracteres.
    //console.log(s);


    // String en minúsculas
    var check = s.toLowerCase();
    // Crear string al revés
    var reverse_check = check.split("").reverse().toString();
    
    // Eliminar commas
    for (var i = 0; i < ((reverse_check.length)-1); i++) {
        reverse_check=reverse_check.replace(",","");
    };

    // Tamaño del string
    var num = check.length;

    // Si cadena vacia no es palindromo
    if (s == 0)
    {
       return result;
    }
    
    // Comparar cadenas
    if (check == reverse_check) 
    {
        return true;
    }
}








