const router = require('express').Router()

router.get('/', (req, res,next)=>{
    res.send('Marge quiero poner un dojo nuevamente')
} )

module.exports = router