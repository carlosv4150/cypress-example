import 'cypress-file-upload';

const usersDataSet = require('../fixtures/login');
const getPassword = (username) => usersDataSet.find(user => user.username == username)?.password;

Cypress.Commands.add('login', (username) => {
    const password = getPassword(username);
    cy.request({
        method: 'POST',
        url: 'https://www.latlong.net/user/login',
        form: true,
        body: {
            'email': username,
            'password1': password
        }
    });
})
