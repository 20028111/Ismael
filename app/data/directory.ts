
export interface DirectoryAnchor {
    name: string
    displayName: string
    website: string
    assets: Record<string, string>
    defunct?: boolean
}

const anchors: Record<string, DirectoryAnchor> = {
    "fchain.io": {
        "name": "fchain.io",
        "displayName": "Fchain",
        "website": "https://fchain.io/",
        "assets": {
            "BTC": "BTC-GATEMHCCKCY67ZUCKTROYN24ZYT5GK4EQZ65JJLDHKHRUZI3EUEKMTCH",
            "BCH": "BCH-GBCHK4TINAK6KXTD4BBWWKR5BI2OKJ7C7HYX55BJ5I4KHNQMTL5UXBCH",
            "ETH": "ETH-GBETHKBL5TCUTQ3JPDIYOZ5RDARTMHMEKIO2QZQ7IOZ4YC5XV3C2IKYU",
            "STM": "STM-GCMS2VO5ANJCESJBZVC3INFSETS3K4UWMU47W7KSQ2BYASEQAN4NUSTM",
            "TAU": "TAU-GBETHKBL5TCUTQ3JPDIYOZ5RDARTMHMEKIO2QZQ7IOZ4YC5XV3C2IKYU",
            "XCN": "XCN-GCNY5OXYSY4FKHOPT2SPOQZAOEIGXB5LBYW3HVU3OWSTQITS65M5RCNY",
            "XEL": "XEL-GAXELY4AOIRVONF7V25BUPDNKZYIVT6CWURG7R2I6NQU26IQSQODBVCS",
            "XFF": "XFF-GAZEX2USUBMMWFRZFS77VDJYXUFLXI4ZGFPWX6TBNZCSTEQWNLFZMXFF",
            "XRP": "XRP-GBXRPL45NPHCVMFFAYZVUVFFVKSIZ362ZXFP7I2ETNQ3QKZMFLPRDTD5",
            "CALL": "CALL-GCZBJ6KTNNGYFJUHM7JLIVPXCKF4244KGIULAFITYXE2NCSP2CW3CALL",
            "WICC": "WICC-GACKZW62KSR37PEVRN6RUO2GKRONUZ5OHDUAEXJ3HFF3UN4RGDFEIIUU"
        }
    },
    "sureremit.co": {
        "name": "sureremit.co",
        "displayName": "SureRemit",
        "website": "https://sureremit.co",
        "assets": {
            "RMT": "RMT-GDEGOXPCHXWFYY234D2YZSPEJ24BX42ESJNVHY5H7TWWQSYRN5ZKZE3N"
        }
    },
    "smartlands.io": {
        "name": "smartlands.io",
        "displayName": "Smartlands",
        "website": "https://smartlands.io",
        "assets": {
            "SLT": "SLT-GCKA6K5PCQ6PNF5RQBF7PQDJWRHO6UOGFMRLK3DYHDOI244V47XKQ4GP"
        }
    },
    "anchorusd.com": {
        "name": "anchorusd.com",
        "displayName": "AnchorUSD",
        "website": "https://anchorusd.com",
        "assets": {
            "USD": "USD-GDUKMGUGDZQK6YHYA5Z6AY2G4XDSZPSZ3SW5UN3ARVMO6QSRDWP5YLEX"
        }
    },
    "thewwallet.com": {
        "name": "thewwallet.com",
        "displayName": "White Wallet",
        "website": "https://thewwallet.com",
        "assets": {
            "WSD": "WSD-GDSVWEA7XV6M5XNLODVTPCGMAJTNBLZBXOFNQD3BNPNYALEYBNT6CE2V"
        }
    },
    "nrvcoin.in": {
        "name": "nrvcoin.in",
        "displayName": "NRV Coin",
        "website": "https://nrvcoin.in",
        "assets": {
            "NRV": "NRV-GANRAE2FXMIU4V7CPLXFHWZNGCCSW7WEVBN2P3ZWA7FWWVED6OJSKKX2"
        }
    },
    "token.io": {
        "name": "token.io",
        "displayName": "TokenIO",
        "website": "https://x.token.io",
        "assets": {
            "USD": "USD-GDSRCV5VTM3U7Y3L6DFRP3PEGBNQMGOWSRTGSBWX6Z3H6C7JHRI4XFJP"
        }
    },
    "interstellar.exchange": {
        "name": "interstellar.exchange",
        "displayName": "Interstellar",
        "website": "https://interstellar.exchange",
        "assets": {
            "ISX": "ISX-GD5Y5Q44JXBANL4LWS53O6RYGOJCLH7P5EFOIUX5KWGN2GG3QHI5T72E",
            "BTC": "BTC-GCNSGHUCG5VMGLT5RIYYZSO7VQULQKAJ62QA33DBC5PPBSO57LFWVV6P",
            "LTC": "LTC-GCNSGHUCG5VMGLT5RIYYZSO7VQULQKAJ62QA33DBC5PPBSO57LFWVV6P",
            "ETH": "ETH-GCNSGHUCG5VMGLT5RIYYZSO7VQULQKAJ62QA33DBC5PPBSO57LFWVV6P",
            "XRP": "XRP-GCNSGHUCG5VMGLT5RIYYZSO7VQULQKAJ62QA33DBC5PPBSO57LFWVV6P",
            "XAF": "XAF-GCNSGHUCG5VMGLT5RIYYZSO7VQULQKAJ62QA33DBC5PPBSO57LFWVV6P"
        }
    },
    "stronghold.co": {
        "name": "stronghold.co",
        "displayName": "Stronghold",
        "website": "https://stronghold.co",
        "assets": {
            "SHX": "SHX-GDSTRSHXHGJ7ZIVRBXEYE5Q74XUVCUSEKEBR7UCHEUUEK72N7I7KJ6JH",
            "USD": "USD-GBSTRUSD7IRX73RQZBL3RQUH6KS3O4NYFY3QCALDLZD77XMZOPWAVTUK",
            "BTC": "BTC-GBSTRH4QOTWNSVA6E4HFERETX4ZLSR3CIUBLK7AXYII277PFJC4BBYOG",
            "ETH": "ETH-GBSTRH4QOTWNSVA6E4HFERETX4ZLSR3CIUBLK7AXYII277PFJC4BBYOG",
            "LTC": "LTC-GCSTRLTC73UVXIYPHYTTQUUSDTQU2KQW5VKCE4YCMEHWF44JKDMQAL23",
            "XRP": "XRP-GBSTRXRPA7ALGIXDYBHQ6WYWY2NAHLSF64Q3W5DKAPZNMRHKQL6FYXUA",
            "NZD": "NZD-GCSTRNZDFRJEHYI3JIVZEO4DHXI2HBRRSZG7OVRT4BAM2SYHBGNGL5T2"
        }
    },
    "lapo.io": {
        "name": "lapo.io",
        "displayName": "Lapo",
        "website": "https://lapo.io",
        "assets": {
            "LAX": "LAX-GAZZB5KPOWEWK4C5S5H5B6YPR2EQMUIJEFFBNQ6MWYYAG7DOEELBOHLW"
        }
    },
    "ripplefox.com": {
        "name": "ripplefox.com",
        "displayName": "RippleFox",
        "website": "https://ripplefox.com/anchor/",
        "assets": {
            "CNY": "CNY-GAREELUB43IRHWEASCFBLKHURCGMHE5IF6XSE7EXDLACYHGRHM43RFOX"
        }
    },
    "apay.io": {
        "name": "apay.io",
        "displayName": "apay.io",
        "website": "https://apay.io/",
        "assets": {
            "BCH": "BCH-GAEGOS7I6TYZSVHPSN76RSPIVL3SELATXZWLFO4DIAFYJF7MPAHFE7H4",
            "BTC": "BTC-GAUTUYY2THLF7SGITDFMXJVYH3LHDSMGEAKSBU267M2K7A3W543CKUEF",
            "LTC": "LTC-GC5LOR3BK6KIOK7GKAUD5EGHQCMFOGHJTC7I3ELB66PTDFXORC2VM5LP",
            "ICN": "ICN-GBDEVU63Y6NTHJQQZIKVTC23NWLQVP3WJ2RI2OTSJTNYOIGICST6DUXR",
            "ETH": "ETH-GBDEVU63Y6NTHJQQZIKVTC23NWLQVP3WJ2RI2OTSJTNYOIGICST6DUXR",
            "BAT": "BAT-GBDEVU63Y6NTHJQQZIKVTC23NWLQVP3WJ2RI2OTSJTNYOIGICST6DUXR",
            "OMG": "OMG-GBDEVU63Y6NTHJQQZIKVTC23NWLQVP3WJ2RI2OTSJTNYOIGICST6DUXR",
            "REP": "REP-GBDEVU63Y6NTHJQQZIKVTC23NWLQVP3WJ2RI2OTSJTNYOIGICST6DUXR",
            "ZRX": "ZRX-GBDEVU63Y6NTHJQQZIKVTC23NWLQVP3WJ2RI2OTSJTNYOIGICST6DUXR",
            "KIN": "KIN-GBDEVU63Y6NTHJQQZIKVTC23NWLQVP3WJ2RI2OTSJTNYOIGICST6DUXR",
            "LINK": "LINK-GBDEVU63Y6NTHJQQZIKVTC23NWLQVP3WJ2RI2OTSJTNYOIGICST6DUXR",
            "MTL": "MTL-GBDEVU63Y6NTHJQQZIKVTC23NWLQVP3WJ2RI2OTSJTNYOIGICST6DUXR",
            "SALT": "SALT-GBDEVU63Y6NTHJQQZIKVTC23NWLQVP3WJ2RI2OTSJTNYOIGICST6DUXR"
        }
    },
    "mobius.network": {
        "name": "mobius.network",
        "displayName": "Mobius",
        "website": "https://mobius.network/",
        "assets": {
            "MOBI": "MOBI-GA6HCMBLTZS5VYYBCATRBRZ3BZJMAFUDKYYF6AH6MVCMGWMRDNSWJPIH"
        }
    },
    "naobtc.com": {
        "name": "naobtc.com",
        "displayName": "NaoBTC",
        "website": "https://naobtc.com/",
        "assets": {
            "BTC": "BTC-GATEMHCCKCY67ZUCKTROYN24ZYT5GK4EQZ65JJLDHKHRUZI3EUEKMTCH",
            "XEL": "XEL-GAXELY4AOIRVONF7V25BUPDNKZYIVT6CWURG7R2I6NQU26IQSQODBVCS"
        }
    },
    "ntokens.com": {
        "name": "ntokens.com",
        "displayName": "nTokens",
        "website": "https://ntokens.com/",
        "assets": {
            "BRL": "BRL-GDVKY2GU2DRXWTBEYJJWSFXIGBZV6AZNBVVSUHEPZI54LIS6BA7DVVSP"
        }
    },
    "ximcoin.com": {
        "name": "ximcoin.com",
        "displayName": "XIM",
        "website": "https://ximcoin.com",
        "assets": {
            "XIM": "XIM-GBZ35ZJRIKJGYH5PBKLKOZ5L6EXCNTO7BKIL7DAVVDFQ2ODJEEHHJXIM"
        }
    },
    "ternio.io": {
        "name": "ternio.io",
        "displayName": "TERN",
        "website": "https://ternio.io",
        "assets": {
            "TERN": "TERN-GDGQDVO6XPFSY4NMX75A7AOVYCF5JYGW2SHCJJNWCQWIDGOZB53DGP6C"
        }
    },
    "six.network": {
        "name": "six.network",
        "displayName": "SIX",
        "website": "https://six.network",
        "assets": {
            "SIX": "SIX-GDMS6EECOH6MBMCP3FYRYEVRBIV3TQGLOFQIPVAITBRJUMTI6V7A2X6Z"
        }
    },
    "cryptotari.io": {
        "name": "cryptotari.io",
        "displayName": "TARI",
        "website": "https://cryptotari.io",
        "assets": {
            "TARI": "TARI-GD7UVDDJHJYKUXB4SJFIC6VJDQ4YADQCMRN3KLHJFV4H6NIUAEREVCO7"
        }
    },
    "frasindo.com": {
        "name": "frasindo.com",
        "displayName": "Frasindo",
        "website": "https://frasindo.com",
        "assets": {
            "FRAS": "FRAS-GC75WHUIMU7LV6WURMCA5GGF2S5FWFOK7K5VLR2WGRKWKZQAJQEBM53M"
        }
    },
    "pedity.com": {
        "name": "pedity.com",
        "displayName": "Pedity",
        "website": "https://pedity.com",
        "assets": {
            "PEDI": "PEDI-GBVUDZLMHTLMZANLZB6P4S4RYF52MVWTYVYXTQ2EJBPBX4DZI2SDOLLY"
        }
    },
    "nezly.com": {
        "name": "nezly.com",
        "displayName": "Nezly",
        "website": "https://nezly.com",
        "assets": {
            "NEZ": "NEZ-GDGKBRCPW4C3ENNC5C64PE6U33MG52GBKFXOK5P3OSWF74DAOXRXV6OJ",
            "ETH": "ETH-GDGKBRCPW4C3ENNC5C64PE6U33MG52GBKFXOK5P3OSWF74DAOXRXV6OJ",
            "BTC": "BTC-GDGKBRCPW4C3ENNC5C64PE6U33MG52GBKFXOK5P3OSWF74DAOXRXV6OJ"
        },
        "defunct": true
    },
    "repocoin.io": {
        "name": "repocoin.io",
        "displayName": "Repocoin",
        "website": "https://repocoin.io",
        "assets": {
            "REPO": "REPO-GCZNF24HPMYTV6NOEHI7Q5RJFFUI23JKUKY3H3XTQAFBQIBOHD5OXG3B"
        }
    },
    "stemchain.io": {
        "name": "stemchain.io",
        "displayName": "STEMchain",
        "website": "https://stemchain.io",
        "assets": {
            "STEM": "STEM-GAFXX2VJE2EGLLY3EFA2BQXJADAZTNR7NC7IJ6LFYPSCLE7AI3AK3B3M"
        }
    },
    "charnatoken.top": {
        "name": "charnatoken.top",
        "displayName": "Charna Token",
        "website": "https://charnatoken.top",
        "assets": {
            "CHRC": "CHRC-GBRPTWEZTUKYM6VJXLHXBFI23M2GSY3TCVIQSZKFQLMOJXH7VPDGKBDP"
        },
        "defunct": true
    },
    "irene.energy": {
        "name": "irene.energy",
        "displayName": "TELLUS",
        "website": "https://irene.energy",
        "assets": {
            "TELLUS": "TELLUS-GBBRMEXJMS3L7Y3DZZ2AHBD545GZ72OAEHHEFKGZAHHASHGWMHK5P6PL"
        },
        "defunct": true
    },
    "vcbear.net": {
        "name": "vcbear.net",
        "displayName": "VCBear",
        "website": "https://vcbear.net/",
        "assets": {
            "JPY": "JPY-GBVAOIACNSB7OVUXJYC5UE2D4YK2F7A24T7EE5YOMN4CE6GCHUTOUQXM",
            "XRP": "XRP-GA7FCCMTTSUIC37PODEL6EOOSPDRILP6OQI5FWCWDDVDBLJV72W6RINZ",
            "BTC": "BTC-GDXTJEK4JZNSTNQAWA53RZNS2GIKTDRPEUWDXELFMKU52XNECNVDVXDI"
        }
    },
    "coins.asia": {
        "name": "coins.asia",
        "displayName": "coins.asia",
        "website": "https://coins.asia/",
        "assets": {
            "PHP": "PHP-GBUQWP3BOUZX34TOND2QV7QQ7K7VJTG6VSE7WMLBTMDJLLAW7YKGU6EP"
        }
    },
    "wirexapp.com": {
        "name": "wirexapp.com",
        "displayName": "WireX",
        "website": "https://wirexapp.com/",
        "assets": {
            "WXT": "WXT-GASBLVHS5FOABSDNW5SPPH3QRJYXY5JHA2AOA2QHH2FJLZBRXSG4SWXT"
        }
    },
    "jetmint.org": {
        "name": "jetmint.org",
        "displayName": "Jetmint",
        "website": "https://jetmint.org",
        "assets": {
            "XYZ": "XYZ-GCQHDR2KSCVNULFX3C2NKFEXNJEUELJVMQAN3OCLAM5KXG4DWQSRMXYZ"
        }
    },
    "tempo.eu.com": {
        "name": "tempo.eu.com",
        "displayName": "TEMPO",
        "website": "https://tempo.eu.com/",
        "assets": {
            "EURT": "EURT-GAP5LETOV6YIE62YAM56STDANPRDO7ZFDBGSNHJQIYGGKSMOZAHOOS2S"
        }
    },
    "flutterwave.com": {
        "name": "flutterwave.com",
        "displayName": "Flutterwave",
        "website": "https://flutterwave.com/",
        "assets": {
            "NGN": "NGN-GCC4YLCR7DDWFCIPTROQM7EB2QMFD35XRWEQVIQYJQHVW6VE5MJZXIGW"
        }
    },
    "xirkle.com": {
        "name": "xirkle.com",
        "displayName": "Xirkle",
        "website": "https://xirkle.com/",
        "assets": {
            "XIR": "XIR-GAO4DADCRAHA35GD6J3KUNOB5ELZE5D6CGPSJX2WBMEQV7R2M4PGKJL5"
        }
    },
    "cryptomover.com": {
        "name": "cryptomover.com",
        "displayName": "Cryptomover",
        "website": "https://cryptomover.com/",
        "assets": {
            "CM3": "CM3-GDU2FEL6THGGOFDHHP4I5FHNWY4S2SXYUBCEDB5ZREMD6UFRT4SYWSW2",
            "CM10": "CM10-GDBCHKTHJUKDGSIQSTBUXFWVP3QVART5LED6KRZQ5X4Z5WLT4BGYXWCI",
            "CMA": "CMA-GBWZHAVWY23QKKDJW7TXLSIHY5EX4NIB37O4NMRKN2SKNWOSE5TEPCY3",
            "CMS": "CMS-GCVBUIXKKLH2DYHZRSLZUIZSVJUL74RTW6FVCCEYB2OE3RH7RVDBPCFG",
            "HKDT": "HKDT-GABSZVZBYEO5F4V5LZKV7GR4SAJ5IKJGGOF43BIN42FNDUG7QPH6IMRQ"
        }
    },
    "thefutbolcoin.io": {
        "name": "thefutbolcoin.io",
        "displayName": "TFC",
        "website": "https://thefutbolcoin.io/",
        "assets": {
            "TFC": "TFC-GDS3XDJAA4VY6MJYASIGSIMPHZ7AQNZ54RKLWT7MWCOU5YKYEVCNLVS3"
        }
    },
    "collective21.org": {
        "name": "collective21.org",
        "displayName": "Collective21",
        "website": "https://collective21.org/",
        "assets": {
            "SEED": "SEED-GDPFSEBZO2W4TLWZO7FIMMG3QONHXYVF6LUULI6HUJS6PJLE4TRZEXLF"
        },
        "defunct": true
    },
    "moni.com": {
        "name": "moni.com",
        "displayName": "MONI",
        "website": "https://moni.com/",
        "assets": {
            "EUR": "EUR-GAKBPBDMW6CTRDCXNAPSVJZ6QAN3OBNRG6CWI27FGDQT2ZJJEMDRXPKK"
        },
        "defunct": true
    },
    "golix.io": {
        "name": "golix.io",
        "displayName": "Golix",
        "website": "https://golix.io/",
        "assets": {
            "USD": "USD-GCYK67DDGBOANS6UODJ62QWGLEB2A7JQ3XUV25HCMLT7CI23PMMK3W6R",
            "BTC": "BTC-GCYK67DDGBOANS6UODJ62QWGLEB2A7JQ3XUV25HCMLT7CI23PMMK3W6R"
        },
        "defunct": true
    },
    "anclax.com": {
        "name": "anclax.com",
        "displayName": "AnclaX",
        "website": "https://anclax.com",
        "assets": {
            "COP": "COP-GAEDLNMCQZOSLY7Y4NW3DTEWQEVVCXYYMBDNGPPGBMQH4GFYECBI7YVK"
        },
        "defunct": true
    },
    "astral9.io": {
        "name": "astral9.io",
        "displayName": "XA9",
        "website": "https://astral9.io",
        "assets": {
            "XA9": "XA9-GAUWES2POH347NNJGRI4OBM34LMOCMWSTZ3RAOZMOBH4PFVBWFMHLNTC"
        },
        "defunct": true
    },
    "old.sureremit.co": {
        "name": "old.sureremit.co",
        "displayName": "SureRemit OLD",
        "website": "https://old.sureremit.co",
        "assets": {
            "RMT": "RMT-GCVWTTPADC5YB5AYDKJCTUYSCJ7RKPGE4HT75NIZOUM4L7VRTS5EKLFN"
        },
        "defunct": true
    },
    "tonaira.com": {
        "name": "tonaira.com",
        "displayName": "Tonaira",
        "website": "https://tonaira.com/",
        "assets": {
            "NGN": "NGN-GCLRUZDCWBHS7VIFCT43BARPP63BHR32HMEVKXYQODA5BU6SIGFK4HL2"
        },
        "defunct": true
    },
    "equid.co": {
        "name": "equid.co",
        "displayName": "eQuid",
        "website": "https://equid.co/",
        "assets": {
            "EQD": "EQD-GCGEQJR3E5BVMQYSNCHPO6NPP3KOT4VVZHIOLSRSNLE2GFY7EWVSLLTN"
        },
        "defunct": true
    },
    "winsome.gift": {
        "name": "winsome.gift",
        "displayName": "WIN",
        "website": "https://winsome.gift",
        "assets": {
            "WIN": "WIN-GCNHYZLBCSVZHSQJ2DOIBHYBF4J24DJYGS5QKURX4AGSLBK6SDJOYWIN"
        },
        "defunct": true
    },
    "cowrie.exchange": {
        "name": "cowrie.exchange",
        "displayName": "Cowrie Exchange",
        "website": "https://cowrie.exchange",
        "assets": {
            "NGNT": "NGNT-GAWODAROMJ33V5YDFY3NPYTHVYQG7MJXVJ2ND3AOGIHYRWINES6ACCPD"
        }
    },
    "pr.network": {
        "name": "pr.network",
        "displayName": "XPR",
        "website": "https://pr.network",
        "assets": {
            "XPR": "XPR-GAZPKDTEZ5UM3BF4E7FL7EMXRMLH76F2TNVXRLOF6SCVXOFWSPCEWFI5"
        }
    },
    "tontinetrust.com": {
        "name": "tontinetrust.com",
        "displayName": "TON Money",
        "website": "https://tontinetrust.com",
        "assets": {
            "TON": "TON-GBFJGO46OV6E2QS2ZUMCF256ZL4BFOZWFHULRNLPSPW47HH5HFAKJTON"
        }
    },
    "superlumen.org": {
        "name": "superlumen.org",
        "displayName": "Superlumens",
        "website": "https://www.superlumen.org/",
        "assets": {
            "SLM": "SLM-GCEGERI7COJYNNID6CYSKS5DPPLGCCLPTOSCDD2LG5SJIVWM5ISUPERI"
        },
        "defunct": true
    },
    "liquido.i-server.org": {
        "name": "liquido.i-server.org",
        "displayName": "Liquido",
        "website": "https://liquido.i-server.org/",
        "assets": {
            "XLQ": "XLQ-GD2RRX6BKVTORZ6RIMBLWFVUOAYOLTS2QFJQUQPXLI3PBHR3TMLQNGZX"
        },
        "defunct": true
    },
    "old.repocoin.io": {
        "name": "old.repocoin.io",
        "displayName": "Repocoin",
        "website": "https://old.repocoin.io",
        "assets": {
            "REPO": "REPO-GDPB3BGHJAHAKVIWUNLST7N6OGZ73W6AUAI7QDZJW26LEWL46VDAKBH6"
        },
        "defunct": true
    }
}

