const crypto = require('crypto');
const util = require('util');

const generateKeyPair = util.promisify(crypto.generateKeyPair);

const encrypt = async (req, res) => {
  const stringToEncrypt = req.body.string;
  try {
    const { publicKey, privateKey } = await generateKeyPair('rsa', {
      modulusLength: 4096,
      publicKeyEncoding: {
        type: 'spki',
        format: 'pem'
      },
      privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem',
        // cipher: 'aes-256-cbc',
        // passphrase: process.env.PASSPHRASE
      }
    });

    this.publicKey = publicKey;
    this.privateKey = privateKey;

    const buffer = Buffer.from(stringToEncrypt, 'utf8');
    const encrypted = crypto.publicEncrypt(publicKey, buffer);
    const encryptedString = encrypted.toString('base64');
  
    res.send(encryptedString);
  } catch(err) {
    console.error(err);
  }
};

const decrypt = (req, res) => {
  const stringToDecrypt = req.body.string;
  const buffer = Buffer.from(stringToDecrypt, 'base64');
  const decrypted = crypto.privateDecrypt(this.privateKey, buffer)
  const decryptedString = decrypted.toString();

  res.send(decryptedString);
};

module.exports = {
  decrypt,
  encrypt
}