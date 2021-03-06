var assert = chai.assert;

// .key()
suite('.key( )', function(){
  suite('Valid', function(){
    test('should return valid key when present', function(){
      assert.equal(sw10.key("S10000"),"S10000");
      assert.equal(sw10.key("S38b5f"),"S38b5f");
    });
  });
  suite('Invalid', function(){
    test('should return empty string for invalid keys', function(){
      assert.equal(sw10.key("S1000"),'');
      assert.equal(sw10.key("S4005f"),'');
    });
  });
});

// .fsw()
suite('.fsw( )', function(){
  suite('Valid', function(){
    test('should return FSW string when present', function(){
      assert.equal(sw10.fsw("M500x500"),"M500x500");
      assert.equal(sw10.fsw("AS10000M505x510S10000490x480"),"AS10000M505x510S10000490x480");
    });
  });
  suite('Invalid', function(){
    test('should return empty string for invalid FSW strings', function(){
      assert.equal(sw10.fsw("Q500x500"),'');
      assert.equal(sw10.fsw("505x510S10000490x480"),'');
    });
  });
});

// .mirror()
suite('.mirror( )', function(){
  suite('Valid', function(){
    test('should return valid mirror key if available', function(){
      assert.equal(sw10.mirror("S10000"),"S10008");
      assert.equal(sw10.mirror("S1005f"),"S10057");
      assert.equal(sw10.mirror("S29b0e"),"S29b06");
    });
  });
  suite('Invalid', function(){
    test('should return empty string for invalid keys', function(){
      assert.equal(sw10.mirror("S1000"),'');
      assert.equal(sw10.mirror("S4005f"),'');
    });
  });
});

// .fill()
suite('.fill( )', function(){
  suite('Valid', function(){
    test('should return valid key for next fill', function(){
      assert.equal(sw10.fill("S10000"),"S10010");
      assert.equal(sw10.fill("S10000",-1),"S10050");
    });
  });
  suite('Invalid', function(){
    test('should return empty string for invalid keys', function(){
      assert.equal(sw10.fill("S1000"),'');
      assert.equal(sw10.fill("S4005f"),'');
    });
  });
});

// .rotate()
suite('.rotate( )', function(){
  suite('Valid', function(){
    test('should return valid key for next rotation', function(){
      assert.equal(sw10.rotate("S10000"),"S10007");
      assert.equal(sw10.rotate("S10000",-1),"S10001");
      assert.equal(sw10.rotate("S10008"),"S10009");
      assert.equal(sw10.rotate("S1000f",-1),"S1000e");
    });
  });
  suite('Invalid', function(){
    test('should return empty string for invalid keys', function(){
      assert.equal(sw10.rotate("S1000"),'');
      assert.equal(sw10.rotate("S4005f"),'');
    });
  });
});

// .scroll()
suite('.scroll( )', function(){
  suite('Valid', function(){
    test('should return next or previous base if valid', function(){
      assert.equal(sw10.scroll("S10000"),"S10100");
      assert.equal(sw10.scroll("S10000",-1),"S10000");
    });
  });
  suite('Invalid', function(){
    test('should return empty string for invalid keys', function(){
      assert.equal(sw10.scroll("S1000"),'');
      assert.equal(sw10.scroll("S4005f"),'');
    });
  });
});

// .type()
suite('.type( )', function(){
  suite('Valid', function(){
    test('should return start and end range for type', function(){
      assert.sameMembers(sw10.type('hand'),['100', '204']);
    });
  });
  suite('Invalid', function(){
    test('should return entire range for invalid type', function(){
      assert.sameMembers(sw10.type(''),['100', '38b']);
    });
  });
});

// .is()
suite('.is( )', function(){
  suite('True', function(){
    test('should return true when key is of type', function(){
      assert.ok(sw10.is('S10000','hand'));
    });
  });
  suite('False', function(){
    test('should return false when key is not of type', function(){
      assert.notOk(sw10.is('S38b00','hand'));
    });
  });
});

