/// <reference types="cypress" />
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

import LatLongPage from '../../pages/LatLongPage';

const latLongPage = new LatLongPage();

Given("I am on the latlong site", () => {
    latLongPage.visit();
    latLongPage.getPlaceNameField().should('exist');
});

When("I enter {string} in the {string} field", (value: string, fieldName: string) => {
    latLongPage.enterValue(value);
});

When('I click the {string} button', (buttonText: string) => {
    latLongPage.clickButton(buttonText);
});

Then('The {string} field displays the value {string} for {string}', (fieldName: string, value: string, placeName) => {
    latLongPage.getFieldValue(fieldName).should('eq', value);
});

Then('The message {string} is displayed', (message) => {
    latLongPage.getMessage().should('contain', message);
});
