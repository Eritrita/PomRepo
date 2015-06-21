$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("practice.feature");
formatter.feature({
  "id": "to-test-the-high-level-functionality-of-the-zoo-website",
  "description": "",
  "name": "To test the high level functionality of the zoo website",
  "keyword": "Feature",
  "line": 1
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I am on the zoo website",
  "keyword": "Given ",
  "line": 4
});
formatter.match({
  "location": "StepDefinitionpractice.I_am_on_the_zoo_website()"
});
formatter.result({
  "duration": 9845678756,
  "status": "passed"
});
formatter.scenario({
  "id": "to-test-the-high-level-functionality-of-the-zoo-website;to-populate-the-contact-form",
  "description": "",
  "name": "To populate the contact form",
  "keyword": "Scenario",
  "line": 6,
  "type": "scenario"
});
formatter.step({
  "name": "I click on \"Contact\"",
  "keyword": "When ",
  "line": 7
});
formatter.step({
  "name": "I enter \"Name Test\" into the name field",
  "keyword": "And ",
  "line": 8
});
formatter.step({
  "name": "I enter \"Address Test\" into the address field",
  "keyword": "And ",
  "line": 9
});
formatter.step({
  "name": "I enter \"Postcode Test\" into the postcode field",
  "keyword": "And ",
  "line": 10
});
formatter.step({
  "name": "I enter \"Email Test\" into the email field",
  "keyword": "And ",
  "line": 11
});
formatter.step({
  "name": "I submit the contact form",
  "keyword": "And ",
  "line": 12
});
formatter.step({
  "name": "I check I am on the confirmation page",
  "keyword": "Then ",
  "line": 13
});
formatter.step({
  "name": "I close the browser",
  "keyword": "And ",
  "line": 14
});
formatter.match({
  "arguments": [
    {
      "val": "Contact",
      "offset": 12
    }
  ],
  "location": "StepDefinitionpractice.I_click_on(String)"
});
formatter.result({
  "duration": 261780496,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name Test",
      "offset": 9
    }
  ],
  "location": "StepDefinitionpractice.I_enter_into_the_name_field(String)"
});
formatter.result({
  "duration": 2702405169,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Address Test",
      "offset": 9
    }
  ],
  "location": "StepDefinitionpractice.I_enter_into_the_address_field(String)"
});
formatter.result({
  "duration": 92728046,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Postcode Test",
      "offset": 9
    }
  ],
  "location": "StepDefinitionpractice.I_enter_into_the_postcode_field(String)"
});
formatter.result({
  "duration": 65131356,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email Test",
      "offset": 9
    }
  ],
  "location": "StepDefinitionpractice.I_enter_into_the_email_field(String)"
});
formatter.result({
  "duration": 47901972,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionpractice.I_submit_the_contact_form()"
});
formatter.result({
  "duration": 285963040,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionpractice.I_check_I_am_on_the_confirmation_page()"
});
formatter.result({
  "duration": 61621421,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionpractice.I_close_the_browser()"
});
formatter.result({
  "duration": 194629047,
  "status": "passed"
});
});