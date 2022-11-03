const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/posts', (req,res)=>{
    res.json([
    {
        userId:1,
        id:1,
        title: ' velit esse cillum dolore eu fugiat nulla pariatur',
        body:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."

    },

    {
        userId:2,
        id:2,
        title: 'officia deserunt mollit anim id est laborum',
        body: ' commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',


    },
    {
        userId:3,
        id:3,
        title: 'ipsum sit consectteur malifiset',
        body:'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

    },
    {
        userId:4,
        id:4,
        title: 'ipsum sit consectteur malifiset',
        body:'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

    },
    {
        userId:5,
        id:5,
        title: 'Excepteur sint occaecat cupidatat non proident,',
        body:' ipsum sit consectteur malifisetsunt in culpa qui officia deserunt mollit anim id est laborum.'

    },

    {
        userId:6,
        id:6,
        title: 'Excepteur sint occaecat cupidatat non proident,',
        body:' ipsum sit consectteur malifisetsunt in culpa qui officia deserunt mollit anim id est laborum.'

    },

    {
        userId:7,
        id:7,
        title: 'Excepteur sint occaecat cupidatat non proident,',
        body:' ipsum sit consectteur malifisetsunt in culpa qui officia deserunt mollit anim id est laborum.'

    },
    {
        userId:8,
        id:8,
        title: 'Excepteur sint occaecat cupidatat non proident,',
        body:' ipsum sit consectteur malifisetsunt in culpa qui officia deserunt mollit anim id est laborum.'

    },
    {
        userId:9,
        id:9,
        title: 'Excepteur sint occaecat cupidatat non proident,',
        body:' ipsum sit consectteur malifisetsunt in culpa qui officia deserunt mollit anim id est laborum.'

    },
    {
        userId:10,
        id:10,
        title: 'Excepteur sint occaecat cupidatat non proident,',
        body:' ipsum sit consectteur malifisetsunt in culpa qui officia deserunt mollit anim id est laborum.'

    },
    {
        userId:11,
        id:11,
        title: 'Excepteur sint occaecat cupidatat non proident,',
        body:' ipsum sit consectteur malifisetsunt in culpa qui officia deserunt mollit anim id est laborum.'

    },
    {
        userId:12,
        id:12,
        title: 'Excepteur sint occaecat cupidatat non proident,',
        body:' ipsum sit consectteur malifisetsunt in culpa qui officia deserunt mollit anim id est laborum.'

    },
    {
        userId:13,
        id:13,
        title: 'Excepteur sint occaecat cupidatat non proident,',
        body:' ipsum sit consectteur malifisetsunt in culpa qui officia deserunt mollit anim id est laborum.'

    },
    {
        userId:14,
        id:14,
        title: 'Excepteur sint occaecat cupidatat non proident,',
        body:' ipsum sit consectteur malifisetsunt in culpa qui officia deserunt mollit anim id est laborum.'

    },
    {
        userId:15,
        id:15,
        title: 'Excepteur sint occaecat cupidatat non proident,',
        body:' ipsum sit consectteur malifisetsunt in culpa qui officia deserunt mollit anim id est laborum.'

    },
    {
        userId:16,
        id:16,
        title: 'Excepteur sint occaecat cupidatat non proident,',
        body:' ipsum sit consectteur malifisetsunt in culpa qui officia deserunt mollit anim id est laborum.'

    },
    {
        userId:17,
        id:17,
        title: 'Excepteur sint occaecat cupidatat non proident,',
        body:' ipsum sit consectteur malifisetsunt in culpa qui officia deserunt mollit anim id est laborum.'

    },
    {
        userId:18,
        id:18,
        title: 'Excepteur sint occaecat cupidatat non proident,',
        body:' ipsum sit consectteur malifisetsunt in culpa qui officia deserunt mollit anim id est laborum.'

    },
    {
        userId:19,
        id:19,
        title: 'Excepteur sint occaecat cupidatat non proident,',
        body:' ipsum sit consectteur malifisetsunt in culpa qui officia deserunt mollit anim id est laborum.'

    },
    {
        userId:20,
        id:20,
        title: 'Excepteur sint occaecat cupidatat non proident,',
        body:' ipsum sit consectteur malifisetsunt in culpa qui officia deserunt mollit anim id est laborum.'

    },

    



    ])
})

app.listen(4000, ()=>{
    console.log('server is running on port 4000')
})