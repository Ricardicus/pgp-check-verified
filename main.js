const openpgp = require('openpgp');
const readline = require('readline');

const keyring = `-----BEGIN PGP PUBLIC KEY BLOCK-----

mQINBGRCRjABEACvLCPqOPwuY6MgWE7wnnFU1ryaZ6N3t2REZDJ/HpqiK6A5242O
otL7iZJIRuwxa/s9nKYWmiyWkoXhsfsQPoxFhgwSSyl0TTwEpCHyykYE9isc3vhX
9I5Ro5EiM+KRnDtoEAPZ5Be0lx0VOxNbKY7CU9ePz4X09awkPCIJtLNV9lRXHvoy
eTjGKbzxkbTrPGVSZCsrfqlRxfAF+ctYkjwnplx2ZKYRjL63mFIogd9zTJM/57fE
EoCv+VHjVm6GAE0cN6AuW4EQXXtT+xuzyerP8Xficux4nqHEuZX1XMdPc3OcqieV
3YatPSjs2viHJmKNQVAidBDSaPDGPDveTUCdYuGISnxvk2gTh1q3qdgg1+MM25um
Sx93vprK8UyvVEGqZCDjYJoXQuha24XFi1nZ1sQBq6nrWbnjs5dSWDNq46+wda1g
KxAmZADHuK2AfqEKdd/bizTaTCSzi2HIR+bsGxyR3CEaGuBfR9/wVM4LUieueK/x
UN38dV/4QTGGdsISFHByx5AVWh1T204RjJ+yxapmZp2sZC7UjEiAwXhwvKCT1oSb
iY84I1CbS9LUF343RpDOhMjUNOwTG3Rlym/WP/cPO1b8/yGhx3w+Ss123nb3pKxR
72lXpdgD4ZRov0+wOLoxDwsoJBw4ZBDVaxfAkkwCo9imYqL0cp7Vv8SxLwARAQAB
tJBSaWNrYXJkIEhhbGxlcmLDpGNrIChJIHdhcyBib3JuIGluIDE5OTMgaW4gVsOk
cm1sYW5kLCBTd2VkZW4uIEkgb25seSBzaWduIGtleXMgZnJvbSBwZW9wbGUgSSBo
YXZlIG1ldCBpbiByZWFsIGxpZmUuKSA8b25seS5odW1hbi5rZXlzQGdtYWlsLmNv
bT6JAlcEEwEIAEEWIQQCMssihiY4nxRIMjwqFwJRQ4+h0QUCZEJGMAIbAwUJCWYB
gAULCQgHAgIiAgYVCgkICwIEFgIDAQIeBwIXgAAKCRAqFwJRQ4+h0Wa2EACQ8wHH
g4gU+1uNZN3CS0NUzjYI0n0uveDsw7v4rUNSa4tsUI87uOXycMcmT2/oo9J1QuD/
6a6NOuGaDMoE+Qa/wNY4A3QFfznbTznU3FIGQ5BBR7wE7fb88EXAmFfSuKXUC8GG
Cpvnh8g6FDCJ5vOV/dZxvOvDIGtuQc26qgVhT4vZnwYRMaON5LHP85VIEVnYTWk8
hr2YW9CxpDN3psYKi3av1LtTtC6ybOFtTUVuBNEmX7OFLCG3eBFbTPGQ1HofN6n0
ZL/Omt/ZjN5HYysEZrIKts7rBRe76O5/tabY933y4WKAu5rG+eotHKMpk8aRvies
a6nyDJVty7CpNW07tf/XQeVPNlwzjbBiASNJe5hwlJ1im6MKmNBYbM0E9raOTTYu
2KinXlijse9KLBVuYmLazR/PPcev4e+YtIHoOd6L4EMO2emhqMyzdDRMI7JOO4p1
rFXpiVurLx5SVVxQ9AdcXuFzs83EAYPmwdyrAX68pGCuaNMmAnBK8y4F2uCJkaxZ
tKyoj+CqHCEUSVqvwoZ/2fAuND81KBp7DhYsWJngYty2TVH739ro7n+FuT2Gbp/7
0/GXdN5rCeVN/ZS8ymNJlgvGkKG6oAE9so1wDyDUUbeLFpUkUsWZBQxo2JR/dc6u
QNCQ9axUIeILSbJogLi9WLsxA/7NTdmw+dkpJLkCDQRkQkYwARAA5k2w2FmucGH5
X8/blAG6VdaxQuAamLtlZXuIP109lX/CfSTFDeh1PJeCnG4yrKyPo2gfEIidHfP6
8BV/uhXIitkg1E5ih9LCwngYYVkC4PlVC4wBmInDFmmDIR5K8Xhyh0j6C6VEWEfe
2MtZIoZFDqq3xV57mtg5u7wdOfBS4VGwolM1eW9NgiZGu22sJ4MQefGc05fI6WMn
DfdDQBdWu838ROr6/32JGKOdkLB1AuafDwSMQ65EiN/U1EveL5iut/1RFKoaIlfb
1VxDM/8RuKMKOtTFMEX//T7lufEjAdqL3s2/GF5Dx3dnsTnvJzKuKf+yr0WXLBCS
iKDQYMnYYVLaXdp0t4FHoa7x0UkGKUfx/Q+ajGVuObX3he5seURfcWMvJDov7PmR
ZnF9rc2eu2oXrjtCVlBDrrYUA5DCyw6UEdtnhVYkR9HTzrkptv3udUKMwpz8bfJe
mVwdL5BhjSsQEkl0lIfmV2FIgLpJkLLAJJFcK6hXwlTKEMBvrgtZsXGp5Y8QjIVi
8EqPyyj4LVLWsBnkOlckR8nUw9R7O4GHKhd+vL5dfkz0mS6EpT5403TcxIW0ljDM
nYhYjdOnaC2GJOCQI4DC+bbIl/cumSOfmGjPiGsFH9mcBo+BOICb3SvuOZNDbqDS
CQoBQA6FR9Np1v9auelkesixlyhdEpcAEQEAAYkCPAQYAQgAJhYhBAIyyyKGJjif
FEgyPCoXAlFDj6HRBQJkQkYwAhsMBQkJZgGAAAoJECoXAlFDj6HRYe0P/3WXVI/+
+/u4MRhY2zHT11DQ1f31w6sqGLYMZeKbbU9IHIf8TbWEFCscolZDGKVSK4Qc40bg
FfnVsZwFYHuTwYDTZZLeY/qXJbxIYXCVLaAolDvt7SkakKCt+gILTc4LvHkPNjse
vHgqeoa5lGwCzXS1V0o8h6oKN864+LL00N3VUh3Hj70VfX88pG3KUcK9lNcxHc3j
lRwJWS3gqDGoJ5LymvHXRxAQShzish5JcOdAm8zpo6gWVesJcXVnenkbd1BFxy5a
jz2rO3D3V3R8L5JqqBHiO0luAePeDaA5X7gxyznwgzdNa1FTZ2RTvpzWxP3T9NVr
9legYoiF1mzVrqrtAb88RdA6IfQxDD1glXSt5v32JlNAZX39m3uTGrnOjo3gZWif
n+vjpMR9y5wKUGjm1oxbses95NZuZv9xxmyS8UJjSFu0iopOkUzdc9in7jt5H6mk
D2SFn16aQ+uyt563boZ9GKeUXKFpCsv0ynAjgv6usBFdnQtiIYdOhfMWcGRA+12b
gNVxZdg8AEdX7tZ7WbwzBADaFcyheCMWPia7SOV348pEmdNDEI0jxAFnJEuwMdGV
buyds19HjJRB+il86Of3nJFzQ0XYNnJs9PEGuJRGlkmoiNY2FYAOfkfcM6Tpu2Ik
7kJWo0A2ef8Uo0ktgPklaBt6hQbw+7eMN7+2
=GS2/
-----END PGP PUBLIC KEY BLOCK-----`;


