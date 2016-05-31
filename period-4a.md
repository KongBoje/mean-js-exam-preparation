## Explain basic security terms like authentication, authorization, confidentiality, integrity, SSL/TLS and provide examples of how you have used them.
#### Authentication
In contrast with identification which refers to the act of stating or otherwise indicating a claim purportedly attesting to a person or thing's identity, authentication is the process of actually confirming that identity. In computer science, verifying a person's identity is often required to allow access to confidential data or systems.

#### Authorization
Is the function of specifying access rights to resources related to information security and computer security in general and to access control in particular. More formally, "to authorize" is to define an access policy. For example, human resources staff is normally authorized to access employee records and this policy is usually formalized as access control rules in a computer system.
Confidentiality**: Involves a set of rules or a promise that limits access or places restrictions on certain types of information. In information security, confidentiality "is the property, that information is not made available or disclosed to unauthorized individuals, entities, or processes".

#### Integrity
Maintaining and assuring the accuracy and completeness of data over its entire life-cycle. This means that data cannot be modified in an unauthorized or undetected manner.

#### SSL/TLS
The Secure Socket Layer, SSL for short, is a protocol by which enables services that communicate over the Internet to do so securely. SSL has recently been replaced by TLS (Transport Layer Security). TLS is newer and more secure than SSL; however, from a lay-person’s perspective of “how does it work,” they are functionally the same. **Provide github example here!**

## Explain, at a fundamental level, the technologies involved, and the steps required to initialize a SSL connection between a browser and a server and how to use SSL in a secure way.

1) The client sends a "client hello" message that lists cryptographic information such as the SSL/TLS version, a random byte string that is used in subsequent computations etc.

2) The server responds with a "server hello" message that contains the CipherSuite chosen by the server from the list provided by the client, the session ID, and another random byte string. Also a digital certificate.

3) The client verifies the server's digital certificate.

4) The client sends the random byte string that enables both the client and the server to compute the secret key to be used for encrypting subsequent message data. The random byte string itself is encrypted with the server's public key.

5) If the server sent a "client certificate request", the client sends a random byte string encrypted with the client's private key, together with the client's digital certificate, or a "no digital certificate alert". This alert is only a warning, but with some implementations the handshake fails if client authentication is mandatory.

6) The server verifies the client's certificate.

7) The client sends the server a "finished" message, which is encrypted with the secret key, indicating that the client part of the handshake is complete.

8) The server sends the client a "finished" message, which is encrypted with the secret key, indicating that the server part of the handshake is complete.

9) For the duration of the session, the server and client can now exchange messages that are symmetrically encrypted with the shared secret key.

## Explain basic security threads like: Cross Site Scripting (XSS), SQL Injection and whether something similar to SQL injection is possible with NoSQL databases like MongoDB, and DOS-attacks. Explain/demonstrate ways to cope with these problems
#### XSS
Attackers fold malicious content into the content being delivered from the compromised site. When the resulting combined content arrives at the client-side web browser, it has all been delivered from the trusted source, and thus operates under the permissions granted to that system. By finding ways of injecting malicious scripts into web pages, an attacker can gain elevated access-privileges to sensitive page content, to session cookies, and to a variety of other information maintained by the browser on behalf of the user. <br>
Ex in steps -> <br>
1) Alice logs into Bob's website and gets back an authorization cookie. Bob website saves Alice's billing information.<br>
2) Mallory uses Bob's search page to inject a script into the search query,
ex. `<script type='text/javascript'>alert('xss');</script>` <br>
3) Mallory sends an email to Alice containing the "abnormal" search query. Alice clicks the link and the malicious script is run.<br>
4) The script grabs a copy of Alice's Authorization Cookie and sends it to Mallory's server.<br>
5) Mallory logs into the site as Alice, using the Authorization Cookie.<br>
6) The fun begins, as Mallory steals Alice's credit card info, changes her password and so on.

#### SQL Injection
A code injection technique, used to attack data-driven applications, in which malicious SQL statements are inserted into an entry field for execution (e.g. to dump the database contents to the attacker). SQL injection attacks allow attackers to spoof identity, tamper with existing data, cause repudiation issues such as voiding transactions or changing balances, allow the complete disclosure of all data on the system, destroy the data or make it otherwise unavailable, and become administrators of the database server.<br>
ex. in steps -> <br><br>
1) Server gets text directly from input field:<br>
```sql
txtUserId = getRequestString("UserId");
```
```sql
txtSQL = "SELECT * FROM Users WHERE UserId = " + txtUserId;
```
2) User inputs following code into inputfield: *"105 or 1=1"* <br>
sql query then becomes:
```sql
SELECT UserId, Name, Password FROM Users WHERE UserId = 105 or 1=1
```
which returns all rows from table 'Users'.<br><br>

#### NoSQL Injection
We no longer deal with a query language in the form of a string therefore one would think that injection is no longer possible... wrong! For example, assume that the username field is coming from a deserialized JSON object, manipulation of the above query is not only possible but inevitable. Such as, if one supplies a JSON document as the input to the application, an attacker will be able to perform the exact same login bypass that was before possible only with SQL injection.<br>

**Ex. MongoDB Injection**:

Server code:

```javascript
db.accounts.find({username: username, password: password});
```
Client creates following json request
```javascript
{
    "username": "admin",
    "password": {$gt: ""}
}
```
Result is that "Get all users with username admin and password greater than emptry String", returns all admins.

#### DoS-attack
A denial-of-service attack is characterized by an explicit attempt by attackers to prevent legitimate users of a service from using that service. There are two general forms of DoS attacks: those that crash services and those that flood services.
The most serious attacks are distributed (DDoS) and in many or most cases involve forging of IP sender addresses (IP address spoofing) so that the location of the attacking machines cannot easily be identified, nor can filtering be done based on the source address.

**DoS-attack on MongoDB**: If you have a large table with an index on _id and you do a query like `BlogPost.find(params[:id])`, an attacker can craft a query that forces MongoDB to do a full table scan.