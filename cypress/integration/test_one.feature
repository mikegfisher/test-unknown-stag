Feature: Unknown Stag
  The web app "unknown-stag"

  Scenario: Opening the homepage
    Given I open unknown-stag
    Then I see "Unknown Stag" in the title
