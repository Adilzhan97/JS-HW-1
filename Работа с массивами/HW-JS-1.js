// Task 1. Написать функцию, которая найдет и выведен в консоль юзеров, зарегистрированных 09.10.2021 и 10.10.2021
// const users = [
//     {
//         firstName: 'John',
//         lastName: 'Caper',
//         phone: '7436676737634',
//         registrationDate: '12.10.2021'
//     },
//     {
//         firstName: 'Clark',
//         lastName: 'Kent',
//         phone: '4346676737634',
//         registrationDate: '16.09.2021'
//     },
//     {
//         firstName: 'Tony',
//         lastName: 'Stark',
//         phone: '7436698337634',
//         registrationDate: '11.10.2021'
//     },
//     {
//         firstName: 'Bruce',
//         lastName: 'Wayne',
//         phone: '1111176737634',
//         registrationDate: '09.10.2021'
//     },
//     {
//         firstName: 'Star',
//         lastName: 'Lord',
//         phone: '7439374737634',
//         registrationDate: '10.10.2021'
//     },
//     {
//         firstName: 'Kate',
//         lastName: 'Bishop',
//         phone: '7436693647634',
//         registrationDate: '11.10.2021'
//     },
//     {
//         firstName: 'Jerry',
//         lastName: 'James',
//         phone: '7409048737634',
//         registrationDate: '10.10.2021'
//     },
//     {
//         firstName: 'Jeremy',
//         lastName: 'Clarkson',
//         phone: '743667600289334',
//         registrationDate: '16.10.2020'
//     },
//     {
//         firstName: 'Robert',
//         lastName: 'Patrik',
//         phone: '7436676730093',
//         registrationDate: '10.10.2020'
//     },
//     {
//         firstName: 'Jonny',
//         lastName: 'Sins',
//         phone: '74923982737634',
//         registrationDate: '01.01.2021'
//     },
//     {
//         firstName: 'Andrew',
//         lastName: 'Garfield',
//         phone: '743667988344',
//         registrationDate: '09.10.2019'
//     },
//     {
//         firstName: 'Jane',
//         lastName: 'Foster',
//         phone: '74368783427634',
//         registrationDate: '09.10.2019'
//     },
//     {
//         firstName: 'Rick',
//         lastName: 'Smith',
//         phone: '700000037634',
//         registrationDate: '12.10.2021'
//     },
// ];

const usersFiltered = users.filter((user) => {
if(user.registrationDate === '09.10.2021'|| user.registrationDate === '10.10.2021') {
return user;
}
})
console.log(usersFiltered);


// от себя: вывел пользователей с номерами телефона :'743667988344','74368783427634'
const usersFiltered = users.filter((user) => {
if(user.phone === '743667988344' || user.phone === '74368783427634') {
    return user;
}
})
console.log(usersFiltered);


// // Task 2*

// Откройте в VSCode task2.json файл. Скопируйте из него JSONку, вставьте в свой код (присвоив в переменную).

// Дан массив объектов. Каждый объект является идентификационной карточкой человека. Нам нужно хранить только уникальные значения в этом массиве. Реализуйте функцию, которая будет выполнять эту работу.

const jsonData= require('./task2.json'); 

for (let j=0;j<jsonData.length;j++){
    for (let i=0;i<jsonData.length;i++){
        if(i==j){
            continue;
        }
        else if(jsonData[i].name==jsonData[j].name)
        {
            jsonData.splice(j,1);
        }
    }
}
console.log(jsonData)





// Task 2*** Реализуйте считывание из JSONки из файла task2.json с помощью, например, модуля fs. для дальнейшего использования в функции, описанной в задании

const fs = require('fs');
let rawUsers = fs.readFileSync("task2.json"); /* чтение файла */
let users = JSON.parse(rawUsers); /* перевод данных в JSON */

let uniqueUsers = users.reduce(
    (unique, user) => {
        if (unique.map[user.name]) return unique;
        unique.map[user.name] = true;
        unique.uniqueUsers.push(user);
        return unique;
    },
    {
        map: {}, /* checked users */
        uniqueUsers: [],
    }
).uniqueUsers;
console.log(uniqueUsers);





// Task 3**
// В файле task3.txt найдете структуру компании и задания, необходимые выполнить.

// Задания:
// 1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.

// **Пример:**

// Предприятие 1 (45 сотрудников)
// - Отдел тестирования (10 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Администрация (15 человек)
// Предприятие 2 (75 сотрудников)
// - Отдел разработки (50 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Отдел охраны труда (5 сотрудников)
// Предприятие 3 (нет сотрудников)
// - Отдел аналитики (нет сотрудников)


