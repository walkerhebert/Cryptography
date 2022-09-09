const bcrypt = require('bcryptjs')
const users = []

module.exports = {
    
  login: (req, res) => {
      
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
          
          const authenticated = bcrypt.compareSync(password, users[i].passwordHash)
          if (authenticated) {
            let userToReturn = {...users[i]}
          delete userToReturn.passwordHash
          res.status(200).send(users[i])
        }
      }
    }
      res.status(400).send("User not found.")
    },
    
    register: (req, res) => {
        
      console.log('Registering User')
        console.log(req.body)
        
        const { email, password, username, firstName, lastName } = req.body
        
        const salt = bcrypt.genSaltSync(5)
        const passwordHash = bcrypt.hashSync(password, salt)

        let users = { email, passwordHash, username, firstName, lastName }

        users.push(user)
        let userToReturn = {...user}
        delete userToReturn.passwordHash
       
        res.status(200).send(userToReturn)
    }
}