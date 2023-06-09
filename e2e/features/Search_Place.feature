Feature: Latitude and Longitude Finder

Scenario Outline: Search for latitude and longitude
  Given I am on the latlong site
  When I enter "<PlaceName>" in the "Place Name" field
  And I click the "find" button
  Then The "Latitude" field displays the value "<latitude>" for "<PlaceName>"
  And The "Longitude" field displays the value "<longitude>" for "<PlaceName>"

  Examples:
    | PlaceName    | Latitude     | Longitude     |
    | Paris        | 48.856613    |  2.352222     |
    | London       | 51.507351    | -0.127758     |
    | New York     | 40.712776    | -74.005974    |

Scenario: Search for a place with invalid input
  Given I am on the latlong site
  When I enter "!@#$%" in the "Place Name" field
  And I click the "find" button
  Then The message "No place found." is displayed
