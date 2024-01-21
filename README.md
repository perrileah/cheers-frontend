# Cheers! Frontend

<img width="1256" alt="Screenshot 2024-01-20 at 7 19 45 PM" src="https://github.com/perrileah/cheers-frontend/assets/125906074/144c6640-537b-45a2-8e3e-76e1a7b110d1">

Cheers! is an app that allows users to find, check-in and rank craft breweries. As a craft beer lover and manager at a brewery myself, I wanted to create an app similar to Untappd, the popular beer-ranking platform, but specific to breweries. I had a lot of fun creating this application while learning new web dev technologies and techniques.

- RESTful API using Model-View-Controller architecture built with Ruby on Rails, including CRUD actions with model validations for breweries, users and check-ins
- Secure authenticated user profiles using JSON web tokens and the Bcrypt gem file to store hashed passwords
- PostgreSQL database seeded from Open Brewery DB external API using the rest-client gem
- Frontend multi-page application built with npm, React.js featuring conditional rendering for login/logout, dynamic routing using React-Router-Dom package and a personalized Start Bootstrap CSS theme
- Mapbox GL JS Javascript library for brewery geocoding with a custom map
