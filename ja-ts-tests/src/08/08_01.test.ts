type UsersType = {
    [key: string]: { id: number, name: string }
}
let users: UsersType

beforeEach(() => {
    users = {
        '0': {id: 101, name: 'Dimich'},
        '1': {id: 101123245, name: 'Natasha'},
        '2': {id: 101234, name: 'Valera'},
        '3': {id: 1, name: 'Katya'},
    }
})

test('should update corresponding user', () => {
    users['1'].name = 'Ekaterina'
    expect(users['1'].name).toBe('Ekaterina')
})