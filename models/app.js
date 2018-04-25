const knex = require('../db')

const index = () => {
    return knex('notes')
        .then( rows => rows)
        .catch(error => {console.error(error);})
}

const show = id => {
    return knex('notes').where('id', id)
        .then( rows => rows)
        .catch(error => {console.error(error);})
}
const create = ({address, carrier, subject, message, time}) => {
    console.log(address)
    return knex('notes')
    .returning('*')
    .insert({
        address: address,
        carrier: carrier,
        subject: subject,
        message: message,
        time: time
       })
    .then(row => row[0])
    .catch(error => {console.error(error)})
}
const update = (id, updates) => {
    return knex('notes')
    .returning('*')
    .update({...updates, updated_at: new Date(Date.now())})
    .where('id', id)
    .then(row => row[0])
    .catch(error => {console.error(error)})
}

const destroy = id => {
    return knex('notes')
    .returning('*')
    .where('id', id)
    .del()
    .then(row => row[0])
    .catch(error => {console.error(error)})
}

module.exports = {
    index,
    show,
    create,
    update,
    destroy
}