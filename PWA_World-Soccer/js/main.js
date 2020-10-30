var webPush = require('web-push');
var pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/eMxSi-G9XWg:APA91bFda9Lq56_iRCuBDiARvDie29uLKGG6frAeGcbCxOiPUHZ0iWz8DgtLU9BaZ7oAkG6RjDeydnBZHq3FPsgRi3fK_x3L_cejeqTltBv0qA5TH5clbI19Ap3zDXPT5ysjF492tTwu",
    "keys": {
        "p256dh": "BAgY/btLhNN7I3VeT4zFy6dUfiOub0tIRf8azn+OM8hIhSszdB9+r5gatOjrjgvlcEWR4XNQoUuLVPgMi45wYbY=",
        "auth": "15ajqUXEIV4KneT7zxXvHg=="
    }
};
var payload = 'Here is a payload!';
var options = {
    gcmAPIKey: 'AAAA6ZFktNA:APA91bH2YhKmlPVUxZTP23bM2VZeIMwQvNPN_BTfPPhzSQENwjiQXM5fdFO5ME4V1BOE1ikQRj6WPksY9TD8QT66mHWhydAFAHmMBVcqRBp9FSIF3epr6FhJV4NTnYvlDbA65PvnlHjc',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);