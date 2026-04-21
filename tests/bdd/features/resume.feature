Feature: Business resume landing page
  As a hiring manager
  I want to scan a modern portfolio quickly
  So that I can understand Michael Booton's fit in a few minutes

  Scenario: Hero messaging is visible
    Given I open the resume homepage
    Then I should see the hero heading "Michael Booton"
    And I should see the text "Business-minded technologist for products, process, and delivery."

  Scenario: Hiring managers can scan the major sections
    Given I open the resume homepage
    Then I should see the section "Impact Highlights"
    And I should see the section "Selected Work"
    And I should see the section "Working Style"
    And I should see the section "Experience Timeline"
    And I should see the section "Contact"

  Scenario: Selected work renders as project cards
    Given I open the resume homepage
    Then I should see 4 project cards

  Scenario: Contact links are present
    Given I open the resume homepage
    Then I should see the contact link "GitHub"
    And I should see the contact link "LinkedIn"

  Scenario: Reduced motion keeps the page readable
    Given I open the resume homepage with reduced motion enabled
    Then the page should mark motion as reduced
    And the decorative backdrop should stop animating
    And I should see the hero heading "Michael Booton"
