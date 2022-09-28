
//~~~~~~~~~~~~~~~~~~~~~~~~~~Получение словоформы для числа
/* <script> 

    function getNumWord(num,word1,word2,word5) {
        const dd=num%100;
        if ( (dd>=11) && (dd<=19) )
            return word5;
        const d=num%10;
        if ( d==1 )
            return word1;
        if ( (d>=2) && (d<=4) )
            return word2;
        return word5;
    }

    function test() {
        const applesS=prompt('Сколько у вас яблок?');
        const apples=parseInt(applesS);
        alert( 'У вас ' + apples + ' ' + getNumWord(apples,'яблоко','яблока','яблок') + '!' );
    }

</script> */


// Хэш как память (как запомнить что что-то уже случалось)~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// const values=[55,77,55,66,77];
// let used={}; // ключ хэша - число, которое уже встречалось
// for ( let i=0; i<values.length; i++ ) {
//     const value=values[i]; // очередное значение
//     if ( value in used ) // встречалось ли оно?
//         continue; // если да - всё, берём следующее
//     used[value]=true; // если нет - запоминаем, что это значение уже встречалось
//     console.log(value); // выводим его в консоль
// }


// Хэш как набор опций (аргументы функции)~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// function message(txt,options) {
//     options=options || {};
//     let header=options.header || 'ВНИМАНИЕ!';
//     let count=options.count || 1;

//     console.log( header );
//     for ( let i=1; i<=count; i++ )
//         console.log( i+" "+txt );
// }

// message( 'Доброе утро!', { header:'ИНФОРМАЦИЯ', count:3 } );
// message( 'Добрый день!!', { header:'ИНФОРМАЦИЯ' } );
// message( 'Добрый вечер!', { count:2 } );
// message( 'Здравствуйте!', { } );
// message( 'До свидания!' );

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~Хэш как словарь (таблица перекодировки)
// function colorCode(colorName) {
//     const colors={
//         red:'#FF0000', green:'#00FF00', blue:'#0000FF', black:'#000000', white:'#FFFFFF'
//     };
//     return colors[colorName];
// }

// console.log( colorCode('red') );
// console.log( colorCode('white') );


//Хэш как счётчик ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// const animals=[ 'собака', 'кошка', 'тушкан', 'собака', 'собака', 'тушкан' ];

// let count={}; // ключ - животное, значение - сколько раз оно встретилось
// for ( let i=0; i<animals.length; i++ ) {
//     const animal=animals[i];
//     if ( !(animal in count) )
//         count[animal]=0;
//     count[animal]++;
// }

// console.log( count );


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~Для замены в строке одной подстроки на другую можно применять
// метод строки split(разделитель) в комбинации с методом массива join(разделитель):

// s.split(s1).join(s2)

// где s1 — заменяемая подстрока, а s2 — подстрока, на которую нужно заменить.

// Пример использования:

// var r='Изучаем JAVASCRIPT, забываем JAVA!';
// console.log( r.split('JAVA') );
// [ 'Изучаем ', 'SCRIPT, забываем ', '!' ]
// console.log( r.split('JAVA').join('Java') );
// Изучаем JavaSCRIPT, забываем Java!
// console.log( r.split('JAVA').join('Java').split('SCRIPT').join('Script') );
// Изучаем JavaScript, забываем Java!


// ~~~~~~~~~~~~~~~~~~~~~~~~~~Для округления числа не к ближайшей единице, а например к ближайшей сотне или к ближайшей десятой доле, можно применять формулу:

// Math.round(n/m)*m

// где n — округляемое число, а m — модуль округления, т.е. то число, на которое должно нацело делиться округляемое n (т.е. например 100 или 0.1).

// Для удобства можно написать функцию
// для такого округления:

// function roundMod(n,m) {
//   return Math.round(n/m)*m;
// }
// Пример использования:

// console.log( roundMod(15.2,10) );
// 20
// console.log( roundMod(14.8,10) );
// 10
// console.log( roundMod(55.55555,0.01) );
// 55.56

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Для получения случайного целого числа в заданном диапазоне (например от 1 до 10), можно применять формулу:

// Math.floor(Math.random()*(m-n+1))+n

// где n и m — границы диапазона (т.е. например 1 и 10).

// Для удобства можно написать функцию для получения целого случайного числа в заданном диапазоне:

// function randomDiap(n,m) {
//   return Math.floor(
//     Math.random()*(m-n+1)
//     )+n;
// }
// Пример использования:

// console.log( randomDiap(1,10) );
// 8
// console.log( randomDiap(1,10) );
// 
// ~~~~~~~~~~~~~~~// округление до произвольного модуля
// function roundMod(n,m) {
//     return Math.round(n/m)*m;
// }

// // получение целого случайного числа в заданном диапазоне
// function randomDiap(n,m) {
//     return Math.floor(Math.random()*(m-n+1))+n;
// }



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~// форматирует переданную дату-время в формате дд.мм.гггг чч:мм:сс
// function formatDateTime(dt) {
//     const year=dt.getFullYear();
//     const month=dt.getMonth()+1;
//     const day=dt.getDate();
//     const hours=dt.getHours();
//     const minutes=dt.getMinutes();
//     const seconds=dt.getSeconds();
//     return str0l(day,2) + '.' + str0l(month,2) + '.' + year
//         + ' ' + str0l(hours,2) + ':' + str0l(minutes,2) + ':' + str0l(seconds,2);
// }

// // дополняет строку Val слева нулями до длины Len
// function str0l(val,len) {
//     let strVal=val.toString();
//     while ( strVal.length < len )
//         strVal='0'+strVal;
//     return strVal;
// }

// const currTime=new Date();
// console.log( formatDateTime(currTime) );

// ~~~~~~~~~~~~~~~~~~~~~~~~~~// получение координат элемента относительно верхнего левого угла страницы
// function getElementPos(elem) {
//     const bbox=elem.getBoundingClientRect();
//     return {
//         left: bbox.left+window.pageXOffset,
//         top: bbox.top+window.pageYOffset
//     };
// }

// // то же, кроссбраузерный вариант (в т.ч. для IE8-)
// function getElementPos(elem) {
//     var bbox=elem.getBoundingClientRect();

//     var body=document.body;
//     var docEl=document.documentElement;

//     var scrollTop=window.pageYOffset||docEl.scrollTop||body.scrollTop;
//     var scrollLeft=window.pageXOffset||docEl.scrollLeft||body.scrollLeft;

//     var clientTop=docEl.clientTop||body.clientTop||0;
//     var clientLeft=docEl.clientLeft||body.clientLeft||0;

//     var top=bbox.top+scrollTop-clientTop;
//     var left=bbox.left+scrollLeft-clientLeft;

//     return {
//         left: left,
//         top: top
//     };
// }

// Изменение HTML-содержимого через innerHTML+= (проблема решена)
// {/* <style>
// #ICont ul { border: solid red 1px; }
// </style>

// <div id=ICont></div>

// <input type='button' value='добавить список' onclick='addList()'>

// <script>

// function addList() {

//     const list=["красный","жёлтый","зелёный"];

//     let str='';
//     str+="<ul>";
//     for ( let i=0; i<list.length; i++ )
//         str+="<li>"+list[i]+"</li>";
//     str+="</ul>";

//     const contElem=document.getElementById('ICont');
//     contElem.innerHTML=str;
//     console.log(contElem.innerHTML);
// }

// </script> */}