
Feature: Outlook Login with 2FA

  Scenario: User logs into Outlook with two-factor authentication
    Given the user navigates to the Outlook login page
    When the user enters valid credentials
    And the user completes two-factor authentication
    Then the user should be logged into Outlook
