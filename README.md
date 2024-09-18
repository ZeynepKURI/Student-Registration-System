Aşağıda, **Student-Registration-System** projesi için GitHub'daki `README.md` dosyasına uygun bir açıklama hazırladım. Bu açıklama, Angular frontend ve .NET Core backend ile öğrenci ekleme, silme, güncelleme ve listeleme işlemlerini anlatıyor.

---

# Student Registration System

This project is a **Student Registration System** built using **Angular** for the frontend and **.NET Core** for the backend. The system provides basic CRUD (Create, Read, Update, Delete) operations for managing student records.

## Features

- **Add Student**: Create new student records.
- **Update Student**: Edit existing student information.
- **Delete Student**: Remove a student from the system.
- **List Students**: Display all registered students.

## Technologies Used

- **Frontend**: Angular
- **Backend**: .NET Core Web API
- **Database**: PostgreSQL or any other RDBMS

## Setup Instructions

### Backend (.NET Core)

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/Student-Registration-System.git
   ```

2. Navigate to the backend folder:

   ```bash
   cd Student-Registration-System/Backend
   ```

3. Restore the dependencies:

   ```bash
   dotnet restore
   ```

4. Update the connection string in `appsettings.json` for your database:

   ```json
   "ConnectionStrings": {
     "DefaultConnection": "Your PostgreSQL connection string here"
   }
   ```

5. Apply migrations (if using Entity Framework):

   ```bash
   dotnet ef database update
   ```

6. Run the API:

   ```bash
   dotnet run
   ```

### Frontend (Angular)

1. Navigate to the frontend folder:

   ```bash
   cd Student-Registration-System/Frontend
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Run the Angular development server:

   ```bash
   ng serve
   ```

4. Open your browser and navigate to `http://localhost:4200` to use the application.

## API Endpoints (Backend)

Here are the main API endpoints for the student management system:

- **GET /api/students**: Retrieve the list of students.
- **GET /api/students/{id}**: Retrieve a student by ID.
- **POST /api/students**: Add a new student.
- **PUT /api/students/{id}**: Update a student's information.
- **DELETE /api/students/{id}**: Delete a student.

## Example Usage (Frontend)

- **Add Student**: Fill out the student registration form and click "Submit" to add a new student.
- **Edit Student**: Select a student from the list, update their details, and save the changes.
- **Delete Student**: Click the "Delete" button next to a student to remove them from the system.
