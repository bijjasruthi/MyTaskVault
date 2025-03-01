# BookStore App 

## Development


### Architecture 
<!-- <img src="Architecture.png"> -->

### Run Application
- Frontend
cd Frontend -> npm run dev
- Backend
cd Backend -> npm run dev

### Terminal
- server with express.js
- npm init to create base .json file
- npm create vite -> instead of npm create-react-app

## Deployment


### Step 1 (Creating EC2 Instance and connecting using ssh)
- Create an EC2 Instance (I created a Ubundu OS instance)first and then access it using SSH.
- Open the port no. 3000 in your security group (to access the frontend).
 <!-- write steps here -->


### Optional: Secure MongoDB
For a production environment, you should secure your MongoDB instance with authentication and proper firewall rules to prevent unauthorized access. This can include setting up user roles and ensuring only specific IP addresses can connect to your MongoDB instance.

## Notes
- CORS Policy 
Cross-Origin Resource Sharing
It is a secure mechanism in web browsers that restricts unauthorized access 

- Express is backend server
- nodemon is to restart server automatically when changes made

## Resources







