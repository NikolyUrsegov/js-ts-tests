import {StudentType} from '../02/02';
import {CityType, governmentBuildingsType, HouseType} from '../02/02_02';

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function addSkill2(student: StudentType, skill: string) {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(s: StudentType) {
    s.isActive = true;
}

export const doesStudentLiveIn = (s: StudentType, cityName: string) => {
    return s.address.city.title === cityName;
}

export const addMoneyToBudget = (building: governmentBuildingsType, budget: number) => {
    building.budget += budget;
};

export function repairHouse(house: HouseType) {
    house.repaired = true;
}

export function toFireStaff(building: governmentBuildingsType, staffCountToFire: number) {
    building.staffCount -= staffCountToFire;
}

export const toHireStaff = (building: governmentBuildingsType, staffCountToHire: number) => {
    building.staffCount += staffCountToHire;
}

export const createMessage = (city: CityType) => {
    return `Hello ${city.title} citizens. I want you to be happy. All ${city.citizensNumber} men.`
}