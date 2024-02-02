import {of} from 'rxjs';
import {filter} from 'rxjs/operators';

require = require("esm")(module/* , options */)
module.exports = require("./main.js")

of(0,1,2,3,4,5,6,7,8,9).pipe(
    filter(n => n % 2 !==0) // el uso del map como estaba en la plataforma me trae un valor booleano
).subscribe(
   n => console.log(n)
);