// .filter()
suite('.filter( )', function(){
  suite('Found', function(){
    test('should return key and coordinates of the specified type', function(){
      assert.equal(sw10.filter('M518x529S14c20481x471S27106503x489','hand'),'S14c20481x471');
      assert.equal(sw10.filter('M518x529S14c20481x471S27106503x489','movement'),'S27106503x489');
      assert.equal(sw10.filter('M518x533S1870a489x515S18701482x490S20500508x496S2e734500x468','hand'),'S1870a489x515S18701482x490');
    });
  });
  suite('Missing', function(){
    test('should return empty string if type not found', function(){
      assert.equal(sw10.filter('M518x529S14c20481x471S27106503x489','vcenter'),'');
      assert.equal(sw10.filter('M518x529S14c20481x471S27106503x489','hcenter'),'');
    });
  });
});


// .random()
suite('.random( )', function(){
  suite('Okay', function(){
    test('should return key of the right type', function(){
      assert.ok(sw10.is(sw10.random('hand'),'hand'));
    });
  });
});

// .code()
suite('.code( )', function(){
  suite('Valid', function(){
    test('should return valid code on plane 16 for key', function(){
      assert.equal(sw10.code("S10000"),'􀀁');
      assert.equal(sw10.code("S38b5f"),'􏒀');
    });
  });
  suite('Invalid', function(){
    test('should return empty string for invalid keys', function(){
      assert.equal(sw10.code("S1000"),'');
      assert.equal(sw10.code("S4005f"),'');
    });
  });
});

// .uni8()
suite('.uni8( )', function(){
  suite('Valid', function(){
    test('should return 1 to 3 Unicode 8 characters for key', function(){
      assert.equal(sw10.uni8("S10000"),'𝠀');
      assert.equal(sw10.uni8("S38b5f"),'𝪋𝪟𝪯');
    });
  });
  suite('Invalid', function(){
    test('should return empty string for invalid keys', function(){
      assert.equal(sw10.uni8("S1000"),'');
      assert.equal(sw10.uni8("S4005f"),'');
    });
  });
});

// .pua()
suite('.pua( )', function(){
  suite('Valid Key', function(){
    test('should return 3 Unicode characters on plane 15 for key', function(){
      assert.equal(sw10.pua("S10000"),'󽠰󽠐󽠠');
      assert.equal(sw10.pua("S38b5f"),'󽪻󽠕󽠯');
    });
  });
  suite('Valid FSW', function(){
    test('should return Unicode string on plane 15 for FSW', function(){
      assert.equal(sw10.pua("M518x529S14c20481x471S27106503x489"),'󽠃󽼒󽼝󽡼󽠒󽠠󽻭󽻣󽦡󽠐󽠦󽼃󽻵');
      assert.equal(sw10.pua("M518x533S1870a489x515S18701482x490S20500508x496S2e734500x468"),'󽠃󽼒󽼡󽢷󽠐󽠪󽻵󽼏󽢷󽠐󽠡󽻮󽻶󽤵󽠐󽠠󽼈󽻼󽨗󽠓󽠤󽼀󽻠');
    });
  });
  suite('Invalid', function(){
    test('should return empty string for invalid keys', function(){
      assert.equal(sw10.pua("S1000"),'');
      assert.equal(sw10.pua("S4005f"),'');
    });
  });
});

// .uni10()
suite('.uni10( )', function(){
  suite('Valid Key', function(){
    test('should return 1 character per key', function(){
      assert.equal(sw10.uni10("S10000"),'񀀁');
      assert.equal(sw10.uni10("S38b5f"),'񏒀');
    });
  });
  suite('Valid FSW', function(){
    test('should return Unicode string with ASCII and plane 4 for symbols', function(){
      assert.equal(sw10.uni10("M518x529S14c20481x471S27106503x489"),'M518x529񁲡481x471񈩧503x489');
      assert.equal(sw10.uni10("M518x533S1870a489x515S18701482x490S20500508x496S2e734500x468"),'M518x533񃊫489x515񃊢482x490񆇡508x496񋛕500x468');
    });
  });
  suite('Invalid', function(){
    test('should return empty string for invalid keys', function(){
      assert.equal(sw10.uni10("S1000"),'');
      assert.equal(sw10.uni10("S4005f"),'');
    });
  });
});


