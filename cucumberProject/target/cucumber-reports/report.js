$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("EndToEnd.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    }
  ],
  "line": 3,
  "name": "End to End process of buying a product",
  "description": "",
  "id": "end-to-end-process-of-buying-a-product",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2684448800,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "validaing complete user process",
  "description": "",
  "id": "end-to-end-process-of-buying-a-product;validaing-complete-user-process",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "user is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user enters username",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user enters password",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user should be logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user clicks the backpack to cart",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user clicks on the cart button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user should be in the cart page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user clicks on the check out",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user should be in the informaiton page",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user enters first name",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user enters last name",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user enters zip code",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user clicks on the continue button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user clicks on finish",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "user should see checkout complete msg",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDef.user_is_on_the_home_page()"
});
formatter.result({
  "duration": 539273500,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_enters_username()"
});
formatter.result({
  "duration": 140655300,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_enters_password()"
});
formatter.result({
  "duration": 145591900,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 163504200,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_should_be_logged_in()"
});
formatter.result({
  "duration": 17905300,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_clicks_the_backpack_to_cart()"
});
formatter.result({
  "duration": 84689400,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_clicks_on_the_cart_button()"
});
formatter.result({
  "duration": 79781500,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_should_be_in_the_cart_page()"
});
formatter.result({
  "duration": 15612700,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_clicks_on_the_check_out()"
});
formatter.result({
  "duration": 95054700,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_should_be_in_the_informaiton_page()"
});
formatter.result({
  "duration": 12115900,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_enters_first_name()"
});
formatter.result({
  "duration": 88955700,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_enters_last_name()"
});
formatter.result({
  "duration": 93281600,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_enters_zip_code()"
});
formatter.result({
  "duration": 87280400,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_clicks_on_the_continue_button()"
});
formatter.result({
  "duration": 94185500,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_clicks_on_finish()"
});
formatter.result({
  "duration": 83390300,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_should_see_checkout_complete_msg()"
});
formatter.result({
  "duration": 11680100,
  "status": "passed"
});
formatter.after({
  "duration": 949141200,
  "status": "passed"
});
formatter.uri("loginData.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# Author: Anik"
    },
    {
      "line": 2,
      "value": "# Date: 06/26/2022"
    }
  ],
  "line": 3,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "All types of user validation",
  "description": "",
  "id": "login;all-types-of-user-validation",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@xyz"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user enters username \"\u003cusername\u003e\" in login",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters password \"\u003cpassword\u003e\" in login",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user access should be \"\u003cexpectedUrl\u003e\" defined",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "login;all-types-of-user-validation;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "expectedUrl"
      ],
      "line": 14,
      "id": "login;all-types-of-user-validation;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce",
        "https://www.saucedemo.com/inventory.html"
      ],
      "line": 15,
      "id": "login;all-types-of-user-validation;;2"
    },
    {
      "cells": [
        "locked_out_user",
        "secret_sauce",
        "https://www.saucedemo.com/"
      ],
      "line": 16,
      "id": "login;all-types-of-user-validation;;3"
    },
    {
      "cells": [
        "problem_user",
        "secret_sauce",
        "https://www.saucedemo.com/inventory.html"
      ],
      "line": 17,
      "id": "login;all-types-of-user-validation;;4"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce",
        "https://www.saucedemo.com/inventory.html"
      ],
      "line": 18,
      "id": "login;all-types-of-user-validation;;5"
    },
    {
      "cells": [
        "abc",
        "secret_sauce",
        "https://www.saucedemo.com/"
      ],
      "line": 19,
      "id": "login;all-types-of-user-validation;;6"
    },
    {
      "cells": [
        "abcd",
        "secret_sauce",
        "https://www.saucedemo.com/test"
      ],
      "line": 20,
      "id": "login;all-types-of-user-validation;;7"
    },
    {
      "cells": [
        "xyzx",
        "secret_sauce",
        "https://www.saucedemo.com/"
      ],
      "line": 21,
      "id": "login;all-types-of-user-validation;;8"
    },
    {
      "cells": [
        "sdfdfd",
        "secret_sauce",
        "https://www.saucedemo.com/"
      ],
      "line": 22,
      "id": "login;all-types-of-user-validation;;9"
    },
    {
      "cells": [
        "sdfdfhjgjh",
        "secret_sauce",
        "https://www.saucedemo.com/"
      ],
      "line": 23,
      "id": "login;all-types-of-user-validation;;10"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1092094900,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "All types of user validation",
  "description": "",
  "id": "login;all-types-of-user-validation;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@xyz"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user enters username \"standard_user\" in login",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters password \"secret_sauce\" in login",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user access should be \"https://www.saucedemo.com/inventory.html\" defined",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "stepDef.user_is_on_the_home_page()"
});
formatter.result({
  "duration": 387305700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 22
    }
  ],
  "location": "stepDef.user_enters_username_in_login(String)"
});
formatter.result({
  "duration": 168584300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 22
    }
  ],
  "location": "stepDef.user_enters_password_in_login(String)"
});
formatter.result({
  "duration": 142422900,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 150791200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.saucedemo.com/inventory.html",
      "offset": 23
    }
  ],
  "location": "stepDef.user_access_should_be_defined(String)"
});
formatter.result({
  "duration": 22198300,
  "status": "passed"
});
formatter.after({
  "duration": 819913700,
  "status": "passed"
});
formatter.before({
  "duration": 1134275900,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "All types of user validation",
  "description": "",
  "id": "login;all-types-of-user-validation;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@xyz"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user enters username \"locked_out_user\" in login",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters password \"secret_sauce\" in login",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user access should be \"https://www.saucedemo.com/\" defined",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "stepDef.user_is_on_the_home_page()"
});
formatter.result({
  "duration": 380424000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "locked_out_user",
      "offset": 22
    }
  ],
  "location": "stepDef.user_enters_username_in_login(String)"
});
formatter.result({
  "duration": 139278300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 22
    }
  ],
  "location": "stepDef.user_enters_password_in_login(String)"
});
formatter.result({
  "duration": 96621600,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 113007800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.saucedemo.com/",
      "offset": 23
    }
  ],
  "location": "stepDef.user_access_should_be_defined(String)"
});
formatter.result({
  "duration": 23408300,
  "status": "passed"
});
formatter.after({
  "duration": 788240500,
  "status": "passed"
});
formatter.before({
  "duration": 1114372100,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "All types of user validation",
  "description": "",
  "id": "login;all-types-of-user-validation;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@xyz"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user enters username \"problem_user\" in login",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters password \"secret_sauce\" in login",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user access should be \"https://www.saucedemo.com/inventory.html\" defined",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "stepDef.user_is_on_the_home_page()"
});
formatter.result({
  "duration": 392900600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "problem_user",
      "offset": 22
    }
  ],
  "location": "stepDef.user_enters_username_in_login(String)"
});
formatter.result({
  "duration": 142016900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 22
    }
  ],
  "location": "stepDef.user_enters_password_in_login(String)"
});
formatter.result({
  "duration": 92575900,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 143801300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.saucedemo.com/inventory.html",
      "offset": 23
    }
  ],
  "location": "stepDef.user_access_should_be_defined(String)"
});
formatter.result({
  "duration": 20619600,
  "status": "passed"
});
formatter.after({
  "duration": 792130400,
  "status": "passed"
});
formatter.before({
  "duration": 1162681200,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "All types of user validation",
  "description": "",
  "id": "login;all-types-of-user-validation;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@xyz"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user enters username \"performance_glitch_user\" in login",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters password \"secret_sauce\" in login",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user access should be \"https://www.saucedemo.com/inventory.html\" defined",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "stepDef.user_is_on_the_home_page()"
});
formatter.result({
  "duration": 438531800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "performance_glitch_user",
      "offset": 22
    }
  ],
  "location": "stepDef.user_enters_username_in_login(String)"
});
formatter.result({
  "duration": 176223000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 22
    }
  ],
  "location": "stepDef.user_enters_password_in_login(String)"
});
formatter.result({
  "duration": 151283900,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 5163972600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.saucedemo.com/inventory.html",
      "offset": 23
    }
  ],
  "location": "stepDef.user_access_should_be_defined(String)"
});
formatter.result({
  "duration": 16999300,
  "status": "passed"
});
formatter.after({
  "duration": 831661100,
  "status": "passed"
});
formatter.before({
  "duration": 1176423500,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "All types of user validation",
  "description": "",
  "id": "login;all-types-of-user-validation;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@xyz"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user enters username \"abc\" in login",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters password \"secret_sauce\" in login",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user access should be \"https://www.saucedemo.com/\" defined",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "stepDef.user_is_on_the_home_page()"
});
formatter.result({
  "duration": 410100900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc",
      "offset": 22
    }
  ],
  "location": "stepDef.user_enters_username_in_login(String)"
});
formatter.result({
  "duration": 118799500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 22
    }
  ],
  "location": "stepDef.user_enters_password_in_login(String)"
});
formatter.result({
  "duration": 113610300,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 97041500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.saucedemo.com/",
      "offset": 23
    }
  ],
  "location": "stepDef.user_access_should_be_defined(String)"
});
formatter.result({
  "duration": 17096000,
  "status": "passed"
});
formatter.after({
  "duration": 769173700,
  "status": "passed"
});
formatter.before({
  "duration": 1094954100,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "All types of user validation",
  "description": "",
  "id": "login;all-types-of-user-validation;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@xyz"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user enters username \"abcd\" in login",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters password \"secret_sauce\" in login",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user access should be \"https://www.saucedemo.com/test\" defined",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "stepDef.user_is_on_the_home_page()"
});
formatter.result({
  "duration": 418399600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd",
      "offset": 22
    }
  ],
  "location": "stepDef.user_enters_username_in_login(String)"
});
formatter.result({
  "duration": 103585000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 22
    }
  ],
  "location": "stepDef.user_enters_password_in_login(String)"
});
formatter.result({
  "duration": 152927200,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 96522400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.saucedemo.com/test",
      "offset": 23
    }
  ],
  "location": "stepDef.user_access_should_be_defined(String)"
});
formatter.result({
  "duration": 16535500,
  "error_message": "java.lang.AssertionError: expected [https://www.saucedemo.com/test] but found [https://www.saucedemo.com/]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:496)\r\n\tat org.testng.Assert.assertEquals(Assert.java:125)\r\n\tat org.testng.Assert.assertEquals(Assert.java:178)\r\n\tat org.testng.Assert.assertEquals(Assert.java:188)\r\n\tat stepDef.stepDef.user_access_should_be_defined(stepDef.java:210)\r\n\tat ✽.Then user access should be \"https://www.saucedemo.com/test\" defined(loginData.feature:11)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 779689900,
  "status": "passed"
});
formatter.before({
  "duration": 1111990700,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "All types of user validation",
  "description": "",
  "id": "login;all-types-of-user-validation;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@xyz"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user enters username \"xyzx\" in login",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters password \"secret_sauce\" in login",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user access should be \"https://www.saucedemo.com/\" defined",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "stepDef.user_is_on_the_home_page()"
});
formatter.result({
  "duration": 368750900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyzx",
      "offset": 22
    }
  ],
  "location": "stepDef.user_enters_username_in_login(String)"
});
formatter.result({
  "duration": 131345700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 22
    }
  ],
  "location": "stepDef.user_enters_password_in_login(String)"
});
formatter.result({
  "duration": 121599500,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 83760300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.saucedemo.com/",
      "offset": 23
    }
  ],
  "location": "stepDef.user_access_should_be_defined(String)"
});
formatter.result({
  "duration": 13891800,
  "status": "passed"
});
formatter.after({
  "duration": 806606900,
  "status": "passed"
});
formatter.before({
  "duration": 1129013100,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "All types of user validation",
  "description": "",
  "id": "login;all-types-of-user-validation;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@xyz"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user enters username \"sdfdfd\" in login",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters password \"secret_sauce\" in login",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user access should be \"https://www.saucedemo.com/\" defined",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "stepDef.user_is_on_the_home_page()"
});
formatter.result({
  "duration": 388664000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sdfdfd",
      "offset": 22
    }
  ],
  "location": "stepDef.user_enters_username_in_login(String)"
});
formatter.result({
  "duration": 119420800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 22
    }
  ],
  "location": "stepDef.user_enters_password_in_login(String)"
});
formatter.result({
  "duration": 122598900,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 86368400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.saucedemo.com/",
      "offset": 23
    }
  ],
  "location": "stepDef.user_access_should_be_defined(String)"
});
formatter.result({
  "duration": 13704400,
  "status": "passed"
});
formatter.after({
  "duration": 824185500,
  "status": "passed"
});
formatter.before({
  "duration": 1152292700,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "All types of user validation",
  "description": "",
  "id": "login;all-types-of-user-validation;;10",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@xyz"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user enters username \"sdfdfhjgjh\" in login",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters password \"secret_sauce\" in login",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user access should be \"https://www.saucedemo.com/\" defined",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "stepDef.user_is_on_the_home_page()"
});
formatter.result({
  "duration": 409835200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sdfdfhjgjh",
      "offset": 22
    }
  ],
  "location": "stepDef.user_enters_username_in_login(String)"
});
formatter.result({
  "duration": 127043700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 22
    }
  ],
  "location": "stepDef.user_enters_password_in_login(String)"
});
formatter.result({
  "duration": 118297700,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 86144300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.saucedemo.com/",
      "offset": 23
    }
  ],
  "location": "stepDef.user_access_should_be_defined(String)"
});
formatter.result({
  "duration": 10214700,
  "status": "passed"
});
formatter.after({
  "duration": 818951900,
  "status": "passed"
});
formatter.uri("sample.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# Author: Anik"
    },
    {
      "line": 2,
      "value": "# Date: 06/25/2022"
    }
  ],
  "line": 4,
  "name": "Sauce Demo Login Feature",
  "description": "",
  "id": "sauce-demo-login-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1167845200,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "user is on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef.user_is_on_the_home_page()"
});
formatter.result({
  "duration": 482867000,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Validating valid user login",
  "description": "",
  "id": "sauce-demo-login-feature;validating-valid-user-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "user enters username",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user enters password",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user should be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDef.user_enters_username()"
});
formatter.result({
  "duration": 123310600,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_enters_password()"
});
formatter.result({
  "duration": 134918700,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 148987000,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_should_be_logged_in()"
});
formatter.result({
  "duration": 32027000,
  "status": "passed"
});
formatter.after({
  "duration": 815227600,
  "status": "passed"
});
formatter.before({
  "duration": 1102720900,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "user is on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef.user_is_on_the_home_page()"
});
formatter.result({
  "duration": 404747400,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Validating invalid user login",
  "description": "",
  "id": "sauce-demo-login-feature;validating-invalid-user-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "user enters invalid username",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user enters password",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user should not be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDef.user_enters_invalid_username()"
});
formatter.result({
  "duration": 161934200,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_enters_password()"
});
formatter.result({
  "duration": 165375500,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 73201000,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_should_not_be_logged_in()"
});
formatter.result({
  "duration": 16211900,
  "status": "passed"
});
formatter.after({
  "duration": 810694900,
  "status": "passed"
});
formatter.uri("sauceDemoLogin.feature");
formatter.feature({
  "line": 3,
  "name": "Sauce demo login Feature",
  "description": "",
  "id": "sauce-demo-login-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1154150100,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "valid user login",
  "description": "",
  "id": "sauce-demo-login-feature;valid-user-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user enters username",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user enters password",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user should be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDef.user_is_on_the_home_page()"
});
formatter.result({
  "duration": 399731600,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_enters_username()"
});
formatter.result({
  "duration": 156631000,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_enters_password()"
});
formatter.result({
  "duration": 117958600,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 168485700,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_should_be_logged_in()"
});
formatter.result({
  "duration": 14534600,
  "status": "passed"
});
formatter.after({
  "duration": 804538700,
  "status": "passed"
});
});