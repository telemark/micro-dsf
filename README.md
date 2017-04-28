[![Build Status](https://travis-ci.org/telemark/micro-dsf.svg?branch=master)](https://travis-ci.org/telemark/micro-dsf)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Greenkeeper badge](https://badges.greenkeeper.io/telemark/micro-dsf.svg)](https://greenkeeper.io/)

# micro-dsf

ldap auth microservice

## config docker.env

```bash
NODE_ENV=production
JWT_SECRET=Louie Louie, oh no, I got to go Louie Louie, oh no, I got to go
PAPERTRAIL_HOST=logs.papertrailapp.com 
PAPERTRAIL_PORT=12345
DSF_URL=http://ws-test.infotorg.no/xml/ErgoGroup/DetSentraleFolkeregister1_4/2015-08-10/DetSentraleFolkeregister1_4.wsdl 
DSF_NAMESPACE=http://ws.infotorg.no/xml/Admin/Brukersesjon/2006-07-07/Brukersesjon.xsd
DSF_DIST=PTP 
DSF_SYSTEM_NAVN=systemnavn
DSF_BRUKERNAVN=brukernavn
DSF_PASSORD=passord
```

## API

### POST ```/```

```json
{
  "method": "hentDetaljer",
  "query": {
    "saksref": "your-reference",
    "foedselsnr": "26118633333",
    "etternavn": "Enge",
    "fornavn": "Jonas"
  }
}
```

## License

[MIT](LICENSE)

![alt text](https://robots.kebabstudios.party/micro-dsf.png "Robohash image of micro-dsf")
