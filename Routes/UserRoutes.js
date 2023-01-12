const express = require('express')
const router = express.Router()
const {UserList} = require('../views/UserLists')


//get all Users
// method : GET
router.get('/', (req,res)=>{
    res.json(UserList)
})

//Crud : add a new USer
//method : POST
router.post('/', (req,res)=>{
    const AddedUser = [...UserList, req.body]
    res.json(AddedUser)
})

//Update USer 
//method : PUT
router.put('/:id',(req,res)=>{
    const modifiedUser = UserList.map(user => (user.id === +req.params.id)? {...user, ...req.body} : user)
    res.json(modifiedUser)
})

//Delete a user
router.delete('/:id', (req,res)=>{
    const FilteredUserLists = UserList.filter(user=> user.id !== +req.params.id)
    res.json({users:FilteredUserLists, msg:'User has been deleted successfully!'})
})


module.exports = router