# Apply Digital - Automation Skill Test

Demostration project for the skill test as part of the Apply Digital interview process to automate and End-To-End test case for an E-Commerce sample website in both Desktop and Mobile viewports.

## Getting started

1. Make a copy of the `example.cypress.env.json` file and renamed it to `cypress.env.json` with the corresponding values for the environment to test against.
2. Install dependencies

```bash
npm install
```

3. Run the tests

```bash
npm run headless
```

4. Run the test with the Cypress GUI

```bash
npm run open
```

## Reports

### Mochawesome

After running the `headless` command, you should have the `mochawesome` report generated locally on your machie inside the `/cypress/reports/html` directory.

### Lighthouse

Lighthouse tests showed a big difference in terms of Performance and some decent improvements that could be made to the Accessibility of the site.

In terms of performance, the Desktop got 97 points while the mobile version got only 15 points.

By following the list of suggestions in the document found in the `/lighthouse` directory, the Dev Team should be able to make big improvements over time for mobile users.

## Framework Selection

I've decided to use Cypress because out of the two given options (Cypress and Playwright) its the one I'm the most familiar with along with their helpful documentation and popularity according to the Google Trends [results](https://trends.google.com/trends/explore?q=Cypress,Playwright&hl=en).

But I would say that Playwright offers a good set of features and similar development experience, so the decision of a team should take into consideration which one offers unique advantages or overall team familiarity to mitigate the learning curve, if needed.

## Test Case

### Preconditions

1. Must be able to navigate to the automationexercise.com website.
2. Must not be logged in.
3. Must not have any Products on the Cart.

### Steps

1. Navigate to the Signup/Login page
2. Fill out the initial Register form
3. Fill out the rest of the Register form
4. Navigate to the Products page
5. Select the third item from the list
6. Select a quantity from 1 to 20
7. Add product to Cart
8. Navigate to the Cart details page from the Add Product modal
9. Select the Proceed to Checkout button
10. Fill out the Payment form and submit it

### Expected Result

- Should redirect the user to the Order Successfully Created page.

## Notes

If we had access to the source code or to the Dev Team that worked on the automationexercise.com site used for this skill test, I would suggest to add more `id` or `data-qa` fields to help with the uniqueness of elements on the page to make the test less fragile.