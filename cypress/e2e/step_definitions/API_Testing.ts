/// <reference types="cypress" />
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

let url: string;
let response: Cypress.Response<any>;

before(() => {
    Cypress.env('URL', 'https://demoqa.com/BookStore/v1');
  }) 

Given('I have the API endpoint {string}', (endpoint: string) => {
    url=`${Cypress.env('URL')}${endpoint}`;
});

When("I make a GET request to {string}", (endpoint: string) => {
    console.log(url);
    cy.request('GET', url).then((res) => {
        response = res;
      });
});

Then('The response status code should be {int}', (status: number) => {
    expect(response.status).to.equal(status);
});

Then('The response body should contain a list of books', () => {
    cy
    .fixture('/Books').then((books) => {
        expect(response.body.books).to.deep.equal(books.books);
        });
});

Then('The response body should contain the details of the book with ID {string}', (isbn: string) => {
    cy
    .fixture(`/${isbn}`).then((book) => {
        expect(response.body).to.deep.equal(book);
    });
});