function arrayToHexString(byteArray) {
    return Array.from(byteArray)
        .map(byte => byte.toString(16).padStart(2, '0'))
        .join('');
}

function lookup(keybase, fingerprint) {
  
}

async function loadKeyring() {
  var rawKey = await openpgp.readKey({armoredKey: keyring});
  var info = {};
  var users = [];
  for ( const user of rawKey.users ) {
    var usr_info = {};
    usr_info["name"] = user.userID.name;
    usr_info["email"] = user.userID.email;
    usr_info["comment"] = user.userID.comment;
    usr_info["key"] = arrayToHexString(user.mainKey.keyPacket.fingerprint);
    users.push(usr_info);
  }
  info["users"] = users;
  console.log(info);
  return info;
}

async function collectKeyInfo(key) {
  var info = {};

  var user = (await key.getPrimaryUser()).user;
  info["email"] = user.userID.email;
  info["name"] = user.userID.name;
  info["comment"] = user.userID.comment;

  var selfCert = [];
  for (const cert of user.selfCertifications) {
      var certInfo = {};
      certInfo["created"] = cert.created;
      certInfo["issuer"] = arrayToHexString(cert.issuerFingerprint);
      var verification = await key.verifyPrimaryUser(cert.issuerKeyId);
      certInfo["valid"] = verification[0].valid;
      selfCert.push(certInfo);
  }

  info["selfCert"] = selfCert;

  var otherCert = [];
  for (const cert of user.otherCertifications) {
      var certInfo = {};
      certInfo["created"] = cert.created;
      certInfo["issuer"] = arrayToHexString(cert.issuerFingerprint);
      var verification = await key.verifyPrimaryUser(cert.issuerKeyId);
      certInfo["valid"] = verification[0].valid;
      otherCert.push(certInfo);
  }

  info["otherCert"] = otherCert;
  return info;
}

