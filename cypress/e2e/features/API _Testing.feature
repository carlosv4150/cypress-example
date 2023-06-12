Feature: Book list API Testing

@api @regression
Scenario: Search for a list of books
    Given I have the API endpoint "/Books"
    When I make a GET request to "/Books"
    Then The response status code should be 200
    And The response body should contain a list of books

@api @regression
Scenario Outline: View details of a specific book
    Given I have the API endpoint "/Book?ISBN=<bookId>"
    When I make a GET request to "/Book?ISBN=<bookId>"
    Then The response status code should be 200
    And The response body should contain the details of the book with ID "<bookId>"

    Examples:
    | bookId              |
    | 9781449325862       |
    | 9781449331818       |