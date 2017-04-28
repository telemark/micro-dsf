'use strict'

module.exports = {
  JWT_SECRET: process.env.JWT_SECRET || 'Louie Louie, oh no, I got to go Louie Louie, oh no, I got to go',
  PAPERTRAIL_HOSTNAME: process.env.PAPERTRAIL_HOSTNAME || 'micro-dsf',
  PAPERTRAIL_HOST: process.env.PAPERTRAIL_HOST || 'logs.papertrailapp.com',
  PAPERTRAIL_PORT: process.env.PAPERTRAIL_PORT || 12345,
  DSF: {
    url: process.env.DSF_URL || 'http://ws-test.infotorg.no/xml/ErgoGroup/DetSentraleFolkeregister1_4/2015-08-10/DetSentraleFolkeregister1_4.wsdl',
    namespaceBrukersesjon: process.env.DSF_NAMESPACE || 'http://ws.infotorg.no/xml/Admin/Brukersesjon/2006-07-07/Brukersesjon.xsd',
    distribusjonskanal: process.env.DSF_DIST || 'PTP',
    systemnavn: process.env.DSF_SYSTEM_NAVN || 'systemnavn',
    brukernavn: process.env.DSF_BRUKERNAVN || 'brukernavn',
    passord: process.env.DSF_PASSORD || 'passord'
  }
}