// .bbox()
suite('.bbox( )', function(){
  suite('Valid FSW', function(){
    test('should return x-min x-max y-min y-max', function(){
      assert.equal(sw10.bbox("500x500"),'500 500 500 500');
      assert.equal(sw10.bbox("500x550 550x500"),'500 550 500 550');
    });
  });
  suite('Valid Coordinates', function(){
    test('should return x-min x-max y-min y-max', function(){
      assert.equal(sw10.bbox("450x450"),'450 550 450 550');
      assert.equal(sw10.bbox("440x660 550x330"),'440 550 330 660');
    });
  });
  suite('Invalid', function(){
    test('should return empty string', function(){
      assert.equal(sw10.bbox(""),'');
      assert.equal(sw10.bbox("500x50"),'');
      assert.equal(sw10.bbox("00x500"),'');
    });
  });
});

// .displace()
suite('.displace( )', function(){
  suite('FSW', function(){
    test('should return FSW with updated coordinates', function(){
      assert.equal(sw10.displace("M518x529S14c20481x471S27106503x489",5,10),'M523x539S14c20486x481S27106508x499');
    });
  });
  suite('Query', function(){
    test('should return query with updated coordinates', function(){
      assert.equal(sw10.displace("QS10000550x550R205t210500x500",-50,-50),'QS10000500x500R205t210450x450');
    });
  });
  suite('No coordinates', function(){
    test('should return same string', function(){
      assert.equal(sw10.displace("Q"),'Q');
      assert.equal(sw10.displace("500x50"),'500x50');
      assert.equal(sw10.displace("00x500"),'00x500');
    });
  });
});

// .size()
suite('.size( )', function(){
  suite('Valid FSW', function(){
    test('should return size of sign', function(){
      assert.equal(sw10.size('S10000'),'15x30');
      assert.equal(sw10.size('S38b00'),'60x15');
    });
  });
  suite('Valid Key', function(){
    test('should return size of key', function(){
      assert.equal(sw10.size('S10000'),'15x30');
      assert.equal(sw10.size('S38b00'),'60x15');
    });
  });
  suite('Invalid key', function(){
    test('should return empty string for invalid keys', function(){
      assert.equal(sw10.size('S38b5f'),'');
      assert.equal(sw10.size('S1000'),'');
    });
  });
});

// .max()
suite('.max( )', function(){
  suite('Found', function(){
    test('should return key and coordinates of the specified type with max coordinates added', function(){
      assert.equal(sw10.max('M518x529S14c20481x471S27106503x489','hand'),'S14c20481x471504x502');
      assert.equal(sw10.max('M518x529S14c20481x471S27106503x489','movement'),'S27106503x489518x529');
      assert.equal(sw10.max('M518x533S1870a489x515S18701482x490S20500508x496S2e734500x468','hand'),'S1870a489x515518x533S18701482x490506x514');
    });
  });
  suite('Missing', function(){
    test('should return empty string if type not found', function(){
      assert.equal(sw10.max('M518x529S14c20481x471S27106503x489','vcenter'),'');
      assert.equal(sw10.max('M518x529S14c20481x471S27106503x489','hcenter'),'');
    });
  });
});

