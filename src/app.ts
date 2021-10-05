import { Invoice } from './classes/Invoice.js'
import { Payment } from './classes/Payment.js'
import { HasFormatter } from './interfaces/HasFormatter.js'
import { ListTemplate } from './classes/ListTemplate.js';


// form
const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!
const list = new ListTemplate(ul);

form.addEventListener('submit',  (e: Event) => {
    e.preventDefault();
    const values: [string, string, number] = [tofrom.value, details.value, amount.valueAsNumber]
    let doc: HasFormatter;
    
    if (type.value === 'invoice') {
        doc = new Invoice(...values)
    } else {
        doc = new Payment(...values)
    }

    list.render(doc, type.value, 'end')
})

// GENERICS
const addUID = <T extends {name: string}>(obj: T) => {
    let uid = Math.floor(Math.random() * 1000);
    return {...obj, uid};
}
let docOne = addUID({name: 'Arthur', age: 43})

// ENUMS
enum ResourceType {BOOK, AUTHOR, FILM, DIRECTOR, PERSON}

// with interfaces
interface Resource<T> {
    uid: number,
    resourceName: ResourceType,
    data: T;
}

const docTwo: Resource<object> = {
    uid: 1,
    resourceName: ResourceType.AUTHOR,
    data: {name: 'ellie'},
}

const docThree: Resource<object> = {
    uid: 1,
    resourceName: ResourceType.BOOK,
    data: {name: 'joey'},
}

const docFour: Resource<string[]> = {
    uid: 1,
    resourceName: ResourceType.FILM,
    data: ['one', 'two', 'three'],
}

// tuples
let arr = ['monica', 27, true]

let tup: [string, number, boolean] = ['chandler', 29, false]