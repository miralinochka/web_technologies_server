const crypto = require('crypto');
const fs = require('fs');

const encrypt = async (req, res) => {
  const stringToEncrypt = req.body.string;
  try {
    const mykey = crypto.createCipher('aes-128-cbc', 'secret string');
    let mystr = mykey.update(stringToEncrypt, 'utf8', 'hex');
    mystr += mykey.final('hex');

    fs.writeFile(__dirname + '/encrypt.txt', mystr, function(err) {
      if(err) {
        return console.log(err);
      }
      res.status(200).send({message: "The file was saved!"});
    });
  } catch(err) {
    res.send({error: 'Error! Can not decrypt your text.'});
  }
};

const decrypt = (req, res) => {
  try {
    fs.readFile(__dirname + '/encrypt.txt', "utf8", function(err, data) {
      if(err) {
        return console.log(err);
      }
      const stringToDecrypt = data;
      const mykey = crypto.createDecipher('aes-128-cbc', 'secret string');
      let mystr = mykey.update(stringToDecrypt, 'hex', 'utf8')
      mystr += mykey.final('utf8');
    
      fs.writeFile(__dirname + '/decrypt.txt', mystr, function(err) {
        if(err) {
          return console.log(err);
        }
        res.download(__dirname + '/decrypt.txt');
      });
    });
  } catch(err) {
    res.send({error: 'Error! Can not decrypt your text.'});
  }
};

module.exports = {
  decrypt,
  encrypt
}