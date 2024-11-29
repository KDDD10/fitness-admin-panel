
# **Fitness - Your Gateway to Health and Energy**

This is a cutting-edge platform designed to simplify the purchase of exercise nutrition products, Fitness Plans and gym accessories. Built with modern technology, it provides a seamless shopping experience, helping customers achieve their fitness goals with ease.

![Fitness Banner](https://res.cloudinary.com/dcb1zsjuk/image/upload/v1732817015/Screenshot_2024-11-28_230225_bgtigu.png)

The link to the live site is here: https://fitness-ed493.web.app/

---

## **Purpose**

Fitness is designed to empower health-conscious individuals by offering a range of high-quality fitness products. From protein supplements to gym accessories, the platform ensures secure transactions, fast performance, and user-friendly navigation.

The goal is to provide a reliable e-commerce experience that supports fitness enthusiasts in maintaining an active and healthy lifestyle.

---

## **Key Features**

1. **E-commerce Platform**  
   - **Wide Product Range:** Protein supplements, energy drinks, gym accessories, and more.  
   - **Dynamic Product Content:** Powered by Cloudinary for fast-loading, optimized images and videos.  

2. **Secure Payments**  
   - Integrated payment gateways ensure safe and smooth transactions.  

3. **User Experience**  
   - Mobile-first, responsive design using Tailwind CSS.  
   - Easy navigation with advanced search and filtering options.  

4. **Administrative Tools**  
   - Admin dashboard powered by Ant Design for managing products, orders, and users.  

5. **Customer Engagement**  
   - Product reviews to guide buyers.  
   - User-friendly cart and checkout process.  

---

## **Goals**

### **Project Goals**  
- Build a fast and secure e-commerce platform for fitness products.  
- Enhance user experience with a clean and intuitive interface.  
- Offer seamless integration of payment and delivery systems. 
- Give users the option to register and access the application. Create an admin access panel to manage the company and the clients.
- Permit clients to buy fitness items and subscriptions.
- Put in place a Stripe payment system so that clients may pay for their fitness goods and memberships.
- Permit consumers to leave reviews for exercise gear. Create a blog to provide articles and advice about fitness.
- Permit clients to write blog entries to share their achievements.
- Create a contact form so that clients can get in touch with the company's owner.
- Create a website that is responsive and easy to use. 

### **Business Goals**  
- Increase customer retention through personalized services.  
- Expand the product range as demand grows.  
- Maintain consistent performance to support scalability.
- By offering a more customized experience, improving customer service.
- Give clients top-notch instruction from the best teachers.
- To make the program easier to use, provide an intuitive and user-friendly user interface.
- Improve the online buying experience for clients to keep them coming back.

## **Strategies**

- Build a thorough and safe backend architecture using the MVC design pattern.
- Include a SQL(relational) database to store the necessary data.
- The application's backend is developed using Django and Python 3.
- For the application's front end, use HTML5, SCSS, CSS3, Javascript, JQuery, and Bootstrap.
- Allow people to register for an account and access the application.
- Utilize the application's front end to manage all user input and interaction.
- Use django-crispy-forms to make the forms more user-friendly and Django forms to process and validate user input.
- Create an intuitive, responsive, and user-friendly user interface with Bootstrap and HTMX.
- Use the Stripe API and Django-Stripe to enable clients to pay for their fitness products and subscriptions.
- To enable customers to manage their accounts, orders, and subscriptions, create a customer dashboard.
- Store user contact information in the database.
- Use pytest, pytest-django, pytest-factoryboy, and pytest-html to test the application's backend.

## **User Stories**

- **As a store owner:**
1. As a store owner, I want a simple responsive user friendly website.
2. As a store owner, I want to add new products/services in the store.
3. As a store owner, I want to update existing products/services in the store.
4. As a store owner, I want to delete a product/service from the store.

- **As a store owner:**
1. As a user, I expect the website to be easy to navigate.
2. As a user, I expect the website to be responsive on all devices.
3. As a user, I want to be able to search for all items in the store.
4. As a user, I want to be able to see all the detailed information on each product.
5. As a user, I want to create an account.
6. As a user, I want to add items to the shopping basket.
7. As a user, I want to be able to make secure payments.
8. As a user, I want to get in touch with the store owner.
9. As a user, I wat to add a review.
10. As a user, I want to be able to update my profile information.

---

## **Development Setup**

### **Clone and Install**

1. Clone the repository:  
   ```bash
   git clone https://github.com/host-account/fitness-subscription.git
   cd fitness
   ```

2. Install dependencies:  
   ```bash
   npm install
   pip install -r requirements.txt
   ```

### **Run Development Servers**

- **Frontend:**  
  ```bash
  npm start
  ```

- **Backend:**  
  ```bash
  python manage.py runserver
  ```

---

## **Deployment**

The application uses Firebase for frontend hosting and Django for backend API delivery. 

**Deployment Steps:**  
1. Build the frontend:  
   ```bash
   npm run build
   ```
2. Deploy to Firebase:  
   ```bash
   firebase deploy
   ```

**Environment Variables:**  
Ensure secure storage of sensitive credentials for production.

---

## **Testing**

- **Unit Tests:**  
  - Backend: Pytest and Django's testing framework.  
  - Frontend: Jest for React components.  

- **Manual Testing:**  
  Conducted across all devices to ensure responsiveness and usability.

---

## **Development Tools**

#### Languages

- [Python](https://www.python.org/)
- [JavaScript](https://www.javascript.com/)
- [Bash](https://www.gnu.org/software/bash/)
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

#### Libraries and Frameworks

- [Django](https://www.djangoproject.com/)
- [Dj-stripe](https://dj-stripe.dev/2.8/)
- [Django-crispy-forms](https://django-crispy-forms.readthedocs.io/en/latest/)
- [Ant Design](https://ant.design/)
- [Factoryboy](https://factoryboy.readthedocs.io/en/stable/)
- [React](https://react.dev/)
- [Pytest](https://docs.pytest.org/en/latest/) 

#### Databases and Storage

- [Cloudinary](https://cloudinary.com/): Used in production
- [Firebase](https://firebase.google.com/docs/hosting): Used in production
- [PostgresSQL](https://www.postgresql.org/): Used in production 

#### Development Tools

- Git: Version controlling
- Github: Repository hosting
- Git Pod: For Integration
- Debug toolbar: For debugging
- VS Code: Main Editor for development
- Chrome Dev Tools

---

## **Future Enhancements**

- **Nutrition Plans:** Add subscription-based personalized meal and workout plans.  
- **Enhanced Admin Panel:** Advanced analytics for sales and customer engagement.  
- **Community Features:** Forums and blogs for fitness enthusiasts.  

---

## **Credits**

- Code Institute 
- Code Institute Stack Channel
- CS Dojo
- Django Documentation
- Stack Overflow
- Udemy

---

## **Contact Us**

For inquiries or support:   
- Website: [Fitness Platform](https://fitness-ed493.web.app/)  
