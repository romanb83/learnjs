"use strict"

let money, time;

function start() {
    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?','');
    }

    time = prompt('Введите дату в формате YYYY-MM-DD','');
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Введите обязательную статью расходов в этом месяце',''),
                b = prompt('Во сколько обойдется?','');
            appData.expenses[a] = b;
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log('Низкий уровень достатка');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay > 2000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Ошибка');
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?'),
                percent = +prompt('Под какой процент?');
    
            appData.monthIncome = (save / 100 / 12 * percent).toFixed(2);
            alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 0; i < 3; i++) {
            let opt = prompt('Статья необязательных расходов?');
            appData.optionalExpenses[i] = opt;
        }
    },
    chooseIncome: function() {
        let items;
        while(!isNaN(items) || items == '' || items == null) {
            items = prompt('Что принесёт дополнительный доход? (перечислите через запятую)', '');
        }
        appData.income = items.split(', ');
        appData.income.forEach(function(item) {
            alert('Способы доп. заработка ' + item);
        })
        appData.income.push(prompt('Может что-то ещё?'));
        appData.income.sort();
    }
}

console.log('Наша программа включает в себя данные: ');
for (let key in appData) {
    console.log(key);
}