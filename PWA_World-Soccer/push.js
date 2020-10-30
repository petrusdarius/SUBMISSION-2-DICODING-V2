var webPush = require('web-push');
 
const vapidKeys = {
   "publicKey": "BFgRxmiak1JIfkBVoEaYpjI9FifrjjH8CvmS1rMvhD9Hbu8A29TGWIEw_mXN7MPOAguftSEoTMn0_znfgzR8E-I",
   "privateKey": "Ahxe5PmKuwnMXeSHZsGmegpfe8LFPpqxE4u0EnMBWJo"
};
 
 
webPush.setVapidDetails(
   'mailto:example@yourdomain.org',
   vapidKeys.publicKey,
   vapidKeys.privateKey
)
var pushSubscription = {
   "endpoint": "https://fcm.googleapis.com/fcm/send/eMxSi-G9XWg:APA91bFda9Lq56_iRCuBDiARvDie29uLKGG6frAeGcbCxOiPUHZ0iWz8DgtLU9BaZ7oAkG6RjDeydnBZHq3FPsgRi3fK_x3L_cejeqTltBv0qA5TH5clbI19Ap3zDXPT5ysjF492tTwu", //endpoint masing2
    "keys": {
        "p256dh": "BAgY/btLhNN7I3VeT4zFy6dUfiOub0tIRf8azn+OM8hIhSszdB9+r5gatOjrjgvlcEWR4XNQoUuLVPgMi45wYbY=",
        "auth": "15ajqUXEIV4KneT7zxXvHg=="
   }
};
var payload = 'Selamat! Anda sudah dapat notifikasi dari aplikasi';
 
var options = {
   gcmAPIKey: '1003166676176',
   TTL: 60
};
webPush.sendNotification(
   pushSubscription,
   payload,
   options
);