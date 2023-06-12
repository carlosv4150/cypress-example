class LatLongPage {
    private placeNameField = '#place';
    private button = '#btnfind';
    private latitudeField = '#lat';
    private longitudeField = '#lng';
  
    visit() {  
      cy.visit('/user/login');
      cy.login('dokix50347@peogi.com');
      cy.intercept('POST', '**ssc.33across.com**', {}).as('33across');
      cy.intercept('GET', '**lexicon.33across.com**', {}).as('33acrosslexicon');
      cy.intercept('GET', '**ib.adnxs.com**', {}).as('adnxs');
      cy.intercept('POST', '**ad.360yield.com**', {}).as('360yield');
      cy.intercept('GET', '**oajs.openx.**', {}).as('openx');
      cy.intercept('GET', '**c3.a-mo.**', {}).as('a-mo');
      cy.intercept('GET', '**id.a-mx.**', {}).as('amx');
      cy.intercept('GET', '**api.rlcdn.**', {}).as('rlcdn');
      cy.intercept('**lb.eu-1-id5-sync.**', {});
      cy.visit('/');
    }

    getPlaceNameField() {
      return cy.get(this.placeNameField);
    }
  
    enterValue(value: string) {
      cy.get(this.placeNameField).clear().type(value);
    }
  
    clickButton(buttonText: string) {
      cy.get(this.button).contains(buttonText).click();
    }
  
    getFieldValue(fieldName: string) {
      let field = (fieldName == 'Latitude')? this.latitudeField: this.longitudeField;
      return cy.get(field).invoke('val');
    }
  
    getMessage() {
      return cy.contains('No place found').invoke('text');
    }
}

export default LatLongPage;
