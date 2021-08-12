


function morningTime(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                console.log('Утро, день, вечер') ;
                if (time < 3) {
                    console.log('Спим')
                    reject('Спать')
                }
                else {
                    console.log('Подъем');
                    resolve('Встаем');
                }
            }, 500)

    })
}

function morningTime1(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Встал');
            resolve();
        }, 200);
    } )
}
function morningTime2(/*time*/) {
    return new Promise((resolve, /*reject*/) => {
        setTimeout(() => {
            console.log('Курим');
            resolve();
        }, 600);
    } );

}
function morningTime3(time, water) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Водные процедуры');
            if (water < 0) {
                console.log('No bathroom')
            } else {
                console.log('Умываться, чистить зубы')
            }
            resolve();
        }, 700);
    } );

}

function morningTime4(/*time*/) {
    return new Promise((resolve, /*reject*/) => {
        setTimeout(() => {
            console.log('Сборы');
            resolve();
        }, 800);
    } );

}
function morningTime5(/*time*/) {
    return new Promise((resolve, /*reject*/) => {
        setTimeout(() => {
            console.log('ДОрога на работу');
            resolve();
        }, 700);
    } );

}
function morningTime6(/*time*/) {
    return new Promise((resolve, /*reject*/) => {
        setTimeout(() => {
            console.log('Работа, отбытие домой');
            resolve();
        }, 700);
    } );

}
function morningTime7(/*time*/) {
    return new Promise((resolve, /*reject*/) => {
        setTimeout(() => {
            console.log('Ужин, лекция, учеба');
            resolve();
        }, 800);
    } );

}
function morningTime8(/*time*/) {
    return new Promise((resolve, /*reject*/) => {
        setTimeout(() => {
            console.log('Сон');
            resolve();
        }, 900);
    } );

}


async function allDay (){
    try {
        const day = await morningTime(3)
        await morningTime1();
        await morningTime2();
        await morningTime3();
        await morningTime4();
        await morningTime5();
        await morningTime6();
        await morningTime7();
        await morningTime8();
    }    catch (err) {
        console.log(err);
    }

}


allDay().then();