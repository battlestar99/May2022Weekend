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
  "duration": 2680911400,
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
  "duration": 582842700,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_enters_username()"
});
formatter.result({
  "duration": 170211800,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_enters_password()"
});
formatter.result({
  "duration": 146653600,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 167081700,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_should_be_logged_in()"
});
formatter.result({
  "duration": 35572500,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_clicks_the_backpack_to_cart()"
});
formatter.result({
  "duration": 76099400,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_clicks_on_the_cart_button()"
});
formatter.result({
  "duration": 102412900,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_should_be_in_the_cart_page()"
});
formatter.result({
  "duration": 11523100,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_clicks_on_the_check_out()"
});
formatter.result({
  "duration": 93266000,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_should_be_in_the_informaiton_page()"
});
formatter.result({
  "duration": 20641900,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_enters_first_name()"
});
formatter.result({
  "duration": 121644500,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_enters_last_name()"
});
formatter.result({
  "duration": 89652600,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_enters_zip_code()"
});
formatter.result({
  "duration": 75979400,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_clicks_on_the_continue_button()"
});
formatter.result({
  "duration": 76207200,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_clicks_on_finish()"
});
formatter.result({
  "duration": 82576800,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_should_see_checkout_complete_msg()"
});
formatter.result({
  "duration": 24667100,
  "status": "passed"
});
formatter.after({
  "duration": 1066107900,
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
  "duration": 1179166800,
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
  "duration": 430479500,
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
  "duration": 171527800,
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
  "duration": 133703000,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 253205600,
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
  "duration": 20838200,
  "status": "passed"
});
formatter.after({
  "duration": 894675800,
  "status": "passed"
});
formatter.before({
  "duration": 1100380400,
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
  "duration": 407068400,
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
  "duration": 140705700,
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
  "duration": 130065500,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 105923700,
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
  "duration": 9755900,
  "status": "passed"
});
formatter.after({
  "duration": 821158000,
  "status": "passed"
});
formatter.before({
  "duration": 1082476000,
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
  "duration": 457759600,
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
  "duration": 129479000,
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
  "duration": 131476600,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 144464600,
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
  "duration": 21238500,
  "status": "passed"
});
formatter.after({
  "duration": 824388500,
  "status": "passed"
});
formatter.before({
  "duration": 1135979000,
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
  "duration": 453690900,
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
  "duration": 162981100,
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
  "duration": 118327200,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 5140306700,
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
  "duration": 20023500,
  "status": "passed"
});
formatter.after({
  "duration": 797995900,
  "status": "passed"
});
formatter.before({
  "duration": 1138033600,
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
  "duration": 371890600,
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
  "duration": 101879800,
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
  "duration": 137562000,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 97718700,
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
  "duration": 7598600,
  "status": "passed"
});
formatter.after({
  "duration": 784846000,
  "status": "passed"
});
formatter.before({
  "duration": 1124537600,
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
  "duration": 376482800,
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
  "duration": 113636400,
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
  "duration": 117156600,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 112340300,
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
  "duration": 14063900,
  "error_message": "java.lang.AssertionError: expected [https://www.saucedemo.com/test] but found [https://www.saucedemo.com/]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:496)\r\n\tat org.testng.Assert.assertEquals(Assert.java:125)\r\n\tat org.testng.Assert.assertEquals(Assert.java:178)\r\n\tat org.testng.Assert.assertEquals(Assert.java:188)\r\n\tat stepDef.stepDef.user_access_should_be_defined(stepDef.java:210)\r\n\tat ✽.Then user access should be \"https://www.saucedemo.com/test\" defined(loginData.feature:11)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 770729300,
  "status": "passed"
});
formatter.before({
  "duration": 1154658600,
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
  "duration": 518697100,
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
  "duration": 148205900,
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
  "duration": 185686400,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 118360800,
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
  "duration": 15095700,
  "status": "passed"
});
formatter.after({
  "duration": 954823800,
  "status": "passed"
});
formatter.before({
  "duration": 1235239900,
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
  "duration": 493598200,
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
  "duration": 148590700,
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
  "duration": 142111200,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 119445300,
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
  "duration": 20578800,
  "status": "passed"
});
formatter.after({
  "duration": 820969600,
  "status": "passed"
});
formatter.before({
  "duration": 1178568600,
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
  "duration": 425618800,
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
  "duration": 136209600,
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
  "duration": 109896300,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 102544300,
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
  "duration": 19688300,
  "status": "passed"
});
formatter.after({
  "duration": 824835900,
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
  "duration": 1162016700,
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
  "duration": 405652500,
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
  "duration": 157713700,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_enters_password()"
});
formatter.result({
  "duration": 129651000,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 178338100,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_should_be_logged_in()"
});
formatter.result({
  "duration": 28784400,
  "status": "passed"
});
formatter.after({
  "duration": 820217600,
  "status": "passed"
});
formatter.before({
  "duration": 1128765600,
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
  "duration": 417316100,
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
  "duration": 153523500,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_enters_password()"
});
formatter.result({
  "duration": 161792300,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 110897800,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_should_not_be_logged_in()"
});
formatter.result({
  "duration": 14327800,
  "status": "passed"
});
formatter.after({
  "duration": 884563700,
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
  "duration": 1256578300,
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
  "duration": 441811300,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_enters_username()"
});
formatter.result({
  "duration": 181488800,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_enters_password()"
});
formatter.result({
  "duration": 141225400,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 221216400,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_should_be_logged_in()"
});
formatter.result({
  "duration": 72214400,
  "status": "passed"
});
formatter.after({
  "duration": 896873500,
  "status": "passed"
});
});