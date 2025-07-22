
# 💩 Anthony's Idea — Dog Poop Pickup Subscription App

A full-stack web application that allows users to **subscribe to a weekly dog waste removal service**. Built with **Next.js**, **Prisma**, and **MySQL**, this app handles user authentication, subscription logic, and appointment scheduling — all with a clean, modern UI.

This is a personal project designed to showcase my skills in full-stack JavaScript development and practical problem-solving for real-world services.

---

## 🚀 Features

- 🐶 Users can sign up and subscribe to weekly dog poop pickup services
- 💳 Subscription logic with limits on weekly appointments
- 📆 Appointment booking system with dynamic scheduling logic
- 🔐 Authentication using NextAuth
- 🧠 Prisma ORM with MySQL for data persistence
- 💅 TailwindCSS for clean, responsive UI design

---

## 🧱 Tech Stack

| Frontend | Backend | Database | Auth | Styling |
|----------|---------|----------|------|---------|
| Next.js  | Node.js | MySQL    | NextAuth | TailwindCSS |

---

## 🛠️ Setup Instructions

1. **Clone the repo**
   ```bash
   git clone https://github.com/mikematt23/AnthonysIdeaNextJS.git
   cd AnthonysIdeaNextJS
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up your environment**
   Create a `.env` file and add the following:

   ```
   DATABASE_URL="mysql://USER:PASSWORD@localhost:3306/your_db"
   NEXTAUTH_SECRET="your_secret"
   NEXTAUTH_URL="http://localhost:3000"
   ```

4. **Push schema to the database**
   ```bash
   npx prisma db push
   ```

5. **Run the app**
   ```bash
   npm run dev
   ```

---

## ✅ To-Do / Future Improvements

- [ ] Integrate Stripe for actual payment processing
- [ ] Admin dashboard for managing routes and pickups
- [ ] SMS or email appointment reminders
- [ ] Mobile-first UI improvements
- [ ] Unit and integration testing

---

## 🙋‍♂️ About Me

I’m Michael Matteis — a web developer focused on building real-world applications that solve real-world problems. Check out more of my work on [GitHub](https://github.com/mikematt23).

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
