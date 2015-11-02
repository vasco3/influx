
/* global process */

/***************
 * BOARD EVENTS
 ***************/

function acquiHire(company, employee) {
    // TODO - sells shares and updates cash

    // TODO - boost share price by 10X

    // TODO - terminates game.

    console.log('acquiHire');

}

function bankLoan(company) {

    company.actions.updatePricePerShare(0.8);

    company.actions.updateExpenses(1.2);

    console.log('bankLoan');
}

function bankrupt(company, employee) {
    // TODO - share price = 0

    // TODO - terminates game

    console.log('bankrupt');
}

function changeSales(Company) {

    const delta = Company.actions.updateSales();

    console.log(`Sales changed ${delta}`);

    console.log(Company.actions.getCompanyStats());
}

function fired(company, employee) {

    const iso = employee.actions.getISOAndReset();

    const cash = company.settings.get('sharePrice') * iso;

    employee.actions.updateCash(cash);

    // terminate game
    console.log('\nYou are fired. GAME OVER.');

    process.exit(0);
}

function ipo(company, employee) {
    // TODO - boost share price by 100X

    // TODO - sells shares and updates cash

    // TODO - terminates game

    console.log('ipo');
}

function offerJob(company, employee) {
    // TODO - prompt an offer

    // TODO - if accepts, cash out stock and change settings
    console.log('offerJob');
}

function payCheck(Employee) {

    console.log('payCheck');

    Employee.actions.payCheck();

    console.log(Employee.actions.getStats());
}

function payoutProfit(employee) {
    // TODO - increase cash

    console.log('payoutProfit');
}

function promoted(employee) {

    employee.actions.givePayRaise(10000);

    employee.actions.increaseISO(4000);

    console.log('promoted');
}

function purchaseStock(company, employee, optionsToPurchase) {
    if (optionsToPurchase) {

    }

    const pricePerShare = company.settings.get('sharePrice');

    const maxOptions = 3000;

    console.log(
`
*********** STOCK OPTION PURCHASE WINDOW ************

    Do you want to purchase stock?
    Max options: ${maxOptions}
    Price per share $${pricePerShare}

    To buy type 'buy' and the amount of shares.

*****************************************************`
    );

    // TODO - increase earned stock options

    // TODO - decrease cash
    return;
}

function splitStock(company, employee) {

    const sharePrice = company.settings.get('sharePrice') / 2;

    const totalShares = company.settings.get('totalShares') * 2;

    company.settings.set('sharePrice', sharePrice);

    company.settings.set('totalShares', totalShares);

    const earned = employee.account.get('earnedStockOptions') * 2;

    employee.account.set('earnedStockOptions', earned);

    console.log(`
    Company splits stock to ${sharePrice}.
    Total shares ${totalShares}
    `);
}

function vcFunding(company) {

    company.actions.updatePricePerShare(2);

    company.actions.updateSales();

    console.log('vcFunding');
}

export default function (Company, Employee) {
    return {
        acquiHire () { return acquiHire(Company, Employee); },

        bankLoan() { return bankLoan(Company); },

        bankrupt() { return bankrupt(Company, Employee); },

        changeSales () { return changeSales(Company); },

        fired() { return fired(Company, Employee); },

        ipo() { return ipo(Company, Employee); },

        offerJob() { return offerJob(Company, Employee); },

        payCheck() { return payCheck(Employee); },

        payoutProfit() { return payoutProfit(Employee); },

        promoted() { return promoted(Employee); },

        purchaseStock(optionsToPurchase) {
            return purchaseStock(Company, Employee, optionsToPurchase);
        },

        splitStock() { return splitStock(Company, Employee); },

        vcFunding() { return vcFunding(Company); },

    };
}
