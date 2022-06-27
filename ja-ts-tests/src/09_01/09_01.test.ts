type UserType = {
    name: string
    age: number
}

const incAge = (user: UserType) => {
    user.age++
}

test('big test', () => {
    let user = {
        name: 'Kolya',
        age: 25
    }
    incAge(user)
    expect(user.age).toBe(26)

    let newUser = user
    newUser.age = 1000
    expect(user.age).toBe(1000)
})

test('array test', () => {
    let users = [
        {
            name: 'Kolya',
            age: 25
        },
        {
            name: 'Petr',
            age: 25
        }
    ]
    let admin = users
    admin.push({name: "qwert", age: 30})
    expect(users[2]).toEqual({name: "qwert", age: 30})
})

test('value type test', () => {
    let usersCount = 100
    let adminCount = usersCount
    adminCount = 101
    expect(usersCount).toBe(100)
})

test('reference  test', () => {
    const address = {
        title: 'rus'
    }
    let user = {
        name: 'Kolya',
        age: 25,
        address: address
    }

    let newUser = {
        name: 'Kolya',
        age: 25,
        address: address
    }
     address.title = 'kz'

    expect(user.address).toBe(address)
    expect(newUser.address.title).toBe('kz')
})