const express = require('express')
const router = express.Router();

let user = [{
    id: 0,
    name: 'zane',
    email: 'zane@hotmail.com'
}]

let logs = [];

// Get Request Database

router.get('/', (req, res) => {
    res.json(user)
})

// Get Request Logs

router.get('/logs', (req, res) => {
    res.json(logs)
})

//Post Request

router.post('/', (req, res) => {
 
    let  {name, email} = req.body;

    let id = user.length;

    let newUser = {
        id: id,
        name: name,
        email: email
    }

    console.log(newUser, ' has been added!')
    logs.push({
        id: id,
        name: name,
        email: email,
        method: 'POST',
        msg: newUser.name + ' has been added to the database'
    })

    user.push(newUser);

})

//Put Request

router.put('/:id', (req, res) => {

   let id = req.params.id

   console.log(id);

   let {name, email} = req.body;

   console.log(name, email)

   user.map((a, i) => {

       if (id == i ) {
           a.name = name;
           a.email = email;
           logs.push({
            id: id,
            name: a.name,
            age: a.email,
            method: 'PUT',
            msg: a.name + ' has been changed'
           })
       }
   })

})

//Delete Request

router.delete('/:id', (req, res) => {

    let id = req.params.id;

    user.map((person, index) => {

        let del = false;
        if(index == id) {
            let delUser = user.splice(index, 1);
            del = true;
            console.log(delUser, ' has been deleted!')
            logs.push({
                id: id,
                name: person.name,
                age: person.email,
                method: 'DELETE',
                msg: person.name + ' has been deleted from the database'
            })
        }
        if(del !== false) {
            user.map((p, i) => {
                p.id = i;
            })
        }

    })

})

module.exports = router;
