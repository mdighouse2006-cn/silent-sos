# Silent SOS — Covert Emergency Alert System

Silent SOS is a browser-based Progressive Web App (PWA) designed to enable discreet emergency alerting through a hidden multi-finger gesture. It captures the user's location, synchronizes emergency alerts with Firebase, and provides a dashboard for monitoring alerts.

## Live Application

**[Open Silent SOS](https://iotlab-c60d7.web.app)**

> **Platform availability:** The deployed application currently works on mobile devices only. Desktop and laptop support is not yet available.

## Project Demonstration

**[Watch the Silent SOS Demonstration Video](https://drive.google.com/file/d/1v3m12jE2PWNOE4jL-Zr4SrB4dyT7rFOb/view?usp=drivesdk)**

## Overview

In an emergency, a person may not be able to make a phone call or visibly operate an emergency application. Silent SOS explores an alternative by allowing a user to trigger an alert through a discreet gesture on a supported mobile device.

When an alert is triggered, the application captures location information when permission is granted and stores the alert in Cloud Firestore. A dashboard displays incoming alerts, and the implemented email service provides email notifications.

## Key Features

- **Discreet Gesture Activation:** Uses a hidden multi-finger gesture to trigger an emergency alert.
- **GPS Location Capture:** Captures location coordinates when browser permissions and device location services are available.
- **Real-Time Alert Synchronization:** Uses Firebase Cloud Firestore to store and synchronize alert information.
- **Emergency Dashboard:** Displays emergency alert records and associated location information.
- **Location Access:** Provides an option to open an alert location on a map.
- **Email Notifications:** Uses the implemented email service to send emergency alert notifications.
- **Alert Controls:** Includes dashboard controls for stopping alert sounds and clearing displayed alerts.
- **Progressive Web App:** Includes a web app manifest, service worker, and application icons.

## Technology Stack

| Technology | Purpose |
|---|---|
| HTML | Application structure |
| CSS | User interface styling |
| JavaScript | Gesture handling and application logic |
| Firebase Cloud Firestore | Alert data storage and synchronization |
| Firebase Hosting | Application deployment |
| Browser Geolocation API | Location capture, subject to permissions |
| Progressive Web App technologies | Manifest, service worker, and application icons |
| Email service | Emergency email notifications |

## System Architecture

Silent SOS follows this general workflow:

1. The user performs the configured emergency gesture on a supported mobile device.
2. The application detects the gesture and obtains location information when permitted.
3. Emergency alert data is stored in Cloud Firestore.
4. The dashboard receives and displays the available alert information.
5. The configured email service sends emergency email notifications.
6. The user can view the reported location and use the available dashboard controls.

## Repository Structure

```text
silent-sos/
├── assets/
│   ├── dashboard alerts for security.jpg
│   ├── firebase database.jpeg
│   ├── project architecture.jpeg
│   └── demonstration of functionality.mp4
├── public/
│   ├── dashboard.html
│   ├── gesture.js
│   ├── icon-192.png
│   ├── icon-512.png
│   ├── index.html
│   ├── manifest.json
│   └── service-worker.js
├── .firebaserc
├── .gitignore
├── firebase.json
└── README.md
```

## Getting Started

### Option 1: Use the Live Application

Open [Silent SOS](https://iotlab-c60d7.web.app) on a supported mobile device.

### Option 2: Clone the Repository

1. Clone the repository:

   ```bash
   git clone https://github.com/mdighouse2006-cn/silent-sos.git
   ```

2. Open the cloned project folder.
3. Review `firebase.json` to understand the Firebase Hosting configuration.
4. Install the Firebase CLI if you need to run or deploy the application using Firebase tools.
5. Ensure the required Firebase configuration and email service settings are available before testing locally.

Local execution may require additional configuration. A basic static file server alone may not reproduce every deployed feature.

## Current Limitations

- The deployed application currently supports mobile devices only.
- Location capture depends on browser permissions, device location services, and network availability.
- Alert synchronization and email notifications depend on the configured Firebase services, email service, and network connectivity.
- SMS notifications to trusted contacts have not yet been implemented.
- The application is a prototype and should not be relied upon as a substitute for official emergency services.

## Future Enhancements

- Extend and test compatibility with desktop and laptop devices.
- Implement SMS notifications to trusted contacts through an appropriate backend service.
- Improve alert authentication, authorization, and access control.
- Improve reliability, error handling, and location-sharing workflows.
- Conduct broader usability and device-compatibility testing.

## Contributors

- MD Ibrahim Ghouse
- U. Mahendra

## Security

Do not commit private service-account keys, passwords, or other secrets to this public repository. Review Firebase Security Rules and ensure that emergency alerts and location data are accessible only to authorized users.

---
*Silent SOS — discreet emergency alerting using browser technologies and Firebase.*

