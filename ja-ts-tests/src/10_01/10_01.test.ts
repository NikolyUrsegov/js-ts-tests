import {
    makeHairStyle,
    moveUser,
    moveUserBooks,
    removeUserBooks,
    updateUserBooks, updateUserCompanyTitle, updateUserCompanyTitle2,
    upgradeUser,
    UserBooksType, UserCompanyType,
    UserType
} from "./10_01";
import {UserLaptopType} from "./10_01";


test('reference type test', () => {
    let user: UserType = {
        name: 'Kolya',
        hair: 32,
        address: {
            title: 'rus'
        }
    }
    const awesomeUser = makeHairStyle(user, 2)

    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)
    expect(awesomeUser.address).toBe(user.address)
})

test('change address', () => {
    let user: UserLaptopType = {
        name: 'Kolya',
        hair: 32,
        address: {
            title: 'rus'
        },
        laptop: {
            title: 'ZenBook'
        }
    }
    const movedUser = moveUser(user, 'Moscow')

    expect(user).not.toBe(moveUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.title).toBe('Moscow')
})

test('upgrade laptop to macbook', () => {
    let user: UserLaptopType = {
        name: 'Kolya',
        hair: 32,
        address: {
            title: 'rus'
        },
        laptop: {
            title: 'ZenBook'
        }
    }
    const upgradedUser = upgradeUser(user, 'macbook')

    expect(user).not.toBe(upgradedUser)
    expect(user.address).toBe(upgradedUser.address)
    expect(user.laptop).not.toBe(upgradedUser.laptop)
    expect(upgradedUser.laptop.title).toBe('macbook')
})
test('add new books to user', () => {
    let user: UserLaptopType & UserBooksType = {
        name: 'Kolya',
        hair: 32,
        address: {
            title: 'rus'
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['js', 'html', 'css']
    }
    const userNewBooks = moveUserBooks(user, 'ts')

    expect(user).not.toBe(userNewBooks)
    expect(user.address).toBe(userNewBooks.address)
    expect(user.laptop).toBe(userNewBooks.laptop)
    expect(userNewBooks.books).not.toBe(user.books)
    expect(userNewBooks.books[3]).toBe('ts')
})

test('update books to user', () => {
    let user: UserLaptopType & UserBooksType = {
        name: 'Kolya',
        hair: 32,
        address: {
            title: 'rus'
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['js', 'html', 'css']
    }
    const userNewBooks = updateUserBooks(user, 'js', 'ts')

    expect(user).not.toBe(userNewBooks)
    expect(user.address).toBe(userNewBooks.address)
    expect(user.laptop).toBe(userNewBooks.laptop)
    expect(userNewBooks.books).not.toBe(user.books)
    expect(userNewBooks.books[0]).toBe('ts')
})

test('remove js book', () => {
    let user: UserLaptopType & UserBooksType = {
        name: 'Kolya',
        hair: 32,
        address: {
            title: 'rus'
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['js', 'html', 'css']
    }
    const userNewBooks = removeUserBooks(user, 'js')

    expect(user).not.toBe(userNewBooks)
    expect(user.address).toBe(userNewBooks.address)
    expect(user.laptop).toBe(userNewBooks.laptop)
    expect(userNewBooks.books).not.toBe(user.books)
    expect(userNewBooks.books[0]).not.toBe('js')
    expect(userNewBooks.books.length).toBe(2)
})

test('company', () => {
    let user: UserLaptopType & UserCompanyType = {
        name: 'Kolya',
        hair: 32,
        address: {
            title: 'rus'
        },
        laptop: {
            title: 'ZenBook'
        },
        company: [
            {
                id: 1,
                title: "epam"
            },
            {
                id: 2,
                title: "google"
            }
        ]


    }
    const userNewCompany = updateUserCompanyTitle(user, 2, 'yandex')

    expect(user).not.toBe(userNewCompany)
    expect(user.address).toBe(userNewCompany.address)
    expect(user.laptop).toBe(userNewCompany.laptop)
    expect(userNewCompany.company[1].title).toBe('yandex')
})

test('update company title', () => {
    let company = {
        'Kolya': [{
            id: 1,
            title: "epam"
        },
            {
                id: 2,
                title: "yandex"
            }]
        ,
        'Petya': [{
            id: 1,
            title: "google"
        }]
    }

    const copy = updateUserCompanyTitle2(company, 'Kolya', 1, 'google')

    expect(copy).not.toBe(company)
    expect(copy['Kolya'][0].title).toBe('google')
    expect(copy['Petya']).toBe(company['Petya'])

})