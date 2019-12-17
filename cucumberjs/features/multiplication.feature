Feature: Multiplication

  Scenario: 1 * 0
    Given I start with 1
    When I multiply by 0
    Then I end up with 0

  Scenario: 1 * 1
    Given I start with 1
    When I multiply by 1
    Then I end up with 1

  Scenario: 2 + 2
    Given I start with 2
    When I multiply by 2
    Then I end up with 4



    Scenario Outline: <a> * <b>
    Given I start with <a>
    When I multiply by <b>
    Then I end up with <answer>

    Examples:
      | a | b | answer |
      | 1 | 0 | 0      |
      | 1 | 1 | 1      |
      | 2 | 2 | 4      |