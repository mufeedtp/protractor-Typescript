Feature: Shopping Payment

    Scenario: Veriy the payment of shopping item
        Given I have application launched
        When I Add an item "Apple MacBook Pro 13-inch" to cart
        And I go shopping cart
        Then I should see unit price "$1,801.00"
        And I should see Total price "$9,000.00"
        # And I should the see result
