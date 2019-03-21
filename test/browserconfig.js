/*eslint camelcase: 0*/

/*
 * Browser version histories: 
 * Chrome: https://en.wikipedia.org/wiki/Google_Chrome_version_history
 * Safari: https://en.wikipedia.org/wiki/Safari_version_history
 */

const ALL = {
      firefox_52_osx: {
        base: 'BrowserStack',
        browser: 'Firefox',
        browser_version: '52.0',
        os: 'OS X',
        os_version: 'Sierra',
      },
      chrome__56_osx: {
        base: 'BrowserStack',
        browser: 'Chrome',
        browser_version: '56.0',
        os: 'OS X',
        os_version: 'Sierra',
      },
      chrome__65_osx: { // oldest version which works, released 2018-3-6
        base: 'BrowserStack',
        browser: 'Chrome',
        browser_version: '65.0',
        os: 'OS X',
        os_version: 'Sierra', // Also verified with Mojave
        supported: true
      },
      safari_12_osx: {
        base: 'BrowserStack',
        browser: 'Safari',
        browser_version: '12.0',
        os: 'OS X',
        os_version: 'Mojave',
      },
      ie_14_windows: {
        base: 'BrowserStack',
        os: 'Windows',
        os_version: '10',
        browser: 'Edge',
        browser_version: '14.0',
      },
      ie_11_windows: {
        base: 'BrowserStack',
        os: 'Windows',
        os_version: '10',
        browser: 'IE',
        browser_version: '11.0',
      },
      firefox_52_windows: {
        base: 'BrowserStack',
        os: 'Windows',
        os_version: '10',
        browser: 'Firefox',
        browser_version: '52.0',
      },
      chrome_53_windows: {
        base: 'BrowserStack',
        os: 'Windows',
        os_version: '10',
        browser: 'Chrome',
        browser_version: '53.0',
      }
};

const filter = (predicate) => {
    const result = {};
    Object.keys(ALL).forEach((key) => {
        const value = ALL[key];
        if (predicate(value)) {
            result[key] = value;
        }
    });
    return result;
};

const ENVS = {
    ALL,
    SUPPORTED: filter(x => x.supported),
    OSX: filter(x => x.os === 'OS X'),
    WINDOWS: filter(x => x.os === 'Windows'),
    FIREFOX: filter(x => x.browser === 'Firefox')
};

const browserConfig =  {
  browserstack: {
    user: process.env.BROWSERSTACK_USER,
    key: process.env.BROWSERSTACK_KEY,
    envs: (process.env.BROWSERSTACK_ENVS && ENVS[process.env.BROWSERSTACK_ENVS]) ? ENVS[process.env.BROWSERSTACK_ENVS] : ALL}
};

module.exports = browserConfig;
