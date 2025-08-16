// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import './pages/cadastro.page'
import './pages/edicao.page'






beforeEach(() => {
  const block = [
    '/pagead/',
    '/pagead2/',
    'securepubads.g.doubleclick.net/',
    'securepubads.g.doubleclick.net/gampad/ads?',
    'pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
    '/ads/',
    '/gampad/',
    '/googlesyndication.com/',
    '/doubleclick.net/',
    '/google-analytics.com/',
    '/googletagmanager.com/',
    '/adservice.google.com/',
    '/adservice.google.com.br/',
    '/adservice.google.com/adsid/',
    '/adservice.google.com/pagead/',
    '/adservice.google.com.br/pagead/',
    '/adservice.google.com/adsid/integrator.js',
    '/adservice.google.com/adsid/google_ads.js',
    '/googletagservices.com/',
    '/partner.googleadservices.com/',
    '/static.doubleclick.net/',
    '/adclick.g.doubleclick.net/',
    '/tpc.googlesyndication.com/',
    '/googleads.g.doubleclick.net/',
    '/googleads4.g.doubleclick.net/',
    '/ad.doubleclick.net/',
    '/adservice.google.com/',
    '/adservice.google.com.br/',
    '/adservice.google.com/adsid/',
    '/adservice.google.com/pagead/',
    '/adservice.google.com.br/pagead/',
    '/adservice.google.com/adsid/integrator.js',
    '/adservice.google.com/adsid/google_ads.js',
    '/googletagservices.com/',
    '/partner.googleadservices.com/',
    '/static.doubleclick.net/',
    '/adclick.g.doubleclick.net/',
    '/tpc.googlesyndication.com/',
    '/googleads.g.doubleclick.net/',
    '/googleads4.g.doubleclick.net/',
    '/ad.doubleclick.net/',
    '/adservice.google.com/',
    '/adservice.google.com.br/',
    '/adservice.google.com/adsid/',
    '/adservice.google.com/pagead/',
    '/adservice.google.com.br/pagead/',
    '/adservice.google.com/adsid/integrator.js',
    '/adservice.google.com/adsid/google_ads.js',
    '/googletagservices.com/',
    '/partner.googleadservices.com/',
    '/static.doubleclick.net/',
    '/adclick.g.doubleclick.net/',
    '/tpc.googlesyndication.com/',
    '/googleads.g.doubleclick.net/',
    '/googleads4.g.doubleclick.net/',
    '/ad.doubleclick.net/',
    '/adservice.google.com/',
    '/adservice.google.com.br/',
    '/adservice.google.com/adsid/',
    '/adservice.google.com/pagead/',
    '/adservice.google.com.br/pagead/',
    '/adservice.google.com/adsid/integrator.js',
    '/adservice.google.com/adsid/google_ads.js',
    '/googletagservices.com/',
    '/partner.googleadservices.com/',
    '/static.doubleclick.net/',
    '/adclick.g.doubleclick.net/',
    '/tpc.googlesyndication.com/',
    '/googleads.g.doubleclick.net/',
    '/googleads4.g.doubleclick.net/',
    '/ad.doubleclick.net/',
    '/adservice.google.com/',
    '/adservice.google.com.br/',
    '/adservice.google.com/adsid/',
    '/adservice.google.com/pagead/',
    '/adservice.google.com.br/pagead/',
    '/adservice.google.com/adsid/integrator.js',
    '/adservice.google.com/adsid/google_ads.js',
    '/googletagservices.com/',
    '/partner.googleadservices.com/',
    '/static.doubleclick.net/',
    '/adclick.g.doubleclick.net/',
    '/tpc.googlesyndication.com/',
    '/googleads.g.doubleclick.net/',
    '/googleads4.g.doubleclick.net/',
    '/ad.doubleclick.net/',
    '/adservice.google.com/',
    '/adservice.google.com.br/',
    '/adservice.google.com/adsid/',
    '/adservice.google.com/pagead/',
    '/adservice.google.com.br/pagead/',
    '/adservice.google.com/adsid/integrator.js',
    '/adservice.google.com/adsid/google_ads.js',
    '/googletagservices.com/',
    '/partner.googleadservices.com/',
    '/static.doubleclick.net/',
    '/adclick.g.doubleclick.net/',
    '/tpc.googlesyndication.com/',
    '/googleads.g.doubleclick.net/',
    '/googleads4.g.doubleclick.net/',
    '/ad.doubleclick.net/',
    
  ];
  ['GET','POST'].forEach((m) => block.forEach((p) => cy.intercept(m, p, { statusCode: 204, body: '' })));
})


Cypress.on('uncaught:exception', (err, runnable) => {

  if (err.message.includes('Script error')) {
    return false;
  }

  if (err.message.includes('googletagservices') || err.message.includes('doubleclick')) {
    return false;
  }
})