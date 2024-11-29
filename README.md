# **Fitness - Your Gateway to Health and Energy**

This is a cutting-edge platform designed to simplify the purchase of exercise nutrition products, Fitness Plans and gym accessories. Built with modern technology, it provides a seamless shopping experience, helping customers achieve their fitness goals with ease.

![Fitness Banner](https://res.cloudinary.com/dcb1zsjuk/image/upload/v1732817015/Screenshot_2024-11-28_230225_bgtigu.png)

The link to the live site is here: https://fitness-ed493.web.app/

---

## **Purpose**

Fitness is designed to empower health-conscious individuals by offering a range of high-quality fitness products. From protein supplements to gym accessories, the platform ensures secure transactions, fast performance, and user-friendly navigation.

The website's primary goal is to create a safe platform for a gym/fitness center that makes it simple for company owners to run their operations and for customers to buy exercise gear and subscriptions. To make the application safe, quick, and easy to use, it was created using an MVC architectureand contemporary technologies like Python3, Django, Bootstrap, HTML5, SCSS, CSS3, JavaScript, and PostgreSQL.

---

## **Goals**

### **Project Goals**

- Build a fast and secure e-commerce platform for fitness products.
- Enhance user experience with a clean and intuitive interface.
- Offer seamless integration of payment and delivery systems.
- Give users the option to register and access the application. Create an admin access panel to manage the company and the clients.
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
- By offering a more customized experience, improving customer service.
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

## **User Stories**

- **As a store owner:**

1. As a store owner, I want a simple responsive user friendly website.
2. As a store owner, I want to add new products/services in the store.
3. As a store owner, I want to update existing products/services in the store.
4. As a store owner, I want to delete a product/service from the store.

- **As a User:**

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

---

## **SEO (Search Engine Optimization)**

To ensure the website ranks high on search engines and attracts organic traffic, the following SEO strategies were implemented:

### **1. Meta Tags**

- **Title Tags:** Unique and descriptive titles for all pages, such as "Buy Protein Supplements Online | Fitness."
- **Meta Descriptions:** Informative meta descriptions for all pages, summarizing content and encouraging clicks. Example: "Discover top-quality fitness products, protein supplements, and gym accessories to fuel your workouts and achieve your health goals."
- **Keywords:** Relevant keywords like "fitness products," "exercise nutrition," and "protein supplements" are integrated into meta tags.

### **2. Structured Data**

- Implemented JSON-LD structured data to improve search engine understanding of product listings, reviews, and prices.
- Schema Markup was added for products, ratings, and the business profile.

### **3. Sitemap and Robots.txt**

- **Sitemap:** A dynamically generated XML sitemap ensures search engines can easily index all public pages.
- **Robots.txt:** Configured to allow indexing of public pages while preventing access to sensitive areas like the admin panel.

### **4. Performance Optimization**

- **Image Compression:** Used Cloudinary to optimize and deliver media, ensuring faster page loads.
- **Lazy Loading:** Implemented for images to reduce initial load times.
- **Minification:** CSS, JavaScript, and HTML files were minified for optimal performance.

### **5. Mobile Optimization**

- Built with a responsive design using Tailwind CSS, ensuring a seamless experience across all devices.
- Optimized for Core Web Vitals like Largest Contentful Paint (LCP) and First Input Delay (FID).

### **6. Content Strategy**

- Created engaging product descriptions with targeted keywords.
- Developed a blog section with fitness tips and health advice to drive organic traffic.
- Ensured content readability by maintaining a Flesch Reading Ease Score suitable for the target audience.

### **7. Backlinking and Social Media**

- Established backlinks from relevant fitness blogs and forums.
- Integrated social media share buttons to encourage content sharing.

### **8. Testing and Monitoring**

- Used Google Search Console to monitor performance and resolve crawl errors.
- Ran Lighthouse audits to ensure high scores for performance, accessibility, and SEO.

---

### **Lighthouse Results**

#### **Home Page SEO Results**

![Home Page SEO](https://res.cloudinary.com/dcb1zsjuk/image/upload/v1732869403/Screenshot_2024-11-29_133503_brvicj.png)

#### **Product Page SEO Results**

![Product Page SEO](https://res.cloudinary.com/dcb1zsjuk/image/upload/v1732869586/Screenshot_2024-11-29_133913_kd35s4.png)

---

By implementing these strategies, the website is optimized to rank higher in search engine results, drive organic traffic, and provide an excellent user experience.

---

## ** Bugs / Issues and solutions**

### **1. Exercise Plan Add to Cart Issue**

**Issue:**  
Initially, users could add multiple exercise plans to the cart, which was unintended as only one plan was required per user.

**Solution:**  
The `add_cart` function was updated to restrict users to one exercise plan at a time. Additionally, the `context.py` logic for `exercise_plans_dic` was modified to ensure this behavior.

---

### **2. Image Not Displaying for Products Without Media**

**Issue:**  
If a product or service did not have an associated image, no placeholder image was shown.

**Solution:**  
The issue was due to the absence of a `noimage.png` placeholder in the media folder. Adding this file and updating the template to display it when `product.image` was empty resolved the problem.

---

### **3. User Sign-Up Error in AUTH_PASSWORD_VALIDATORS**

**Issue:**  
An error occurred during user registration due to splitting lines in `settings.py` using a backslash to avoid exceeding line length limits.

**Solution:**  
Switching from backslashes to string concatenation using triple quotes allowed the validators to remain readable and functional.

---

### **4. Button Disable for Duplicate Exercise Plan**

**Issue:**  
The "Add to Cart" button for exercise plans did not disable after adding a plan. Instead, users received a toast message.

**Solution:**  
A disable function was implemented for the button. Now, when a user adds an exercise plan, the button becomes disabled, and an informational toast message is shown for better UX.

---

### **5. Stripe Webhook Error: 500**

**Issue:**  
A `payment_intent.succeeded` webhook test from Stripe returned a 500 error, while real orders completed successfully.

**Solution:**  
The issue was isolated to the `handle_payment_intent_succeeded` logic, specifically in referencing cart metadata. Tutor support confirmed the problem was isolated to testing and advised focusing on live functionality, which worked as expected.

---

### **6. Contact Form Email Address Missing**

**Issue:**  
When users submitted a query through the Contact Us form, the store owner’s email received the query but did not include the user’s email address.

**Solution:**  
The user’s email was added to the subject line of the email, allowing the store owner to respond to queries effectively. This workaround was implemented due to Gmail's strict security policies.

---

### **7. Total Not Updating for Cart Operations**

**Issue:**  
The cart total did not update after adding, deleting, or modifying items.

**Solution:**  
The root cause was missing `default_app_config` in `checkout/__init__.py`. Adding `default_app_config = 'checkout.apps.CheckoutConfig'` resolved the issue, ensuring totals updated dynamically.

---

### **8. HTTP 303 Error in Link Response**

**Issue:**  
An HTTP 303 error was returned when attempting to process certain API responses, causing a failure in expected workflows.

**Solution:**  
The error occurred due to an incorrect redirection handling mechanism. Updating the API request headers to include the correct `Content-Type` and explicitly handling the 303 redirect using `axios` for frontend requests resolved the issue. Additionally, the backend was updated to ensure proper `Location` headers were set for redirect responses.

---

These bugs and their solutions highlight challenges faced during development and the strategies used to overcome them effectively. Each fix improved the platform’s stability and user experience.

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
   firebase init
   ```
3. Deploy to Firebase:
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

---

## **Production**

The Fitness platform is optimized for production to ensure reliability, security, and performance at scale. The production environment leverages modern hosting services and efficient configurations.

### **1. Hosting**

- **Frontend:** Deployed on **Firebase Hosting**, providing fast and globally distributed delivery for the static files and React build.
- **Backend:** Hosted on a scalable cloud server running **Django**, with API endpoints exposed securely.

### **2. Media Storage**

- Media assets such as product images and videos are managed using **Cloudinary**, ensuring optimized delivery with automatic resizing and compression.

### **3. Security**

- HTTPS is enforced using SSL/TLS certificates to secure data transmission.
- Sensitive environment variables such as API keys, database credentials, and Cloudinary settings are stored securely using `.env` files.
- Implemented security best practices in Django, including:
  - Using Django’s built-in CSRF protection.
  - Enabling security middleware like `X-Content-Type-Options` and `Strict-Transport-Security`.
  - Disabling debug mode in production.

### **6. Monitoring and Logging**

- Application logs are tracked using integrated logging frameworks in Django.
- Performance and uptime are monitored using tools like **Google Analytics** and **Firebase Console**.

### **7. Optimization**

- **Frontend:** Assets like JavaScript and CSS are minified for faster load times.
- **Backend:** Database queries are optimized using Django’s ORM.
- **Caching:** Leveraged Django’s caching framework to store frequently accessed data.

---

This production setup ensures that the Fitness platform delivers a high-performance, secure, and user-friendly experience for end users.

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