// const enterprises = [
//   {
//     id: 1,
//     name: "Предприятие 1",
//     departments: [
//       {
//         id: 2,
//         name: "Отдел тестирования",
//         employees_count: 10,
//       },
//       {
//         id: 3,
//         name: "Отдел маркетинга",
//         employees_count: 20,
//       },
//       {
//         id: 4,
//         name: "Администрация",
//         employees_count: 15,
//       },
//     ]
//   },
//   {
//     id: 5,
//     name: "Предприятие 2",
//     departments: [
//       {
//         id: 6,
//         name: "Отдел разработки",
//         employees_count: 50,
//       },
//       {
//         id: 7,
//         name: "Отдел маркетинга",
//         employees_count: 20,
//       },
//       {
//         id: 8,
//         name: "Отдел охраны труда",
//         employees_count: 5,
//       },
//     ]
//   },
//   {
//     id: 9,
//     name: "Предприятие 3",
//     departments: [
//       {
//         id: 10,
//         name: "Отдел аналитики",
//         employees_count: 0,
//       },
//     ]
//   }
// ]

const getDepartment = function(val) {
    let department;
    enterprises.forEach((company) => {
      const dept = company.departments.find((el) => {
      return el.id = val || el.name == val;
      });
      if(dept) department = dept;
    });
    return department ? department : 'Нет такого отдела'
  }

const getEnterprise = function(val) {
    let enterprise = enterprises.find(el => el.id == val || el.name == val);
    return enterprise ? enterprise : 'Нет такой организации'
  }

  const getNewId = function(company) {
    let maxId = company[0].id;
    company.forEach((el) => {
      if (maxId < el.id) {
        maxId = el.id;
      }
    if(el.departments) {
      el.departments.forEach((elem) => {
        if(maxId < elem.id) {
          maxId = elem.id;
        }
      });
  } 
  });
  return maxId + 1;
}

const employeesCountHelper = function (number) {
  number = number.toString().split('').pop();
  if(number) {
    if (number == 1) return 'сотрудник';
    else if (number > 1 && number < 5) return 'сотрудника';
    else return 'сотрудников';
   } else return '(нет сотрудников)';
  }
  // console.log(getDepartments('Отдел охраны труда'))
  // console.log(getDepartments('Отдел аналитики'))
  // console.log(getEnterprise(5))

  const getDeptartments = function (companies) {
    companies.forEach((company) => {
      let depts = [];
      let count = 0;
      depts.push(company.name);
      if (company.departments) {
        company.departments.forEach((dept) => {
          count += +dept.employees_count;
          if (dept.employees_count) {
            depts.push(`- ${dept.name} (${dept.employees_count} ${ employeesCountHelper (dept.employees_count)})`);
          } else depts.push(`- ${dept.name} (нет сотрудников)`);
        });
  
        if (count) {
          depts[0] += ` (${count} ${employeesCountHelper(count)})`;
          console.log(depts[0])
        } else depts[0] += ` (нет сотрудников)`;
      }
      console.log(depts.join(`\n\ `));
    });
  };
  getDeptartments(enterprises);


     


// 2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать название предприятия, к которому относится).
// Пример:
// getEnterpriseName(4) // Предприятие 1
// getEnterpriseName("Отдел маркетинга") // Предприятие 2

const getEnterpriseIDorName = function(val) { 
  // /* (getEnterpriseIDorName-выдуманная переменная) */, val - функция выноса данных из массива
  let enterprise 
  enterprises.forEach(ent => { 
    /* (ent-выдуманная переменная) */
    let department
    if (ent.departments) {
      department = ent.departments.find(dep => { return dep.id == val || dep.name == val})
       /* (dep-выдуманная переменная) */
    }
    if(department) {
      enterprise = ent;
    }})
return enterprise ? enterprise : 'Нет организации с таким отделом'
}
console.log(getEnterpriseIDorName('Отдел аналитики'))





// 3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия

// Пример:
// addEnterprise("Название нового предприятия")

const addEnterprise = function (name) {
  enterprises.push({
    id: getNewId(enterprises),
    name: name,
    departments:[]
  })
}
addEnterprise('Предприятие 1')




// 4. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.

// Пример:
// editEnterprise(1, "Новое название предприятия")

const editEnterprise = function(val, name) {
  const enterprise = getEnterprise(val)
  if(typeof enterprise == 'object') {
    enterprise.name = name;
   } else console.log(enterprise)
  }
   editEnterprise(9, 'Предприятие Кино')
   console.log(getEnterprise(9))


// 5. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.

// Пример:
// editDepartment(7, "Новое название отдела")

const editDepartment = function(val, name) {
  const department = getDepartment(val)
  if(typeof department == 'object') {
    department.name = name
   } else console.log(department)
  }
   editDepartment(9, 'Отдел статистики')
   console.log(getEnterprise(9))



// 6. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.

// Пример:
// deleteEnterprise(1)

const deleteEnterprise = function (id) {
  enterprises.forEach((enterprise, index) => {
    if(enterprise.id === id){
      enterprises.splice(index,1);
    }
  })
}