// .norm()
suite('.norm( )', function(){
  suite('Valid', function(){
    test('should return normalized FSW string based on proper center', function(){
      assert.equal(sw10.norm('M519x529S14c20482x471S27106504x489'),'M519x529S14c20482x471S27106504x489');
      assert.equal(sw10.norm('M518x529S14c20481x471S27106503x489'),'M519x529S14c20482x471S27106504x489');
      assert.equal(sw10.norm('M518x533S1870a489x515S18701482x490S20500508x496S2e734500x468'),'M518x533S1870a489x515S18701482x490S20500508x496S2e734500x468');
      assert.equal(sw10.norm('S10000500x500'),'M508x515S10000493x485');
      assert.equal(sw10.norm('LS10000500x500'),'L508x515S10000493x485');
      assert.equal(sw10.norm('LS10200510x510S20500530x520'),'L515x515S10200485x485S20500505x495');
    });
  });
  suite('Invalid', function(){
    test('should return empty string if invalid FSW', function(){
      assert.equal(sw10.norm('a'),'');
      assert.equal(sw10.norm('Q'),'');
    });
  });
});

// .svg()

// .canvas()

// .png()

// .query()
suite('.query( )', function(){
  suite('Valid', function(){
    test('should return query string when present', function(){
      assert.equal(sw10.query("Q"),"Q");
      assert.equal(sw10.query("QT"),"QT");
      assert.equal(sw10.query("QAS100uuT"),"QAS100uuT");
      assert.equal(sw10.query("QS10000"),"QS10000");
      assert.equal(sw10.query("QR100t120"),"QR100t120");
      assert.equal(sw10.query("QS10000500x500"),"QS10000500x500");
      assert.equal(sw10.query("QR100t120500x500"),"QR100t120500x500");
    });
  });
  suite('Invalid', function(){
    test('should return empty string for invalid query strings', function(){
      assert.equal(sw10.query("M500x500"),'');
      assert.equal(sw10.query("505x510S10000490x480"),'');
      assert.equal(sw10.query("qrti"),'');
    });
  });
});

// .range()
suite('.range( )', function(){
  suite('Decimal', function(){
    test('should return regular expression for range', function(){
      assert.equal(sw10.range(250,400),'((2[5-9][0-9])|(3[0-9][0-9])|(400))');
      assert.equal(sw10.range(277,429),'((27[7-9])|(2[89][0-9])|(3[0-9][0-9])|(4[01][0-9])|(42[0-9]))');
    });
  });
  suite('Hex', function(){
    test('should return regular expression for range', function(){
      assert.equal(sw10.range(250,400,true),'((2[5-9a-f][0-9a-f])|(3[0-9a-f][0-9a-f])|(400))');
      assert.equal(sw10.range(277,429,true),'((27[7-9a-f])|(2[89a-f][0-9a-f])|(3[0-9a-f][0-9a-f])|(4[01][0-9a-f])|(42[0-9]))');
    });
  });
});

