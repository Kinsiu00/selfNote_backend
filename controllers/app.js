const appModel = require('../models/app');

const index = (request, response) => {
    appModel.index()
        .then( result => {response.json(result); })
        .catch( error => {console.error(error); });
    }

const show = (request, response) => {
    appModel.show(request.params.id)
        .then( result => {response.json(result); })
        .catch( error => {console.error(error); });
    }


const create = (request, response) => {
    appModel.create(request.body)
        .then( result => {response.json(result); })
        .catch( error => {console.error(error); });
}

const update = (request, response) => {
    appModel.update(request.params.id, request.body)
        .then( result => {response.json(result); })
        .catch( error => {console.error(error); });
}

const destroy = (request, response) => {
    appModel.destroy(request.params.id)
        .then( result => {response.json(result); })
        .catch( error => {console.error(error); });

}

module.exports = {
    index,
    show,
    create,
    update,
    destroy
}