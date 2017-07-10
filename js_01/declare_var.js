/**
 * Created by WaterStone.Shi on 2017/7/10.
 */
'use strict';
function declareVar() {
    var varStr = 'var';
    let letStr = 'let';
    const constStr = 'const';
    var varStr = 'letB'; // true
    // let varStr = ''; // false
    // let letStr = ''; // false
    for(var i = 0; i < 2; i++){
        if(i === 1){
            var varForStr = 'i = ' + i;
            var varStr = 'i = ' + i; // 覆盖之前的varStr变量
            let letForStr = 'i = ' + i; // 作用范围仅在if块中
            const constStr = 'constFor'; // 作用于仅在if块中，且不会覆盖之前的constStr
            console.log(constStr)
        }
    }
    console.log(varForStr);
    console.log(varStr);
    console.log(constStr); // const
    // console.log(letForStr); // false
}
declareVar();

