const routers = [
    {
        key: '1',
        path: '/',
        name: [
            { value: '' }
        ]
    },
    {
        key: '2',
        path: '/page1',
        name: [
            { value: '页面1' }
        ]

    },
    {
        key: '3',
        path: '/page2',
        name: [
            { value: '页面2' }
        ]
    }
]

const selectKeysFromPath = (path) => {
    for (let i = 0; i < routers.length; i++) {
        if (routers[i].path === path) {
            return routers[i].key
        }
    }
}
const selectNameFromPath = (path) => {
    for (let i = 0; i < routers.length; i++) {
        if (routers[i].path === path) {
            return routers[i].name
        }
    }
}

export {
    routers,
    selectKeysFromPath,
    selectNameFromPath
}