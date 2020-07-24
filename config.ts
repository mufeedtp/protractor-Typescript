import {Config, browser} from "protractor";
import reporter from "cucumber-html-reporter";
import moment from 'moment';

export let config: Config = {
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',
    
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      browserName: 'chrome'
    },

    specs: ['../specs/features/*.feature'], 
    //specs: ['../specs/features/payment.step-definitions.feature'],
    params: {
      'baseUrl': 'https://demo.nopcommerce.com/',
  },
    //specs: ['./specs/testspec.js'],
    cucumberOpts: {
      // tags : ['@Smoke'],
      format: 'json:./reports/json/report.json',
      require: [
        './specs/step-definitions/*.js','./specs/step-definitions/hooks/*.js'
      ]
    },
    onPrepare: async ()=>{
      //set ignoreSynchronization is true
      //browser.ignoreSynchronization = true;
      // browser.manage().timeouts().implicitlyWait(5000);
      //browser.manage().window().maximize();
      //Browser resolution
      //await browser.manage().window().setSize(1200,800);
    },
    onComplete: async () => {
      let currentDate = moment().format('DD-MM-YYYY_hh_mm_ss');
      var options = {
        theme: 'bootstrap',
        jsonFile: './reports/json/report.json',
        output: './reports/html-reports/nopCommerce_Test_Report_'+currentDate+'.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
            "App Version":"2.3.2",
            "Test Environment": "Satge",
            "Platform": "Windows 10",
            "Executed": "Remote"
        }
    };
    reporter.generate(options);
    }
  };