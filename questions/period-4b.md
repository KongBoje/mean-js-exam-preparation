## Explain basic security threads like: Cross Site Scripting (XSS), SQL Injection and whether something similar to SQL injection is possible with NoSQL databases like MongoDB, and DOS-attacks. Explain/demonstrate ways to cope with these problems
#### XSS
Attackers fold malicious content into the content being delivered from the compromised site. When the resulting combined content arrives at the client-side web browser, it has all been delivered from the trusted source, and thus operates under the permissions granted to that system. By finding ways of injecting malicious scripts into web pages, an attacker can gain elevated access-privileges to sensitive page content, to session cookies, and to a variety of other information maintained by the browser on behalf of the user. 
Ex in steps -> 
1) Alice logs into Bob's website and gets back an authorization cookie. Bob website saves Alice's billing information.
2) Mallory uses Bob's search page to inject a script into the search query,
ex. `<script type='text/javascript'>alert('xss');</script>` 
3) Mallory sends an email to Alice containing the "abnormal" search query. Alice clicks the link and the malicious script is run.
4) The script grabs a copy of Alice's Authorization Cookie and sends it to Mallory's server.
5) Mallory logs into the site as Alice, using the Authorization Cookie.
6) The fun begins, as Mallory steals Alice's credit card info, changes her password and so on.

#### SQL Injection
A code injection technique, used to attack data-driven applications, in which malicious SQL statements are inserted into an entry field for execution (e.g. to dump the database contents to the attacker). SQL injection attacks allow attackers to spoof identity, tamper with existing data, cause repudiation issues such as voiding transactions or changing balances, allow the complete disclosure of all data on the system, destroy the data or make it otherwise unavailable, and become administrators of the database server.
ex. in steps -> 
1) Server gets text directly from input field:
```sql
txtUserId = getRequestString("UserId");
```
```sql
txtSQL = "SELECT * FROM Users WHERE UserId = " + txtUserId;
```
2) User inputs following code into inputfield: *"105 or 1=1"* 
sql query then becomes:
```sql
SELECT UserId, Name, Password FROM Users WHERE UserId = 105 or 1=1
```
which returns all rows from table 'Users'.

#### NoSQL Injection
We no longer deal with a query language in the form of a string therefore one would think that injection is no longer possible... wrong! For example, assume that the username field is coming from a deserialized JSON object, manipulation of the above query is not only possible but inevitable. Such as, if one supplies a JSON document as the input to the application, an attacker will be able to perform the exact same login bypass that was before possible only with SQL injection.

**Ex. MongoDB Injection**:

Server code:

```javascript
db.accounts.find({username: username, password: password});
```
Client creates following json request
```javascript
{
    username: "admin",
    password: {$gt: ""}
}
```
Result is that "Get all users with username admin and password greater than emptry String", returns all admins.

#### DoS-attack
A denial-of-service attack is characterized by an explicit attempt by attackers to prevent legitimate users of a service from using that service. There are two general forms of DoS attacks: those that crash services and those that flood services.
The most serious attacks are distributed (DDoS) and in many or most cases involve forging of IP sender addresses (IP address spoofing) so that the location of the attacking machines cannot easily be identified, nor can filtering be done based on the source address.

**DoS-attack on MongoDB**: If you have a large table with an index on _id and you do a query like `BlogPost.find(params[:id])`, an attacker can craft a query that forces MongoDB to do a full table scan.

## Explain and demonstrate ways to protect user passwords on our backend, and why this is necessary.
Hashing and salting (Explained in the next question)

## 5. Explain about password hashing, salts and the difference between bcrypt and older (not recommended) algorithms like sha1, md5 etc.

#### Hashing 

Hash algorithms are **one way functions**. They turn any amount of data into a fixed-length "fingerprint" that cannot be reversed. They also have the property that if the input changes by even a tiny bit, the resulting hash is completely different.
Ex. 
```hash("hello") = 2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824```
```hash("hbllo") = 58756879c05c68dfac9866712fad6a93f8146f337a69afe7dd238f3364946366```

**Typical workflow for account creation:** user creates account -> password is hashed and stored in db -> at login entered password is hashed and checked against the hashed password in db.

#### Salting

Randomize the hashes by appending or prepending a random string, called a salt, to the password before hashing. This makes the same password hash into a completely different string every time. To check if a password is correct, we need the salt, so it is usually stored in the user account database along with the hash, or as part of the hash string itself.

```hash("hello")                    = 2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824```
```hash("hello" + "QxLUF1bgIAdeQX") = 9e209040c863f84a31e719795b2577523954739fe5ed3b58a75cff2127075ed1```

The salt needs to be unique per-user per-password. Every time a user creates an account or changes their password, the password should be hashed using a new random salt. Never reuse a salt. The salt also needs to be long, so that there are many possible salts. As a rule of thumb, make your salt is at least as long as the hash function's output. The salt should be stored in the user account table alongside the hash.

#### sha1, md5 (message-digest algorithms)
The **MD5** message-digest algorithm is a widely used cryptographic hash function producing a **128-bit** (16-byte) hash value, typically expressed in text format as a 32-digit hexadecimal number. MD5 has been utilized in a wide variety of cryptographic applications and is also commonly used to verify data integrity.

`MD5("The quick brown fox jumps over the lazy dog") = 9e107d9d372bb6826bd81d3542a419d6`

In cryptography, **SHA-1** (Secure Hash Algorithm 1) is a cryptographic hash function designed by the United States National Security Agency and is a U.S. Federal Information Processing Standard published by the United States NIST.[2] SHA-1 produces a **160-bit** (20-byte) hash value known as a message digest. A SHA-1 hash value is typically rendered as a hexadecimal number, 40 digits long.

**SHA1("The quick brown fox jumps over the lazy dog")
gives hexadecimal: 2fd4e1c67a2d28fced849ee1bb76e7391b93eb12
gives Base64 binary to ASCII text encoding: L9ThxnotKPzthJ7hu3bnORuT6xI=1**

#### bcrypt
bcrypt is a key derivation function for passwords, based on the Blowfish cipher. Besides incorporating a salt to protect against rainbow table attacks, bcrypt is an adaptive function: over time, the iteration count can be increased to make it slower, so it remains resistant to brute-force search attacks even with increasing computation power.

## Explain about JSON Web Tokens (jwt) and why they are very suited for a REST-based API
In authentication, when the user successfully logs in using his credentials, a JSON Web Token will be returned and must be saved locally (typically in local storage, but cookies can be also used).
Whenever the user wants to access a protected route or resource, the user agent should send the JWT, typically in the Authorization header using the Bearer schema. The content of the header could look like the following: `Authorization: Bearer=TOKEN_HERE`
This is a stateless authentication mechanism as the user state is never saved in server memory. The server's protected routes will check for a valid JWT in the Authorization header, and if it's present, the user will be allowed to access protected resources. This allows you to fully rely on data APIs that are stateless and even make requests to downstream services.

