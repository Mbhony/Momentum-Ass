Feature('login');

Scenario('Successful login', (I) => {
    I.amOnPage('https://etalente.co.za');
    I.fillField('input[name="email"]', 'valid_email@example.com');
    I.fillField('input[name="password"]', 'valid_password');
    I.click('Login');
    I.see('Welcome to Etalente');
});

Scenario('Failed login', (I) => {
    I.amOnPage('https://etalente.co.za');
    I.fillField('input[name="email"]', 'invalid_email@example.com');
    I.fillField('input[name="password"]', 'invalid_password');
    I.click('Login');
    I.see('Invalid credentials');
});
