Feature: Login
  A user with a Google account can log in with Google auth

  Scenario: Log in with Google
    Given A user navigates to unknown-stag
    Then They are logged in with Google
