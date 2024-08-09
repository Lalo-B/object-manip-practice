/*
Write function "convertNested" that will convert an array of nested objects into
a normalized object containing only flattened data. The final object must be
normalized by ids - each key is an id with a value of all the data in the
original obj, flattened. You must exclude the key of "details" but make sure to
flatten its original data.

ex: {
    [id]: { <all keys from original object, flattened. 'details' key is
    excluded>
    }
}

Use console logging to inspect the data you are working with.
*/

/*** do not change or modify below setup code ***/
const { faker } = require('@faker-js/faker')
const genNestedData = (length = 10, result = []) => {
    for (let i = 0; i < length; ++i) {
        result.push({
            id: faker.database.mongodbObjectId(),
            name: faker.company.name(),
            location: faker.address.cityName(),
            details: {
                account_number: faker.finance.account(),
                account_name: faker.finance.accountName(),
                routing_number: faker.finance.routingNumber(),
                balance: faker.finance.amount()
            }
        })
    }
    // console.log(result)
    return result
}

const dataArray = genNestedData(5)

const convertNested = (arr) => {
    // your code here
    let fin = {}
    arr.forEach(el => {
        let detail = el.details;
        // fin[el.id] = {...el, ...detail}
        // delete(el.details)
        fin[el.id] = { id: el.id, name: el.name, location: el.location, account_number: el.details.account_number, account_name: el.details.account_name, routing_number: el.details.routing_number, balance: el.details.balance }
    })
    return fin;
}




// console.log('dataArray: ', dataArray)
console.log(convertNested(dataArray))

/*** Do not change the code after this line ***/
module.exports = {
    convertNested,
    genNestedData
};