async function getKeyInfo() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

  let keyring = await loadKeyring();
  console.log(keyring);

  console.log(arrayToHexString(keyring.keyPacket.fingerprint));
  return 1;


  let armoredKey = '';

    console.log('Paste your public key and press Ctrl+D when done:');

    rl.on('line', (line) => {
        armoredKey += line + '\n';
    });

    rl.on('close', async () => {
        const key = await openpgp.readKey({armoredKey: armoredKey});

        if (!key) {
            console.error('Failed to read the key');
            process.exit(1);
        }

      var info = await collectKeyInfo(key);
      console.log(info);
    return 1;
        const { user: primaryUser } = await key.getPrimaryUser();

        console.log(primaryUser);
        const verifiedSignatures = await Promise.all(
          primaryUser.selfCertifications.map(async (sig) => {
            console.log("::::::");
            console.log(sig);
                const verified = await sig.verify(key.primaryKey, openpgp.enums.signature.cert_generic, primaryUser.user);
                return { sig, verified };
            })
        );

        verifiedSignatures.forEach(({ sig, verified }, index) => {
            console.log(`Signature ${index + 1}:`);
            console.log('  ID:', sig.signature.id);
            console.log('  Issuer Key ID:', sig.signature.issuerKeyId.toHex());
            console.log('  Created:', sig.signature.created);
            console.log('  Verified:', verified ? 'Yes' : 'No');
        });

      return 1;
      /*
        const userIds = key.users;
        const primaryUserVal = await key.getPrimaryUser();
        const primaryUser = primaryUserVal.user;
        const selfCertificate = primaryUserVal.selfCertifications;

      console.log("primary user: ", primaryUser.userID.userID);
      consol
      console.log(primaryUser);
      console.log("self cert: ", selfCertificate);

        const signingKey = await key.getSigningKey();
        const verifiedSignatures = selfCertificate;
        */
      /*
        console.log(primaryUser);
        console.log('User IDs:', userIds);
        console.log('Primary User:', primaryUser.vh);
        console.log('Signing Key ID:', signingKey.keyPacket.fingerprint);
        console.log('Verified Signatures:', verifiedSignatures.length);

        verifiedSignatures.forEach((sig, index) => {
            console.log(`Signature ${index + 1}:`);
            console.log('  ID:', sig.signature.id);
            console.log('  Issuer Key ID:', sig.signature.issuerKeyId.toHex());
            console.log('  Created:', sig.signature.created);
            console.log('  Verified:', sig.verified);
        });
      */
    });
}

getKeyInfo();