// .regex()
suite('.regex( )', function(){
  suite('Valid', function(){
    test('should return regular expression for query string', function(){
      assert.equal(sw10.regex("Q")[0],"(A(S[123][0-9a-f]{2}[0-5][0-9a-f])+)?[BLMR]([0-9]{3}x[0-9]{3})(S[123][0-9a-f]{2}[0-5][0-9a-f][0-9]{3}x[0-9]{3})*","A");
      assert.equal(sw10.regex("QT")[0],"(A(S[123][0-9a-f]{2}[0-5][0-9a-f])+)[BLMR]([0-9]{3}x[0-9]{3})(S[123][0-9a-f]{2}[0-5][0-9a-f][0-9]{3}x[0-9]{3})*","A");
      assert.equal(sw10.regex("QS10000")[0],"(A(S[123][0-9a-f]{2}[0-5][0-9a-f])+)?[BLMR]([0-9]{3}x[0-9]{3})(S[123][0-9a-f]{2}[0-5][0-9a-f][0-9]{3}x[0-9]{3})*S10000[0-9]{3}x[0-9]{3}(S[123][0-9a-f]{2}[0-5][0-9a-f][0-9]{3}x[0-9]{3})*","A");
      assert.equal(sw10.regex("QTS10000")[0],"(A(S[123][0-9a-f]{2}[0-5][0-9a-f])+)[BLMR]([0-9]{3}x[0-9]{3})(S[123][0-9a-f]{2}[0-5][0-9a-f][0-9]{3}x[0-9]{3})*S10000[0-9]{3}x[0-9]{3}(S[123][0-9a-f]{2}[0-5][0-9a-f][0-9]{3}x[0-9]{3})*","B");
      assert.equal(sw10.regex("QAS100uuR100t204T")[0],"(AS100[0-5][0-9a-f]S((1[0-9a-f][0-9a-f])|(20[0-4]))[0-5][0-9a-f](S[123][0-9a-f]{2}[0-5][0-9a-f])*)[BLMR]([0-9]{3}x[0-9]{3})(S[123][0-9a-f]{2}[0-5][0-9a-f][0-9]{3}x[0-9]{3})*","C");
      assert.equal(sw10.regex("QR100t120")[0],"(A(S[123][0-9a-f]{2}[0-5][0-9a-f])+)?[BLMR]([0-9]{3}x[0-9]{3})(S[123][0-9a-f]{2}[0-5][0-9a-f][0-9]{3}x[0-9]{3})*S((1[01][0-9a-f])|(120))[0-5][0-9a-f][0-9]{3}x[0-9]{3}(S[123][0-9a-f]{2}[0-5][0-9a-f][0-9]{3}x[0-9]{3})*","D");
      assert.equal(sw10.regex("QS10000500x500")[0],"(A(S[123][0-9a-f]{2}[0-5][0-9a-f])+)?[BLMR]([0-9]{3}x[0-9]{3})(S[123][0-9a-f]{2}[0-5][0-9a-f][0-9]{3}x[0-9]{3})*S10000((4[89][0-9])|(5[01][0-9])|(520))x((4[89][0-9])|(5[01][0-9])|(520))(S[123][0-9a-f]{2}[0-5][0-9a-f][0-9]{3}x[0-9]{3})*","E");
      assert.equal(sw10.regex("QS10000500x500V10")[0],"(A(S[123][0-9a-f]{2}[0-5][0-9a-f])+)?[BLMR]([0-9]{3}x[0-9]{3})(S[123][0-9a-f]{2}[0-5][0-9a-f][0-9]{3}x[0-9]{3})*S10000((49[0-9])|(50[0-9])|(510))x((49[0-9])|(50[0-9])|(510))(S[123][0-9a-f]{2}[0-5][0-9a-f][0-9]{3}x[0-9]{3})*","F");
      assert.equal(sw10.regex("QR100t120500x500S20500")[0],"(A(S[123][0-9a-f]{2}[0-5][0-9a-f])+)?[BLMR]([0-9]{3}x[0-9]{3})(S[123][0-9a-f]{2}[0-5][0-9a-f][0-9]{3}x[0-9]{3})*S20500[0-9]{3}x[0-9]{3}(S[123][0-9a-f]{2}[0-5][0-9a-f][0-9]{3}x[0-9]{3})*","G");
      assert.equal(sw10.regex("QR100t120500x500S20500")[1],"(A(S[123][0-9a-f]{2}[0-5][0-9a-f])+)?[BLMR]([0-9]{3}x[0-9]{3})(S[123][0-9a-f]{2}[0-5][0-9a-f][0-9]{3}x[0-9]{3})*S((1[01][0-9a-f])|(120))[0-5][0-9a-f]((4[89][0-9])|(5[01][0-9])|(520))x((4[89][0-9])|(5[01][0-9])|(520))(S[123][0-9a-f]{2}[0-5][0-9a-f][0-9]{3}x[0-9]{3})*","H");
      assert.equal(sw10.regex("QAS10000R100t204S20500T")[0],"(AS10000S((1[0-9a-f][0-9a-f])|(20[0-4]))[0-5][0-9a-f]S20500(S[123][0-9a-f]{2}[0-5][0-9a-f])*)[BLMR]([0-9]{3}x[0-9]{3})(S[123][0-9a-f]{2}[0-5][0-9a-f][0-9]{3}x[0-9]{3})*");
    });
  });
  suite('Invalid', function(){
    test('should return empty string for invalid query strings', function(){
      assert.equal(sw10.regex("M500x500"),'');
      assert.equal(sw10.regex("505x510S10000490x480"),'');
      assert.equal(sw10.regex("qrti"),'');
    });
  });
});

