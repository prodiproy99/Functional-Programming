/**
 * a utility to create a random number
 */

function uuid4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = Math.random()*16|0; 
        const v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}

// console.log(uuid4());


/**
 * easily travers
 * filter
 * delete
 * updated
 * create a new one student
 */

const students = {
    'be14bdd6-7737-4560-ab3d-b721ba431925': {
      id: 'be14bdd6-7737-4560-ab3d-b721ba431925',
      name: 'Prodip R.',
      email: 'rprodip@gmail.com'
    },

    '96187d88-0c94-48f3-9b3d-d17cd828ed49': {
      id: '96187d88-0c94-48f3-9b3d-d17cd828ed49',
      name: 'Probir R.',
      email: 'probir@gmail.com'
    },

    'a0958268-dee7-4925-8df8-82da556dd20e': {
      id: 'a0958268-dee7-4925-8df8-82da556dd20e',
      name: 'Probin R.',
      email: 'probin@gmail.com'
    }
};

// console.log(students)

// create new students
const std = {
    id: uuid4(),
    name: "Dipto",
    email: "dipto@gmail.com"

}

students[std.id] = std;

// update
const idToBeUpdated = '96187d88-0c94-48f3-9b3d-d17cd828ed49';
const updateData = {
    name: 'Joyonto',
    email: 'joy@gmail.com'
}

students[idToBeUpdated] = {
    ...students[idToBeUpdated],
    ...updateData
}

// delete
delete students[idToBeUpdated];
console.log(students);