# Silent SOS — Covert Emergency Alert System

A browser-based Progressive Web App (PWA) designed to enable discreet emergency alerting through a hidden multi-finger gesture.

## Live Application

**[Open Silent SOS](https://iotlab-c60d7.web.app)**

> **Platform Availability:** The live application currently works on mobile devices only. Desktop and laptop support is not yet available.

## Project Demonstration

**[▶ Watch the Silent SOS Demonstration Video](https://drive.google.com/file/d/1v3m12jE2PWNOE4jL-Zr4SrB4dyT7rFOb/view?usp=drivesdk)**

The demonstration video showcases the project interface and its emergency alert workflow.

*Note: The video must have appropriate Google Drive sharing permissions enabled for viewers to access it.*

## Overview

Silent SOS is an academic project developed to help users discreetly trigger an emergency alert in situations where visibly seeking help may be unsafe.

The application uses a notes-style interface to conceal the alert trigger and connects to Firebase Cloud Firestore for alert storage and real-time updates on a security dashboard.

## Key Features

- **Covert Gesture Detection:** Detects a configured hidden multi-finger touch gesture.
- **GPS Location Capture:** Uses the browser Geolocation API to obtain the user's coordinates, subject to permission.
- **Real-Time Alert Storage:** Stores emergency alert information in Firebase Cloud Firestore.
- **Security Dashboard:** Displays incoming alerts with location links and timestamps.
- **Alert Sound Controls:** Provides controls to stop the alert sound and clear the displayed alerts.
- **Progressive Web App:** Provides a browser-based mobile experience without requiring installation through an app store.

## Technology Stack

| Component | Technology |
|---|---|
| Frontend | HTML5, CSS3, JavaScript |
| Gesture Detection | Browser Touch Events API |
| Location Services | Geolocation API |
| Database | Firebase Cloud Firestore |
| Real-Time Updates | Firestore listeners |
| Hosting | Firebase Hosting |
| Application Type | Progressive Web App (PWA) |

## System Architecture

The application follows a browser-to-cloud architecture:

1. **User Interface:** The user interacts with the notes-style mobile interface.
2. **Gesture Detection:** JavaScript detects the configured touch gesture.
3. **Location Capture:** The browser attempts to obtain the device's location.
4. **Data Transmission:** Alert information is sent to Firebase Cloud Firestore.
5. **Real-Time Dashboard:** The security dashboard receives and displays alert records.

### Architecture Diagram

![Silent SOS System Architecture](assets/project-architecture.png)

## Screenshots

### Security Dashboard

The dashboard displays emergency alerts, location links, timestamps, and sound controls.

![Silent SOS Security Dashboard](assets/security-dashboard.jpg)

### Mobile Application

The mobile interface is designed to resemble a notes application.

![Silent SOS Mobile Interface](assets/mobile-interface.jpg)

## Repository Structure

```text
silent-sos/
├── README.md
├── .gitignore
├── .firebaserc
├── firebase.json
├── public/
│   ├── index.html
│   ├── dashboard.html
│   ├── gesture.js
│   ├── manifest.json
│   ├── service-worker.js
│   ├── icon-192.png
│   └── icon-512.png
├── assets/
│   ├── security-dashboard.jpg
│   ├── project-architecture.png
│   └── mobile-interface.mp4
└── docs/
    └── project-report.pdf
```

*This is the intended repository layout. Optional files and folders should be included only when they exist.*

## Getting Started

### Prerequisites

- A modern mobile browser
- A Firebase project
- Firebase Cloud Firestore configured for the application
- Firebase Hosting configuration

### Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/YOUR-USERNAME/silent-sos.git
   ```

2. Navigate to the project directory:

   ```bash
   cd silent-sos
   ```

3. Review the Firebase configuration and configure your own Firebase project if necessary.

4. Serve the `public` directory using a local development server.

5. Open the application on a supported mobile browser and grant location permission when prompted.

**Security note:** Review Firestore security rules before deploying or testing with sensitive information. Never commit service-account private keys or credentials to GitHub.

## Current Limitations

- The live application currently supports mobile devices only.
- Browser permissions and network connectivity affect location capture and alert delivery.
- Authentication and role-based dashboard access require further implementation if not already configured.
- Automated SMS are planned enhancements unless separately implemented.
- The project is an academic prototype and is not a substitute for official emergency services.

## Future Enhancements

- Firebase Authentication and role-based access control
- Secure trusted-contact management
- Automated SMS notifications
- Improved offline handling and error recovery
- Expanded device and browser compatibility
- Additional testing and performance evaluation

## Contributors

- MD Ibrahim Ghouse
- U. Mahendra


## Academic Information

**Department:** Computer Science and Engineering (Artificial Intelligence and Machine Learning)  
**Institution:** Gokaraju Rangaraju Institute of Engineering and Technology (GRIET)

---

*Silent SOS is an academic prototype developed to explore discreet emergency alerting using web technologies and cloud-based real-time data storage.*
