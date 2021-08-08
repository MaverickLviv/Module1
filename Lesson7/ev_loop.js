


function morningTime(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                console.log('Утро, мать его');
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
async function allDay (){
    const day = await morningTime(3)
}
allDay().then();