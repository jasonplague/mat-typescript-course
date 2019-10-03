    Feature: Product Management

    Rules:
    1. You must be able to add a Product
    
    Background: Ensure product isn't in the system
    Given a product does not exist
    |    name | description | price |
    |  carrots | orange | vegetables |

    Scenario: A product is added
    When I add the product
    Then the product is created 
    