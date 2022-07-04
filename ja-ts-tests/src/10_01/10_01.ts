export type UserType = {
    name: string
    hair: number
    address: {
        title: string
    }
}
type LaptopType = {
    title: string
}
export type UserLaptopType = UserType & {
    laptop: LaptopType
}

export type UserBooksType = UserType & {
    books: Array<string>
}

type CompanyType = {id: number, title: string}

export type UserCompanyType = {
    company: Array<CompanyType>
}

export function makeHairStyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    return copy
}

export function moveUser(u: UserLaptopType, title: string) {
    return {
        ...u,
        address: {...u.address, title: title}
    }

}

export function upgradeUser(u: UserLaptopType, title: string) {
    return {
        ...u,
        laptop: {...u.laptop, title: title}
    }

}
export function moveUserBooks(u: UserLaptopType & UserBooksType, book: string) {
    return {
        ...u,
        books: [...u.books, book]
    }

}
export function updateUserBooks(u: UserLaptopType & UserBooksType, lastbook: string, newbook:string) {
    return {
        ...u,
        books: u.books.map(el => el === lastbook ? newbook : el)
    }
}
export function removeUserBooks(u: UserLaptopType & UserBooksType, book: string) {
    return {
        ...u,
        books: u.books.filter(b => b !== book)
    }
}
export function updateUserCompanyTitle(u: UserLaptopType & UserCompanyType, id: number, title: string) {
    return {
        ...u,
        company: u.company.map(el => el.id === id ? {...el, title: title} : el)
    }
}

export function updateUserCompanyTitle2(u: { [key: string]: Array<CompanyType> }, userKey: string, id: number, title: string) {
    let copyCompany = {... u}
    copyCompany[userKey] = copyCompany[userKey].map(el => el.id === id ? {...el, title: title} : el)
    return copyCompany
}