function boilWater() {
    return new Promise((resolve) => {
        console.log("Починаємо кип'ятити воду");
        setTimeout(() => {
            console.log("Вода закипіла");
            resolve();
        }, 20000);
    });
}

function addTeapack(teapack) {
    return new Promise((resolve) => {
        console.log("Додаємо пакетик чаю:", teapack);
        setTimeout(() => {
            console.log("Пакетик чаю додано");
            resolve();
        }, 5000);
    });
}

function addSugar() {
    return new Promise((resolve) => {
        console.log("Додаємо цукор");
        setTimeout(() => {
            console.log("Цукор додано");
            resolve();
        }, 2000);
    });
}

function sliceBread() {
    return new Promise((resolve, reject) => {
        console.log("Ріжемо хліб");
        setTimeout(() => {
            console.log("Хліб нарізано");
            resolve();
        }, 10000);
    });
}

function sliceSausage() {
    return new Promise((resolve) => {
        console.log("Ріжемо ковбасу");
        setTimeout(() => {
            console.log("Ковбаса нарізана");
            resolve();
        }, 10000);
    });
}

function addButter() {
    return new Promise((resolve) => {
        console.log("Додаємо масло");
        setTimeout(() => {
            console.log("Масло додано");
            resolve();
        }, 5000);
    });
}

function cookBreakfast(teapack, sugar, bread, sausage, butter) {
    return new Promise((resolve, reject) => {
        if (!teapack) {
            reject(new Error("Немає пакетика чаю. Не можу приготувати сніданок."));
            return;
        }
        if (!bread) {
            reject(new Error("Немає хліба для бутерброда. Не можу приготувати сніданок."));
            return;
        }
        if (!sausage) {
            reject(new Error("Немає ковбаси. Не можу приготувати сніданок."));
            return;
        }
        if (!butter) {
            reject(new Error("Немає масла. Не можу приготувати сніданок."));
            return;
        }

        let makingTeaPromise = boilWater()
            .then(() => addTeapack(teapack))
            .then(() => {
                if (sugar) {
                    return addSugar();
                } else {
                    console.log("Пропускаемо цукор");
                    return Promise.resolve();
                }
            });

        let makingSandwichPromise = sliceBread()
            .then(() => sliceSausage())
            .then(() => addButter());

        Promise.all([makingTeaPromise, makingSandwichPromise])
            .then(() => {
                console.log("Сніданок готов!");
                resolve();
            })
            .catch((error) => {
                console.error("Помилка під час приготування сніданку:", error);
                reject(error);
            });
    });
}

module.exports = cookBreakfast;
