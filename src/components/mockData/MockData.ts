import { Account } from '@/utils/types';

export const mockAccounts: Account[] = [
  {
    account_id: 'ACC001',
    holder: {
      firstName: 'Mark & Hana Smith',
      lastName: '',
      mobileNumber: '489-178-0042',
      email: 'smithmark@Mhunlimited.com',
      jointNames: '',
      username: 'sample',
      password: 'sample'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 3800000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: '001',
        dateTime: 'November 23 2013',
        description: 'Wire Transfer from Hana Smith',
        status: 'Success',
        amount_usd: 200000.0,
        account_no: '****2323'
      },
      {
        transaction_id: '002',
        dateTime: 'March 23 2013',
        description: 'Check Deposit by Mark Smith',
        status: 'Success',
        amount_usd: 500000.0,
        account_no: '****4532'
      },
      {
        transaction_id: '003',
        dateTime: 'April 4 2011',
        description: 'Credit from MHunlimiteds USA',
        status: 'Success',
        amount_usd: 2500000.0,
        account_no: '****2319'
      },
      {
        transaction_id: '004',
        dateTime: 'February 20 2009',
        description: 'Credit from Hana Smith ',
        status: 'Success',
        amount_usd: 1000000.0,
        account_no: '****8491'
      },
      {
        transaction_id: '005',
        dateTime: 'February 2 2009',
        description: 'Credit from Mark Smith ',
        status: 'Success',
        amount_usd: 1000000.0,
        account_no: '****0933'
      }
    ]
  },
  {
    account_id: 'ACC002',
    holder: {
      firstName: 'Franco T Elledge',
      lastName: '',
      mobileNumber: '',
      email: 'crystalmineo101@aol.com',
      jointNames: '',
      profileImg: '',
      username: 'crystalmineo101',
      password: 'crystalT2010'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 45000000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: 'TXN012',
        dateTime: 'December 15 2017',
        description: 'Credit from OAKWOOD REALTY',
        status: 'Success',
        amount_usd: 450000.0,
        account_no: '****1987'
      },
      {
        transaction_id: 'TXN011',
        dateTime: 'July 2 2017',
        description: 'Credit from HIGHLAND ESTATES',
        status: 'Success',
        amount_usd: 360000.0,
        account_no: '****6543'
      },
      {
        transaction_id: 'TXN010',
        dateTime: 'March 19 2017',
        description: 'Credit from PACIFIC COAST PROPERTIES',
        status: 'Success',
        amount_usd: 550000.0,
        account_no: '****3278'
      },
      {
        transaction_id: 'TXN009',
        dateTime: 'June 23 2016',
        description: 'Credit from SUNSET PROPERTIES',
        status: 'Success',
        amount_usd: 870000.0,
        account_no: '****4512'
      },
      {
        transaction_id: 'TXN008',
        dateTime: 'October 12 2016',
        description: 'Credit from REDWOOD ESTATES',
        status: 'Success',
        amount_usd: 480000.0,
        account_no: '****9845'
      },
      {
        transaction_id: 'TXN007',
        dateTime: 'February 27 2016',
        description: 'Credit from GREENFIELD REALTY',
        status: 'Success',
        amount_usd: 620000.0,
        account_no: '****7621'
      },
      {
        transaction_id: 'TXN006',
        dateTime: 'October 12 2015',
        description: 'Credit from BLUEWATER HOMES',
        status: 'Success',
        amount_usd: 520000.0,
        account_no: '****7534'
      },
      {
        transaction_id: 'TXN005',
        dateTime: 'May 30 2015',
        description: 'Credit from RIVERFRONT PROPERTIES',
        status: 'Success',
        amount_usd: 680000.0,
        account_no: '****1145'
      },
      {
        transaction_id: 'TXN004',
        dateTime: 'January 11 2015',
        description: 'Credit from MOUNTAIN VIEW REALTY',
        status: 'Success',
        amount_usd: 430000.0,
        account_no: '****9893'
      },
      {
        transaction_id: 'TXN003',
        dateTime: 'March 30 2014',
        description: 'Credit from EVERGREEN ESTATES',
        status: 'Success',
        amount_usd: 640000.0,
        account_no: '****3345'
      },
      {
        transaction_id: 'TXN002',
        dateTime: 'August 19 2014',
        description: 'Credit from HORIZON DEVELOPERS',
        status: 'Success',
        amount_usd: 710000.0,
        account_no: '****6654'
      },
      {
        transaction_id: 'TXN001',
        dateTime: 'November 3 2014',
        description: 'Credit from LAKESIDE PROPERTIES',
        status: 'Success',
        amount_usd: 520000.0,
        account_no: '****4455'
      },
      {
        transaction_id: 'TXN015',
        dateTime: 'May 8 2013',
        description: 'Credit from SKYLINE DEVELOPERS',
        status: 'Success',
        amount_usd: 950000.0,
        account_no: '****2121'
      },
      {
        transaction_id: 'TXN014',
        dateTime: 'September 21 2013',
        description: 'Credit from OCEANVIEW REALTY',
        status: 'Success',
        amount_usd: 620000.0,
        account_no: '****1124'
      },
      {
        transaction_id: 'TXN013',
        dateTime: 'March 6 2013',
        description: 'Credit from FOREST HILL ESTATES',
        status: 'Success',
        amount_usd: 450000.0,
        account_no: '****7843'
      },
      {
        transaction_id: 'TXN012',
        dateTime: 'November 25 2012',
        description: 'Credit from LAKESIDE VENTURES',
        status: 'Success',
        amount_usd: 620000.0,
        account_no: '****3456'
      },
      {
        transaction_id: 'TXN011',
        dateTime: 'July 18 2012',
        description: 'Credit from BAYFRONT HOMES',
        status: 'Success',
        amount_usd: 530000.0,
        account_no: '****2267'
      },
      {
        transaction_id: 'TXN010',
        dateTime: 'April 14 2012',
        description: 'Credit from SUNRISE DEVELOPERS',
        status: 'Success',
        amount_usd: 670000.0,
        account_no: '****5467'
      },
      {
        transaction_id: 'TXN009',
        dateTime: 'April 3 2011',
        description: 'Credit from HIGHPOINT DEVELOPMENTS',
        status: 'Success',
        amount_usd: 780000.0,
        account_no: '****6574'
      },
      {
        transaction_id: 'TXN008',
        dateTime: 'June 29 2011',
        description: 'Credit from PINE VALLEY ESTATES',
        status: 'Success',
        amount_usd: 690000.0,
        account_no: '****6742'
      },
      {
        transaction_id: 'TXN007',
        dateTime: 'October 18 2011',
        description: 'Credit from WINDRIDGE PROPERTIES',
        status: 'Success',
        amount_usd: 540000.0,
        account_no: '****8391'
      },
      {
        transaction_id: 'TXN006',
        dateTime: 'September 10 2010',
        description: 'Credit from GOLDEN GATE PROPERTIES',
        status: 'Success',
        amount_usd: 810000.0,
        account_no: '****1234'
      },
      {
        transaction_id: 'TXN005',
        dateTime: 'July 2 2010',
        description: 'Credit from MOUNT OAK ESTATES',
        status: 'Success',
        amount_usd: 690000.0,
        account_no: '****8523'
      },
      {
        transaction_id: 'TXN004',
        dateTime: 'February 25 2010',
        description: 'Credit from SHORELINE DEVELOPERS',
        status: 'Success',
        amount_usd: 740000.0,
        account_no: '****7645'
      }
    ]
  },
  {
    account_id: 'ACC003',
    holder: {
      firstName: 'Brent M McKinney',
      lastName: '',
      mobileNumber: '',
      email: 'b@gmail.com',
      jointNames: '',
      profileImg: '',
      username: 'Mrbrent123',
      password: 'WinnersBMC$$'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 1500000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: 'TXN001',
        dateTime: '',
        description: 'Cash Out For Delivery',
        status: 'Pending',
        amount_usd: 1500000.0,
        account_no: '****1987'
      },
      {
        transaction_id: 'TXN002',
        dateTime: 'November 5 2024',
        description: 'ACH Credit',
        status: 'Success',
        amount_usd: 800000.0,
        account_no: '****1987'
      },
      {
        transaction_id: 'TXN003',
        dateTime: 'August 3 2024',
        description: 'Bonus Credit',
        status: 'Success',
        amount_usd: 450000.0,
        account_no: '****6543'
      },
      {
        transaction_id: 'TXN004',
        dateTime: 'July 25 2024',
        description: 'Lottery Credit',
        status: 'Success',
        amount_usd: 250000.0,
        account_no: '****3278'
      }
    ]
  },
  {
    account_id: 'ACC004',
    holder: {
      firstName: 'Jamez Rodriguez',
      lastName: '',
      mobileNumber: '+1-**-***-****',
      email: 'j@gmail.com',
      jointNames: '',
      profileImg: '',
      username: 'd',
      password: 'd'
      // username: 'DeeAntoni1$',
      // password: 'KatrinaBlue1$'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 232357.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237830',
      lastStepText: 'Transaction sent successfully!',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: 'TXN001',
        dateTime: 'November 26 2024',
        description: 'Seasonal Bonus Credit Global LLC',
        status: 'Success',
        amount_usd: 65000.0,
        account_no: '****1987'
      },
      {
        transaction_id: 'TXN002',
        dateTime: 'November 18 2024',
        description: 'Withdrawal From Point Of Sale',
        status: 'Success',
        amount_usd: -16500.0,
        account_no: '****1987'
      },
      {
        transaction_id: 'TXN003',
        dateTime: 'November 13 2024',
        description: 'Bill Payment Authorization',
        status: 'Success',
        amount_usd: -8000.0,
        account_no: '****1987'
      },
      {
        transaction_id: 'TXN001487',
        dateTime: 'November 2 2024',
        description: 'Credit from Prime Opticals',
        status: 'Success',
        amount_usd: 11000.0,
        account_no: '****1987'
      },
      {
        transaction_id: 'TXN002',
        dateTime: 'November 1 2024',
        description: 'Debit from AIRBNB',
        status: 'Pending',
        amount_usd: -4000.0,
        account_no: '****6543'
      },
      {
        transaction_id: 'TXN003',
        dateTime: 'October 28 2024',
        description: 'Debit from Innovate Tech',
        status: 'Success',
        amount_usd: -14000.0,
        account_no: '****3278'
      },
      {
        transaction_id: 'TXN004',
        dateTime: 'October 25 2024',
        description: 'Credit from Coinbase',
        status: 'Success',
        amount_usd: 18000.0,
        account_no: '****3278'
      },
      {
        transaction_id: 'TXN005',
        dateTime: 'October 20 2024',
        description: 'Credit from Coinbase',
        status: 'Success',
        amount_usd: 4000.0,
        account_no: '****3278'
      },
      {
        transaction_id: 'TXN006',
        dateTime: 'October 18 2024',
        description: 'Bill Payment Authorization',
        status: 'Success',
        amount_usd: 5000.0,
        account_no: '****3278'
      },
      {
        transaction_id: 'TXN007',
        dateTime: 'October 16 2024',
        description: 'Bill Payment Authorization',
        status: 'Success',
        amount_usd: 30000.0,
        account_no: '****3278'
      },
      {
        transaction_id: 'TXN008',
        dateTime: 'October 9 2024',
        description: 'Withdrawal from Point of Sale',
        status: 'Success',
        amount_usd: -50000.0,
        account_no: '****3278'
      },
      {
        transaction_id: 'TXN009',
        dateTime: 'October 1 2024',
        description: 'Credit from Global LLC',
        status: 'Success',
        amount_usd: 95000.0,
        account_no: '****3278'
      },
      {
        transaction_id: 'TXN010',
        dateTime: 'September 28 2024',
        description: 'Bill Payment Authorization',
        status: 'Success',
        amount_usd: 12000.0,
        account_no: '****3278'
      },
      {
        transaction_id: 'TXN011',
        dateTime: 'September 25 2024',
        description: 'Debit from Booking.com',
        status: 'Success',
        amount_usd: -5000.0,
        account_no: '****3278'
      },
      {
        transaction_id: 'TXN012',
        dateTime: 'September 23 2024',
        description: 'Withdrawal from Point of Sale',
        status: 'Success',
        amount_usd: -10000.0,
        account_no: '****3278'
      },
      {
        transaction_id: 'TXN013',
        dateTime: 'September 23 2024',
        description: 'Debit from Point of Sale',
        status: 'Success',
        amount_usd: -1500.0,
        account_no: '****3278'
      },
      {
        transaction_id: 'TXN014',
        dateTime: 'September 23 2024',
        description: 'Debit from Point of Sale',
        status: 'Success',
        amount_usd: -1000.0,
        account_no: '****3278'
      },
      {
        transaction_id: 'TXN015',
        dateTime: 'September 23 2024',
        description: 'Point of Sale Gucci',
        status: 'Success',
        amount_usd: -2500.0,
        account_no: '****3278'
      },
      {
        transaction_id: 'TXN016',
        dateTime: 'September 20 2024',
        description: 'Credit from Innovate Tech',
        status: 'Success',
        amount_usd: 19000.0,
        account_no: '****3278'
      },
      {
        transaction_id: 'TXN017',
        dateTime: 'September 20 2024',
        description: 'Debit From Coinbase Inv',
        status: 'Success',
        amount_usd: -50000.0,
        account_no: '****3278'
      },
      {
        transaction_id: 'TXN018',
        dateTime: 'September 15 2024',
        description: 'Bill Payment Authorization',
        status: 'Success',
        amount_usd: -7500.0,
        account_no: '****3278'
      },
      {
        transaction_id: 'TXN019',
        dateTime: 'September 10 2024',
        description: 'Apple Bill Payment',
        status: 'Success',
        amount_usd: -15.0,
        account_no: '****3278'
      },
      {
        transaction_id: 'TXN020',
        dateTime: 'September 10 2024',
        description: 'Credit from Global Holdings',
        status: 'Success',
        amount_usd: 12000.0,
        account_no: '****3278'
      },
      {
        transaction_id: 'TXN021',
        dateTime: 'September 10 2024',
        description: 'Bank Transfer to Customer',
        status: 'Success',
        amount_usd: -10000.0,
        account_no: '****3278'
      },
      {
        transaction_id: 'TXN022',
        dateTime: 'September 9 2024',
        description: 'Bank Transfer to Customer',
        status: 'Success',
        amount_usd: -9000.0,
        account_no: '****3278'
      },
      {
        transaction_id: 'TXN023',
        dateTime: 'September 1 2024',
        description: 'Credit from Global LLC',
        status: 'Success',
        amount_usd: 85000.0,
        account_no: '****3278'
      },
      {
        transaction_id: 'TXN024',
        dateTime: 'September 1 2024',
        description: 'Credit from Global LLC',
        status: 'Success',
        amount_usd: 85000.0,
        account_no: '****3278'
      },
      {
        transaction_id: 'TXN025',
        dateTime: 'August 25 2024',
        description: 'Credit from Coinbase Investment',
        status: 'Success',
        amount_usd: 25000.0,
        account_no: '****3278'
      },
      {
        transaction_id: 'TXN026',
        dateTime: 'August 24 2024',
        description: 'Credit from Coinbase investment',
        status: 'Success',
        amount_usd: 20000.0,
        account_no: '****3278'
      },
      {
        transaction_id: 'TXN027',
        dateTime: 'August 24 2024',
        description: 'Innovate Tech Credit',
        status: 'Success',
        amount_usd: 14000.0,
        account_no: '****3278'
      },
      {
        transaction_id: 'TXN028',
        dateTime: 'August 21 2024',
        description: 'Bill Paymemt Authorization',
        status: 'Success',
        amount_usd: -9000.0,
        account_no: '****3278'
      },
      {
        transaction_id: 'TXN029',
        dateTime: 'August 15 2024',
        description: 'Withdrawal from Point of Sale',
        status: 'Success',
        amount_usd: -15000.0,
        account_no: '****3278'
      },
      {
        transaction_id: 'TXN030',
        dateTime: 'August 9 2024',
        description: 'Apple Bill Payment',
        status: 'Success',
        amount_usd: -15.0,
        account_no: '****3278'
      },
      {
        transaction_id: 'TXN031',
        dateTime: 'August 7 2024',
        description: 'Bank transfer to customer',
        status: 'Success',
        amount_usd: -10000.0,
        account_no: '****3278'
      },
      {
        transaction_id: 'TXN032',
        dateTime: 'August 7 2024',
        description: 'Bank transfer to customer',
        status: 'Success',
        amount_usd: -15000.0,
        account_no: '****3278'
      },
      {
        transaction_id: 'TXN033',
        dateTime: 'August 7 2024',
        description: 'Debit from coinbase Investment',
        status: 'Success',
        amount_usd: -29000.0,
        account_no: '****3278'
      },
      {
        transaction_id: 'TXN034',
        dateTime: 'August 6 2024',
        description: 'Bill Payment Authorization',
        status: 'Success',
        amount_usd: -6000.0,
        account_no: '****3278'
      },
      {
        transaction_id: 'TXN035',
        dateTime: 'August 2 2024',
        description: 'Debit from Booking.com',
        status: 'Success',
        amount_usd: -3500.0,
        account_no: '****3278'
      },
      {
        transaction_id: 'TXN036',
        dateTime: 'August 1 2024',
        description: 'Credit from Global LLC',
        status: 'Success',
        amount_usd: 80000.0,
        account_no: '****3278'
      },
      {
        transaction_id: 'TXN036',
        dateTime: 'June 5 2024',
        description: 'Account Opening',
        status: 'Success',
        amount_usd: -5000.0,
        account_no: '****3278'
      }
    ]
  }
];
