class LatLongPage {
    private placeNameField = '#place';
    private latitudeField = '#lat';
    private longitudeField = '#lng';
  
    visit() {
      cy.visit('/latlong');
    }
  
    enterValue(value: string) {
      cy.get(this.placeNameField).clear().type(value);
    }
  
    clickButton(buttonText: string) {
      cy.contains('button', buttonText).click();
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