export interface DirectoryDestination {
    name: string
}

const destinations: Record<string, DirectoryDestination> = {
    "GA5XIGA5C7QTPTWXQHY6MCJRMTRZDOSHR6EFIBNDQTCQHG262N4GGKTM": {
        "name": "Kraken"
    },
    "GCGNWKCJ3KHRLPM3TM6N7D3W5YKDJFL6A2YCXFXNMRTZ4Q66MEMZ6FI2": {
        "name": "Poloniex"
    },
    "GB6YPGW5JFMMP2QB2USQ33EUWTXVL4ZT5ITUNCY3YKVWOJPP57CANOF3": {
        "name": "Bittrex"
    },
    "GB7GRJ5DTE3AA2TCVHQS2LAD3D7NFG7YLTOEWEBVRNUUI2Q3TJ5UQIFM": {
        "name": "BTC38"
    },
    "GBV4ZDEPNQ2FKSPKGJP2YKDAIZWQ2XKRQD4V4ACH3TCTFY6KPY3OAVS7": {
        "name": "Changelly"
    },
    "GBR3RS2Z277FER476OFHFXQJRKYSQX4Z7XNWO65AN3QPRUANUASANG3L": {
        "name": "PapayaBot"
    },
    "GBTBVILDGCOIK26EPEHYCMKM7J5MTQ4FD5DO37GVTTBP45TVGRAROQHP": {
        "name": "KOINEX"
    },
    "GBGVRE5DH6HGNYNLWQITKRQYGR4PWQEH6MOE5ELPY3I4XJPTZ7CVT4YW": {
        "name": "PapayaSwap"
    },
    "GBQWA6DU6OXHH4AVTFCONQ76LHEWQVZAW7SFSW4PPCAI2NX4MJDZUYDW": {
        "name": "Piiko"
    },
    "GBKTJSNUSR6OCXA5WDWGT33MNSCNQHOBQUBYC7TVS7BOXDKWFNHI4QNH": {
        "name": "Exrates"
    },
    "GC4KAS6W2YCGJGLP633A6F6AKTCV4WSLMTMIQRSEQE5QRRVKSX7THV6S": {
        "name": "Indodax"
    },
    "GCO2IP3MJNUOKS4PUDI4C7LGGMQDJGXG3COYX3WSB4HHNAHKYV5YL3VC": {
        "name": "Binance"
    },
    "GAHK7EEG2WWHVKDNT4CEQFZGKF2LGDSW2IVM4S5DP42RBW3K6BTODB4A": {
        "name": "Binance"
    },
    "GBOEEVARKVASOQSSXCAHNTGJTVALJE2QM3AQQ2K3VXACQ6JJREQRJZKB": {
        "name": "OKEX"
    },
    "GDZCEWJ5TVXUTFH6V5CVDQDE43KRXYUFRHKI7X64EWMVOVYYZJFWIFQ2": {
        "name": "AEX"
    },
    "GCXDR4QZ4OTVX6433DPTXELCSEWQ4E5BIPVRRJMUR6M3NT4JCVIDALZO": {
        "name": "GOPAX"
    },
    "GBZ35ZJRIKJGYH5PBKLKOZ5L6EXCNTO7BKIL7DAVVDFQ2ODJEEHHJXIM": {
        "name": "XIM"
    },
    "GCZYLNGU4CA5NAWBAVTHMZH4JXWKP2OUJ6OK3I7XXZCNA5622WUJVLTG": {
        "name": "RMT swap"
    },
    "GBVUDZLMHTLMZANLZB6P4S4RYF52MVWTYVYXTQ2EJBPBX4DZI2SDOLLY": {
        "name": "Pedity Issuer"
    },
    "GA6HCMBLTZS5VYYBCATRBRZ3BZJMAFUDKYYF6AH6MVCMGWMRDNSWJPIH": {
        "name": "Mobius Issuer"
    },
    "GDCHDRSDOBRMSUDKRE2C4U4KDLNEATJPIHHR2ORFL5BSD56G4DQXL4VW": {
        "name": "StellarTerm Inflation"
    },
    "GCCD6AJOYZCUAQLX32ZJF2MKFFAUJ53PVCFQI3RHWKL3V47QYE2BNAUT": {
        "name": "Lumenaut Inflation"
    },
    "GBTCBCWLE6YVTR5Y5RRZC36Z37OH22G773HECWEIZTZJSN4WTG3CSOES": {
        "name": "NaoBTC"
    },
    "GDRSWSKJCIB6Z65UA7W5RG62A7M5K3A5IHMED6DYHLPLWLVQCOOGDQ7S": {
        "name": "Gate.io"
    }
}