// .results()
var text = 'M537x555S2ff00482x483S14c20514x470S22b03505x507S14c10476x524S20500501x537 M524x514S11541500x487S1154a477x490 M510x545S1f720490x456S14720496x476S14720496x503S14a20495x530 M542x582S20320474x567S16d20472x419S11502459x443S1f720469x462S11a20474x480S1dc20465x514S14a20474x548S18d20516x419S19220521x450S16d20519x474S11502506x498S14a20521x518S1dc20512x538';
suite('.results( )', function(){
  suite('results', function(){
    test('should return array of matching words for query string', function(){
      assert.sameMembers(sw10.results("Q",text),[ "M537x555S2ff00482x483S14c20514x470S22b03505x507S14c10476x524S20500501x537", "M524x514S11541500x487S1154a477x490", "M510x545S1f720490x456S14720496x476S14720496x503S14a20495x530", "M542x582S20320474x567S16d20472x419S11502459x443S1f720469x462S11a20474x480S1dc20465x514S14a20474x548S18d20516x419S19220521x450S16d20519x474S11502506x498S14a20521x518S1dc20512x538" ]);
      assert.sameMembers(sw10.results("Q",text,"B"),[ "B537x555S2ff00482x483S14c20514x470S22b03505x507S14c10476x524S20500501x537", "B524x514S11541500x487S1154a477x490", "B510x545S1f720490x456S14720496x476S14720496x503S14a20495x530", "B542x582S20320474x567S16d20472x419S11502459x443S1f720469x462S11a20474x480S1dc20465x514S14a20474x548S18d20516x419S19220521x450S16d20519x474S11502506x498S14a20521x518S1dc20512x538" ]);
      assert.sameMembers(sw10.results("QR100t120",text),[ "M524x514S11541500x487S1154a477x490", "M542x582S20320474x567S16d20472x419S11502459x443S1f720469x462S11a20474x480S1dc20465x514S14a20474x548S18d20516x419S19220521x450S16d20519x474S11502506x498S14a20521x518S1dc20512x538" ]);
    });
  });
  suite('Invalid', function(){
    test('should return empty array when no results found', function(){
      assert.sameMembers(sw10.results("Q","500x500"),[],'a');
      assert.sameMembers(sw10.results("QT","505x510S10000490x480"),[],'b');
      assert.sameMembers(sw10.results("qrti",text),[],'c');
    });
  });
});

// .lines()
var lines = 'M537x555S2ff00482x483S14c20514x470S22b03505x507S14c10476x524S20500501x537 line 1 stuff\n';
lines += 'M524x514S11541500x487S1154a477x490 line 2 stuff\n';
lines += 'M542x582S20320474x567S16d20472x419S11502459x443S1f720469x462S11a20474x480S1dc20465x514S14a20474x548S18d20516x419S19220521x450S16d20519x474S11502506x498S14a20521x518S1dc20512x538 final lines stuff';
suite('.lines( )', function(){
  suite('lines', function(){
    test('should return array of matching words and the rest of the line', function(){
      assert.sameMembers(sw10.lines("Q",lines),[ "M537x555S2ff00482x483S14c20514x470S22b03505x507S14c10476x524S20500501x537 line 1 stuff", "M524x514S11541500x487S1154a477x490 line 2 stuff", "M542x582S20320474x567S16d20472x419S11502459x443S1f720469x462S11a20474x480S1dc20465x514S14a20474x548S18d20516x419S19220521x450S16d20519x474S11502506x498S14a20521x518S1dc20512x538 final lines stuff" ]);
    });
  });
  suite('Invalid', function(){
    test('should return empty array when no results found', function(){
      assert.sameMembers(sw10.lines("Q","500x500"),[],'a');
      assert.sameMembers(sw10.lines("QT","505x510S10000490x480"),[],'b');
      assert.sameMembers(sw10.lines("qrti",lines),[],'c');
    });
  });
});

