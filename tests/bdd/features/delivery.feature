Feature: Delivery pipeline
  As the site owner
  I want a dependable GitHub Pages release path
  So that the public portfolio stays easy to publish

  Scenario: GitHub Pages uses the repository base path
    Given the production build configuration is present
    Then the repository base path should be "/mbooton-resume/"
    And the deployment workflow should target GitHub Pages

  Scenario: Production build creates GitHub Pages ready assets
    Given the application dependencies are installed
    When I run the production build
    Then the build should complete successfully
    And the built index file should reference the repository base path "/mbooton-resume/"
