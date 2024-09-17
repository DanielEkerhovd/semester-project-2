console.log('Hello from router.mjs')

import login from './api/user/login.mjs'

const email = 'danielE@stud.noroff.no'
const password = 'Bergen123'

login(email, password)