// .convert()
suite('.convert( )', function(){
  suite('convert', function(){
    test('should return query string from FSW', function(){
      assert.equal(sw10.convert("AS2ff00S14c20M537x555S2ff00482x483S14c20514x470S22b03505x507S14c10476x524S20500501x537",'A'),'QAS2ff00S14c20T');
      assert.equal(sw10.convert("AS2ff00S14c20M537x555S2ff00482x483S14c20514x470S22b03505x507S14c10476x524S20500501x537",'a'),'QAS2ffuuS14cuuT');
      assert.equal(sw10.convert("AS2ff00S14c20M537x555S2ff00482x483S14c20514x470S22b03505x507S14c10476x524S20500501x537",'S'),'QS2ff00S14c20S22b03S14c10S20500');
      assert.equal(sw10.convert("AS2ff00S14c20M537x555S2ff00482x483S14c20514x470S22b03505x507S14c10476x524S20500501x537",'s'),'QS2ffuuS14cuuS22buuS14cuuS205uu');
      assert.equal(sw10.convert("AS2ff00S14c20M537x555S2ff00482x483S14c20514x470S22b03505x507S14c10476x524S20500501x537",'SL'),'QS2ff00482x483S14c20514x470S22b03505x507S14c10476x524S20500501x537');
      assert.equal(sw10.convert("AS2ff00S14c20M537x555S2ff00482x483S14c20514x470S22b03505x507S14c10476x524S20500501x537",'sL'),'QS2ffuu482x483S14cuu514x470S22buu505x507S14cuu476x524S205uu501x537');
      assert.equal(sw10.convert("AS2ff00S14c20M537x555S2ff00482x483S14c20514x470S22b03505x507S14c10476x524S20500501x537",'ASL'),'QAS2ff00S14c20TS2ff00482x483S14c20514x470S22b03505x507S14c10476x524S20500501x537');
      assert.equal(sw10.convert("AS2ff00S14c20M537x555S2ff00482x483S14c20514x470S22b03505x507S14c10476x524S20500501x537",'asL'),'QAS2ffuuS14cuuTS2ffuu482x483S14cuu514x470S22buu505x507S14cuu476x524S205uu501x537');
    });
  });
  suite('Invalid FSW', function(){
    test('should return empty string for bad FSW', function(){
      assert.equal(sw10.convert("Q","E"),'');
      assert.equal(sw10.convert("QT","G"),'');
      assert.equal(sw10.convert("qrti","GL"),'');
    });
  });
  suite('Invalid Flags', function(){
    test('should return empty string for bad FSW', function(){
      assert.equal(sw10.convert("M537x555S2ff00482x483S14c20514x470S22b03505x507S14c10476x524S20500501x537","eL"),'');
      assert.equal(sw10.convert("M537x555S2ff00482x483S14c20514x470S22b03505x507S14c10476x524S20500501x537","Z"),'');
      assert.equal(sw10.convert("M537x555S2ff00482x483S14c20514x470S22b03505x507S14c10476x524S20500501x537","eg"),'');
    });
  });
});

// .signtext()
suite('.signtext( )', function(){
  suite('signtext', function(){
    test('should return array of signs and punctuations in order', function(){
      assert.deepEqual(sw10.signtext("AS14c20S27106M518x529S14c20481x471S27106503x489 AS18701S1870aS2e734S20500M518x533S1870a489x515S18701482x490S20500508x496S2e734500x468 S38800464x496"),['AS14c20S27106M518x529S14c20481x471S27106503x489','AS18701S1870aS2e734S20500M518x533S1870a489x515S18701482x490S20500508x496S2e734500x468','S38800464x496']);
    });
  });
});