export interface DirectoryAsset {
    code: string
    issuer: string
    domain: string
    notes?: string
    stablecoin?: boolean
}

const assets: Record<string, DirectoryAsset> = {
    "BRL-GDVKY2GU2DRXWTBEYJJWSFXIGBZV6AZNBVVSUHEPZI54LIS6BA7DVVSP": {
        "code": "BRL",
        "issuer": "GDVKY2GU2DRXWTBEYJJWSFXIGBZV6AZNBVVSUHEPZI54LIS6BA7DVVSP",
        "domain": "ntokens.com"
    },
    "LAX-GAZZB5KPOWEWK4C5S5H5B6YPR2EQMUIJEFFBNQ6MWYYAG7DOEELBOHLW": {
        "code": "LAX",
        "issuer": "GAZZB5KPOWEWK4C5S5H5B6YPR2EQMUIJEFFBNQ6MWYYAG7DOEELBOHLW",
        "domain": "lapo.io"
    },
    "XYZ-GCQHDR2KSCVNULFX3C2NKFEXNJEUELJVMQAN3OCLAM5KXG4DWQSRMXYZ": {
        "code": "XYZ",
        "issuer": "GCQHDR2KSCVNULFX3C2NKFEXNJEUELJVMQAN3OCLAM5KXG4DWQSRMXYZ",
        "domain": "jetmint.org"
    },
    "NRV-GANRAE2FXMIU4V7CPLXFHWZNGCCSW7WEVBN2P3ZWA7FWWVED6OJSKKX2": {
        "code": "NRV",
        "issuer": "GANRAE2FXMIU4V7CPLXFHWZNGCCSW7WEVBN2P3ZWA7FWWVED6OJSKKX2",
        "domain": "nrvcoin.in"
    },
    "ISX-GD5Y5Q44JXBANL4LWS53O6RYGOJCLH7P5EFOIUX5KWGN2GG3QHI5T72E": {
        "code": "ISX",
        "issuer": "GD5Y5Q44JXBANL4LWS53O6RYGOJCLH7P5EFOIUX5KWGN2GG3QHI5T72E",
        "domain": "interstellar.exchange"
    },
    "BTC-GCNSGHUCG5VMGLT5RIYYZSO7VQULQKAJ62QA33DBC5PPBSO57LFWVV6P": {
        "code": "BTC",
        "issuer": "GCNSGHUCG5VMGLT5RIYYZSO7VQULQKAJ62QA33DBC5PPBSO57LFWVV6P",
        "domain": "interstellar.exchange"
    },
    "LTC-GCNSGHUCG5VMGLT5RIYYZSO7VQULQKAJ62QA33DBC5PPBSO57LFWVV6P": {
        "code": "LTC",
        "issuer": "GCNSGHUCG5VMGLT5RIYYZSO7VQULQKAJ62QA33DBC5PPBSO57LFWVV6P",
        "domain": "interstellar.exchange"
    },
    "ETH-GCNSGHUCG5VMGLT5RIYYZSO7VQULQKAJ62QA33DBC5PPBSO57LFWVV6P": {
        "code": "ETH",
        "issuer": "GCNSGHUCG5VMGLT5RIYYZSO7VQULQKAJ62QA33DBC5PPBSO57LFWVV6P",
        "domain": "interstellar.exchange"
    },
    "XRP-GCNSGHUCG5VMGLT5RIYYZSO7VQULQKAJ62QA33DBC5PPBSO57LFWVV6P": {
        "code": "XRP",
        "issuer": "GCNSGHUCG5VMGLT5RIYYZSO7VQULQKAJ62QA33DBC5PPBSO57LFWVV6P",
        "domain": "interstellar.exchange"
    },
    "XAF-GCNSGHUCG5VMGLT5RIYYZSO7VQULQKAJ62QA33DBC5PPBSO57LFWVV6P": {
        "code": "XAF",
        "issuer": "GCNSGHUCG5VMGLT5RIYYZSO7VQULQKAJ62QA33DBC5PPBSO57LFWVV6P",
        "domain": "interstellar.exchange"
    },
    "USD-GDUKMGUGDZQK6YHYA5Z6AY2G4XDSZPSZ3SW5UN3ARVMO6QSRDWP5YLEX": {
        "code": "USD",
        "issuer": "GDUKMGUGDZQK6YHYA5Z6AY2G4XDSZPSZ3SW5UN3ARVMO6QSRDWP5YLEX",
        "domain": "anchorusd.com",
        "stablecoin": true
    },
    "WSD-GDSVWEA7XV6M5XNLODVTPCGMAJTNBLZBXOFNQD3BNPNYALEYBNT6CE2V": {
        "code": "WSD",
        "issuer": "GDSVWEA7XV6M5XNLODVTPCGMAJTNBLZBXOFNQD3BNPNYALEYBNT6CE2V",
        "domain": "thewwallet.com",
        "stablecoin": true
    },
    "USD-GDSRCV5VTM3U7Y3L6DFRP3PEGBNQMGOWSRTGSBWX6Z3H6C7JHRI4XFJP": {
        "code": "USD",
        "issuer": "GDSRCV5VTM3U7Y3L6DFRP3PEGBNQMGOWSRTGSBWX6Z3H6C7JHRI4XFJP",
        "domain": "token.io",
        "stablecoin": true
    },
    "XIM-GBZ35ZJRIKJGYH5PBKLKOZ5L6EXCNTO7BKIL7DAVVDFQ2ODJEEHHJXIM": {
        "code": "XIM",
        "issuer": "GBZ35ZJRIKJGYH5PBKLKOZ5L6EXCNTO7BKIL7DAVVDFQ2ODJEEHHJXIM",
        "domain": "ximcoin.com"
    },
    "TERN-GDGQDVO6XPFSY4NMX75A7AOVYCF5JYGW2SHCJJNWCQWIDGOZB53DGP6C": {
        "code": "TERN",
        "issuer": "GDGQDVO6XPFSY4NMX75A7AOVYCF5JYGW2SHCJJNWCQWIDGOZB53DGP6C",
        "domain": "ternio.io"
    },
    "SIX-GDMS6EECOH6MBMCP3FYRYEVRBIV3TQGLOFQIPVAITBRJUMTI6V7A2X6Z": {
        "code": "SIX",
        "issuer": "GDMS6EECOH6MBMCP3FYRYEVRBIV3TQGLOFQIPVAITBRJUMTI6V7A2X6Z",
        "domain": "six.network"
    },
    "TON-GBFJGO46OV6E2QS2ZUMCF256ZL4BFOZWFHULRNLPSPW47HH5HFAKJTON": {
        "code": "TON",
        "issuer": "GBFJGO46OV6E2QS2ZUMCF256ZL4BFOZWFHULRNLPSPW47HH5HFAKJTON",
        "domain": "tontinetrust.com"
    },
    "TARI-GD7UVDDJHJYKUXB4SJFIC6VJDQ4YADQCMRN3KLHJFV4H6NIUAEREVCO7": {
        "code": "TARI",
        "issuer": "GD7UVDDJHJYKUXB4SJFIC6VJDQ4YADQCMRN3KLHJFV4H6NIUAEREVCO7",
        "domain": "cryptotari.io"
    },
    "FRAS-GC75WHUIMU7LV6WURMCA5GGF2S5FWFOK7K5VLR2WGRKWKZQAJQEBM53M": {
        "code": "FRAS",
        "issuer": "GC75WHUIMU7LV6WURMCA5GGF2S5FWFOK7K5VLR2WGRKWKZQAJQEBM53M",
        "domain": "frasindo.com"
    },
    "PEDI-GBVUDZLMHTLMZANLZB6P4S4RYF52MVWTYVYXTQ2EJBPBX4DZI2SDOLLY": {
        "code": "PEDI",
        "issuer": "GBVUDZLMHTLMZANLZB6P4S4RYF52MVWTYVYXTQ2EJBPBX4DZI2SDOLLY",
        "domain": "pedity.com"
    },
    "SLT-GCKA6K5PCQ6PNF5RQBF7PQDJWRHO6UOGFMRLK3DYHDOI244V47XKQ4GP": {
        "code": "SLT",
        "issuer": "GCKA6K5PCQ6PNF5RQBF7PQDJWRHO6UOGFMRLK3DYHDOI244V47XKQ4GP",
        "domain": "smartlands.io"
    },
    "REPO-GCZNF24HPMYTV6NOEHI7Q5RJFFUI23JKUKY3H3XTQAFBQIBOHD5OXG3B": {
        "code": "REPO",
        "issuer": "GCZNF24HPMYTV6NOEHI7Q5RJFFUI23JKUKY3H3XTQAFBQIBOHD5OXG3B",
        "domain": "repocoin.io"
    },
    "STEM-GAFXX2VJE2EGLLY3EFA2BQXJADAZTNR7NC7IJ6LFYPSCLE7AI3AK3B3M": {
        "code": "STEM",
        "issuer": "GAFXX2VJE2EGLLY3EFA2BQXJADAZTNR7NC7IJ6LFYPSCLE7AI3AK3B3M",
        "domain": "stemchain.io"
    },
    "SHX-GDSTRSHXHGJ7ZIVRBXEYE5Q74XUVCUSEKEBR7UCHEUUEK72N7I7KJ6JH": {
        "code": "SHX",
        "issuer": "GDSTRSHXHGJ7ZIVRBXEYE5Q74XUVCUSEKEBR7UCHEUUEK72N7I7KJ6JH",
        "domain": "stronghold.co"
    },
    "BTC-GBSTRH4QOTWNSVA6E4HFERETX4ZLSR3CIUBLK7AXYII277PFJC4BBYOG": {
        "code": "BTC",
        "issuer": "GBSTRH4QOTWNSVA6E4HFERETX4ZLSR3CIUBLK7AXYII277PFJC4BBYOG",
        "domain": "stronghold.co"
    },
    "ETH-GBSTRH4QOTWNSVA6E4HFERETX4ZLSR3CIUBLK7AXYII277PFJC4BBYOG": {
        "code": "ETH",
        "issuer": "GBSTRH4QOTWNSVA6E4HFERETX4ZLSR3CIUBLK7AXYII277PFJC4BBYOG",
        "domain": "stronghold.co"
    },
    "USD-GBSTRUSD7IRX73RQZBL3RQUH6KS3O4NYFY3QCALDLZD77XMZOPWAVTUK": {
        "code": "USD",
        "issuer": "GBSTRUSD7IRX73RQZBL3RQUH6KS3O4NYFY3QCALDLZD77XMZOPWAVTUK",
        "domain": "stronghold.co",
        "notes": "retired USD"
    },
    "LTC-GCSTRLTC73UVXIYPHYTTQUUSDTQU2KQW5VKCE4YCMEHWF44JKDMQAL23": {
        "code": "LTC",
        "issuer": "GCSTRLTC73UVXIYPHYTTQUUSDTQU2KQW5VKCE4YCMEHWF44JKDMQAL23",
        "domain": "stronghold.co",
        "notes": "retired LTC"
    },
    "XRP-GCSTRXRP73UVXIYPHYTTQUUSDTQU2KQW5VKCE4YCMEHWF44JKDMQAL23": {
        "code": "XRP",
        "issuer": "GBSTRXRPA7ALGIXDYBHQ6WYWY2NAHLSF64Q3W5DKAPZNMRHKQL6FYXUA",
        "domain": "stronghold.co",
        "notes": "retired XRP"
    },
    "BTC-GATEMHCCKCY67ZUCKTROYN24ZYT5GK4EQZ65JJLDHKHRUZI3EUEKMTCH": {
        "code": "BTC",
        "issuer": "GATEMHCCKCY67ZUCKTROYN24ZYT5GK4EQZ65JJLDHKHRUZI3EUEKMTCH",
        "domain": "naobtc.com"
    },
    "XEL-GAXELY4AOIRVONF7V25BUPDNKZYIVT6CWURG7R2I6NQU26IQSQODBVCS": {
        "code": "XEL",
        "issuer": "GAXELY4AOIRVONF7V25BUPDNKZYIVT6CWURG7R2I6NQU26IQSQODBVCS",
        "domain": "naobtc.com"
    },
    "JPY-GBVAOIACNSB7OVUXJYC5UE2D4YK2F7A24T7EE5YOMN4CE6GCHUTOUQXM": {
        "code": "JPY",
        "issuer": "GBVAOIACNSB7OVUXJYC5UE2D4YK2F7A24T7EE5YOMN4CE6GCHUTOUQXM",
        "domain": "vcbear.net"
    },
    "XRP-GA7FCCMTTSUIC37PODEL6EOOSPDRILP6OQI5FWCWDDVDBLJV72W6RINZ": {
        "code": "XRP",
        "issuer": "GA7FCCMTTSUIC37PODEL6EOOSPDRILP6OQI5FWCWDDVDBLJV72W6RINZ",
        "domain": "vcbear.net"
    },
    "BTC-GDXTJEK4JZNSTNQAWA53RZNS2GIKTDRPEUWDXELFMKU52XNECNVDVXDI": {
        "code": "BTC",
        "issuer": "GDXTJEK4JZNSTNQAWA53RZNS2GIKTDRPEUWDXELFMKU52XNECNVDVXDI",
        "domain": "vcbear.net"
    },
    "PHP-GBUQWP3BOUZX34TOND2QV7QQ7K7VJTG6VSE7WMLBTMDJLLAW7YKGU6EP": {
        "code": "PHP",
        "issuer": "GBUQWP3BOUZX34TOND2QV7QQ7K7VJTG6VSE7WMLBTMDJLLAW7YKGU6EP",
        "domain": "coins.asia"
    },
    "EURT-GAP5LETOV6YIE62YAM56STDANPRDO7ZFDBGSNHJQIYGGKSMOZAHOOS2S": {
        "code": "EURT",
        "issuer": "GAP5LETOV6YIE62YAM56STDANPRDO7ZFDBGSNHJQIYGGKSMOZAHOOS2S",
        "domain": "tempo.eu.com"
    },
    "RMT-GDEGOXPCHXWFYY234D2YZSPEJ24BX42ESJNVHY5H7TWWQSYRN5ZKZE3N": {
        "code": "RMT",
        "issuer": "GDEGOXPCHXWFYY234D2YZSPEJ24BX42ESJNVHY5H7TWWQSYRN5ZKZE3N",
        "domain": "sureremit.co"
    },
    "CNY-GAREELUB43IRHWEASCFBLKHURCGMHE5IF6XSE7EXDLACYHGRHM43RFOX": {
        "code": "CNY",
        "issuer": "GAREELUB43IRHWEASCFBLKHURCGMHE5IF6XSE7EXDLACYHGRHM43RFOX",
        "domain": "ripplefox.com"
    },
    "BCH-GAEGOS7I6TYZSVHPSN76RSPIVL3SELATXZWLFO4DIAFYJF7MPAHFE7H4": {
        "code": "BCH",
        "issuer": "GAEGOS7I6TYZSVHPSN76RSPIVL3SELATXZWLFO4DIAFYJF7MPAHFE7H4",
        "domain": "apay.io"
    },
    "BTC-GAUTUYY2THLF7SGITDFMXJVYH3LHDSMGEAKSBU267M2K7A3W543CKUEF": {
        "code": "BTC",
        "issuer": "GAUTUYY2THLF7SGITDFMXJVYH3LHDSMGEAKSBU267M2K7A3W543CKUEF",
        "domain": "apay.io"
    },
    "LTC-GC5LOR3BK6KIOK7GKAUD5EGHQCMFOGHJTC7I3ELB66PTDFXORC2VM5LP": {
        "code": "LTC",
        "issuer": "GC5LOR3BK6KIOK7GKAUD5EGHQCMFOGHJTC7I3ELB66PTDFXORC2VM5LP",
        "domain": "apay.io"
    },
    "ICN-GBDEVU63Y6NTHJQQZIKVTC23NWLQVP3WJ2RI2OTSJTNYOIGICST6DUXR": {
        "code": "ICN",
        "issuer": "GBDEVU63Y6NTHJQQZIKVTC23NWLQVP3WJ2RI2OTSJTNYOIGICST6DUXR",
        "domain": "apay.io"
    },
    "ETH-GBDEVU63Y6NTHJQQZIKVTC23NWLQVP3WJ2RI2OTSJTNYOIGICST6DUXR": {
        "code": "ETH",
        "issuer": "GBDEVU63Y6NTHJQQZIKVTC23NWLQVP3WJ2RI2OTSJTNYOIGICST6DUXR",
        "domain": "apay.io"
    },
    "BAT-GBDEVU63Y6NTHJQQZIKVTC23NWLQVP3WJ2RI2OTSJTNYOIGICST6DUXR": {
        "code": "BAT",
        "issuer": "GBDEVU63Y6NTHJQQZIKVTC23NWLQVP3WJ2RI2OTSJTNYOIGICST6DUXR",
        "domain": "apay.io"
    },
    "OMG-GBDEVU63Y6NTHJQQZIKVTC23NWLQVP3WJ2RI2OTSJTNYOIGICST6DUXR": {
        "code": "OMG",
        "issuer": "GBDEVU63Y6NTHJQQZIKVTC23NWLQVP3WJ2RI2OTSJTNYOIGICST6DUXR",
        "domain": "apay.io"
    },
    "REP-GBDEVU63Y6NTHJQQZIKVTC23NWLQVP3WJ2RI2OTSJTNYOIGICST6DUXR": {
        "code": "REP",
        "issuer": "GBDEVU63Y6NTHJQQZIKVTC23NWLQVP3WJ2RI2OTSJTNYOIGICST6DUXR",
        "domain": "apay.io"
    },
    "ZRX-GBDEVU63Y6NTHJQQZIKVTC23NWLQVP3WJ2RI2OTSJTNYOIGICST6DUXR": {
        "code": "ZRX",
        "issuer": "GBDEVU63Y6NTHJQQZIKVTC23NWLQVP3WJ2RI2OTSJTNYOIGICST6DUXR",
        "domain": "apay.io"
    },
    "KIN-GBDEVU63Y6NTHJQQZIKVTC23NWLQVP3WJ2RI2OTSJTNYOIGICST6DUXR": {
        "code": "KIN",
        "issuer": "GBDEVU63Y6NTHJQQZIKVTC23NWLQVP3WJ2RI2OTSJTNYOIGICST6DUXR",
        "domain": "apay.io"
    },
    "LINK-GBDEVU63Y6NTHJQQZIKVTC23NWLQVP3WJ2RI2OTSJTNYOIGICST6DUXR": {
        "code": "LINK",
        "issuer": "GBDEVU63Y6NTHJQQZIKVTC23NWLQVP3WJ2RI2OTSJTNYOIGICST6DUXR",
        "domain": "apay.io"
    },
    "MTL-GBDEVU63Y6NTHJQQZIKVTC23NWLQVP3WJ2RI2OTSJTNYOIGICST6DUXR": {
        "code": "MTL",
        "issuer": "GBDEVU63Y6NTHJQQZIKVTC23NWLQVP3WJ2RI2OTSJTNYOIGICST6DUXR",
        "domain": "apay.io"
    },
    "SALT-GBDEVU63Y6NTHJQQZIKVTC23NWLQVP3WJ2RI2OTSJTNYOIGICST6DUXR": {
        "code": "SALT",
        "issuer": "GBDEVU63Y6NTHJQQZIKVTC23NWLQVP3WJ2RI2OTSJTNYOIGICST6DUXR",
        "domain": "apay.io"
    },
    "MOBI-GA6HCMBLTZS5VYYBCATRBRZ3BZJMAFUDKYYF6AH6MVCMGWMRDNSWJPIH": {
        "code": "MOBI",
        "issuer": "GA6HCMBLTZS5VYYBCATRBRZ3BZJMAFUDKYYF6AH6MVCMGWMRDNSWJPIH",
        "domain": "mobius.network"
    },
    "NGN-GCC4YLCR7DDWFCIPTROQM7EB2QMFD35XRWEQVIQYJQHVW6VE5MJZXIGW": {
        "code": "NGN",
        "issuer": "GCC4YLCR7DDWFCIPTROQM7EB2QMFD35XRWEQVIQYJQHVW6VE5MJZXIGW",
        "domain": "flutterwave.com"
    },
    "XIR-GAO4DADCRAHA35GD6J3KUNOB5ELZE5D6CGPSJX2WBMEQV7R2M4PGKJL5": {
        "code": "XIR",
        "issuer": "GAO4DADCRAHA35GD6J3KUNOB5ELZE5D6CGPSJX2WBMEQV7R2M4PGKJL5",
        "domain": "xirkle.com"
    },
    "CM3-GDU2FEL6THGGOFDHHP4I5FHNWY4S2SXYUBCEDB5ZREMD6UFRT4SYWSW2": {
        "code": "CM3",
        "issuer": "GDU2FEL6THGGOFDHHP4I5FHNWY4S2SXYUBCEDB5ZREMD6UFRT4SYWSW2",
        "domain": "cryptomover.com"
    },
    "CM10-GDBCHKTHJUKDGSIQSTBUXFWVP3QVART5LED6KRZQ5X4Z5WLT4BGYXWCI": {
        "code": "CM10",
        "issuer": "GDBCHKTHJUKDGSIQSTBUXFWVP3QVART5LED6KRZQ5X4Z5WLT4BGYXWCI",
        "domain": "cryptomover.com"
    },
    "CMA-GBWZHAVWY23QKKDJW7TXLSIHY5EX4NIB37O4NMRKN2SKNWOSE5TEPCY3": {
        "code": "CMA",
        "issuer": "GBWZHAVWY23QKKDJW7TXLSIHY5EX4NIB37O4NMRKN2SKNWOSE5TEPCY3",
        "domain": "cryptomover.com"
    },
    "CMS-GCVBUIXKKLH2DYHZRSLZUIZSVJUL74RTW6FVCCEYB2OE3RH7RVDBPCFG": {
        "code": "CMS",
        "issuer": "GCVBUIXKKLH2DYHZRSLZUIZSVJUL74RTW6FVCCEYB2OE3RH7RVDBPCFG",
        "domain": "cryptomover.com"
    },
    "HKDT-GABSZVZBYEO5F4V5LZKV7GR4SAJ5IKJGGOF43BIN42FNDUG7QPH6IMRQ": {
        "code": "HKDT",
        "issuer": "GABSZVZBYEO5F4V5LZKV7GR4SAJ5IKJGGOF43BIN42FNDUG7QPH6IMRQ",
        "domain": "cryptomover.com"
    },
    "TFC-GDS3XDJAA4VY6MJYASIGSIMPHZ7AQNZ54RKLWT7MWCOU5YKYEVCNLVS3": {
        "code": "TFC",
        "issuer": "GDS3XDJAA4VY6MJYASIGSIMPHZ7AQNZ54RKLWT7MWCOU5YKYEVCNLVS3",
        "domain": "thefutbolcoin.io"
    },
    "NGNT-GAWODAROMJ33V5YDFY3NPYTHVYQG7MJXVJ2ND3AOGIHYRWINES6ACCPD": {
        "code": "NGNT",
        "issuer": "GAWODAROMJ33V5YDFY3NPYTHVYQG7MJXVJ2ND3AOGIHYRWINES6ACCPD",
        "domain": "cowrie.exchange"
    },
    "XPR-GAZPKDTEZ5UM3BF4E7FL7EMXRMLH76F2TNVXRLOF6SCVXOFWSPCEWFI5": {
        "code": "XPR",
        "issuer": "GAZPKDTEZ5UM3BF4E7FL7EMXRMLH76F2TNVXRLOF6SCVXOFWSPCEWFI5",
        "domain": "pr.network"
    }
}

export default {
    anchors,
    assets,
    destinations
}